import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language } from './types';
import { translations } from './data/translations';
import { EditorialIndustrialMain } from './components/EditorialIndustrialMain';
import { DetailModal } from './components/DetailModal';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current language based on route path
  const isFaRoute = location.pathname.startsWith('/fa');
  const currentLang: Language = isFaRoute ? 'fa' : 'en';

  // Modal State for Legal Notices
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [legalContent, setLegalContent] = useState<{ title: string; body: string } | null>(null);

  // Pre-filled Note for Contact Form
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // Set html lang and dir immediately upon route change
  useLayoutEffect(() => {
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Dynamic Document Title and Meta Tags per Language / Route
  useEffect(() => {
    const t = translations[currentLang].meta;
    document.title = t.title;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) el.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Helper to update link tags
    const setLinkTag = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      let selector = `link[rel="${rel}"]`;
      if (extraAttrs?.hreflang) {
        selector += `[hreflang="${extraAttrs.hreflang}"]`;
      }
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
        }
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const baseUrl = 'https://refahsanat.com';
    const currentUrl = currentLang === 'fa' ? `${baseUrl}/fa` : `${baseUrl}/`;

    // Standard Meta Description
    setMetaTag('meta[name="description"]', 'content', t.description);

    // Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'content', t.title);
    setMetaTag('meta[property="og:description"]', 'content', t.description);
    setMetaTag('meta[property="og:url"]', 'content', currentUrl);
    setMetaTag('meta[property="og:locale"]', 'content', currentLang === 'fa' ? 'fa_IR' : 'en_US');

    // Twitter Tags
    setMetaTag('meta[name="twitter:title"]', 'content', t.title);
    setMetaTag('meta[name="twitter:description"]', 'content', t.description);

    // Canonical Link
    setLinkTag('canonical', currentUrl);

    // Alternate Hreflangs
    setLinkTag('alternate', `${baseUrl}/`, { hreflang: 'en' });
    setLinkTag('alternate', `${baseUrl}/fa`, { hreflang: 'fa' });
    setLinkTag('alternate', `${baseUrl}/`, { hreflang: 'x-default' });
  }, [currentLang]);

  // Smooth scroll to section hash if present in URL
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  const handleLanguageChange = (targetLang: Language) => {
    const hash = location.hash || '';
    if (targetLang === 'fa') {
      navigate(`/fa${hash}`);
    } else {
      navigate(`/${hash}`);
    }
  };

  const handleOpenLegal = (title: string, body: string) => {
    setLegalContent({ title, body });
    setModalTitle(title);
    setModalOpen(true);
  };

  const openTermsModal = () => {
    handleOpenLegal(
      currentLang === 'fa' ? 'شرایط و ضوابط تجاری' : 'Commercial Terms & Governance',
      currentLang === 'fa'
        ? 'کلیه مبادلات کالا، گشایش‌های اعتباری و خدمات بازرگانی گروه رفاه صنعت پردیس بر اساس قوانین اتاق بازرگانی بین‌المللی (ICC) و مقررات اینکوترمز ۲۰۲۰ تنظیم و اجرا می‌گردند.'
        : 'All commodity transactions, credit facilities, and trade desk services of Refah Sanat Pardis operate under International Chamber of Commerce (ICC) rules and Incoterms 2020 standards.'
    );
  };

  const openPrivacyModal = () => {
    handleOpenLegal(
      currentLang === 'fa' ? 'پروتکل محرمانگی اطلاعات' : 'Institutional Confidentiality Protocol',
      currentLang === 'fa'
        ? 'اسناد مالی، درخواست‌های LC و داده‌های معاملاتی مشتریان طبق پروتکل‌های عدم افشا (NDA) و استانداردهای امنیت داده ISO 28000 با بالاترین سطح محرمانگی محافظت می‌شوند.'
        : 'Financial documentation, LC applications, and trade counterparty data are governed under strict Non-Disclosure Agreements (NDA) and ISO 28000 security standards.'
    );
  };

  const scrollToContact = (contextNote?: string) => {
    if (contextNote) {
      setPrefilledNotes(contextNote);
    }
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E1216] text-[#F4F3EF] font-sans selection:bg-[#B8A06A] selection:text-[#0E1216]">
      {/* Editorial Industrial Production Main Page */}
      <EditorialIndustrialMain
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onInquire={(ctx) => scrollToContact(ctx)}
        openTerms={openTermsModal}
        openPrivacy={openPrivacyModal}
      />

      {/* Shared Legal Dialog Modal */}
      <DetailModal
        currentLang={currentLang}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        type="legal"
        legalContent={legalContent}
        onInquire={(ctx) => scrollToContact(`Inquiry regarding: ${ctx}`)}
      />
    </div>
  );
}

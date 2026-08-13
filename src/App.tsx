import React, { useState, useEffect } from 'react';
import { Language, DesignConcept } from './types';
import { ConceptSwitcher } from './components/ConceptSwitcher';
import { SoftCorporatePage } from './components/concept1/SoftCorporatePage';
import { EditorialIndustrialPage } from './components/concept2/EditorialIndustrialPage';
import { EditorialIndustrialMain } from './components/EditorialIndustrialMain';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CompanySection } from './components/CompanySection';
import { LeadershipSection } from './components/LeadershipSection';
import { BusinessSection } from './components/BusinessSection';
import { ValueCreationSection } from './components/ValueCreationSection';
import { MarketsSection } from './components/MarketsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [currentConcept, setCurrentConcept] = useState<DesignConcept>('soft-corporate');

  // Modal State for Legal Notices
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [legalContent, setLegalContent] = useState<{ title: string; body: string } | null>(null);

  // Pre-filled Note for Contact Form
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // Synchronize document direction & language attributes on language toggle
  useEffect(() => {
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
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
      
      {/* Design Concept Switcher Top Bar */}
      <ConceptSwitcher
        currentConcept={currentConcept}
        onSelectConcept={setCurrentConcept}
        currentLang={currentLang}
      />

      {/* Render selected Design Concept */}
      {currentConcept === 'soft-corporate' ? (
        <SoftCorporatePage
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          onInquire={(ctx) => scrollToContact(ctx)}
          openTerms={openTermsModal}
          openPrivacy={openPrivacyModal}
        />
      ) : (
        <EditorialIndustrialMain
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          onInquire={(ctx) => scrollToContact(ctx)}
          openTerms={openTermsModal}
          openPrivacy={openPrivacyModal}
        />
      )}

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



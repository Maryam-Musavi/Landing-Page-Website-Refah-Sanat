import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface FooterProps {
  currentLang: Language;
  onOpenLegal: (title: string, body: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenLegal }) => {
  const t = translations[currentLang].footer;
  const navT = translations[currentLang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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

  const openTerms = () => {
    const termsBody = currentLang === 'fa' 
      ? 'تمامی معامله‌ها، ساختاردهی‌ها و خدمات بازرگانی و مالی Refah Sanat Pardis بر اساس ضوابط بین‌المللی تجاری، قراردادهای انضباطی و مکانیسم‌های مدیریت ریسک اجرا می‌گردد.'
      : 'All transactions, structuring, and commercial/financial solutions executed by Refah Sanat Pardis follow international trade frameworks, disciplined risk mitigation, and verified documentary protocols.';
    onOpenLegal(t.termsTitle, termsBody);
  };

  const openPrivacy = () => {
    const privacyBody = currentLang === 'fa'
      ? 'شرکت رفاه صنعت پردیس کلیه اسناد تجاری، اطلاعات خریداران، فروشندگان و شرکای مالی را تحت پروتکل‌های محرمانگی کامل (Non-Disclosure Agreement) محفوظ می‌دارد.'
      : 'Refah Sanat Pardis enforces strict confidentiality agreements (NDA) regarding all partner records, commercial structures, commodity briefs, and financial transactions.';
    onOpenLegal(t.privacyTitle, privacyBody);
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Company Bio */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white border border-white flex items-center justify-center p-1 shrink-0 shadow-sm">
                <Logo className="w-full h-full text-[#0B1325]" />
              </div>
              <span className="font-mono font-bold text-white text-base tracking-wider uppercase">
                {currentLang === 'fa' ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {t.description}
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-[#00C4CC] font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>{translations[currentLang].tagline}</span>
            </div>
          </div>

          {/* Quick Anchor Navigation Links */}
          <div className="lg:col-span-4 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {t.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="hover:text-[#00C4CC] transition-colors">// {navT.home}</a>
              <a href="#company" onClick={(e) => handleAnchorClick(e, '#company')} className="hover:text-[#00C4CC] transition-colors">// {navT.about}</a>
              <a href="#leadership" onClick={(e) => handleAnchorClick(e, '#leadership')} className="hover:text-[#00C4CC] transition-colors">// {navT.leadership}</a>
              <a href="#our-business" onClick={(e) => handleAnchorClick(e, '#our-business')} className="hover:text-[#00C4CC] transition-colors">// {navT.business}</a>
              <a href="#how-we-create-value" onClick={(e) => handleAnchorClick(e, '#how-we-create-value')} className="hover:text-[#00C4CC] transition-colors">// {navT.value}</a>
              <a href="#our-markets" onClick={(e) => handleAnchorClick(e, '#our-markets')} className="hover:text-[#00C4CC] transition-colors">// {navT.markets}</a>
              <a href="#why-rsp" onClick={(e) => handleAnchorClick(e, '#why-rsp')} className="hover:text-[#00C4CC] transition-colors">// {navT.whyUs}</a>
              <a href="#vision-mission" onClick={(e) => handleAnchorClick(e, '#vision-mission')} className="hover:text-[#00C4CC] transition-colors">// {navT.visionMission}</a>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-[#00C4CC] transition-colors">// {navT.contact}</a>
            </div>
          </div>

          {/* Compliance & Legal Notice */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {currentLang === 'fa' ? 'حاکمیت و محرمانگی' : 'Governance & Confidentiality'}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {t.legalNotice}
            </p>
            <div className="flex flex-col gap-1.5 pt-1 text-xs">
              <button onClick={openTerms} className="text-left rtl:text-right text-[#00C4CC] hover:text-[#00b2b8] transition-colors cursor-pointer">
                &gt; {t.termsTitle}
              </button>
              <button onClick={openPrivacy} className="text-left rtl:text-right text-[#00C4CC] hover:text-[#00b2b8] transition-colors cursor-pointer">
                &gt; {t.privacyTitle}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.rights} // ALL RIGHTS RESERVED
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="p-2 bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-all cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};


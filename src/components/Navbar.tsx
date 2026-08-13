import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronRight, Activity } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[currentLang].nav;

  const navLinks = [
    { id: 'home', label: t.home, href: '#home' },
    { id: 'company', label: t.about, href: '#company' },
    { id: 'our-business', label: t.business, href: '#our-business' },
    { id: 'how-we-create-value', label: t.value, href: '#how-we-create-value' },
    { id: 'our-markets', label: t.markets, href: '#our-markets' },
    { id: 'why-rsp', label: t.whyUs, href: '#why-rsp' },
    { id: 'vision-mission', label: t.visionMission, href: '#vision-mission' },
    { id: 'contact', label: t.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLang]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const nextLang = currentLang === 'en' ? 'fa' : 'en';
    onLanguageChange(nextLang);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md ${
      isScrolled ? 'py-2.5 shadow-xl' : 'py-3.5'
    }`}>
      
      {/* Top Technical Guide Strip */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1.5 pb-1.5 border-b border-slate-800/80 items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Activity className="w-3 h-3 text-cyan-400" />
            <span>SYS: ONLINE • REF: RSP-TRD-2026</span>
          </span>
          <span>•</span>
          <span>REG: 589412-IR</span>
          <span>•</span>
          <span>ISO 9001:2015 / ISO 28000</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TEHRAN HQ • GLOBAL TRADING DESK</span>
          <span>[35.6892° N, 51.3890° E]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Corporate Identity */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo-link"
          >
            <div className="w-9 h-9 border border-slate-700 bg-slate-900 p-1 flex items-center justify-center transition-colors group-hover:border-cyan-500/60">
              <Logo className="w-full h-full text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
                {currentLang === 'fa' ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase font-medium mt-1">
                {currentLang === 'fa' ? 'تجارت • تامین مالی • سرمایه‌گذاری' : 'Trade • Finance • Investment'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Anchors - Industrial Sharp Rectangles */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse bg-slate-900/90 p-1 border border-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-150 whitespace-nowrap border ${
                    isActive
                      ? 'bg-slate-800 text-cyan-400 border-cyan-500/50 shadow-sm'
                      : 'text-slate-300 border-transparent hover:text-white hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              id="language-toggle-btn-desktop"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors text-xs font-mono font-semibold focus:outline-none cursor-pointer"
              title="Switch Language / تغییر زبان"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.langName}</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="header-cta-btn"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 cursor-pointer border border-cyan-400"
            >
              <span>{t.ctaBtn}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </a>
          </div>

          {/* Mobile Menu & Lang Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              id="language-toggle-btn-mobile"
              className="flex items-center gap-1 px-2.5 py-1.5 border border-slate-700 bg-slate-900 text-slate-200 text-xs font-mono font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang === 'en' ? 'FA' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 bg-slate-900 text-slate-200 border border-slate-700 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors border ${
                    isActive
                      ? 'bg-slate-900 text-cyan-400 border-cyan-500/50'
                      : 'text-slate-300 border-slate-800 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180 text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-slate-950 bg-cyan-500 hover:bg-cyan-400 transition-colors border border-cyan-400"
            >
              {t.ctaBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


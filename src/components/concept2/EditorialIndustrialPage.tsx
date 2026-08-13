import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Building2,
  Users,
  Layers,
  Coins,
  Handshake,
  TrendingUp,
  MapPin,
  Award,
  Send,
  Check,
  Mail,
  Phone,
  Clock
} from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { Logo } from '../Logo';

interface EditorialIndustrialPageProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onInquire: (contextNote?: string) => void;
  openTerms: () => void;
  openPrivacy: () => void;
}

export const EditorialIndustrialPage: React.FC<EditorialIndustrialPageProps> = ({
  currentLang,
  onLanguageChange,
  onInquire,
  openTerms,
  openPrivacy,
}) => {
  const t = translations[currentLang];
  const navT = t.nav;
  const [activeTab, setActiveTab] = useState<'commodity' | 'finance' | 'partnerships'>('commodity');
  const [activeRegion, setActiveRegion] = useState<string>('mideast');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'Commodity Purchase / Sale',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setRefCode(`RSP-EDI-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedRegionObj = t.markets.regions.find((r) => r.id === activeRegion) || t.markets.regions[0];

  return (
    <div className="bg-[#11161C] text-[#E8E6E1] font-sans selection:bg-[#C7B58A] selection:text-[#11161C] transition-colors duration-300">
      
      {/* ------------------ NAVIGATION HEADER ------------------ */}
      <header className="sticky top-10 z-40 bg-[#11161C]/95 backdrop-blur-md border-b border-[#2D3745] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Badge */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-[#C7B58A] border border-[#C7B58A] flex items-center justify-center p-1.5 shrink-0 transition-transform group-hover:scale-105">
              <Logo className="w-full h-full text-[#11161C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#E8E6E1] text-base sm:text-lg tracking-wider leading-none group-hover:text-[#C7B58A] transition-colors uppercase font-mono">
                {currentLang === 'fa' ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
              </span>
              <span className="text-[10px] text-[#A0AAB8] font-mono tracking-widest uppercase mt-1">
                29.9511° N, 52.8800° E // EDITORIAL DESK
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-[#A0AAB8]">
            <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="hover:text-[#C7B58A] transition-colors">// {navT.home}</a>
            <a href="#company" onClick={(e) => handleAnchorClick(e, '#company')} className="hover:text-[#C7B58A] transition-colors">// {navT.about}</a>
            <a href="#leadership" onClick={(e) => handleAnchorClick(e, '#leadership')} className="hover:text-[#C7B58A] transition-colors">// {navT.leadership}</a>
            <a href="#our-business" onClick={(e) => handleAnchorClick(e, '#our-business')} className="hover:text-[#C7B58A] transition-colors">// {navT.business}</a>
            <a href="#how-we-create-value" onClick={(e) => handleAnchorClick(e, '#how-we-create-value')} className="hover:text-[#C7B58A] transition-colors">// {navT.value}</a>
            <a href="#our-markets" onClick={(e) => handleAnchorClick(e, '#our-markets')} className="hover:text-[#C7B58A] transition-colors">// {navT.markets}</a>
            <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="hover:text-[#C7B58A] transition-colors">// {navT.contact}</a>
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLanguageChange(currentLang === 'fa' ? 'en' : 'fa')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2D3745] bg-[#1B2229] hover:bg-[#252E38] text-[#E8E6E1] transition-colors text-xs font-mono font-bold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#C7B58A]" />
              <span>{navT.langName}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="bg-[#C7B58A] hover:bg-[#D4C5A0] text-[#11161C] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 cursor-pointer border border-[#C7B58A]"
            >
              <span>{navT.ctaBtn}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#11161C] rtl:rotate-180" />
            </a>
          </div>

        </div>
      </header>

      {/* ------------------ 01 HERO SECTION (GRAPHITE) ------------------ */}
      <section id="home" className="relative py-24 border-b border-[#2D3745] bg-[#11161C] overflow-hidden">
        
        {/* Background Cargo / Port Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80" 
            alt="Port Terminal"
            className="w-full h-full object-cover filter contrast-125 saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11161C] via-[#11161C]/90 to-[#11161C]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6">
              
              {/* Massive Editorial Section Marker */}
              <div className="flex items-center gap-4">
                <span className="text-6xl sm:text-8xl font-mono font-extrabold text-[#C7B58A]/30 leading-none">
                  01
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold text-[#C7B58A] uppercase tracking-widest">
                    // GLOBAL COMMODITY & TRADE DESK
                  </span>
                  <span className="text-[11px] font-mono text-[#A0AAB8]">
                    TEHRAN • DUBAI • SINGAPORE • ROTTERDAM
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#E8E6E1] leading-tight tracking-tight uppercase font-sans">
                {t.hero.title}
              </h1>

              <div className="text-sm font-mono font-bold text-[#C7B58A] uppercase tracking-widest border-l-2 border-[#C7B58A] rtl:border-r-2 rtl:border-l-0 pl-3 rtl:pr-3">
                {t.hero.tagline}
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#A0AAB8] leading-relaxed max-w-2xl bg-[#1B2229]/80 p-5 border-l-4 border-[#C7B58A]">
                <p className="font-semibold text-[#E8E6E1]">{t.hero.introParagraph1}</p>
                <p>{t.hero.introParagraph2}</p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="bg-[#C7B58A] hover:bg-[#D4C5A0] text-[#11161C] px-8 py-3.5 font-mono font-bold text-xs uppercase tracking-widest transition-all inline-flex items-center gap-2 border border-[#C7B58A]"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 text-[#11161C] rtl:rotate-180" />
                </a>

                <a
                  href="#our-business"
                  onClick={(e) => handleAnchorClick(e, '#our-business')}
                  className="bg-[#1B2229] hover:bg-[#252E38] text-[#E8E6E1] px-8 py-3.5 font-mono font-bold text-xs uppercase tracking-widest border border-[#2D3745] transition-all inline-flex items-center"
                >
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </div>

            </div>

            {/* Right Technical Matrix Block */}
            <div className="lg:col-span-4 bg-[#1B2229] border border-[#2D3745] p-6 space-y-4 font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-[#2D3745]">
                <span className="text-xs font-bold text-[#C7B58A] uppercase tracking-wider">
                  OPERATIONAL INDEX
                </span>
                <span className="text-[10px] text-[#A0AAB8]">STATUS: ACTIVE</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#2D3745]/60 pb-2">
                  <span className="text-[#A0AAB8]">ANNUAL VOLUME:</span>
                  <span className="text-[#E8E6E1] font-bold">$350,000,000 USD</span>
                </div>
                <div className="flex justify-between border-b border-[#2D3745]/60 pb-2">
                  <span className="text-[#A0AAB8]">ACTIVE CORRIDORS:</span>
                  <span className="text-[#C7B58A] font-bold">6 GLOBAL REGIONS</span>
                </div>
                <div className="flex justify-between border-b border-[#2D3745]/60 pb-2">
                  <span className="text-[#A0AAB8]">GOVERNANCE:</span>
                  <span className="text-[#E8E6E1] font-bold">ISO 28000 SECURITY</span>
                </div>
                <div className="flex justify-between border-b border-[#2D3745]/60 pb-2">
                  <span className="text-[#A0AAB8]">REGISTRATION NO:</span>
                  <span className="text-[#E8E6E1] font-bold">493011</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-[#A0AAB8]">ESTABLISHED:</span>
                  <span className="text-[#C7B58A] font-bold">2012 (14+ YEARS)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 02 COMPANY OVERVIEW (WARM CREAM BLOCK) ------------------ */}
      <section id="company" className="py-20 bg-[#E8E6E1] text-[#11161C] border-b border-[#D1CFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D1CFC7] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-mono font-extrabold text-[#11161C]/20 leading-none">
                02
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#11161C] uppercase tracking-widest block mb-1">
                  // {t.company.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#11161C] uppercase">
                  {t.company.title}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#4A5568] max-w-md">
              {t.company.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Offset Editorial Image */}
            <div className="lg:col-span-5 border border-[#D1CFC7] bg-white p-2">
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80" 
                  alt="Industrial Logistics"
                  className="w-full h-full object-cover filter contrast-125 saturate-50"
                />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-sm text-[#2D3745] leading-relaxed">
                <p className="text-base font-bold text-[#11161C] leading-relaxed">
                  {t.company.aboutText1}
                </p>
                <p>
                  {t.company.aboutText2}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D1CFC7]">
                {t.company.intersectionItems.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white border border-[#D1CFC7]">
                    <div className="text-xs font-mono font-bold text-[#11161C] mb-1">0{idx + 1} // {item.title}</div>
                    <p className="text-xs text-[#5C667A]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 03 EXECUTIVE LEADERSHIP (GRAPHITE) ------------------ */}
      <section id="leadership" className="py-20 bg-[#11161C] text-[#E8E6E1] border-b border-[#2D3745]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#2D3745] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-mono font-extrabold text-[#C7B58A]/30 leading-none">
                03
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#C7B58A] uppercase tracking-widest block mb-1">
                  // {t.leadership.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#E8E6E1] uppercase">
                  {t.leadership.title}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#A0AAB8] max-w-md">
              {t.leadership.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.leadership.members.map((member, idx) => (
              <div key={member.id} className="bg-[#1B2229] border border-[#2D3745] hover:border-[#C7B58A] transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-64 w-full bg-[#11161C] overflow-hidden border-b border-[#2D3745]">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-[#C7B58A] text-[#11161C] px-2 py-0.5 text-[10px] font-mono font-bold">
                      EXEC-0{idx + 1}
                    </div>
                  </div>

                  <div className="p-5 font-mono">
                    <div className="text-[10px] font-bold text-[#C7B58A] uppercase tracking-widest mb-1">
                      {member.role}
                    </div>
                    <h3 className="text-base font-bold text-[#E8E6E1] mb-2 font-sans group-hover:text-[#C7B58A] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#A0AAB8] leading-relaxed font-sans">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#11161C] border-t border-[#2D3745] text-[10px] font-mono text-[#A0AAB8] flex justify-between">
                  <span>GOVERNANCE BOARD</span>
                  <span className="text-[#C7B58A] font-bold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 04 CAPABILITIES LIST (WARM CREAM BLOCK) ------------------ */}
      <section id="our-business" className="py-20 bg-[#E8E6E1] text-[#11161C] border-b border-[#D1CFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#D1CFC7] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-mono font-extrabold text-[#11161C]/20 leading-none">
                04
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#11161C] uppercase tracking-widest block mb-1">
                  // {t.business.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#11161C] uppercase">
                  {t.business.title}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#4A5568] max-w-md">
              {t.business.subtitle}
            </p>
          </div>

          {/* Capability Desks List */}
          <div className="space-y-4">
            {[
              { title: t.business.commodityTrading.title, items: t.business.commodityTrading.items, code: 'DESK-01' },
              { title: t.business.tradeFinance.title, items: t.business.tradeFinance.solutions, code: 'DESK-02' },
              { title: t.business.partnerships.title, items: t.business.partnerships.connectors, code: 'DESK-03' },
            ].map((desk, idx) => (
              <div key={idx} className="bg-white border border-[#D1CFC7] p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#D1CFC7] font-mono">
                  <span className="text-xs font-bold text-[#11161C] uppercase tracking-widest">
                    [{desk.code}] // {desk.title}
                  </span>
                  <span className="text-[10px] text-[#5C667A]">STRUCTURED CONTRACTS</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {desk.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-3 bg-[#F3F2EF] border border-[#D1CFC7] text-xs font-bold text-[#11161C] flex items-center justify-between">
                      <span>{item}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#11161C] rtl:rotate-180" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 05 VALUE CREATION (GRAPHITE) ------------------ */}
      <section id="how-we-create-value" className="py-20 bg-[#11161C] text-[#E8E6E1] border-b border-[#2D3745]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#2D3745] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-mono font-extrabold text-[#C7B58A]/30 leading-none">
                05
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#C7B58A] uppercase tracking-widest block mb-1">
                  // {t.valueCreation.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#E8E6E1] uppercase">
                  {t.valueCreation.title}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#A0AAB8] max-w-md">
              {t.valueCreation.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            {t.valueCreation.lifecycleSteps.map((stepObj) => (
              <div key={stepObj.step} className="p-6 bg-[#1B2229] border border-[#2D3745] flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-[#C7B58A] mb-3">
                    {stepObj.step}
                  </div>
                  <h3 className="text-base font-bold text-[#E8E6E1] mb-2 font-sans">
                    {stepObj.title}
                  </h3>
                  <p className="text-xs text-[#A0AAB8] leading-relaxed font-sans">
                    {stepObj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 06 GLOBAL MARKETS (WARM CREAM) ------------------ */}
      <section id="our-markets" className="py-20 bg-[#E8E6E1] text-[#11161C] border-b border-[#D1CFC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D1CFC7] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-mono font-extrabold text-[#11161C]/20 leading-none">
                06
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#11161C] uppercase tracking-widest block mb-1">
                  // {t.markets.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#11161C] uppercase">
                  {t.markets.title}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#4A5568] max-w-md">
              {t.markets.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
            {t.markets.regions.map((reg) => (
              <div key={reg.id} className="p-6 bg-white border border-[#D1CFC7] space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#11161C]">
                  <span>[{reg.code}]</span>
                  <span className="text-[10px] text-[#5C667A]">ACTIVE CORRIDOR</span>
                </div>
                <h3 className="text-base font-bold text-[#11161C] font-sans">
                  {reg.name}
                </h3>
                <p className="text-xs text-[#5C667A] font-sans leading-relaxed">
                  {reg.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 07 COMMERCIAL INQUIRY PORTAL ------------------ */}
      <section id="contact" className="py-20 bg-[#11161C] text-[#E8E6E1] border-b border-[#2D3745]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#2D3745] gap-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-mono font-extrabold text-[#C7B58A]/30 leading-none">
                07
              </span>
              <div>
                <span className="text-xs font-mono font-bold text-[#C7B58A] uppercase tracking-widest block mb-1">
                  // {t.contact.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#E8E6E1] uppercase">
                  {t.contact.title}
                </h2>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#A0AAB8] max-w-md">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form */}
            <div className="lg:col-span-7 bg-[#1B2229] p-8 border border-[#2D3745]">
              <h3 className="text-lg font-bold text-[#E8E6E1] mb-6 font-mono">
                // {t.contact.formTitle}
              </h3>

              {submitSuccess ? (
                <div className="p-6 bg-[#11161C] border border-[#C7B58A] font-mono space-y-3">
                  <div className="flex items-center gap-2 text-[#C7B58A] font-bold text-sm">
                    <Check className="w-5 h-5" />
                    <span>TRANSACTION INQUIRY LOGGED</span>
                  </div>
                  <p className="text-xs text-[#A0AAB8]">{t.contact.successMessage}</p>
                  <div className="p-2 bg-[#1B2229] border border-[#2D3745] text-xs">
                    REF CODE: <strong className="text-[#C7B58A]">{refCode}</strong>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#A0AAB8] font-bold uppercase mb-1">{t.contact.nameLabel} *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full p-3 bg-[#11161C] border border-[#2D3745] text-[#E8E6E1] focus:border-[#C7B58A] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0AAB8] font-bold uppercase mb-1">{t.contact.companyLabel} *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full p-3 bg-[#11161C] border border-[#2D3745] text-[#E8E6E1] focus:border-[#C7B58A] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#A0AAB8] font-bold uppercase mb-1">{t.contact.emailLabel} *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full p-3 bg-[#11161C] border border-[#2D3745] text-[#E8E6E1] focus:border-[#C7B58A] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A0AAB8] font-bold uppercase mb-1">{t.contact.phoneLabel}</label>
                      <input 
                        type="text" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full p-3 bg-[#11161C] border border-[#2D3745] text-[#E8E6E1] focus:border-[#C7B58A] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#A0AAB8] font-bold uppercase mb-1">{t.contact.messageLabel} *</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full p-3 bg-[#11161C] border border-[#2D3745] text-[#E8E6E1] focus:border-[#C7B58A] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#C7B58A] hover:bg-[#D4C5A0] text-[#11161C] font-mono font-bold text-xs uppercase tracking-widest transition-all cursor-pointer border border-[#C7B58A]"
                  >
                    {isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Details */}
            <div className="lg:col-span-5 bg-[#1B2229] p-8 border border-[#2D3745] space-y-6 font-mono text-xs">
              <h3 className="text-lg font-bold text-[#E8E6E1]">
                // {t.contact.officeTitle}
              </h3>
              <p className="text-[#A0AAB8] leading-relaxed font-sans">
                {t.contact.officeDesc}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-[#E8E6E1]">
                  <MapPin className="w-4 h-4 text-[#C7B58A] shrink-0 mt-0.5" />
                  <span>{t.contact.address}</span>
                </div>

                <div className="flex items-center gap-3 text-[#E8E6E1]">
                  <Mail className="w-4 h-4 text-[#C7B58A] shrink-0" />
                  <span>{t.contact.email}</span>
                </div>

                <div className="flex items-center gap-3 text-[#E8E6E1]">
                  <Phone className="w-4 h-4 text-[#C7B58A] shrink-0" />
                  <span>{t.contact.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-[#E8E6E1]">
                  <Clock className="w-4 h-4 text-[#C7B58A] shrink-0" />
                  <span>{t.contact.hours}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ FOOTER ------------------ */}
      <footer className="bg-[#0B0E12] text-[#A0AAB8] py-12 border-t border-[#2D3745]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#2D3745]">
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#C7B58A] border border-[#C7B58A] flex items-center justify-center p-1 shrink-0">
                  <Logo className="w-full h-full text-[#11161C]" />
                </div>
                <span className="font-mono font-bold text-[#E8E6E1] text-base tracking-widest uppercase">
                  {currentLang === 'fa' ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
                </span>
              </div>
              <p className="text-xs text-[#A0AAB8] leading-relaxed max-w-md font-sans">
                {t.footer.description}
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col md:items-end justify-between font-mono text-xs text-[#A0AAB8] space-y-3">
              <div className="flex items-center gap-4">
                <button onClick={openTerms} className="hover:text-[#C7B58A] transition-colors cursor-pointer">
                  &gt; {t.footer.termsTitle}
                </button>
                <button onClick={openPrivacy} className="hover:text-[#C7B58A] transition-colors cursor-pointer">
                  &gt; {t.footer.privacyTitle}
                </button>
              </div>
              <div>
                © {new Date().getFullYear()} {t.footer.rights} // EDITORIAL INDUSTRIAL EDITION
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

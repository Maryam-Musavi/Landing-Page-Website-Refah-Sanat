import React, { useState } from 'react';
import bulkVesselImg from '../assets/images/bulk_vessel_sea_1786809204898.webp';
import cargoPortImg from '../assets/images/cargo_port_terminal_1786809220224.webp';
import containerNightImg from '../assets/images/container_terminal_night_1786809233281.webp';
import foodGrainsImg from '../assets/images/food_grains_trade_1786809247540.webp';
import grainSiloImg from '../assets/images/grain_silo_facility_1786809259998.webp';
import multimodalImg from '../assets/images/multimodal_transport_1786809273515.webp';
import portDuskImg from '../assets/images/port_containers_dusk_1786809296933.webp';
import railLogisticsImg from '../assets/images/rail_logistics_infra_1786809312499.webp';
import agriGrainImg from '../assets/images/agri_grain_trading_1786647224734.webp';

import { 
  Globe, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Building2,
  Users,
  Layers,
  Coins,
  Handshake,
  TrendingUp,
  MapPin,
  Award,
  Check,
  Mail,
  Phone,
  Clock,
  Activity,
  ArrowUpRight,
  Maximize2,
  FileText,
  HelpCircle,
  BarChart3,
  Anchor,
  Compass,
  Briefcase,
  Printer,
  ExternalLink,
  Link2
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import { MarketsAnimatedCard } from './MarketsAnimatedCard';

interface EditorialIndustrialMainProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onInquire: (contextNote?: string) => void;
  openTerms: () => void;
  openPrivacy: () => void;
  openInsightModal?: (insight: { date: string; category: string; title: string; summary: string; readTime: string }) => void;
}

export const EditorialIndustrialMain: React.FC<EditorialIndustrialMainProps> = ({
  currentLang,
  onLanguageChange,
  onInquire,
  openTerms,
  openPrivacy,
  openInsightModal,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'commodity' | 'finance' | 'partnerships'>('commodity');
  const [activeRegion, setActiveRegion] = useState<string>('mideast');
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-1');

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

  const selectedRegionObj = t.markets.regions.find((r) => r.id === activeRegion) || t.markets.regions[0];
  const isFa = currentLang === 'fa';

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <div className="bg-white text-[#0A1C2E] font-sans selection:bg-[#004C80] selection:text-white min-h-screen transition-colors duration-300">
      
      {/* ------------------ REFINED INSTITUTIONAL NAVIGATION ------------------ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D5DFE8] transition-all">
        
        {/* Micro Technical Ticker */}
        <div className="bg-[#0A1C2E] text-[#94A3B8] border-b border-[#1E293B] py-1.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-widest gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYS: ONLINE • REF: RSP-INT-2026</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-300 hidden sm:inline">TEHRAN HQ • GLOBAL TRADE DESK</span>
              <span className="text-slate-600 hidden md:inline">|</span>
              <span className="text-slate-400 hidden md:inline">[35.6892° N, 51.3890° E]</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">ICC UCP 600 • ISO 9001 • ISO 28000</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-bold">CLEARING: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo & Positioning */}
            <a 
              href="#home" 
              onClick={(e) => handleAnchorClick(e, '#home')}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <Logo size="md" />
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#0A1C2E] group-hover:text-[#004C80] transition-colors uppercase font-sans">
                  {t.brand}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#004C80] uppercase font-bold">
                  {t.category}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-xs font-mono font-medium text-[#5C667A]">
              {[
                { href: '#about', label: t.nav.about },
                { href: '#leadership', label: t.nav.leadership },
                { href: '#business', label: t.nav.business },
                { href: '#value', label: t.nav.value },
                { href: '#markets', label: t.nav.markets },
                { href: '#stats', label: t.nav.stats },
                { href: '#insights', label: t.nav.insights },
                { href: '#faq', label: t.nav.faq },
                { href: '#why-us', label: t.nav.whyUs },
                { href: '#contact', label: t.nav.contact },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="hover:text-[#004C80] transition-colors py-1 border-b-2 border-transparent hover:border-[#004C80] tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Language Switcher & Action CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onLanguageChange(isFa ? 'en' : 'fa')}
                className="px-3 py-1.5 border border-[#D5DFE8] hover:border-[#004C80] text-xs font-mono text-[#0A1C2E] rounded-[1px] transition-all bg-[#F4F7FA] hover:bg-white flex items-center gap-1.5 font-bold cursor-pointer"
                title={isFa ? 'Switch to English' : 'تغییر به زبان فارسی'}
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5 text-[#004C80]" />
                <span>{t.nav.langName}</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="bg-[#004C80] hover:bg-[#003860] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{t.nav.ctaBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* ------------------ HERO SECTION ------------------ */}
      <section id="home" className="relative bg-[#0A1C2E] text-white border-b border-[#1E293B] overflow-hidden pt-12 sm:pt-16 pb-20">
        
        {/* Subtle Geometric Grid & Architecture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Operational Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-[#132A42] border border-[#1E3A5F] text-sky-400 font-mono text-xs font-bold uppercase tracking-widest rounded-[1px] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.hero.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <div className="font-mono text-xs sm:text-sm text-sky-400 uppercase tracking-widest font-semibold">
                  {t.hero.tagline}
                </div>
                {/* THE ONLY H1 ON THE PAGE FOR PROPER SEO HIERARCHY */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white uppercase font-sans">
                  {t.hero.title}
                </h1>
              </div>

              <div className="space-y-4 text-[#94A3B8] text-base sm:text-lg leading-relaxed font-sans">
                <p>{t.hero.introParagraph1}</p>
                <p className="text-slate-300 font-normal">{t.hero.introParagraph2}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="bg-sky-500 hover:bg-sky-400 text-[#0A1C2E] px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all flex items-center gap-2.5 cursor-pointer shadow-lg hover:shadow-sky-500/20"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </a>

                <a
                  href="#business"
                  onClick={(e) => handleAnchorClick(e, '#business')}
                  className="border border-[#334155] hover:border-sky-400 hover:bg-[#132A42] text-slate-200 px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <span>{t.hero.secondaryCta}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>

              {/* Core Intersection Tags */}
              <div className="pt-6 border-t border-[#1E293B]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">
                  {isFa ? 'حوزه‌های کلیدی تقاطع تجاری و مالی:' : 'Core Commercial & Financial Intersections:'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.hero.intersectionTags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-[#132A42]/80 border border-[#1E293B] text-slate-300 text-xs font-mono rounded-[1px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#071320] border border-[#1E293B] p-2 rounded-[1px] shadow-2xl group overflow-hidden">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden border border-[#1E293B]">
                  <img 
                    src={cargoPortImg} 
                    alt={isFa ? 'ترمینال بندری کانتینری و مبادلات کالایی بین‌المللی رفاه صنعت پردیس' : 'RSP International Maritime Cargo Port Terminal and Trade Logistics'}
                    className="w-full h-full object-cover filter brightness-90 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                    width={1280}
                    height={714}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071320] via-transparent to-transparent opacity-80" />
                  
                  {/* Telemetry overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0A1C2E]/90 backdrop-blur-md border border-[#1E293B] p-3.5 rounded-[1px] space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-sky-400">
                      <span>TERMINAL: HUB-01 ACTIVE</span>
                      <span className="text-emerald-400 font-bold">24/7 DISPATCH</span>
                    </div>
                    <div className="text-xs font-sans text-white font-bold">
                      {isFa ? 'هماهنگی جامع بازرگانی فیزیکی و تسویه اعتبارات اسنادی' : 'Integrated Physical Sourcing & Structured Trade Settlement'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 01 CORPORATE OVERVIEW / ABOUT RSP ------------------ */}
      <section id="about" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">01</span>
                <span>/ {t.company.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.company.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.company.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
            
            {/* Overview Narrative */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="p-6 bg-white border border-[#D5DFE8] rounded-[1px] space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#004C80] uppercase">
                  <Building2 className="w-4 h-4" />
                  <span>{isFa ? 'معرفی جامع گروه رفاه صنعت پردیس' : 'Refah Sanat Pardis Institutional Overview'}</span>
                </div>
                <p className="text-sm sm:text-base text-[#5C667A] leading-relaxed">
                  {t.company.aboutText1}
                </p>
                <p className="text-sm sm:text-base text-[#5C667A] leading-relaxed">
                  {t.company.aboutText2}
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.company.intersectionItems.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white border border-[#D5DFE8] hover:border-[#004C80] transition-colors rounded-[1px] space-y-2 group">
                    <div className="font-mono text-xs font-bold text-[#004C80]">
                      0{idx + 1} //
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5C667A] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Maritime Vessel Feature Image */}
            <div className="lg:col-span-6 h-full flex flex-col">
              <div className="relative bg-white border border-[#D5DFE8] p-2 rounded-[1px] shadow-lg group overflow-hidden h-full flex flex-col">
                <div className="relative w-full h-full min-h-[360px] flex-1 overflow-hidden border border-[#D5DFE8]">
                  <img 
                    src={bulkVesselImg} 
                    alt={isFa ? 'کشتی باربری فله‌بر بین‌المللی در آب‌های آزاد' : 'Bulk Carrier Maritime Vessel in International Waters'}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    width={1280}
                    height={714}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 border border-[#D5DFE8] text-[#004C80] font-mono text-[10px] font-bold px-2.5 py-1 rounded-[1px] flex items-center gap-1.5 shadow-sm">
                    <Anchor className="w-3.5 h-3.5 text-[#004C80]" />
                    <span>MARITIME LOGISTICS DESK</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 02 LEADERSHIP & GOVERNANCE SECTION ------------------ */}
      <section id="leadership" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">02</span>
                <span>/ {t.leadership.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.leadership.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.leadership.subtitle}
            </p>
          </div>

          {/* Leadership Cards Grid - Real 3 Board Members with Clean Neutral Monogram Avatars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t.leadership.members.map((member) => (
              <div 
                key={member.id}
                className={`bg-[#F4F7FA] border transition-all duration-300 flex flex-col justify-between group rounded-[1px] overflow-hidden ${
                  member.isCeo ? 'border-[#004C80] shadow-sm' : 'border-[#D5DFE8] hover:border-[#004C80]'
                }`}
              >
                <div>
                  {/* Architectural Monogram Avatar Placeholder */}
                  <div className="relative h-60 w-full bg-[#0A1C2E] overflow-hidden border-b border-[#D5DFE8] flex flex-col items-center justify-center text-white select-none">
                    
                    {/* Geometric Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />
                    
                    {/* Monogram Badge */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="w-20 h-20 rounded-[1px] bg-[#132A42] border border-sky-400/40 flex items-center justify-center text-2xl font-mono font-extrabold text-sky-400 shadow-inner group-hover:scale-105 group-hover:border-sky-400 transition-all">
                        {isFa ? member.initialsFa : member.monogram}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                        {member.isCeo ? 'MANAGING DIRECTOR' : `BOARD MEMBER ${member.badgeNum}`}
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 border border-[#D5DFE8] text-[#004C80] font-mono text-[10px] font-bold px-2.5 py-1 rounded-[1px] flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#004C80]" />
                      <span>{member.isCeo ? 'MANAGING DIRECTOR' : `MEMBER ${member.badgeNum}`}</span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-6 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-[#004C80] uppercase tracking-wider">
                      {member.role}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed font-sans pt-3 border-t border-[#D5DFE8]">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="text-[10px] font-mono text-slate-400 uppercase pt-2 flex items-center justify-between border-t border-[#D5DFE8]/60">
                    <span>SECURITY: VERIFIED</span>
                    <span className="text-[#004C80] font-bold">RSP GOVERNANCE</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 03 OUR BUSINESS ------------------ */}
      <section id="business" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">03</span>
                <span>/ {t.business.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.business.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.business.subtitle}
            </p>
          </div>

          {/* Division Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#D5DFE8] pb-4">
            {[
              { id: 'commodity', label: t.business.commodityTrading.title, icon: Layers },
              { id: 'finance', label: t.business.tradeFinance.title, icon: Coins },
              { id: 'partnerships', label: t.business.partnerships.title, icon: Handshake },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all flex items-center gap-2 cursor-pointer ${
                    isActive 
                      ? 'bg-[#004C80] text-white shadow-sm' 
                      : 'bg-white text-[#5C667A] hover:text-[#0A1C2E] border border-[#D5DFE8]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Division 1: Commodity Trading */}
          {activeTab === 'commodity' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
              <div className="lg:col-span-7 bg-white p-8 border border-[#D5DFE8] rounded-[1px] space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#004C80] uppercase">DIVISION 01 // PHYSICAL TRADING</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C2E] mt-1 font-sans">
                      {t.business.commodityTrading.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5C667A] mt-2 leading-relaxed">
                      {t.business.commodityTrading.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {t.business.commodityTrading.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-[#F4F7FA] border border-[#D5DFE8] text-xs sm:text-sm font-medium text-[#0A1C2E] flex items-center gap-2.5 rounded-[1px]">
                        <CheckCircle2 className="w-4 h-4 text-[#004C80] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#0A1C2E] text-slate-300 text-xs font-mono rounded-[1px] leading-relaxed">
                  {t.business.commodityTrading.footnote}
                </div>
              </div>

              <div className="lg:col-span-5 h-full">
                <div className="bg-white p-2 border border-[#D5DFE8] rounded-[1px] shadow-md group overflow-hidden h-full flex flex-col">
                  <img 
                    src={foodGrainsImg} 
                    alt={isFa ? 'تجارت فیزیکی غلات و نهاده‌های دامی و کشاورزی' : 'Agricultural Commodity and Food Grains Physical Trading'}
                    className="w-full h-full min-h-[280px] flex-1 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    width={1280}
                    height={714}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Division 2: Trade & Supply Chain Finance */}
          {activeTab === 'finance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
              <div className="lg:col-span-7 bg-white p-8 border border-[#D5DFE8] rounded-[1px] space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#004C80] uppercase">DIVISION 02 // STRUCTURED LIQUIDITY</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C2E] mt-1 font-sans">
                      {t.business.tradeFinance.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5C667A] mt-2 leading-relaxed">
                      {t.business.tradeFinance.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {t.business.tradeFinance.solutions.map((sol, idx) => (
                      <div key={idx} className="p-3.5 bg-[#F4F7FA] border border-[#D5DFE8] text-xs sm:text-sm font-medium text-[#0A1C2E] flex items-center gap-2.5 rounded-[1px]">
                        <Coins className="w-4 h-4 text-[#004C80] shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#0A1C2E] text-slate-300 text-xs font-mono rounded-[1px] leading-relaxed">
                  {t.business.tradeFinance.footnote}
                </div>
              </div>

              <div className="lg:col-span-5 h-full">
                <div className="bg-white p-2 border border-[#D5DFE8] rounded-[1px] shadow-md group overflow-hidden h-full flex flex-col">
                  <img 
                    src={containerNightImg} 
                    alt={isFa ? 'ترمینال شبانه کانتینری و تسویه اعتبارات اسنادی بانکی' : '24/7 Night Container Terminal and Structured Trade Finance Settlement'}
                    className="w-full h-full min-h-[280px] flex-1 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    width={1280}
                    height={714}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Division 3: Partnerships & Investment */}
          {activeTab === 'partnerships' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in duration-300">
              <div className="lg:col-span-7 bg-white p-8 border border-[#D5DFE8] rounded-[1px] space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#004C80] uppercase">DIVISION 03 // INSTITUTIONAL ECOSYSTEM</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C2E] mt-1 font-sans">
                      {t.business.partnerships.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#5C667A] mt-2 leading-relaxed">
                      {t.business.partnerships.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {t.business.partnerships.connectors.map((conn, idx) => (
                      <div key={idx} className="p-4 bg-[#F4F7FA] border border-[#D5DFE8] text-center rounded-[1px] font-bold text-xs sm:text-sm text-[#004C80]">
                        {conn}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#0A1C2E] text-slate-300 text-xs font-mono rounded-[1px] leading-relaxed">
                  {t.business.partnerships.footnote}
                </div>
              </div>

              <div className="lg:col-span-5 h-full">
                <div className="bg-white p-2 border border-[#D5DFE8] rounded-[1px] shadow-md group overflow-hidden h-full flex flex-col">
                  <img 
                    src={agriGrainImg} 
                    alt={isFa ? 'ترمینال سیلوهای بندری و مبادلات غلات بین‌الملل' : 'Port Grain Silo Elevator Terminal and Trade Finance Corridor'}
                    className="w-full h-full min-h-[280px] flex-1 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    width={1280}
                    height={714}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ------------------ 04 VALUE CREATION LIFECYCLE ------------------ */}
      <section id="value" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">04</span>
                <span>/ {t.valueCreation.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.valueCreation.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.valueCreation.subtitle}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#5C667A] max-w-3xl mb-12 leading-relaxed font-sans">
            {t.valueCreation.leadText}
          </p>

          {/* 5-Phase Horizontal / Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {t.valueCreation.lifecycleSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004C80] transition-all rounded-[1px] space-y-3 group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#004C80] uppercase tracking-wider pb-2 border-b border-[#D5DFE8]">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors mt-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#5C667A] leading-relaxed font-sans mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>EXEC: VALIDATED</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#004C80] rtl:rotate-180" />
                </div>
              </div>
            ))}
          </div>

          {/* Dual Imagery Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#F4F7FA] p-2 border border-[#D5DFE8] rounded-[1px]">
              <img 
                src={grainSiloImg} 
                alt={isFa ? 'سیلوی نگهداری و بارگیری غلات و کالاهای کشاورزی' : 'Industrial Grain Silo and Bulk Storage Facility'}
                className="w-full h-64 object-cover filter contrast-105"
                width={1280}
                height={714}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="bg-[#F4F7FA] p-2 border border-[#D5DFE8] rounded-[1px]">
              <img 
                src={portDuskImg} 
                alt={isFa ? 'بندر کانتینری و محوطه باربری ترانزیتی در هنگام غروب' : 'Container Port Cargo Terminal at Dusk'}
                className="w-full h-64 object-cover filter contrast-105"
                width={1280}
                height={714}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="p-5 bg-[#0A1C2E] text-white rounded-[1px] font-sans text-xs sm:text-sm leading-relaxed border border-[#1E293B]">
            <span className="font-mono text-sky-400 font-bold uppercase mr-2">{isFa ? 'جمع‌بندی ارزش افزوده:' : 'Value Integration:'}</span>
            {t.valueCreation.lifecycleExplanation}
          </div>

        </div>
      </section>

      {/* ------------------ 05 STRATEGIC MARKETS & INTERACTIVE MAP ------------------ */}
      <section id="markets" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">05</span>
                <span>/ {t.markets.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.markets.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.markets.subtitle}
            </p>
          </div>

          {/* Region Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {t.markets.regions.map((reg) => {
              const isSelected = activeRegion === reg.id;
              return (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegion(reg.id)}
                  className={`p-3 text-left rtl:text-right rounded-[1px] transition-all font-mono text-xs cursor-pointer border ${
                    isSelected
                      ? 'bg-[#004C80] text-white border-[#004C80] shadow-sm'
                      : 'bg-white text-[#0A1C2E] hover:border-[#004C80] border-[#D5DFE8]'
                  }`}
                >
                  <div className={`text-[10px] font-bold uppercase ${isSelected ? 'text-sky-300' : 'text-[#004C80]'}`}>
                    {reg.code}
                  </div>
                  <div className="font-bold font-sans mt-0.5 truncate">
                    {reg.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Animated SVG Radar & Hub Details Card */}
          <div className="mb-12">
            <MarketsAnimatedCard
              currentLang={currentLang}
              selectedRegion={selectedRegionObj}
              closingText={t.markets.closingText}
              onInquire={onInquire}
            />
          </div>

          {/* Multimodal Transport Image Feature */}
          <div className="bg-white p-2 border border-[#D5DFE8] rounded-[1px] shadow-sm">
            <img 
              src={multimodalImg} 
              alt={isFa ? 'کریدورهای ترانزیت ترکیبی ریلی، جاده‌ای و دریایی' : 'Multimodal Freight Transport Hub and Cross-Border Corridors'}
              className="w-full h-72 object-cover filter contrast-105"
              width={1280}
              height={714}
              loading="lazy"
              decoding="async"
            />
          </div>

        </div>
      </section>

      {/* ------------------ 06 OPERATIONAL TRACK RECORD & METRICS ------------------ */}
      <section id="stats" className="py-24 bg-[#0A1C2E] text-white border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1E293B] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold text-white">06</span>
                <span>/ {t.stats.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase font-sans">
                {t.stats.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md leading-relaxed">
              {t.stats.subtitle}
            </p>
          </div>

          {/* 4 Concrete Institutional Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.items.map((stat, idx) => (
              <div 
                key={idx}
                className="p-8 bg-[#071320] border border-[#1E293B] hover:border-sky-400/60 transition-all rounded-[1px] space-y-4 group relative overflow-hidden"
              >
                <div className="text-4xl sm:text-5xl font-mono font-extrabold text-sky-400 tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="space-y-1 pt-2 border-t border-[#1E293B]">
                  <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest pt-2">
                  VERIFIED AUDIT METRIC
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 07 CERTIFICATIONS & COMPLIANCE STRIP ------------------ */}
      <section id="certifications" className="py-20 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">07</span>
                <span>/ {t.certifications.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.certifications.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.certifications.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.certifications.items.map((cert, idx) => (
              <div 
                key={idx}
                className="p-6 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004C80] transition-colors rounded-[1px] space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-[#004C80] text-white font-mono text-xs font-bold rounded-[1px]">
                    {cert.code}
                  </span>
                  <Award className="w-5 h-5 text-[#004C80]" />
                </div>
                <h3 className="text-base font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#5C667A] leading-relaxed font-sans">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 08 MARKET INTELLIGENCE & TRADE NOTES ------------------ */}
      <section id="insights" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">08</span>
                <span>/ {t.insights.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.insights.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.insights.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.insights.items.map((item) => (
              <div 
                key={item.id}
                className="p-8 bg-white border border-[#D5DFE8] hover:border-[#004C80] transition-all rounded-[1px] flex flex-col justify-between group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5C667A]">
                    <span className="px-2.5 py-0.5 bg-[#004C80]/10 text-[#004C80] font-bold rounded-[1px]">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed font-sans">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D5DFE8] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {item.readTime}
                  </span>
                  
                  <button
                    onClick={() => {
                      if (openInsightModal) {
                        openInsightModal(item);
                      } else {
                        onInquire(`Insight Inquiry: ${item.title}`);
                      }
                    }}
                    className="text-xs font-mono font-bold text-[#004C80] hover:text-[#003860] flex items-center gap-1.5 cursor-pointer uppercase"
                  >
                    <span>{t.insights.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 09 FREQUENTLY ASKED QUESTIONS (FAQ) ------------------ */}
      <section id="faq" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">09</span>
                <span>/ {t.faq.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.faq.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {t.faq.items.map((faq) => {
              const isOpen = activeFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`border transition-all rounded-[1px] overflow-hidden ${
                    isOpen ? 'border-[#004C80] bg-[#F4F7FA]' : 'border-[#D5DFE8] bg-white hover:border-[#004C80]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#004C80]">
                        [{faq.category}]
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] font-sans">
                        {faq.question}
                      </h3>
                    </div>
                    <span className={`p-2 rounded-[1px] transition-transform ${isOpen ? 'rotate-180 text-[#004C80]' : 'text-slate-400'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5C667A] leading-relaxed font-sans border-t border-[#D5DFE8] space-y-3">
                      <p>{faq.answer}</p>
                      <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#004C80]">
                        <span>REF: FAQ-DOC-{faq.id.toUpperCase()}</span>
                        <button
                          onClick={() => onInquire(`FAQ Follow-up: ${faq.question}`)}
                          className="hover:underline cursor-pointer font-bold"
                        >
                          {isFa ? 'درخواست جزئیات بیشتر ←' : 'Request Further Information →'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------ 10 VISION & MISSION ------------------ */}
      <section id="vision" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">10</span>
                <span>/ {t.visionMission.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {isFa ? 'چشم‌انداز راهبردی و ماموریت عملیاتی' : 'Strategic Vision & Operating Mission'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              
              {/* Vision Card */}
              <div className="p-8 bg-white border border-[#D5DFE8] rounded-[1px] space-y-3">
                <span className="text-[11px] font-mono font-bold text-[#004C80] uppercase">PURPOSE 01 // STRATEGIC HORIZON</span>
                <h3 className="text-xl font-bold text-[#0A1C2E] font-sans">
                  {t.visionMission.visionTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#5C667A] leading-relaxed font-sans">
                  {t.visionMission.visionText}
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-8 bg-white border border-[#D5DFE8] rounded-[1px] space-y-3">
                <span className="text-[11px] font-mono font-bold text-[#004C80] uppercase">PURPOSE 02 // OPERATIONAL EXECUTION</span>
                <h3 className="text-xl font-bold text-[#0A1C2E] font-sans">
                  {t.visionMission.missionTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#5C667A] leading-relaxed font-sans">
                  {t.visionMission.missionText}
                </p>
              </div>

            </div>

            {/* Rail Logistics Infrastructure Image */}
            <div className="lg:col-span-6">
              <div className="bg-white p-2 border border-[#D5DFE8] rounded-[1px] shadow-md group overflow-hidden">
                <img 
                  src={railLogisticsImg} 
                  alt={isFa ? 'ترانزیت باری ریلی و زیرساخت‌های اتصال تجاری' : 'Overland Freight Rail Infrastructure and Logistics Terminal'}
                  className="w-full h-80 sm:h-96 object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  width={1280}
                  height={714}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 11 WHY REFАН SANAT PARDIS ------------------ */}
      <section id="why-us" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">11</span>
                <span>/ {t.whyUs.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.whyUs.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.whyUs.principles.map((p) => (
              <div 
                key={p.id}
                className="p-8 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004C80] transition-all rounded-[1px] space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#004C80] tracking-wider">
                    {p.tag}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#004C80]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed font-sans">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 12 FINAL CTA BANNER (DE-DUPLICATED HEADLINE) ------------------ */}
      <section className="py-20 bg-[#0A1C2E] text-white border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132A42] border border-[#1E3A5F] text-sky-400 font-mono text-xs font-bold uppercase rounded-[1px]">
            {t.finalCta.category}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-sans text-white max-w-3xl mx-auto leading-tight">
            {t.finalCta.tagline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans">
            {t.finalCta.invitation}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="bg-sky-500 hover:bg-sky-400 text-[#0A1C2E] px-8 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>{t.finalCta.primaryCta}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <a
              href="#business"
              onClick={(e) => handleAnchorClick(e, '#business')}
              className="border border-[#334155] hover:border-sky-400 text-white px-8 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{t.finalCta.secondaryCta}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------ 13 STATIC CONTACT DESK (NO FORM) ------------------ */}
      <section id="contact" className="py-24 bg-[#F4F7FA] text-[#0A1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">13</span>
                <span>/ {t.contact.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {t.contact.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Clean Institutional Contact Desk */}
          <div className="max-w-5xl mx-auto bg-white border border-[#D5DFE8] p-8 sm:p-12 rounded-[1px] shadow-sm space-y-8">
            
            <div className="space-y-2 border-b border-[#D5DFE8] pb-6">
              <span className="text-xs font-mono font-bold text-[#004C80] uppercase tracking-wider">
                CENTRAL HEADQUARTERS & GLOBAL TRADE DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C2E] font-sans">
                {t.contact.officeTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C667A] font-sans">
                {t.contact.officeDesc}
              </p>
            </div>

            {/* Direct Coordinates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Address */}
              <div className="p-5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] space-y-2 lg:col-span-2">
                <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{t.contact.addressLabel || (isFa ? 'نشانی دفتر مرکزی' : 'Headquarters Address')}</span>
                </div>
                <p className="text-sm font-bold text-[#0A1C2E] font-sans leading-relaxed">
                  {t.contact.address}
                </p>
              </div>

              {/* Portal Website */}
              <div className="p-5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] space-y-2">
                <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase">
                  <Globe className="w-4 h-4 shrink-0" />
                  <span>{t.contact.websiteLabel || (isFa ? 'پورتال رسمی شرکت' : 'Official Portal')}</span>
                </div>
                <a 
                  href={`https://${t.contact.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#004C80] hover:underline font-mono inline-flex items-center gap-1.5"
                >
                  <span>{t.contact.website}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 opacity-75" />
                </a>
              </div>

              {/* Direct Telephones */}
              <div className="p-5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] space-y-2">
                <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{t.contact.phoneLabel || (isFa ? 'تلفن‌های تماس مستقیم' : 'Direct Telephones')}</span>
                </div>
                <div className="flex flex-col gap-1.5 font-mono text-sm font-bold text-[#004C80]">
                  {t.contact.phones.map((ph, idx) => (
                    <a 
                      key={idx}
                      href={`tel:${ph.replace(/[^0-9+]/g, '')}`}
                      className="hover:underline flex items-center justify-between"
                      dir="ltr"
                    >
                      <span>{ph}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Central Fax */}
              <div className="p-5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] space-y-2">
                <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase">
                  <Printer className="w-4 h-4 shrink-0" />
                  <span>{t.contact.faxLabel || (isFa ? 'شماره فکس' : 'Central Fax')}</span>
                </div>
                <p className="text-sm font-bold text-[#0A1C2E] font-mono" dir="ltr">
                  {t.contact.fax}
                </p>
              </div>

              {/* Corporate Email */}
              <div className="p-5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] space-y-2">
                <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{t.contact.emailLabel || (isFa ? 'پست الکترونیک رسمی' : 'Corporate Email')}</span>
                </div>
                <a 
                  href={`mailto:${t.contact.email}`}
                  className="text-sm font-bold text-[#004C80] hover:underline font-mono block break-all"
                >
                  {t.contact.email}
                </a>
              </div>

            </div>

            {/* Operating Hours & Compliance Notice */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2">
              
              <div className="md:col-span-5 p-4 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#004C80] shrink-0" />
                <div>
                  <div className="text-[11px] font-mono font-bold text-[#004C80] uppercase">
                    {isFa ? 'ساعات کاری میز بازرگانی' : 'Operating Hours'}
                  </div>
                  <div className="text-xs font-semibold text-[#0A1C2E] mt-0.5">
                    {t.contact.hours}
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 p-4 bg-[#0A1C2E] text-white rounded-[1px] border border-[#1E293B] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                    {t.contact.complianceTitle}
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    {t.contact.complianceText}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------ FOOTER ------------------ */}
      <footer className="bg-[#0A1C2E] text-slate-400 border-t border-[#1E293B] pt-16 pb-12 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Top Brand Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 border-b border-[#1E293B] gap-6">
            <div className="flex items-center gap-4">
              <Logo size="lg" />
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-white uppercase font-sans tracking-wide block">
                  {t.brand}
                </span>
                <span className="text-xs font-mono text-sky-400 tracking-wider">
                  {t.category}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-slate-400">
              <span className="px-3 py-1.5 bg-[#112233] border border-[#1E293B] rounded-[1px] text-slate-300">
                TEHRAN HQ: FATEMI WEST • NO. 313
              </span>
              <span className="px-3 py-1.5 bg-[#112233] border border-[#1E293B] rounded-[1px] text-sky-400">
                REFAH-SPC.IR
              </span>
            </div>
          </div>

          {/* Comprehensive 4-Column Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
            
            {/* Column 1: با ما در ارتباط باشید (Contact & Coordinates) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-white font-bold uppercase tracking-wider text-xs font-mono flex items-center gap-2 pb-2 border-b border-[#1E293B]">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.footer.contactInfoTitle || (isFa ? 'با ما در ارتباط باشید' : 'Contact Coordinates')}</span>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300 font-sans">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="text-slate-400 text-[11px] block">{isFa ? 'نشانی:' : 'Address:'}</span>
                    <span className="font-medium text-slate-200">{t.contact.address}</span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">{isFa ? 'تلفن‌های تماس:' : 'Phones:'}</span>
                    <div className="font-mono font-semibold text-slate-200 flex flex-col gap-1 mt-0.5" dir="ltr">
                      {t.contact.phones.map((ph, i) => (
                        <a key={i} href={`tel:${ph.replace(/[^0-9+]/g, '')}`} className="hover:text-sky-400 transition-colors">
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">{isFa ? 'ایمیل رسمی:' : 'Email:'}</span>
                    <a href={`mailto:${t.contact.email}`} className="font-mono text-slate-200 hover:text-sky-400 transition-colors">
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start gap-2.5">
                  <Printer className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">{isFa ? 'فکس:' : 'Fax:'}</span>
                    <span className="font-mono text-slate-200" dir="ltr">{t.contact.fax}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: لینک‌های مرتبط (گروه رفاه و سهامداران) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-white font-bold uppercase tracking-wider text-xs font-mono flex items-center gap-2 pb-2 border-b border-[#1E293B]">
                <Link2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.footer.relatedLinksTitle}</span>
              </div>
              <ul className="space-y-2 text-xs">
                {t.footer.relatedLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors py-0.5"
                    >
                      <span className="flex items-center gap-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60 group-hover:opacity-100 shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </span>
                      {link.url.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1 rtl:mr-1 rtl:ml-0" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: دسترسی سریع / صنایع معدنی و فولادی همکار */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-white font-bold uppercase tracking-wider text-xs font-mono flex items-center gap-2 pb-2 border-b border-[#1E293B]">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.footer.partnerIndustriesTitle}</span>
              </div>
              <ul className="space-y-2 text-xs">
                {t.footer.partnerIndustries.map((partner, idx) => (
                  <li key={idx}>
                    <a
                      href={partner.url}
                      target={partner.url.startsWith('http') ? '_blank' : '_self'}
                      rel={partner.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center justify-between text-slate-300 hover:text-white transition-colors py-0.5"
                    >
                      <span className="flex items-center gap-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60 group-hover:opacity-100 shrink-0" />
                        <span className="truncate">{partner.name}</span>
                      </span>
                      {partner.url.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1 rtl:mr-1 rtl:ml-0" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: ناوبری سامانه */}
            <div className="lg:col-span-2 space-y-4 font-mono">
              <div className="text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2 pb-2 border-b border-[#1E293B]">
                <span>{t.footer.quickLinksTitle}</span>
              </div>
              <ul className="space-y-2 text-slate-400 text-xs">
                <li><a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="hover:text-white transition-colors block">{t.nav.about}</a></li>
                <li><a href="#leadership" onClick={(e) => handleAnchorClick(e, '#leadership')} className="hover:text-white transition-colors block">{t.nav.leadership}</a></li>
                <li><a href="#business" onClick={(e) => handleAnchorClick(e, '#business')} className="hover:text-white transition-colors block">{t.nav.business}</a></li>
                <li><a href="#markets" onClick={(e) => handleAnchorClick(e, '#markets')} className="hover:text-white transition-colors block">{t.nav.markets}</a></li>
                <li><a href="#stats" onClick={(e) => handleAnchorClick(e, '#stats')} className="hover:text-white transition-colors block">{t.nav.stats}</a></li>
                <li><a href="#insights" onClick={(e) => handleAnchorClick(e, '#insights')} className="hover:text-white transition-colors block">{t.nav.insights}</a></li>
                <li><a href="#faq" onClick={(e) => handleAnchorClick(e, '#faq')} className="hover:text-white transition-colors block">{t.nav.faq}</a></li>
                <li><a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="text-sky-400 hover:underline block">{t.nav.contact}</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Legal Notice */}
          <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
            <div>
              © {new Date().getFullYear()} {t.footer.rights}
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={openTerms}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                {t.footer.termsTitle}
              </button>
              <button 
                onClick={openPrivacy}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                {t.footer.privacyTitle}
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

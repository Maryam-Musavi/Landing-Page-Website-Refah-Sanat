import React, { useState } from 'react';
import bulkVesselImg from '../assets/images/bulk_vessel_sea_1786809204898.jpg';
import cargoPortImg from '../assets/images/cargo_port_terminal_1786809220224.jpg';
import containerNightImg from '../assets/images/container_terminal_night_1786809233281.jpg';
import foodGrainsImg from '../assets/images/food_grains_trade_1786809247540.jpg';
import grainSiloImg from '../assets/images/grain_silo_facility_1786809259998.jpg';
import multimodalImg from '../assets/images/multimodal_transport_1786809273515.jpg';
import portDuskImg from '../assets/images/port_containers_dusk_1786809296933.jpg';
import railLogisticsImg from '../assets/images/rail_logistics_infra_1786809312499.jpg';
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
  Clock,
  Activity,
  ArrowUpRight,
  Maximize2
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
}

export const EditorialIndustrialMain: React.FC<EditorialIndustrialMainProps> = ({
  currentLang,
  onLanguageChange,
  onInquire,
  openTerms,
  openPrivacy,
}) => {
  const t = translations[currentLang];
  const [activeTab, setActiveTab] = useState<'commodity' | 'finance' | 'partnerships'>('commodity');
  const [activeRegion, setActiveRegion] = useState<string>('mideast');
  const [activeSection, setActiveSection] = useState<string>('home');

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
      setActiveSection(targetId);
    }
  };

  const selectedRegionObj = t.markets.regions.find((r) => r.id === activeRegion) || t.markets.regions[0];

  const isFa = currentLang === 'fa';

  return (
    <div className="bg-white text-[#0A1C2E] font-sans selection:bg-[#004C80] selection:text-white min-h-screen transition-colors duration-300">
      
      {/* ------------------ REFINED INSTITUTIONAL NAVIGATION ------------------ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#D5DFE8] transition-all">
        
        {/* Micro Technical Ticker in Deep Midnight Navy #0A1C2E */}
        <div className="bg-[#0A1C2E] text-[#94A3B8] border-b border-[#1E293B] py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-widest gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-white font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYS: ONLINE • REF: RSP-INT-2026</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-300 hidden sm:inline">TEHRAN HQ • GLOBAL DESK</span>
              <span className="text-slate-600 hidden md:inline">|</span>
              <span className="text-slate-400 hidden md:inline">[29.9511° N, 52.8800° E]</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-300">REG NO. 493011</span>
              <span className="text-slate-600">|</span>
              <span className="text-white font-bold">ISO 28000 SECURITY GOVERNANCE</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* LEFT: Wordmark + Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-[#004C80] border border-[#004C80] flex items-center justify-center p-1 shrink-0 transition-transform group-hover:scale-105 rounded-[1px]">
              <Logo className="w-full h-full text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#0A1C2E] text-sm sm:text-base tracking-widest uppercase font-mono group-hover:text-[#004C80] transition-colors leading-none">
                {isFa ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
              </span>
              <span className="text-[10px] text-[#5C667A] font-mono tracking-widest uppercase mt-1">
                {isFa ? 'تجارت • تامین مالی • سرمایه‌گذاری' : 'International Trade & Financial Solutions'}
              </span>
            </div>
          </a>

          {/* CENTER / RIGHT: Streamlined Essential Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-[#5C667A]">
            {[
              { id: 'home', label: isFa ? 'معرفی شرکت' : 'ABOUT' },
              { id: 'leadership', label: isFa ? 'هیأت مدیره' : 'LEADERSHIP' },
              { id: 'business', label: isFa ? 'حوزه‌های کسب‌وکار' : 'OUR BUSINESS' },
              { id: 'value', label: isFa ? 'خلق ارزش' : 'VALUE CREATION' },
              { id: 'markets', label: isFa ? 'بازارها' : 'MARKETS' },
              { id: 'why-rsp', label: isFa ? 'چرا RSP' : 'WHY RSP' },
              { id: 'contact', label: isFa ? 'ارتباط با ما' : 'CONTACT' },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, `#${link.id}`)}
                  className={`relative py-1 transition-colors hover:text-[#0A1C2E] ${
                    isActive ? 'text-[#004C80] font-extrabold' : 'text-[#5C667A]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004C80]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action & Lang Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLanguageChange(isFa ? 'en' : 'fa')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#D5DFE8] bg-[#F4F7FA] hover:bg-[#E2E8F0] text-[#0A1C2E] transition-colors text-xs font-mono font-bold cursor-pointer rounded-[1px]"
            >
              <Globe className="w-3.5 h-3.5 text-[#004C80]" />
              <span>{isFa ? 'ENGLISH' : 'فارسی'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="hidden sm:inline-flex bg-[#004C80] hover:bg-[#003A63] text-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all items-center gap-1.5 cursor-pointer rounded-[1px] border border-[#004C80]"
            >
              <span>{isFa ? 'درخواست تجاری' : 'COMMERCIAL INQUIRY'}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-white" />
            </a>
          </div>

        </div>
      </header>

      {/* ------------------ HERO SECTION (EDITORIAL INDUSTRIAL) ------------------ */}
      <section id="home" className="relative py-16 lg:py-24 border-b border-[#D5DFE8] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4F7FA] border border-[#D5DFE8] text-[#004C80] text-xs font-mono font-bold uppercase tracking-widest rounded-[1px]">
                <span className="w-1.5 h-1.5 bg-[#004C80]" />
                <span>{t.hero.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1C2E] leading-[1.1] tracking-tight uppercase font-sans">
                {isFa ? (
                  <>پیوند تجارت جهانی<br /><span className="text-[#004C80]">با تامین مالی جهانی</span></>
                ) : (
                  <>Connecting Global Trade<br /><span className="text-[#004C80]">with Global Finance</span></>
                )}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
                <p className="font-semibold text-[#0A1C2E]">
                  {t.hero.introParagraph1}
                </p>
                <p className="text-[#5C667A]">
                  {t.hero.introParagraph2}
                </p>
              </div>

              {/* Intersection Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {t.hero.intersectionTags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 bg-[#F4F7FA] border border-[#D5DFE8] text-[11px] font-mono font-semibold text-[#0A1C2E] rounded-[1px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center font-mono">
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="bg-[#004C80] hover:bg-[#003A63] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 rounded-[1px] border border-[#004C80] shadow-sm"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 text-white" />
                </a>

                <a
                  href="#business"
                  onClick={(e) => handleAnchorClick(e, '#business')}
                  className="bg-[#F4F7FA] hover:bg-[#E2E8F0] text-[#0A1C2E] px-7 py-3.5 text-xs font-bold uppercase tracking-widest border border-[#D5DFE8] transition-all inline-flex items-center rounded-[1px]"
                >
                  <span>{t.hero.secondaryCta}</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Large Editorial Photography */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#D5DFE8] bg-[#F4F7FA] p-2 shadow-lg">
                <div className="relative h-96 sm:h-[450px] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={bulkVesselImg} 
                    alt="Bulk Carrier Vessel on High Seas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/80 via-transparent to-transparent" />

                  {/* Micro Metadata Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 border border-[#D5DFE8] px-3 py-1.5 text-[10px] font-mono text-[#0A1C2E]">
                    <span className="text-[#004C80] font-bold">RSP / MARITIME-01</span> • BULK LOGISTICS & CARGO
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-[#D5DFE8] p-4 text-xs font-mono">
                    <div className="flex items-center justify-between text-[#0A1C2E] font-bold mb-1">
                      <span className="text-[#004C80]">TRADE • FINANCE • INVESTMENT</span>
                      <span>REF: 2026-HQ</span>
                    </div>
                    <p className="text-[11px] text-[#5C667A] font-sans">
                      {isFa 
                        ? 'تسهیل تجارت فرامرزی، ساختاردهی تامین مالی تجاری و پیوند کسب‌وکارها در بازارهای جهانی' 
                        : 'Facilitating cross-border trade, structuring trade finance, and connecting global commercial partners.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 01 LEADERSHIP & GOVERNANCE SECTION ------------------ */}
      <section id="leadership" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">01</span>
                <span>/ {isFa ? 'مدیریت ارشد و هیأت مدیره' : 'LEADERSHIP & GOVERNANCE'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
                {isFa ? 'معرفی مدیرعامل و هیأت مدیره' : 'Executive Leadership & Board of Directors'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md leading-relaxed">
              {isFa 
                ? 'هدایت راهبردی گروه رفاه صنعت پردیس با تکیه بر دهه‌ها تجربه تخصصی در مدیریت تجارت بین‌الملل، تامین مالی ساختاریافته و حاکمیت نهادی.' 
                : 'Guiding RSP with decades of expertise across international trade execution, structured finance, and institutional governance.'}
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                id: 'm1',
                badgeNum: '01',
                nameFa: 'سید فضل الدین جمالیان زاده',
                nameEn: 'Seyyed Fazloddin Jamalianzadeh',
                roleFa: 'مدیرعامل و نائب رئیس هیأت مدیره',
                roleEn: 'Managing Director & Vice Chairman of the Board',
                bioFa: 'بیش از ۲۵ سال سابقه مدیریت ارشد در میزهای تجارت کالایی بین‌المللی و ساختاردهی ابزارهای اعتباری و مالی در خاورمیانه و آسیا.',
                bioEn: '25+ years directing international commodity trading desks and cross-border trade finance structures in Middle Eastern & Asian markets.',
                image: '/images/executive-1.jpg',
                isCeo: true,
              },
              {
                id: 'm2',
                badgeNum: '02',
                nameFa: 'حسین تک روستا',
                nameEn: 'Hossein Takroosta',
                roleFa: 'عضو هیأت مدیره',
                roleEn: 'Member of the Board of Directors',
                bioFa: 'متخصص بازرگانی کالاهای اساسی، زنجیره تامین فولاد و فلزات، و قراردادهای بین‌المللی حمل‌ونقل دریایی.',
                bioEn: 'Expert in bulk industrial commodities, steel supply chains, and international maritime logistics contracts.',
                image: '/images/executive-2.jpg',
                isCeo: false,
              },
              {
                id: 'm3',
                badgeNum: '03',
                nameFa: 'سید مسعود کاظمی',
                nameEn: 'Seyyed Masoud Kazemi',
                roleFa: 'عضو هیأت مدیره',
                roleEn: 'Member of the Board of Directors',
                bioFa: 'با سابقه مدیریت بانکداری شرکتی و تخصصی در اعتبارات اسنادی (L/C)، SBLC و مکانیزم‌های تسویه ارزی چندگانه.',
                bioEn: 'Former senior trade banker specializing in L/C, SBLC, structured supply chain credit, and Multi-FX settlement mechanisms.',
                image: '/images/executive-3.jpg',
                isCeo: false,
              },
            ].map((member) => (
              <div 
                key={member.id}
                className={`bg-[#F4F7FA] border transition-all duration-300 flex flex-col justify-between group rounded-[1px] overflow-hidden ${
                  member.isCeo ? 'border-[#004C80]' : 'border-[#D5DFE8] hover:border-[#004C80]'
                }`}
              >
                <div>
                  {/* Executive Photo Container */}
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden border-b border-[#D5DFE8]">
                    <img 
                      src={member.image} 
                      alt={isFa ? member.nameFa : member.nameEn}
                      className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-white/95 border border-[#D5DFE8] text-[#004C80] font-mono text-[10px] font-bold px-2.5 py-1 rounded-[1px] flex items-center gap-1.5 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#004C80]" />
                      <span>{member.isCeo ? 'MANAGING DIRECTOR' : `MEMBER ${member.badgeNum}`}</span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-[#004C80] uppercase tracking-wider">
                      {isFa ? member.roleFa : member.roleEn}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] font-sans group-hover:text-[#004C80] transition-colors">
                      {isFa ? member.nameFa : member.nameEn}
                    </h3>
                    <p className="text-xs text-[#5C667A] leading-relaxed font-sans pt-2 border-t border-[#D5DFE8]">
                      {isFa ? member.bioFa : member.bioEn}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-[#E2E8F0] border-t border-[#D5DFE8] flex items-center justify-between text-[10px] font-mono text-[#5C667A]">
                  <span className="flex items-center gap-1 font-bold text-[#004C80]">
                    <Award className="w-3.5 h-3.5" />
                    <span>RSP EXECUTIVE BOARD</span>
                  </span>
                  <span className="text-[#0A1C2E] font-bold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Governance Bar in Deep Midnight Navy #0A1C2E */}
          <div className="p-5 bg-[#0A1C2E] border border-[#1E293B] rounded-[1px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="font-sans text-slate-200">
                {isFa 
                  ? 'راهبری شرکتی و هیأت مدیره رفاه صنعت پردیس متعهد به انضباط مالی، شفافیت معامله‌ها و ارتقای حاکمیت نهادی است.' 
                  : 'Refah Sanat Pardis corporate governance adheres strictly to transactional transparency, counterparty rigor, and institutional discipline.'}
              </span>
            </div>
            <span className="text-white font-bold shrink-0 font-mono bg-[#132A42] px-3 py-1 border border-[#1E293B] rounded-[1px]">
              ISO 9001 / ISO 28000 GOVERNANCE COMPLIANT
            </span>
          </div>

        </div>
      </section>

      {/* ------------------ 02 OUR BUSINESS ------------------ */}
      <section id="business" className="py-24 bg-[#0A1C2E] text-white border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1E293B] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-sky-400 uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold text-white">02</span>
                <span>/ {t.business.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase font-sans">
                {t.business.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#94A3B8] max-w-md">
              {t.business.subtitle}
            </p>
          </div>

          {/* 3 Major Business Pillars */}
          <div className="space-y-12">
            
            {/* Pillar 1: International Commodity Trading */}
            <div className="bg-[#132A42] border border-[#1E293B] p-6 sm:p-8 rounded-[1px] space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-3 font-mono text-xs font-bold text-sky-400 uppercase">
                  <span>02.01</span>
                  <span>// COMMODITY DESK</span>
                </div>
                <span className="text-xs font-mono text-[#94A3B8] bg-[#0A1C2E] px-3 py-1 border border-[#1E293B] rounded-[1px]">
                  PHYSICAL TRADE & LOGISTICS
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {t.business.commodityTrading.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.business.commodityTrading.desc}
                  </p>

                  {/* 6 Commodity items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {t.business.commodityTrading.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-3 bg-[#0A1C2E] border border-[#1E293B] text-xs font-medium text-slate-200 flex items-center gap-2.5 rounded-[1px]"
                      >
                        <span className="w-1.5 h-1.5 bg-sky-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Imagery Duo: Golden Grains & Silo Hub */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  <div className="border border-[#1E293B] bg-[#0A1C2E] p-1.5 rounded-[1px]">
                    <div className="relative h-40 overflow-hidden rounded-[1px]">
                      <img 
                        src={foodGrainsImg} 
                        alt="Agro & Food Grains Trade"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-95 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-sky-300 font-bold">
                        {isFa ? 'تجارت غلات و امنیت غذایی' : 'AGRI-GRAINS TRADE'}
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#1E293B] bg-[#0A1C2E] p-1.5 rounded-[1px]">
                    <div className="relative h-40 overflow-hidden rounded-[1px]">
                      <img 
                        src={grainSiloImg} 
                        alt="Grain Silo Elevator Infrastructure"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-95 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-sky-300 font-bold">
                        {isFa ? 'سیلوهای ذخیره‌سازی' : 'SILO INFRASTRUCTURE'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0A1C2E]/70 border border-[#1E293B] text-xs font-mono text-[#94A3B8] leading-relaxed rounded-[1px]">
                {t.business.commodityTrading.footnote}
              </div>
            </div>

            {/* Pillar 2: Trade & Supply Chain Finance */}
            <div className="bg-[#132A42] border border-[#1E293B] p-6 sm:p-8 rounded-[1px] space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-3 font-mono text-xs font-bold text-sky-400 uppercase">
                  <span>02.02</span>
                  <span>// LIQUIDITY & STRUCTURING</span>
                </div>
                <span className="text-xs font-mono text-[#94A3B8] bg-[#0A1C2E] px-3 py-1 border border-[#1E293B] rounded-[1px]">
                  CAPITAL & RISK STRUCTURING
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {t.business.tradeFinance.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.business.tradeFinance.desc}
                  </p>

                  {/* 7 Solutions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {t.business.tradeFinance.solutions.map((sol, idx) => (
                      <div 
                        key={idx}
                        className="p-3 bg-[#0A1C2E] border border-[#1E293B] text-xs font-medium text-slate-200 flex items-center gap-2.5 rounded-[1px]"
                      >
                        <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Imagery: Container Terminal at Night (24/7 Operations) */}
                <div className="lg:col-span-5 border border-[#1E293B] bg-[#0A1C2E] p-1.5 rounded-[1px]">
                  <div className="relative h-48 sm:h-56 overflow-hidden rounded-[1px]">
                    <img 
                      src={containerNightImg} 
                      alt="Night Port Logistics and Capital Settlement"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#0A1C2E]/90 border border-[#1E293B] px-2.5 py-1 text-[10px] font-mono text-emerald-400 font-bold">
                      24/7 GLOBAL TRADE CLEARING
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white">
                      <span className="text-emerald-400 font-bold">// DOCUMENTARY SETTLEMENT</span>
                      <p className="text-[11px] text-slate-300 font-sans mt-0.5">
                        {isFa ? 'تأمین مالی جریان کالا و صدور اعتبارات اسنادی بدون توقف' : 'Non-stop trade credit & capital structuring for high-volume corridors.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0A1C2E]/70 border border-[#1E293B] text-xs font-mono text-emerald-400/90 leading-relaxed rounded-[1px]">
                {t.business.tradeFinance.footnote}
              </div>
            </div>

            {/* Pillar 3: Global Partnerships & Investment */}
            <div className="bg-[#132A42] border border-[#1E293B] p-6 sm:p-8 rounded-[1px] space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#1E293B]">
                <div className="flex items-center gap-3 font-mono text-xs font-bold text-sky-400 uppercase">
                  <span>02.03</span>
                  <span>// INSTITUTIONAL ECOSYSTEM</span>
                </div>
                <span className="text-xs font-mono text-[#94A3B8] bg-[#0A1C2E] px-3 py-1 border border-[#1E293B] rounded-[1px]">
                  CO-INVESTMENT & JVs
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {t.business.partnerships.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.business.partnerships.desc}
                  </p>

                  {/* Connectors Banner */}
                  <div className="p-4 bg-[#0A1C2E] border border-[#1E293B] rounded-[1px]">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm font-bold text-white">
                      {t.business.partnerships.connectors.map((connector, idx) => (
                        <React.Fragment key={idx}>
                          <span className="px-3 py-1.5 bg-[#132A42] border border-[#1E293B] text-sky-300 rounded-[1px]">
                            {connector}
                          </span>
                          {idx < t.business.partnerships.connectors.length - 1 && (
                            <span className="text-slate-500 font-normal">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Imagery: Multimodal Global Transport Hub */}
                <div className="lg:col-span-5 border border-[#1E293B] bg-[#0A1C2E] p-1.5 rounded-[1px]">
                  <div className="relative h-48 sm:h-56 overflow-hidden rounded-[1px]">
                    <img 
                      src={multimodalImg} 
                      alt="Multimodal Global Freight Logistics Hub"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/90 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-[#0A1C2E]/90 border border-[#1E293B] px-2.5 py-1 text-[10px] font-mono text-sky-400 font-bold">
                      MULTIMODAL LOGISTICS NETWORK
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white">
                      <span className="text-sky-400 font-bold">// INTEGRATED FREIGHT CORRIDORS</span>
                      <p className="text-[11px] text-slate-300 font-sans mt-0.5">
                        {isFa ? 'پیوند مسیرهای دریایی، ترانزیت ریلی، هوایی و حمل زمینی' : 'Linking maritime shipping, freight rail networks, and air corridors.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0A1C2E]/70 border border-[#1E293B] text-xs font-mono text-[#94A3B8] leading-relaxed rounded-[1px]">
                {t.business.partnerships.footnote}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 03 HOW WE CREATE VALUE ------------------ */}
      <section id="value" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest">
              <span className="text-3xl sm:text-5xl font-extrabold">03</span>
              <span>/ {t.valueCreation.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
              {t.valueCreation.title}
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {t.valueCreation.leadText}
            </p>
          </div>

          {/* 5 Lifecycle Pillars */}
          {(() => {
            const phaseImages = [
              grainSiloImg,
              railLogisticsImg,
              portDuskImg,
              containerNightImg,
              bulkVesselImg
            ];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
                {t.valueCreation.lifecycleSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className="p-5 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004C80] transition-all duration-300 rounded-[1px] space-y-3 flex flex-col justify-between group shadow-sm hover:shadow"
                  >
                    <div>
                      {/* Image header */}
                      <div className="relative h-28 w-full overflow-hidden border border-[#D5DFE8] mb-3 bg-slate-200 rounded-[1px]">
                        <img 
                          src={phaseImages[idx]} 
                          alt={step.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                        />
                        <div className="absolute top-1.5 left-1.5 bg-[#0A1C2E]/90 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-[1px]">
                          PHASE 0{idx + 1}
                        </div>
                      </div>

                      <div className="text-xl font-mono font-extrabold text-[#004C80] mb-1">
                        {step.step}
                      </div>
                      <h3 className="text-sm font-bold text-[#0A1C2E] font-sans mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-[#5C667A] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                    <div className="pt-2.5 border-t border-[#D5DFE8] text-[9px] font-mono font-bold text-[#004C80] uppercase flex items-center justify-between">
                      <span>RSP VERIFIED</span>
                      <ArrowUpRight className="w-3 h-3 text-[#004C80]" />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* Lifecycle Explanation Banner */}
          <div className="p-6 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px] flex items-center gap-4">
            <div className="w-2 h-10 bg-[#004C80] shrink-0" />
            <p className="text-xs sm:text-sm text-[#0A1C2E] font-medium leading-relaxed font-sans">
              {t.valueCreation.lifecycleExplanation}
            </p>
          </div>

        </div>
      </section>

      {/* ------------------ 04 OUR MARKETS ------------------ */}
      <section id="markets" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">04</span>
                <span>/ {t.markets.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase">
                {t.markets.title}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md">
              {t.markets.subtitle}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-3xl">
              {t.markets.leadText}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Region Selector & Corridor Infrastructure Panel */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Region List Buttons */}
              <div className="space-y-2 font-mono">
                {t.markets.regions.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setActiveRegion(reg.id)}
                    className={`w-full p-3.5 text-left rtl:text-right transition-all flex items-center justify-between border cursor-pointer rounded-[1px] ${
                      activeRegion === reg.id
                        ? 'bg-white text-[#0A1C2E] border-[#004C80] shadow-sm font-bold ring-1 ring-[#004C80]/20'
                        : 'bg-[#F4F7FA] text-[#5C667A] border-[#D5DFE8] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#004C80]">[{reg.code}]</span>
                      <span className="text-sm font-sans">{reg.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 rtl:rotate-180 ${activeRegion === reg.id ? 'text-[#004C80]' : 'text-[#5C667A]'}`} />
                  </button>
                ))}
              </div>

              {/* Corridor Infrastructure & Global Clearing Panel */}
              <div className="bg-white border border-[#D5DFE8] p-5 rounded-[1px] space-y-4 shadow-sm">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#D5DFE8]">
                  <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#004C80]" />
                    <span>{isFa ? 'استانداردها و زیرساخت تسویه' : 'CLEARING & SOURCING INFRASTRUCTURE'}</span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-[1px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ACTIVE</span>
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2.5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px]">
                    <div className="text-base font-extrabold text-[#004C80]">6</div>
                    <div className="text-[10px] text-[#5C667A] uppercase mt-0.5">{isFa ? 'قطب تجاری' : 'GLOBAL HUBS'}</div>
                  </div>
                  <div className="p-2.5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px]">
                    <div className="text-base font-extrabold text-[#0A1C2E]">100%</div>
                    <div className="text-[10px] text-[#5C667A] uppercase mt-0.5">{isFa ? 'بازرسی SGS' : 'SGS AUDIT'}</div>
                  </div>
                  <div className="p-2.5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[1px]">
                    <div className="text-base font-extrabold text-[#004C80]">24/7</div>
                    <div className="text-[10px] text-[#5C667A] uppercase mt-0.5">{isFa ? 'پایش کریدور' : 'MONITORING'}</div>
                  </div>
                </div>

                {/* Structured Features List */}
                <div className="space-y-2 text-xs text-[#334155] font-sans pt-1">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#004C80] shrink-0 mt-0.5" />
                    <span>{isFa ? 'تسویه چندارزی با درهم (AED)، دلار، یورو، یوآن و روپیه' : 'Multicurrency settlement (AED, USD, EUR, CNY, INR)'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#004C80] shrink-0 mt-0.5" />
                    <span>{isFa ? 'ساختاردهی اعتبارات اسنادی دیداری و مدت‌دار (LC / CAD / SBLC)' : 'Documentary letters of credit & trade finance (LC / CAD / SBLC)'}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#004C80] shrink-0 mt-0.5" />
                    <span>{isFa ? 'پوشش لجستیک دریایی و چارترینگ تحت اینکوترمز ۲۰۲۰' : 'Maritime logistics, vessel chartering & Incoterms 2020'}</span>
                  </div>
                </div>

                {/* Quick Corridor Action */}
                <div className="pt-2 border-t border-[#D5DFE8]">
                  <button
                    onClick={() => onInquire(`Corridor Sourcing Inquiry: ${selectedRegionObj.name}`)}
                    className="w-full py-2.5 bg-[#004C80] hover:bg-[#003A63] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 rounded-[1px] cursor-pointer"
                  >
                    <span>{isFa ? 'استعلام ظرفیت کریدور و قیمت‌گذاری' : 'Request Corridor Allocation'}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>

              </div>

            </div>

            {/* World Network Animated Interactive Radar & Corridor Card */}
            <div className="lg:col-span-7">
              <MarketsAnimatedCard
                currentLang={currentLang}
                selectedRegion={selectedRegionObj}
                closingText={t.markets.closingText}
                onInquire={onInquire}
              />
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 05 WHY RSP (5 INSTITUTIONAL PRINCIPLES) ------------------ */}
      <section id="why-rsp" className="py-24 bg-white text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#0A1C2E] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold text-[#004C80]">05</span>
                <span>/ {t.whyUs.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase leading-tight font-sans">
                {t.whyUs.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed pt-2 font-mono">
                {t.whyUs.subtitle}
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#D5DFE8] border-t border-b border-[#D5DFE8]">
              {t.whyUs.principles.map((item, idx) => (
                <div key={item.id} className="py-6 flex items-start gap-6">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#004C80] shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] font-sans">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#F4F7FA] border border-[#D5DFE8] text-[#004C80] rounded-[1px]">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 06 OUR VISION & MISSION ------------------ */}
      <section id="vision-mission" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#D5DFE8] text-[#004C80] text-xs font-mono font-bold uppercase tracking-widest rounded-[1px]">
              <span>06 / {t.visionMission.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A1C2E] uppercase font-sans">
              {isFa ? 'چشم‌انداز و ماموریت راهبردی' : 'Vision & Mission'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card in Deep Midnight Navy */}
            <div className="bg-[#0A1C2E] text-white border border-[#1E293B] rounded-[1px] shadow-sm flex flex-col justify-between overflow-hidden">
              <div className="relative h-44 w-full overflow-hidden border-b border-[#1E293B]">
                <img 
                  src={multimodalImg} 
                  alt="Vision - Global Multimodal Network"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0A1C2E]/90 border border-[#1E293B] px-2.5 py-1 text-[10px] font-mono text-sky-400 font-bold">
                  // STRATEGIC HORIZON
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1">
                <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                  // {t.visionMission.visionTitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans leading-snug">
                  {t.visionMission.visionTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {t.visionMission.visionText}
                </p>
              </div>
              <div className="p-8 pt-4 border-t border-[#1E293B] text-xs font-mono text-[#94A3B8]">
                REFAH SANAT PARDIS • STRATEGIC HORIZON
              </div>
            </div>

            {/* Mission Card in White */}
            <div className="bg-white text-[#0A1C2E] border border-[#D5DFE8] rounded-[1px] shadow-sm flex flex-col justify-between overflow-hidden">
              <div className="relative h-44 w-full overflow-hidden border-b border-[#D5DFE8]">
                <img 
                  src={cargoPortImg} 
                  alt="Mission - Trade Execution Rigor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 border border-[#D5DFE8] px-2.5 py-1 text-[10px] font-mono text-[#004C80] font-bold">
                  // OPERATIONAL EXCELLENCE
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1">
                <div className="text-xs font-mono font-bold text-[#004C80] uppercase tracking-widest">
                  // {t.visionMission.missionTitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans leading-snug">
                  {t.visionMission.missionTitle}
                </h3>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-sans">
                  {t.visionMission.missionText}
                </p>
              </div>
              <div className="p-8 pt-4 border-t border-[#D5DFE8] text-xs font-mono text-[#5C667A]">
                DISCIPLINED EXECUTION • COMPLIANCE RIGOR
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ CLOSING PARTNERSHIP STATEMENT & CTA ------------------ */}
      <section id="partnership" className="py-24 bg-[#0A1C2E] text-white border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#132A42] text-sky-400 text-xs font-mono font-bold uppercase tracking-widest rounded-[1px] border border-[#1E293B]">
            <span>{t.finalCta.category}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase max-w-4xl mx-auto font-sans">
            {t.finalCta.tagline}
          </h2>

          <p className="text-base sm:text-xl text-sky-300 font-mono font-bold max-w-2xl mx-auto">
            {t.finalCta.invitation}
          </p>

          <div className="pt-4 font-mono flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="bg-white hover:bg-slate-100 text-[#0A1C2E] px-8 py-4 text-xs font-extrabold uppercase tracking-widest transition-all inline-flex items-center gap-2 rounded-[1px] shadow-md border border-white hover:border-slate-200"
            >
              <span>{t.finalCta.primaryCta}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#004C80]" />
            </a>

            <a
              href="#business"
              onClick={(e) => handleAnchorClick(e, '#business')}
              className="bg-[#132A42] hover:bg-[#1E3A5F] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center rounded-[1px] border border-[#1E293B]"
            >
              <span>{t.finalCta.secondaryCta}</span>
            </a>
          </div>

        </div>
      </section>

      {/* ------------------ 07 CONTACT (COMMERCIAL INQUIRY PORTAL) ------------------ */}
      <section id="contact" className="py-20 bg-[#F4F7FA] text-[#0A1C2E] border-t border-[#D5DFE8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004C80] uppercase tracking-widest">
              <span className="text-3xl font-extrabold">07</span>
              <span>/ {t.contact.badge}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D5DFE8]">
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A1C2E] leading-tight font-sans">
                  {t.contact.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[#004C80] font-bold mt-1">
                  REFAH SANAT PARDIS • INTERNATIONAL COMMERCIAL DESK
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed max-w-md">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Headquarters Address */}
              <div className="p-6 bg-white border border-[#D5DFE8] rounded-[1px] space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#004C80] font-mono text-xs font-bold uppercase">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{t.contact.officeTitle}</span>
                  </div>
                  <p className="text-xs text-[#5C667A] leading-relaxed">
                    {t.contact.officeDesc}
                  </p>
                </div>
                <p className="text-xs font-sans font-bold text-[#0A1C2E] pt-3 border-t border-[#D5DFE8]">
                  {t.contact.address}
                </p>
              </div>

              {/* Email Desk */}
              <div className="p-6 bg-white border border-[#D5DFE8] rounded-[1px] space-y-3 shadow-sm font-mono text-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#004C80] font-bold uppercase">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>EMAIL DESK</span>
                  </div>
                  <p className="text-xs text-[#5C667A] font-sans">
                    {isFa ? 'پاسخگویی مستقیم به استعلام‌های کالایی و بانکی' : 'Direct response for commodity and banking inquiries'}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D5DFE8]">
                  <p className="text-sm font-bold text-[#0A1C2E]">{t.contact.email}</p>
                </div>
              </div>

              {/* Direct Trading Line */}
              <div className="p-6 bg-white border border-[#D5DFE8] rounded-[1px] space-y-3 shadow-sm font-mono text-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#004C80] font-bold uppercase">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>DIRECT TRADING LINE</span>
                  </div>
                  <p className="text-xs text-[#5C667A] font-sans">
                    {t.contact.hours}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#D5DFE8]">
                  <p className="text-sm font-bold text-[#0A1C2E]">{t.contact.phone}</p>
                </div>
              </div>

            </div>

            {/* Compliance Banner */}
            <div className="p-4 bg-[#0A1C2E] text-slate-300 border border-[#1E293B] rounded-[1px] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono shadow-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-white font-bold text-xs">ISO 28000 & ISO 9001 GOVERNANCE CERTIFIED</span>
              </div>
              <span className="text-sky-400 font-mono text-xs">REFAH SANAT PARDIS • COMMERCIAL DESK</span>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ INSTITUTIONAL FOOTER ------------------ */}
      <footer className="bg-[#0A1C2E] text-[#94A3B8] py-12 border-t border-[#1E293B] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#1E293B]">
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-white border border-white flex items-center justify-center p-1 shrink-0 rounded-[1px]">
                  <Logo className="w-full h-full text-[#004C80]" />
                </div>
                <span className="font-bold text-white text-sm tracking-widest uppercase">
                  {isFa ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-md font-sans">
                {t.footer.description}
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-3">
              <div className="flex items-center gap-6">
                <button onClick={openTerms} className="hover:text-white transition-colors cursor-pointer">
                  &gt; {t.footer.termsTitle}
                </button>
                <button onClick={openPrivacy} className="hover:text-white transition-colors cursor-pointer">
                  &gt; {t.footer.privacyTitle}
                </button>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                © {new Date().getFullYear()} REFAH SANAT PARDIS TRADING CO. // INSTITUTIONAL EDITION
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

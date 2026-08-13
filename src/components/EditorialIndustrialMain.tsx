import React, { useState } from 'react';
import agriGrainImg from '../assets/images/agri_grain_trading_1786647224734.jpg';
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
  ArrowUpRight
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

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
    <div className="bg-[#0E1216] text-[#F4F3EF] font-sans selection:bg-[#B8A06A] selection:text-[#0E1216] min-h-screen transition-colors duration-300">
      
      {/* ------------------ REFINED INSTITUTIONAL NAVIGATION ------------------ */}
      <header className="sticky top-0 z-40 bg-[#0E1216]/95 backdrop-blur-md border-b border-[#222A33] py-3.5 transition-all">
        
        {/* Micro Technical Ticker */}
        <div className="hidden lg:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 mb-2 border-b border-[#1E2630] justify-between text-[10px] font-mono text-[#8C9BAE] uppercase tracking-widest">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#B8A06A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8A06A] animate-pulse" />
              <span>SYS: ONLINE • REF: RSP-INT-2026</span>
            </span>
            <span>|</span>
            <span>TEHRAN HQ • GLOBAL DESK</span>
            <span>|</span>
            <span>[29.9511° N, 52.8800° E]</span>
          </div>
          <div className="flex items-center gap-4">
            <span>REG NO. 493011</span>
            <span>|</span>
            <span>ISO 28000 SECURITY GOVERNANCE</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LEFT: Wordmark + Logo */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="flex items-center gap-3.5 group">
            <div className="w-9 h-9 bg-[#F4F3EF] border border-[#F4F3EF] flex items-center justify-center p-1 shrink-0 transition-transform group-hover:scale-105 rounded-[1px]">
              <Logo className="w-full h-full text-[#0E1216]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#F4F3EF] text-sm sm:text-base tracking-widest uppercase font-mono group-hover:text-[#B8A06A] transition-colors leading-none">
                {isFa ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
              </span>
              <span className="text-[10px] text-[#8C9BAE] font-mono tracking-widest uppercase mt-1">
                {isFa ? 'تجارت • تامین مالی • سرمایه‌گذاری' : 'International Trade & Financial Solutions'}
              </span>
            </div>
          </a>

          {/* CENTER / RIGHT: Navigation Links with Active Indicator */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-widest text-[#8C9BAE]">
            {[
              { id: 'home', label: isFa ? 'صفحه اصلی' : 'HOME' },
              { id: 'company', label: isFa ? 'درباره ما' : 'COMPANY' },
              { id: 'leadership', label: isFa ? 'مدیریت و هیأت مدیره' : 'LEADERSHIP' },
              { id: 'capabilities', label: isFa ? 'قابلیت‌ها' : 'CAPABILITIES' },
              { id: 'industries', label: isFa ? 'صنایع' : 'INDUSTRIES' },
              { id: 'markets', label: isFa ? 'بازارها' : 'MARKETS' },
              { id: 'why-rsp', label: isFa ? 'رویکرد' : 'APPROACH' },
              { id: 'partnership', label: isFa ? 'شراکت' : 'PARTNERSHIP' },
              { id: 'contact', label: isFa ? 'تماس' : 'CONTACT' },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, `#${link.id}`)}
                  className={`relative py-1 transition-colors hover:text-[#F4F3EF] ${
                    isActive ? 'text-[#F4F3EF]' : 'text-[#8C9BAE]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8A06A]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action & Lang Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLanguageChange(isFa ? 'en' : 'fa')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#222A33] bg-[#171C21] hover:bg-[#1E2630] text-[#F4F3EF] transition-colors text-xs font-mono font-bold cursor-pointer rounded-[1px]"
            >
              <Globe className="w-3.5 h-3.5 text-[#B8A06A]" />
              <span>{isFa ? 'ENGLISH' : 'فارسی'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="hidden sm:inline-flex bg-[#B8A06A] hover:bg-[#C9AF78] text-[#0E1216] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all items-center gap-1.5 cursor-pointer rounded-[1px] border border-[#B8A06A]"
            >
              <span>{isFa ? 'درخواست تجاری' : 'COMMERCIAL INQUIRY'}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-[#0E1216]" />
            </a>
          </div>

        </div>
      </header>

      {/* ------------------ HERO SECTION (EDITORIAL INDUSTRIAL) ------------------ */}
      <section id="home" className="relative py-20 lg:py-28 border-b border-[#222A33] bg-[#0E1216]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171C21] border border-[#222A33] text-[#B8A06A] text-xs font-mono font-bold uppercase tracking-widest rounded-[1px]">
                <span className="w-1.5 h-1.5 bg-[#B8A06A]" />
                <span>RSP / INTERNATIONAL TRADE & FINANCIAL SOLUTIONS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F3EF] leading-[1.1] tracking-tight uppercase font-sans">
                {isFa ? (
                  <>اتصال تجارت جهانی<br /><span className="text-[#B8A06A]">با تامین مالی بین‌المللی</span></>
                ) : (
                  <>Connecting Global Trade<br /><span className="text-[#B8A06A]">with Global Finance</span></>
                )}
              </h1>

              <p className="text-sm sm:text-base text-[#8C9BAE] leading-relaxed max-w-2xl">
                {isFa 
                  ? 'شرکت رفاه صنعت پردیس به عنوان یک گروه بازرگانی و تامین مالی بین‌المللی، زمینه‌ساز تسهیل تبادلات تجاری، گشایش اعتبارات اسنادی و تامین پایدار کالاهای اساسی و صنعتی در کریدورهای جهانی است.'
                  : 'Refah Sanat Pardis operates as a premier international trading and financial solutions holding, facilitating cross-border physical commodity streams, trade credit facilities, and industrial supply chain stability.'
                }
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center font-mono">
                <a
                  href="#capabilities"
                  onClick={(e) => handleAnchorClick(e, '#capabilities')}
                  className="bg-[#B8A06A] hover:bg-[#C9AF78] text-[#0E1216] px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 rounded-[1px] border border-[#B8A06A]"
                >
                  <span>{isFa ? 'بررسی قابلیت‌ها' : 'EXPLORE CAPABILITIES'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#0E1216]" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="bg-[#171C21] hover:bg-[#1E2630] text-[#F4F3EF] px-7 py-3.5 text-xs font-bold uppercase tracking-widest border border-[#222A33] transition-all inline-flex items-center rounded-[1px]"
                >
                  <span>{isFa ? 'درخواست تجاری' : 'COMMERCIAL INQUIRY'}</span>
                </a>
              </div>

              {/* Key Technical Metric Strip */}
              <div className="pt-8 border-t border-[#1E2630] grid grid-cols-3 gap-4 font-mono text-xs">
                <div>
                  <div className="text-[10px] text-[#8C9BAE] uppercase mb-1">GLOBAL TURNOVER</div>
                  <div className="text-lg font-bold text-[#F4F3EF]">$350M+ USD</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#8C9BAE] uppercase mb-1">TRADE DESKS</div>
                  <div className="text-lg font-bold text-[#B8A06A]">6 CORRIDORS</div>
                </div>
                <div>
                  <div className="text-[10px] text-[#8C9BAE] uppercase mb-1">GOVERNANCE</div>
                  <div className="text-lg font-bold text-[#F4F3EF]">ISO 28000</div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Large Editorial Photography */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#222A33] bg-[#171C21] p-2 shadow-2xl">
                <div className="relative h-96 sm:h-[420px] w-full overflow-hidden bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80" 
                    alt="Maritime Container Terminal"
                    className="w-full h-full object-cover filter brightness-75 contrast-125 saturate-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1216] via-transparent to-transparent" />

                  {/* Micro Metadata Overlay */}
                  <div className="absolute top-4 left-4 bg-[#0E1216]/90 border border-[#222A33] px-3 py-1.5 text-[10px] font-mono text-[#F4F3EF]">
                    <span className="text-[#B8A06A] font-bold">RSP / TRD-01</span> • MARITIME LOGISTICS
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#171C21]/95 border border-[#222A33] p-4 text-xs font-mono">
                    <div className="flex items-center justify-between text-[#F4F3EF] font-bold mb-1">
                      <span className="text-[#B8A06A]">GLOBAL MARKETS</span>
                      <span>TRADE / FINANCE</span>
                    </div>
                    <p className="text-[11px] text-[#8C9BAE] font-sans">
                      {isFa 
                        ? 'تامین مستقیم نهاده‌های انرژی، فلزات و محصولات پتروشیمی با اعتبارات اسنادی' 
                        : 'Structured physical commodity trade backed by LC issuance & multilateral clearing.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 01 COMPANY SECTION (EDITORIAL TWO-COLUMN) ------------------ */}
      <section id="company" className="py-24 bg-[#E9E7E1] text-[#1A1D21] border-b border-[#D8D6D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Large Editorial Number & Headline */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#1A1D21] uppercase tracking-widest">
                <span className="text-3xl sm:text-5xl font-extrabold text-[#B8A06A]">01</span>
                <span>/ {isFa ? 'درباره رفاه صنعت پردیس' : 'WHO WE ARE'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1D21] leading-tight font-sans">
                {isFa 
                  ? 'ایجاد ارتباطات تجاری پایدار میان بازارها، صنایع و اکوسیستم‌های مالی بین‌المللی.'
                  : 'Building commercial connections across markets, industries, and financial ecosystems.'
                }
              </h2>
            </div>

            {/* RIGHT COLUMN: Detailed Description & Capabilities Divider List */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-sm sm:text-base text-[#2C3138] leading-relaxed">
                <p className="font-semibold text-[#1A1D21]">
                  {isFa 
                    ? 'گروه بازرگانی رفاه صنعت پردیس با تکیه بر بیش از یک دهه تجربه مستمر در بازارهای بین‌المللی، به عنوان بازوی اجرایی و تجاری شرکت‌های تولیدی و صنعتی فعالیت می‌نماید.'
                    : 'Refah Sanat Pardis serves as an integrated commercial desk and trade finance partner for major industrial enterprises, international buyers, and global commodity producers.'
                  }
                </p>
                <p>
                  {isFa
                    ? 'تمرکز ما بر گشایش اعتبارات، مدیریت ریسک نوسانات قیمت، تامین مواد اولیه فلزی و پتروشیمی و برقراری زنجیره‌های تامین منعطف در حوزه خاورمیانه، آسیا و اروپا است.'
                    : 'Our operational scope bridges physical sourcing, custom trade credit structuring, risk hedging, and logistics management across Middle Eastern, Asian, and European trade corridors.'
                  }
                </p>
              </div>

              {/* Horizontal Capabilities Row with Thin Vertical Dividers */}
              <div className="pt-6 border-t border-[#C2C0B8] grid grid-cols-2 sm:grid-cols-5 gap-4 font-mono text-xs text-[#1A1D21] font-bold uppercase tracking-wider">
                <div className="pr-2 border-r border-[#C2C0B8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#B8A06A] mb-1">01.01</div>
                  <span>TRADE</span>
                </div>
                <div className="pr-2 border-r border-[#C2C0B8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#B8A06A] mb-1">01.02</div>
                  <span>FINANCE</span>
                </div>
                <div className="pr-2 border-r border-[#C2C0B8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#B8A06A] mb-1">01.03</div>
                  <span>COMMODITIES</span>
                </div>
                <div className="pr-2 border-r border-[#C2C0B8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#B8A06A] mb-1">01.04</div>
                  <span>SUPPLY CHAIN</span>
                </div>
                <div>
                  <div className="text-[10px] text-[#B8A06A] mb-1">01.05</div>
                  <span>INVESTMENT</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 02 LEADERSHIP & GOVERNANCE SECTION ------------------ */}
      <section id="leadership" className="py-24 bg-[#0E1216] text-[#F4F3EF] border-b border-[#222A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222A33] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#B8A06A] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">02</span>
                <span>/ {isFa ? 'مدیریت ارشد و هیأت مدیره' : 'LEADERSHIP & GOVERNANCE'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F4F3EF] uppercase font-sans">
                {isFa ? 'معرفی مدیرعامل و هیأت مدیره' : 'Executive Leadership & Board of Directors'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#8C9BAE] max-w-md leading-relaxed">
              {isFa 
                ? 'هدایت راهبردی گروه رفاه صنعت پردیس با تکیه بر دهه‌ها تجربه تخصصی در مدیریت تجارت بین‌الملل، تامین مالی ساختاریافته و حاکمیت نهادی.' 
                : 'Guiding RSP with decades of expertise across international trade execution, structured finance, and institutional governance.'}
            </p>
          </div>

          {/* Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                id: 'm1',
                badgeNum: '01',
                nameFa: 'محمدرضا پردیسی',
                nameEn: 'Mohammad Reza Pardisi',
                roleFa: 'رئیس هیأت مدیره و مدیرعامل',
                roleEn: 'Chairman & Managing Director',
                bioFa: 'بیش از ۲۵ سال سابقه مدیریت ارشد در میزهای تجارت کالایی بین‌المللی و ساختاردهی ابزارهای اعتباری و مالی در خاورمیانه و آسیا.',
                bioEn: '25+ years directing international commodity trading desks and cross-border trade finance structures in Middle Eastern & Asian markets.',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
                isCeo: true,
              },
              {
                id: 'm2',
                badgeNum: '02',
                nameFa: 'علی‌اکبر صنعتی',
                nameEn: 'Ali Akbar Sanati',
                roleFa: 'مدیر عملیات تجاری و بازرگانی بین‌الملل',
                roleEn: 'Director of Commercial Operations',
                bioFa: 'متخصص بازرگانی کالاهای اساسی، زنجیره تامین فولاد و فلزات، و قراردادهای بین‌المللی حمل‌ونقل دریایی.',
                bioEn: 'Expert in bulk industrial commodities, steel supply chains, and international maritime logistics contracts.',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
                isCeo: false,
              },
              {
                id: 'm3',
                badgeNum: '03',
                nameFa: 'مریم‌سادات حسینی',
                nameEn: 'Maryam Sadat Hosseini',
                roleFa: 'مدیر ارشد مالی و متخصص تامین مالی تجارت',
                roleEn: 'Chief Financial Officer & Trade Finance Specialist',
                bioFa: 'با سابقه مدیریت بانکداری شرکتی و تخصصی در اعتبارات اسنادی (L/C)، SBLC و مکانیزم‌های تسویه ارزی چندگانه.',
                bioEn: 'Former senior trade banker specializing in L/C, SBLC, structured supply chain credit, and Multi-FX settlement mechanisms.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
                isCeo: false,
              },
              {
                id: 'm4',
                badgeNum: '04',
                nameFa: 'دکتر حمیدرضا کریمی',
                nameEn: 'Dr. Hamid Reza Karimi',
                roleFa: 'مدیر بازارهای بین‌الملل و سرمایه‌گذاری',
                roleEn: 'Head of Global Markets & Investment',
                bioFa: 'متخصص توسعه کریدورهای راهبردی تجاری، ارزیابی ریسک طرف‌های معامله و مشارکت‌های مؤسساتی بین‌المللی.',
                bioEn: 'Specialist in strategic corridor expansion, counterparty risk management, and institutional joint ventures.',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
                isCeo: false,
              },
            ].map((member) => (
              <div 
                key={member.id}
                className={`bg-[#171C21] border transition-all duration-300 flex flex-col justify-between group rounded-[1px] overflow-hidden ${
                  member.isCeo ? 'border-[#B8A06A]' : 'border-[#222A33] hover:border-[#B8A06A]'
                }`}
              >
                <div>
                  {/* Executive Photo Container */}
                  <div className="relative h-64 w-full bg-[#0E1216] overflow-hidden border-b border-[#222A33]">
                    <img 
                      src={member.image} 
                      alt={isFa ? member.nameFa : member.nameEn}
                      className="w-full h-full object-cover filter brightness-90 contrast-110 saturate-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0E1216]/90 border border-[#222A33] text-[#B8A06A] font-mono text-[10px] font-bold px-2.5 py-1 rounded-[1px] flex items-center gap-1.5 shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B8A06A]" />
                      <span>{member.isCeo ? 'MANAGING DIRECTOR' : `MEMBER ${member.badgeNum}`}</span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-[#B8A06A] uppercase tracking-wider">
                      {isFa ? member.roleFa : member.roleEn}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#F4F3EF] font-sans group-hover:text-[#B8A06A] transition-colors">
                      {isFa ? member.nameFa : member.nameEn}
                    </h3>
                    <p className="text-xs text-[#8C9BAE] leading-relaxed font-sans pt-2 border-t border-[#222A33]">
                      {isFa ? member.bioFa : member.bioEn}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-[#0E1216] border-t border-[#222A33] flex items-center justify-between text-[10px] font-mono text-[#8C9BAE]">
                  <span className="flex items-center gap-1 font-bold text-[#B8A06A]">
                    <Award className="w-3.5 h-3.5" />
                    <span>RSP EXECUTIVE BOARD</span>
                  </span>
                  <span className="text-[#F4F3EF] font-bold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Governance Bar */}
          <div className="p-5 bg-[#171C21] border border-[#222A33] rounded-[1px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#8C9BAE]">
              <span className="w-2 h-2 rounded-full bg-[#B8A06A] shrink-0" />
              <span className="font-sans text-[#F4F3EF]">
                {isFa 
                  ? 'راهبری شرکتی و هیأت مدیره رفاه صنعت پردیس متعهد به انضباط مالی، شفافیت معامله‌ها و ارتقای حاکمیت نهادی است.' 
                  : 'Refah Sanat Pardis corporate governance adheres strictly to transactional transparency, counterparty rigor, and institutional discipline.'}
              </span>
            </div>
            <span className="text-[#B8A06A] font-bold shrink-0 font-mono">
              ISO 9001 / ISO 28000 GOVERNANCE COMPLIANT
            </span>
          </div>

        </div>
      </section>

      {/* ------------------ 03 CAPABILITIES (STRUCTURED HORIZONTAL ROWS) ------------------ */}
      <section id="capabilities" className="py-24 bg-[#0E1216] text-[#F4F3EF] border-b border-[#222A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222A33] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#B8A06A] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">02</span>
                <span>/ {isFa ? 'قابلیت‌های بازرگانی و مالی' : 'CAPABILITIES'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F4F3EF] uppercase">
                {isFa ? 'خدمات ساختاریافته تجارت و تامین مالی' : 'Structured Trading & Financial Services'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#8C9BAE] max-w-md">
              {isFa ? 'راهکارهای تجاری یکپارچه برای زنجیره‌های تامین بین‌المللی' : 'Integrated solution sets powering cross-border commercial execution'}
            </p>
          </div>

          {/* Horizontal Rows Capabilities List */}
          <div className="divide-y divide-[#222A33] border-t border-b border-[#222A33]">
            {[
              {
                num: '01',
                titleEn: 'INTERNATIONAL TRADING',
                titleFa: 'تجارت و بازرگانی بین‌المللی',
                descEn: 'Cross-border sourcing, procurement, and physical commercial transactions for industrial commodities.',
                descFa: 'تامین، خرید و مبادلات تجاری فرامری کالاها و نهاده‌های خام صنعتی در بازارهای هدف.',
              },
              {
                num: '02',
                titleEn: 'TRADE FINANCE',
                titleFa: 'تامین مالی تجارت و اعتبار',
                descEn: 'Structured financial solutions, LC facilities, credit instruments, and treasury risk mitigation.',
                descFa: 'ارائه ابزارهای اعتباری، گشایش اعتبارات اسنادی (LC) و مدیریت ریسک‌های تسویه ارزی.',
              },
              {
                num: '03',
                titleEn: 'COMMODITY MARKETS',
                titleFa: 'بازارهای کالایی و نهاده‌ها',
                descEn: 'Direct access to physical energy, petrochemicals, fertilizers, steel, and agricultural flows.',
                descFa: 'دسترسی مستقیم به محموله‌های انرژی، فرآورده‌های نفتی، پتروشیمی، فلزات و نهاده‌های کشاورزی.',
              },
              {
                num: '04',
                titleEn: 'SUPPLY CHAIN & LOGISTICS',
                titleFa: 'زنجیره تامین و لوجستیک دریایی',
                descEn: 'Connecting commercial physical flows with ocean freight, tank terminals, and port logistics.',
                descFa: 'اتصال جریان‌های فیزیکی کالا با حمل‌ونقل فله، مخازن بندرگاهی و ترخیص تخصصی گمرکی.',
              },
              {
                num: '05',
                titleEn: 'STRATEGIC INVESTMENT',
                titleFa: 'سرمایه‌گذاری‌های راهبردی',
                descEn: 'Co-investment in industrial infrastructure, port facilities, and long-term commodity joint ventures.',
                descFa: 'مشارکت و سرمایه‌گذاری راهبردی در زیرساخت‌های صنعتی، ترمینال‌های بندری و پروژه‌های مشترک.',
              },
            ].map((cap) => (
              <div 
                key={cap.num}
                onClick={() => onInquire(`Inquiry: ${cap.titleEn}`)}
                className="group py-8 px-4 sm:px-6 transition-all duration-300 hover:bg-[#171C21] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-transparent hover:border-[#B8A06A]"
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#B8A06A] shrink-0">
                    {cap.num}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F3EF] group-hover:text-[#B8A06A] transition-colors font-sans mb-1">
                      {isFa ? cap.titleFa : cap.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8C9BAE] max-w-2xl leading-relaxed">
                      {isFa ? cap.descFa : cap.descEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C9BAE] group-hover:text-[#F4F3EF] shrink-0">
                  <span>{isFa ? 'مشاهده شرایط' : 'SPECIFICATIONS'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B8A06A] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 03 INDUSTRIES (ASYMMETRICAL VISUAL COMPOSITIONS) ------------------ */}
      <section id="industries" className="py-24 bg-[#E9E7E1] text-[#1A1D21] border-b border-[#D8D6D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#C2C0B8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#1A1D21] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold text-[#B8A06A]">03</span>
                <span>/ {isFa ? 'صنایع و بخش‌های تجاری' : 'INDUSTRIES'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A1D21] uppercase">
                {isFa ? 'سبد کالاهای کلیدی و پوشش صنایع' : 'Key Industry Verticals'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#5C667A] max-w-md">
              {isFa ? 'پوشش تخصصی زنجیره‌های تامین در ۶ بخش کلیدی اقتصاد جهانی' : 'Strategic coverage across high-volume industrial sectors'}
            </p>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Card 1: Energy & Hydrocarbons (Large Featured) */}
            <div className="md:col-span-8 bg-white border border-[#C2C0B8] p-3 flex flex-col justify-between group">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden mb-4 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80" 
                  alt="Energy & Refined Products"
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0E1216] text-[#F4F3EF] font-mono text-[10px] font-bold px-2 py-1">
                  SEC 01 // ENERGY
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-mono font-bold text-[#B8A06A] uppercase mb-1">HS-2709 / HS-2710</div>
                <h3 className="text-xl font-bold text-[#1A1D21] mb-2">
                  {isFa ? 'انرژی و فرآورده‌های هیدروکربوری' : 'ENERGY & HYDROCARBONS'}
                </h3>
                <p className="text-xs text-[#5C667A] leading-relaxed max-w-xl">
                  {isFa 
                    ? 'تجارت نفت خام، فرآورده‌های پالایشی، نفت‌گاز، مازوت و میعانات گازی با تسویه‌های چندارزی.'
                    : 'Crude oil, refined petroleum products, gasoil, fuel oil, and condensates supported by ocean chartering.'}
                </p>
              </div>
            </div>

            {/* Card 2: Metals & Minerals */}
            <div className="md:col-span-4 bg-white border border-[#C2C0B8] p-3 flex flex-col justify-between group">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden mb-4 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" 
                  alt="Metals & Steel"
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0E1216] text-[#F4F3EF] font-mono text-[10px] font-bold px-2 py-1">
                  SEC 02 // METALS
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-mono font-bold text-[#B8A06A] uppercase mb-1">HS-7208 / STEEL</div>
                <h3 className="text-lg font-bold text-[#1A1D21] mb-2">
                  {isFa ? 'فلزات و سنگ‌های معدنی' : 'METALS & MINERALS'}
                </h3>
                <p className="text-xs text-[#5C667A] leading-relaxed">
                  {isFa 
                    ? 'شمش فولادی، میلگرد، کاتد مس، کنسانتره‌های سنگ آهن و مقاطع ساختمانی.'
                    : 'Steel billets, rebar, copper cathodes, iron ore concentrates, and structural steel.'}
                </p>
              </div>
            </div>

            {/* Card 3: Petrochemicals */}
            <div className="md:col-span-4 bg-white border border-[#C2C0B8] p-3 flex flex-col justify-between group">
              <div className="relative h-64 w-full overflow-hidden mb-4 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" 
                  alt="Petrochemicals"
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0E1216] text-[#F4F3EF] font-mono text-[10px] font-bold px-2 py-1">
                  SEC 03 // PETROCHEM
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-mono font-bold text-[#B8A06A] uppercase mb-1">HS-3901 / POLYMERS</div>
                <h3 className="text-lg font-bold text-[#1A1D21] mb-2">
                  {isFa ? 'محصولات پتروشیمی' : 'PETROCHEMICALS'}
                </h3>
                <p className="text-xs text-[#5C667A] leading-relaxed">
                  {isFa 
                    ? 'پلیمرها، متانول، آروماتیک‌ها و فرآورده‌های تخصصی پتروشیمی.'
                    : 'Polymers, methanol, aromatics, and chemical feedstocks.'}
                </p>
              </div>
            </div>

            {/* Card 4: Urea & Fertilizers */}
            <div className="md:col-span-4 bg-white border border-[#C2C0B8] p-3 flex flex-col justify-between group">
              <div className="relative h-64 w-full overflow-hidden mb-4 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" 
                  alt="Fertilizers"
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0E1216] text-[#F4F3EF] font-mono text-[10px] font-bold px-2 py-1">
                  SEC 04 // FERTILIZERS
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-mono font-bold text-[#B8A06A] uppercase mb-1">HS-3102 / UREA 46%</div>
                <h3 className="text-lg font-bold text-[#1A1D21] mb-2">
                  {isFa ? 'کودهای شیمیایی و اوره' : 'UREA & FERTILIZERS'}
                </h3>
                <p className="text-xs text-[#5C667A] leading-relaxed">
                  {isFa 
                    ? 'اوره گرانول ۴۶٪، گوگرد پالایشگاهی و کودهای ترکیبی فسفاته.'
                    : 'Granular urea 46%, lump sulfur, and compound phosphate fertilizers.'}
                </p>
              </div>
            </div>

            {/* Card 5: Agriculture & Food */}
            <div className="md:col-span-4 bg-white border border-[#C2C0B8] p-3 flex flex-col justify-between group">
              <div className="relative h-64 w-full overflow-hidden mb-4 bg-slate-900">
                <img 
                  src={agriGrainImg} 
                  alt="Food & Agricultural Commodity Trading"
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#0E1216] text-[#F4F3EF] font-mono text-[10px] font-bold px-2 py-1">
                  SEC 05 // FOOD & AGRI
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-mono font-bold text-[#B8A06A] uppercase mb-1">HS-1001 / GRAIN & SEEDS</div>
                <h3 className="text-lg font-bold text-[#1A1D21] mb-2 font-sans">
                  {isFa ? 'بازرگانی در حوزه صنایع غذایی' : 'FOOD & AGRICULTURAL PRODUCTS'}
                </h3>
                <p className="text-xs text-[#5C667A] leading-relaxed">
                  {isFa 
                    ? 'تجارت بین‌المللی کالاهای کشاورزی، غلات، دانه‌های روغنی و برنج اساسی.'
                    : 'International trade in agricultural commodities, grain streams, oilseeds, and essential staple rice.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 04 GLOBAL MARKETS (SOPHISTICATED MAP & ROUTE NETWORK) ------------------ */}
      <section id="markets" className="py-24 bg-[#0E1216] text-[#F4F3EF] border-b border-[#222A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#222A33] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#B8A06A] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold">04</span>
                <span>/ {isFa ? 'شبکه کریدورهای بین‌المللی' : 'GLOBAL MARKETS'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F4F3EF] uppercase">
                {isFa ? 'حضور راهبردی در بازارهای هدف' : 'Global Reach & Trade Networks'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#8C9BAE] max-w-md">
              {isFa ? 'اتصال خریداران، فروشندگان و نهادهای مالی در ۶ منطقه جغرافیایی' : 'Connecting buyers, suppliers, and financial institutions across regions'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Region Selector */}
            <div className="lg:col-span-5 space-y-2 font-mono">
              {t.markets.regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegion(reg.id)}
                  className={`w-full p-4 text-left rtl:text-right transition-all flex items-center justify-between border cursor-pointer rounded-[1px] ${
                    activeRegion === reg.id
                      ? 'bg-[#171C21] text-[#F4F3EF] border-[#B8A06A]'
                      : 'bg-[#0E1216] text-[#8C9BAE] border-[#222A33] hover:bg-[#171C21]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#B8A06A]">[{reg.code}]</span>
                    <span className="text-sm font-bold font-sans">{reg.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 rtl:rotate-180 ${activeRegion === reg.id ? 'text-[#B8A06A]' : 'text-[#8C9BAE]'}`} />
                </button>
              ))}
            </div>

            {/* World Network Information Card */}
            <div className="lg:col-span-7 bg-[#171C21] border border-[#222A33] p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#222A33] font-mono text-xs">
                <span className="text-[#B8A06A] font-bold">CORRIDOR SPECIFICATIONS // {selectedRegionObj.code}</span>
                <span className="text-[#8C9BAE]">STATUS: ACTIVE</span>
              </div>

              <h3 className="text-2xl font-bold text-[#F4F3EF]">
                {selectedRegionObj.name}
              </h3>

              <p className="text-sm text-[#8C9BAE] leading-relaxed">
                {selectedRegionObj.desc}
              </p>

              <div className="pt-4 border-t border-[#222A33] grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 bg-[#0E1216] border border-[#222A33]">
                  <div className="text-[10px] text-[#8C9BAE] uppercase mb-1">SETTLEMENT INSTRUMENTS</div>
                  <div className="text-[#F4F3EF] font-bold">LC / CAD / SBLC</div>
                </div>

                <div className="p-3 bg-[#0E1216] border border-[#222A33]">
                  <div className="text-[10px] text-[#8C9BAE] uppercase mb-1">CLEARING CURRENCIES</div>
                  <div className="text-[#B8A06A] font-bold">USD / EUR / AED / CNY</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 05 WHY RSP (STRUCTURED NUMBERED LIST) ------------------ */}
      <section id="why-rsp" className="py-24 bg-[#E9E7E1] text-[#1A1D21] border-b border-[#D8D6D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#1A1D21] uppercase tracking-widest mb-2">
                <span className="text-3xl font-extrabold text-[#B8A06A]">05</span>
                <span>/ {isFa ? 'مزیت‌های رقابتی' : 'WHY RSP'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1D21] uppercase leading-none font-sans">
                WHY<br />REFAH<br />SANAT<br /><span className="text-[#B8A06A]">PARDIS</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#5C667A] leading-relaxed pt-4 font-mono">
                {isFa 
                  ? 'اصول کلیدی حاکم بر کلیه قراردادهای تجاری و تعهدات اعتباری گروه' 
                  : 'Institutional principles driving contract execution & risk management.'}
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#C2C0B8] border-t border-b border-[#C2C0B8]">
              {[
                {
                  num: '01',
                  titleEn: 'RELIABILITY & COMPLIANCE',
                  titleFa: 'اعتمادپذیری و انطباق قانونی',
                  descEn: 'Uncompromising adherence to international commercial contracts and strict ISO 28000 compliance protocols.',
                  descFa: 'تعهد کامل به مفاد قراردادهای بین‌المللی و اجرای استانداردهای حاکمیتی ISO 28000.',
                },
                {
                  num: '02',
                  titleEn: 'COMMERCIAL EXPERTISE',
                  titleFa: 'تخصص عمیق در بازرگانی فیزیکی',
                  descEn: 'Deep domain knowledge in physical sourcing, quality inspection, and custom logistics management.',
                  descFa: 'تسلط تخصصی بر زنجیره تامین فیزیکی کالا، بازرسی کیفی استاندارد و راهبری لوجستیک.',
                },
                {
                  num: '03',
                  titleEn: 'FINANCIAL CAPABILITY',
                  titleFa: 'توانمندی در تامین مالی اعتباری',
                  descEn: 'Robust financial desk facilitating multi-currency clearing, credit facilities, and treasury risk hedging.',
                  descFa: 'توان ساختاریافته در گشایش اعتبارات اسنادی، ابزارهای اعتباری و پوشش ریسک‌های تسویه ارزی.',
                },
                {
                  num: '04',
                  titleEn: 'INTERNATIONAL NETWORK',
                  titleFa: 'شبکه گسترده کریدورهای بین‌المللی',
                  descEn: 'Established commercial presence and trusted partnerships across key global trade hubs.',
                  descFa: 'ارتباطات مستمر و شبکه قوی تجاری در مرکزهای اصلی دادوستد کالا در خاورمیانه، آسیا و اروپا.',
                },
                {
                  num: '05',
                  titleEn: 'LONG-TERM RELATIONSHIPS',
                  titleFa: 'شراکت‌های پایدار تجاری',
                  descEn: 'Focusing on strategic, long-term commercial co-operation rather than isolated transactional trades.',
                  descFa: 'تمرکز بر ایجاد ارزش افزوده متقابل و توسعه تعاملات بلندمدت با شرکای تجاری.',
                },
              ].map((item) => (
                <div key={item.num} className="py-6 flex items-start gap-6">
                  <span className="font-mono text-2xl font-extrabold text-[#B8A06A] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1D21] mb-1 font-sans">
                      {isFa ? item.titleFa : item.titleEn}
                    </h3>
                    <p className="text-xs text-[#5C667A] leading-relaxed">
                      {isFa ? item.descFa : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 06 PARTNERSHIP CTA (FULL-WIDTH STATEMENT) ------------------ */}
      <section id="partnership" className="py-24 bg-[#171C21] text-[#F4F3EF] border-b border-[#222A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E1216] border border-[#222A33] text-[#B8A06A] text-xs font-mono font-bold uppercase tracking-widest rounded-[1px]">
            <span>06 / PARTNERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F3EF] tracking-tight uppercase max-w-4xl mx-auto font-sans">
            {isFa 
              ? 'توسعه ارتباطات پایدار تجاری و تعاملات ساختاریافته' 
              : 'BUILDING LONG-TERM COMMERCIAL RELATIONSHIPS'}
          </h2>

          <p className="text-sm sm:text-base text-[#8C9BAE] max-w-2xl mx-auto leading-relaxed">
            {isFa 
              ? 'گروه رفاه صنعت پردیس پذیرای توسعه تعاملات تجاری با خریداران، تامین‌کنندگان، نهادهای مالی و شرکای راهبردی در سراسر بازارهای جهانی است.' 
              : 'We welcome collaboration with trusted buyers, sellers, suppliers, financial institutions, and strategic partners across global markets.'}
          </p>

          <div className="pt-4 font-mono">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="bg-[#B8A06A] hover:bg-[#C9AF78] text-[#0E1216] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 rounded-[1px] border border-[#B8A06A]"
            >
              <span>{isFa ? 'شروع گفتگو و ارسال درخواست' : 'START A CONVERSATION'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#0E1216]" />
            </a>
          </div>

        </div>
      </section>

      {/* ------------------ 07 CONTACT (INSTITUTIONAL INQUIRY PORTAL) ------------------ */}
      <section id="contact" className="py-20 bg-[#0E1216] text-[#F4F3EF] border-t border-[#222A33]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#B8A06A] uppercase tracking-widest">
              <span className="text-3xl font-extrabold">07</span>
              <span>/ {isFa ? 'درگاه ارتباط تجاری' : 'CONTACT'}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#222A33]">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F4F3EF] leading-tight font-sans">
                {isFa ? (
                  <>برقراری تعامل <span className="text-[#B8A06A]">تجاری</span></>
                ) : (
                  <>Let's Build the <span className="text-[#B8A06A]">Next Commercial Connection</span></>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-[#8C9BAE] leading-relaxed max-w-md">
                {isFa 
                  ? 'جهت ارتباط با مدیریت بازرگانی، استعلام شرایط گشایش اعتبار یا پیشنهاد شراکت راهبردی از طریق راه‌های ارتباطی زیر با ما در تماس باشید.'
                  : 'Get in touch with our commercial desk for physical commodity procurement, LC facilities, or strategic joint ventures.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#8C9BAE]">
              <div className="p-6 bg-[#171C21] border border-[#222A33] rounded-[1px] space-y-2.5">
                <div className="flex items-center gap-2 text-[#B8A06A] font-bold">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'نشانی مرکزی' : 'HEADQUARTERS'}</span>
                </div>
                <p className="text-[#F4F3EF] text-xs font-sans leading-relaxed">{t.contact.address}</p>
              </div>

              <div className="p-6 bg-[#171C21] border border-[#222A33] rounded-[1px] space-y-2.5">
                <div className="flex items-center gap-2 text-[#B8A06A] font-bold">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'پست الکترونیک' : 'EMAIL DESK'}</span>
                </div>
                <p className="text-[#F4F3EF] text-xs font-mono">{t.contact.email}</p>
              </div>

              <div className="p-6 bg-[#171C21] border border-[#222A33] rounded-[1px] space-y-2.5">
                <div className="flex items-center gap-2 text-[#B8A06A] font-bold">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'تلفن تماس' : 'DIRECT LINE'}</span>
                </div>
                <p className="text-[#F4F3EF] text-xs font-mono">{t.contact.phone}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#8C9BAE] border-t border-[#222A33]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8A06A] shrink-0" />
                <span>ISO 28000 SECURITY & GOVERNANCE COMPLIANT</span>
              </div>
              <span className="text-[10px] text-[#B8A06A] font-bold">REFAH SANAT PARDIS TRADING DESK</span>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ INSTITUTIONAL FOOTER ------------------ */}
      <footer className="bg-[#0A0D10] text-[#8C9BAE] py-12 border-t border-[#222A33] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#222A33]">
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-[#F4F3EF] border border-[#F4F3EF] flex items-center justify-center p-1 shrink-0 rounded-[1px]">
                  <Logo className="w-full h-full text-[#0E1216]" />
                </div>
                <span className="font-bold text-[#F4F3EF] text-sm tracking-widest uppercase">
                  {isFa ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
                </span>
              </div>
              <p className="text-xs text-[#8C9BAE] leading-relaxed max-w-md font-sans">
                {t.footer.description}
              </p>
            </div>

            <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-3">
              <div className="flex items-center gap-6">
                <button onClick={openTerms} className="hover:text-[#B8A06A] transition-colors cursor-pointer">
                  &gt; {t.footer.termsTitle}
                </button>
                <button onClick={openPrivacy} className="hover:text-[#B8A06A] transition-colors cursor-pointer">
                  &gt; {t.footer.privacyTitle}
                </button>
              </div>
              <div className="text-[11px] text-[#8C9BAE]">
                © {new Date().getFullYear()} REFAH SANAT PARDIS TRADING CO. // EDITORIAL INDUSTRIAL EDITION
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

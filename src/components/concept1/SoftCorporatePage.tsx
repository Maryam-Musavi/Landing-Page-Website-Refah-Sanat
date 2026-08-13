import React, { useState } from 'react';
import agriGrainImg from '../../assets/images/agri_grain_trading_1786647224734.jpg';
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
  ArrowUpRight,
  FileText,
  Lock
} from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../data/translations';
import { Logo } from '../Logo';

interface SoftCorporatePageProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onInquire: (contextNote?: string) => void;
  openTerms: () => void;
  openPrivacy: () => void;
}

export const SoftCorporatePage: React.FC<SoftCorporatePageProps> = ({
  currentLang,
  onLanguageChange,
  onInquire,
  openTerms,
  openPrivacy,
}) => {
  const t = translations[currentLang];
  const [activeRegion, setActiveRegion] = useState<string>('me');
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
      setRefCode(`RSP-SCM-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
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
    <div className="bg-[#F4F7FA] text-[#0A1C2E] font-sans selection:bg-[#004880] selection:text-white min-h-screen transition-colors duration-300">
      
      {/* ------------------ SOFT CORPORATE NAVIGATION HEADER ------------------ */}
      <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D5DFE8] py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Corporate Wordmark */}
          <a href="#home" onClick={(e) => handleAnchorClick(e, '#home')} className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 bg-[#FFFFFF] border border-[#D5DFE8] flex items-center justify-center p-1 shrink-0 transition-transform group-hover:scale-105 rounded-[2px] shadow-xs">
              <Logo className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[#0A1C2E] text-sm sm:text-base tracking-widest uppercase font-mono group-hover:text-[#004880] transition-colors leading-none">
                {isFa ? 'شرکت بازرگانی رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
              </span>
              <span className="text-[10px] text-[#4A5868] font-mono tracking-widest uppercase mt-1">
                {isFa ? 'تجارت • تامین مالی • سرمایه‌گذاری' : 'International Trade & Financial Solutions'}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-bold uppercase tracking-wider text-[#4A5868]">
            {[
              { id: 'home', label: isFa ? 'صفحه اصلی' : 'HOME' },
              { id: 'company', label: isFa ? 'درباره شرکت' : 'COMPANY' },
              { id: 'leadership', label: isFa ? 'مدیریت و هیأت مدیره' : 'LEADERSHIP' },
              { id: 'capabilities', label: isFa ? 'قابلیت‌ها' : 'CAPABILITIES' },
              { id: 'industries', label: isFa ? 'صنایع' : 'INDUSTRIES' },
              { id: 'markets', label: isFa ? 'بازارها' : 'MARKETS' },
              { id: 'why-rsp', label: isFa ? 'اعتبار نهادی' : 'WHY RSP' },
              { id: 'partnership', label: isFa ? 'شراکت' : 'PARTNERSHIP' },
              { id: 'contact', label: isFa ? 'تماس' : 'CONTACT' },
            ].map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleAnchorClick(e, `#${link.id}`)}
                  className={`relative py-1 transition-colors hover:text-[#004880] ${
                    isActive ? 'text-[#004880]' : 'text-[#4A5868]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#004880]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action & Language Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onLanguageChange(isFa ? 'en' : 'fa')}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-[#D5DFE8] bg-[#FFFFFF] hover:bg-[#EAF0F6] text-[#0A1C2E] transition-colors text-xs font-mono font-bold cursor-pointer rounded-[2px]"
            >
              <Globe className="w-3.5 h-3.5 text-[#004880]" />
              <span>{isFa ? 'ENGLISH' : 'فارسی'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="hidden sm:inline-flex bg-[#004880] hover:bg-[#00355E] text-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all items-center gap-1.5 cursor-pointer rounded-[2px] border border-[#004880]"
            >
              <span>{isFa ? 'درخواست تجاری' : 'COMMERCIAL INQUIRY'}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180 text-white" />
            </a>
          </div>

        </div>
      </header>

      {/* ------------------ HERO SECTION (SOFT CORPORATE EDITORIAL) ------------------ */}
      <section id="home" className="relative py-20 lg:py-28 border-b border-[#D5DFE8] bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT EDITORIAL COLUMN */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#D5DFE8] text-[#004880] text-xs font-mono font-bold uppercase tracking-widest rounded-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004880]" />
                <span>RSP / INTERNATIONAL TRADE & FINANCIAL SOLUTIONS</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#0A1C2E] leading-[1.12] tracking-tight font-sans">
                {isFa ? (
                  <>اتصال تجارت جهانی<br /><span className="text-[#004880]">با تامین مالی بین‌المللی</span></>
                ) : (
                  <>Connecting Global Trade<br /><span className="text-[#004880]">with Global Finance</span></>
                )}
              </h1>

              <p className="text-sm sm:text-base text-[#4A5868] leading-relaxed max-w-2xl font-sans">
                {isFa 
                  ? 'شرکت بازرگانی رفاه صنعت پردیس به عنوان یک مجموعه بین‌المللی بازرگانی و راهکارهای مالی، زمینه‌ساز تسهیل تبادلات تجاری، گشایش اعتبارات اسنادی و تامین پایدار کالاهای اساسی و صنعتی در کریدورهای جهانی است.'
                  : 'Refah Sanat Pardis operates as an international trading and financial solutions holding, facilitating cross-border physical commodity streams, trade credit facilities, and industrial supply chain stability.'
                }
              </p>

              {/* Micro Corporate Detail Strip */}
              <div className="py-2 border-y border-[#D5DFE8] flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-mono text-[#4A5868] font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-[#0A1C2E]">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>TRADE</span>
                </span>
                <span className="text-[#D5DFE8]">•</span>
                <span className="flex items-center gap-1.5 text-[#0A1C2E]">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>FINANCE</span>
                </span>
                <span className="text-[#D5DFE8]">•</span>
                <span className="flex items-center gap-1.5 text-[#0A1C2E]">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>INVESTMENT</span>
                </span>
                <span className="hidden sm:inline text-[#D5DFE8]">•</span>
                <span className="hidden sm:inline text-[#4A5868]">ISO 28000 CERTIFIED</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4 items-center font-mono">
                <a
                  href="#capabilities"
                  onClick={(e) => handleAnchorClick(e, '#capabilities')}
                  className="bg-[#004880] hover:bg-[#00355E] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 rounded-[2px] border border-[#004880]"
                >
                  <span>{isFa ? 'بررسی قابلیت‌ها' : 'EXPLORE CAPABILITIES'}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180 text-white" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="bg-[#FFFFFF] hover:bg-[#EAF0F6] text-[#0A1C2E] px-7 py-3.5 text-xs font-bold uppercase tracking-widest border border-[#0A1C2E] transition-all inline-flex items-center rounded-[2px]"
                >
                  <span>{isFa ? 'درخواست تجاری' : 'COMMERCIAL INQUIRY'}</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Bright Industrial Photography Block */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#D5DFE8] bg-[#FFFFFF] p-2 shadow-sm rounded-[2px]">
                <div className="relative h-96 sm:h-[420px] w-full overflow-hidden bg-[#EAF0F6]">
                  <img 
                    src="/images/hero-port.jpg" 
                    alt="International Maritime Logistics Port"
                    className="w-full h-full object-cover filter brightness-95 contrast-105 saturate-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C2E]/40 via-transparent to-transparent" />

                  {/* Micro Metadata Caption */}
                  <div className="absolute top-4 left-4 bg-[#FFFFFF]/95 border border-[#D5DFE8] px-3 py-1.5 text-[10px] font-mono text-[#0A1C2E] font-bold">
                    <span className="text-[#004880]">MARITIME DESK</span> • GLOBAL COMMODITY LOGISTICS
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 border border-[#D5DFE8] p-4 text-xs font-mono">
                    <div className="flex items-center justify-between text-[#0A1C2E] font-bold mb-1">
                      <span className="text-[#004880]">CROSS-BORDER TRADE</span>
                      <span>LC / SBLC</span>
                    </div>
                    <p className="text-[11px] text-[#4A5868] font-sans">
                      {isFa 
                        ? 'تامین مستقیم نهاده‌های انرژی، فلزات و محصولات پتروشیمی با اعتبارات اسنادی' 
                        : 'Structured physical commodity flows backed by multilateral LC issuance.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Key Metrics Strip */}
          <div className="mt-16 pt-8 border-t border-[#D5DFE8] grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-4 bg-[#FFFFFF] border border-[#D5DFE8] rounded-[2px]">
              <div className="text-[10px] text-[#4A5868] uppercase mb-1">ANNUAL VOLUME</div>
              <div className="text-xl font-bold text-[#0A1C2E]">$350M+ USD</div>
              <div className="text-[10px] text-[#004880] mt-1 font-semibold">Physical & Financial</div>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#D5DFE8] rounded-[2px]">
              <div className="text-[10px] text-[#4A5868] uppercase mb-1">GLOBAL CORRIDORS</div>
              <div className="text-xl font-bold text-[#0A1C2E]">6 Key Regions</div>
              <div className="text-[10px] text-[#004880] mt-1 font-semibold">ME, CA, SA, EA, AF, EU</div>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#D5DFE8] rounded-[2px]">
              <div className="text-[10px] text-[#4A5868] uppercase mb-1">REGISTRATION</div>
              <div className="text-xl font-bold text-[#0A1C2E]">REG NO. 493011</div>
              <div className="text-[10px] text-[#004880] mt-1 font-semibold">Verified Legal Entity</div>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#D5DFE8] rounded-[2px]">
              <div className="text-[10px] text-[#4A5868] uppercase mb-1">GOVERNANCE</div>
              <div className="text-xl font-bold text-[#0A1C2E]">ISO 28000</div>
              <div className="text-[10px] text-[#004880] mt-1 font-semibold">Security & Compliance</div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ 01 COMPANY SECTION (WHO WE ARE) ------------------ */}
      <section id="company" className="py-24 bg-[#FFFFFF] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Section Badge & Large Editorial Statement */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#0A1C2E] uppercase tracking-widest">
                <span className="text-2xl sm:text-4xl font-extrabold text-[#004880]">01</span>
                <span>/ {isFa ? 'درباره شرکت' : 'WHO WE ARE'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium text-[#0A1C2E] leading-tight font-sans">
                {isFa 
                  ? 'اتصال پایدار کسب‌وکارها، بازارها و راهکارهای مالی در سراسر مرزهای بین‌المللی.'
                  : 'Connecting businesses, markets and financial solutions across borders.'
                }
              </h2>
            </div>

            {/* RIGHT COLUMN: Institutional Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4 text-sm sm:text-base text-[#4A5868] leading-relaxed">
                <p className="font-semibold text-[#0A1C2E]">
                  {isFa 
                    ? 'گروه بازرگانی رفاه صنعت پردیس به عنوان یک هلدینگ تجاری و مالی، زمینه‌ساز تعاملات ساختاریافته فیزیکی و اعتباری میان تولیدکنندگان، خریداران بین‌المللی و موسسات مالی است.'
                    : 'Refah Sanat Pardis serves as an integrated commercial desk and trade finance partner for major industrial enterprises, international buyers, and global commodity producers.'
                  }
                </p>
                <p>
                  {isFa
                    ? 'تمرکز ما بر گشایش اعتبارات اسنادی، مدیریت ریسک تسویه، تامین مواد اولیه فلزی، پتروشیمی، کودهای شیمیایی و نهاده‌های کشاورزی در کریدورهای اصلی خاورمیانه، آسیا و اروپا است.'
                    : 'Our operational scope bridges physical sourcing, custom trade credit structuring, risk hedging, and logistics management across Middle Eastern, Asian, and European trade corridors.'
                  }
                </p>
              </div>

              {/* Horizontal Capability Strip (No cards, fine vertical dividers) */}
              <div className="pt-6 border-t border-[#D5DFE8] grid grid-cols-2 sm:grid-cols-5 gap-4 font-mono text-xs text-[#0A1C2E] font-bold uppercase tracking-wider">
                <div className="pr-3 border-r border-[#D5DFE8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#004880] mb-1">01.01</div>
                  <span>TRADE</span>
                </div>
                <div className="pr-3 border-r border-[#D5DFE8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#004880] mb-1">01.02</div>
                  <span>FINANCE</span>
                </div>
                <div className="pr-3 border-r border-[#D5DFE8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#004880] mb-1">01.03</div>
                  <span>COMMODITIES</span>
                </div>
                <div className="pr-3 border-r border-[#D5DFE8] rtl:border-l rtl:border-r-0">
                  <div className="text-[10px] text-[#004880] mb-1">01.04</div>
                  <span>SUPPLY CHAIN</span>
                </div>
                <div>
                  <div className="text-[10px] text-[#004880] mb-1">01.05</div>
                  <span>INVESTMENT</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 02 LEADERSHIP & GOVERNANCE SECTION ------------------ */}
      <section id="leadership" className="py-24 bg-[#FFFFFF] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004880] uppercase tracking-widest mb-2">
                <span className="text-2xl sm:text-4xl font-extrabold">02</span>
                <span>/ {isFa ? 'مدیریت و حاکمیت شرکتی' : 'LEADERSHIP & GOVERNANCE'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1C2E] uppercase font-sans">
                {isFa ? 'معرفی مدیرعامل و هیأت مدیره' : 'Executive Leadership & Board of Directors'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#4A5868] max-w-md leading-relaxed">
              {isFa 
                ? 'هدایت راهبردی گروه رفاه صنعت پردیس با تکیه بر دهه‌ها تجربه تخصصی در تجارت بین‌الملل، تامین مالی و حاکمیت نهادی.' 
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
                image: '/images/executive-1.jpg',
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
                image: '/images/executive-2.jpg',
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
                image: '/images/executive-3.jpg',
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
                image: '/images/executive-4.jpg',
                isCeo: false,
              },
            ].map((member) => (
              <div 
                key={member.id}
                className={`bg-[#F4F7FA] border transition-all duration-300 flex flex-col justify-between group rounded-[2px] overflow-hidden ${
                  member.isCeo ? 'border-[#004880] shadow-xs' : 'border-[#D5DFE8] hover:border-[#004880]'
                }`}
              >
                <div>
                  {/* Executive Photo Container */}
                  <div className="relative h-64 w-full bg-[#EAF0F6] overflow-hidden border-b border-[#D5DFE8]">
                    <img 
                      src={member.image} 
                      alt={isFa ? member.nameFa : member.nameEn}
                      className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0A1C2E] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-[2px] flex items-center gap-1.5 shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#004880]" />
                      <span>{member.isCeo ? 'MANAGING DIRECTOR' : `MEMBER ${member.badgeNum}`}</span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-[#004880] uppercase tracking-wider">
                      {isFa ? member.roleFa : member.roleEn}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] font-sans group-hover:text-[#004880] transition-colors">
                      {isFa ? member.nameFa : member.nameEn}
                    </h3>
                    <p className="text-xs text-[#4A5868] leading-relaxed font-sans pt-2 border-t border-[#D5DFE8]/60">
                      {isFa ? member.bioFa : member.bioEn}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-[#FFFFFF] border-t border-[#D5DFE8] flex items-center justify-between text-[10px] font-mono text-[#4A5868]">
                  <span className="flex items-center gap-1 font-bold text-[#004880]">
                    <Award className="w-3.5 h-3.5" />
                    <span>RSP EXECUTIVE BOARD</span>
                  </span>
                  <span className="text-[#0A1C2E] font-bold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Integrity Notice */}
          <div className="p-5 bg-[#EAF0F6] border border-[#D5DFE8] rounded-[2px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#0A1C2E]">
              <span className="w-2 h-2 rounded-full bg-[#004880] shrink-0" />
              <span className="font-sans">
                {isFa 
                  ? 'راهبری شرکتی و هیأت مدیره رفاه صنعت پردیس متعهد به انضباط مالی، شفافیت معامله‌ها و ارتقای حاکمیت نهادی است.' 
                  : 'Refah Sanat Pardis corporate governance adheres strictly to transactional transparency, counterparty rigor, and institutional discipline.'}
              </span>
            </div>
            <span className="text-[#004880] font-bold shrink-0 font-mono">
              ISO 9001 / ISO 28000 GOVERNANCE COMPLIANT
            </span>
          </div>

        </div>
      </section>

      {/* ------------------ 03 CAPABILITIES (EDITORIAL HORIZONTAL ROWS) ------------------ */}
      <section id="capabilities" className="py-24 bg-[#F4F7FA] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004880] uppercase tracking-widest mb-2">
                <span className="text-2xl sm:text-4xl font-extrabold">02</span>
                <span>/ {isFa ? 'قابلیت‌های اصلی' : 'CORE CAPABILITIES'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1C2E] uppercase">
                {isFa ? 'خدمات ساختاریافته تجارت و تامین مالی' : 'Structured Trading & Financial Services'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#4A5868] max-w-md">
              {isFa ? 'راهکارهای تجاری یکپارچه برای زنجیره‌های تامین بین‌المللی' : 'Integrated solution sets powering cross-border commercial execution'}
            </p>
          </div>

          {/* Clean Editorial Horizontal List Rows */}
          <div className="divide-y divide-[#D5DFE8] border-t border-b border-[#D5DFE8]">
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
                titleEn: 'INVESTMENT & PARTNERSHIPS',
                titleFa: 'سرمایه‌گذاری‌های راهبردی',
                descEn: 'Co-investment in industrial infrastructure, port facilities, and long-term commodity joint ventures.',
                descFa: 'مشارکت و سرمایه‌گذاری راهبردی در زیرساخت‌های صنعتی، ترمینال‌های بندری و پروژه‌های مشترک.',
              },
            ].map((cap) => (
              <div 
                key={cap.num}
                onClick={() => onInquire(`Inquiry: ${cap.titleEn}`)}
                className="group py-8 px-4 sm:px-6 transition-all duration-300 hover:bg-[#EAF0F6] cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-2 border-transparent hover:border-[#004880]"
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#004880] shrink-0">
                    {cap.num}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1">
                      {isFa ? cap.titleFa : cap.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5868] max-w-2xl leading-relaxed">
                      {isFa ? cap.descFa : cap.descEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#4A5868] group-hover:text-[#0A1C2E] shrink-0">
                  <span>{isFa ? 'مشاهده شرایط' : 'SPECIFICATIONS'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------ 03 BUSINESS AREAS / INDUSTRIES (EDITORIAL MULTI-SECTOR GALLERY) ------------------ */}
      <section id="industries" className="py-24 bg-[#FFFFFF] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#D5DFE8] gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004880] uppercase tracking-widest mb-2.5">
                <span className="text-2xl sm:text-4xl font-extrabold">03</span>
                <span>/ {isFa ? 'حوزه‌های فعالیت بازرگانی' : 'BUSINESS AREAS'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1C2E] uppercase font-sans tracking-tight">
                {isFa ? 'تخصص تجاری در بازارهای کلیدی' : 'Commercial Expertise Across Key Markets'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5868] max-w-lg leading-relaxed font-sans">
              {isFa 
                ? 'فعالیت‌های بازرگانی ما شامل بازارهای منتخب صنعتی، کالایی و زنجیره تامین است که تامین‌کنندگان، خریداران و شرکای راهبردی را در سراسر مرزها متصل می‌سازد.' 
                : 'Our commercial activities span selected industrial, commodity and supply-chain markets, connecting reliable suppliers, buyers and strategic partners across borders.'}
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            
            {/* ROW 1: Item 01 (Featured Wide - 8 cols) & Side Stack (Items 02 & 03 - 4 cols) */}
            
            {/* 01: IRON & STEEL (Featured Large) */}
            <div 
              onClick={() => onInquire(`Inquiry: Iron & Steel Desk`)}
              className="md:col-span-8 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-64 sm:h-80 md:h-[340px] w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                <img 
                  src="/images/concept-finance.jpg" 
                  alt="Iron & Steel Trading"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-3 py-1 border border-[#D5DFE8] shadow-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>01 // {isFa ? 'آهن‌آلات و فولاد' : 'IRON & STEEL'}</span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#004880] uppercase tracking-wider">SEC 01 / METALS</span>
                    <span className="text-[10px] font-mono text-[#4A5868] uppercase">HS-7208 / REBAR & BILLETS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-2">
                    {isFa ? 'بازرگانی در حوزه آهن‌آلات و فولاد' : 'IRON & STEEL'}
                  </h3>
                  <div className="w-8 group-hover:w-16 h-[2px] bg-[#004880] transition-all duration-300 mb-3" />
                  <p className="text-xs sm:text-sm text-[#4A5868] leading-relaxed font-sans max-w-2xl">
                    {isFa 
                      ? 'تامین تجاری و دادوستد فرامرزی محصولات فولادی، میلگرد، شمش و مقاطع فلزی.' 
                      : 'Commercial sourcing and cross-border trade across steel products, rebar, billets, and metal markets.'}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D5DFE8]/70 flex items-center justify-between text-xs font-mono font-bold text-[#004880] uppercase">
                  <span>{isFa ? 'استعلام تجاری فولاد' : 'COMMERCIAL INQUIRY'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                </div>
              </div>
            </div>

            {/* Side Stack: 02 PETROCHEMICALS & 03 FOOD & AGRICULTURAL PRODUCTS (4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-6">
              
              {/* 02: PETROCHEMICALS */}
              <div 
                onClick={() => onInquire(`Inquiry: Petrochemicals Desk`)}
                className="bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer flex-1"
              >
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                  <img 
                    src="/images/commodity-fertilizers.jpg" 
                    alt="Petrochemicals Trading"
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-0.5 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#004880]" />
                    <span>02 // {isFa ? 'پتروشیمی' : 'PETROCHEMICALS'}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1">
                    {isFa ? 'بازرگانی در حوزه پتروشیمی' : 'PETROCHEMICALS'}
                  </h3>
                  <div className="w-6 group-hover:w-12 h-[2px] bg-[#004880] transition-all duration-300 mb-2" />
                  <p className="text-xs text-[#4A5868] leading-relaxed font-sans line-clamp-2">
                    {isFa 
                      ? 'تجارت ساختاریافته پلیمرها، خوراک‌های شیمیایی، آروماتیک‌ها و فرآورده‌های پتروشیمی.' 
                      : 'Structured trading in polymers, chemical feedstocks, aromatics, and petrochemical derivatives.'}
                  </p>
                </div>
              </div>

              {/* 03: FOOD & AGRICULTURAL PRODUCTS */}
              <div 
                onClick={() => onInquire(`Inquiry: Agriculture & Food Desk`)}
                className="bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer flex-1"
              >
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                  <img 
                    src={agriGrainImg} 
                    alt="Food & Agricultural Commodity Trading"
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-0.5 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#004880]" />
                    <span>03 // {isFa ? 'صنایع غذایی' : 'FOOD & AGRI'}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1">
                    {isFa ? 'بازرگانی در حوزه صنایع غذایی' : 'FOOD & AGRICULTURAL PRODUCTS'}
                  </h3>
                  <div className="w-6 group-hover:w-12 h-[2px] bg-[#004880] transition-all duration-300 mb-2" />
                  <p className="text-xs text-[#4A5868] leading-relaxed font-sans line-clamp-2">
                    {isFa 
                      ? 'تجارت بین‌المللی کالاهای کشاورزی، غلات، دانه‌های روغنی و محصولات غذایی اساسی.' 
                      : 'International trade in agricultural commodities, grain streams, oilseeds, and essential food items.'}
                  </p>
                </div>
              </div>

            </div>

            {/* ROW 2: 3 Columns (4-4-4) -> Items 04, 05, 06 */}

            {/* 04: MINERALS & NON-FERROUS METALS */}
            <div 
              onClick={() => onInquire(`Inquiry: Minerals Desk`)}
              className="md:col-span-4 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                <img 
                  src="/images/concept-trade.jpg" 
                  alt="Minerals & Non-Ferrous Metals Trading"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-0.5 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>04 // {isFa ? 'مواد معدنی' : 'MINERALS'}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1">
                    {isFa ? 'بازرگانی در حوزه مواد معدنی و فلزات' : 'MINERALS & NON-FERROUS METALS'}
                  </h3>
                  <div className="w-6 group-hover:w-12 h-[2px] bg-[#004880] transition-all duration-300 mb-2" />
                  <p className="text-xs text-[#4A5868] leading-relaxed font-sans">
                    {isFa 
                      ? 'تامین و اجرای معاملات کاتد مس، آلومینیوم، کنسانتره‌های سنگ‌آهن و کانی‌های صنعتی.' 
                      : 'Sourcing and trade execution for copper cathodes, aluminum, iron ore, and industrial minerals.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#D5DFE8]/70 flex items-center justify-between text-[11px] font-mono font-bold text-[#004880] uppercase">
                  <span>{isFa ? 'جزئیات تامین' : 'DETAILS'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                </div>
              </div>
            </div>

            {/* 05: ENERGY */}
            <div 
              onClick={() => onInquire(`Inquiry: Energy Desk`)}
              className="md:col-span-4 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                <img 
                  src="/images/commodity-steel.jpg" 
                  alt="Energy Trading"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-0.5 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>05 // {isFa ? 'انرژی' : 'ENERGY'}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1">
                    {isFa ? 'بازرگانی در حوزه انرژی' : 'ENERGY'}
                  </h3>
                  <div className="w-6 group-hover:w-12 h-[2px] bg-[#004880] transition-all duration-300 mb-2" />
                  <p className="text-xs text-[#4A5868] leading-relaxed font-sans">
                    {isFa 
                      ? 'تجارت جهانی هیدروکربن‌ها، کالاهای انرژی، نفت‌گاز، مازوت و فرآورده‌های نفتی.' 
                      : 'Global trade in hydrocarbons, energy commodities, fuel oil, gasoil, and petroleum products.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#D5DFE8]/70 flex items-center justify-between text-[11px] font-mono font-bold text-[#004880] uppercase">
                  <span>{isFa ? 'جزئیات تامین' : 'DETAILS'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                </div>
              </div>
            </div>

            {/* 06: INDUSTRIAL PRODUCTS */}
            <div 
              onClick={() => onInquire(`Inquiry: Industrial Equipment Desk`)}
              className="md:col-span-4 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                <img 
                  src="/images/concept-industry.jpg" 
                  alt="Industrial Products & Equipment"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 rtl:left-auto rtl:right-2.5 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-0.5 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>06 // {isFa ? 'محصولات صنعتی' : 'INDUSTRIAL'}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1">
                    {isFa ? 'بازرگانی در حوزه محصولات صنعتی' : 'INDUSTRIAL PRODUCTS'}
                  </h3>
                  <div className="w-6 group-hover:w-12 h-[2px] bg-[#004880] transition-all duration-300 mb-2" />
                  <p className="text-xs text-[#4A5868] leading-relaxed font-sans">
                    {isFa 
                      ? 'تامین تجاری ماشین‌آلات صنعتی، قطعات تخصصی، تجهیزات و زیرساخت‌های کارخانه‌ای.' 
                      : 'Commercial supply of industrial machinery, specialized components, equipment, and plant materials.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#D5DFE8]/70 flex items-center justify-between text-[11px] font-mono font-bold text-[#004880] uppercase">
                  <span>{isFa ? 'جزئیات تامین' : 'DETAILS'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                </div>
              </div>
            </div>

            {/* ROW 3: 2 Balanced Large Cards (6-6) -> Items 07 & 08 */}

            {/* 07: RAW MATERIALS & ESSENTIAL COMMODITIES */}
            <div 
              onClick={() => onInquire(`Inquiry: Essential Commodities Desk`)}
              className="md:col-span-6 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                <img 
                  src="/images/commodity-agriculture.jpg" 
                  alt="Raw Materials & Essential Commodities"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-1 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>07 // {isFa ? 'مواد اولیه' : 'RAW MATERIALS'}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1.5">
                    {isFa ? 'بازرگانی در حوزه مواد اولیه و کالاهای اساسی' : 'RAW MATERIALS & ESSENTIAL COMMODITIES'}
                  </h3>
                  <div className="w-8 group-hover:w-16 h-[2px] bg-[#004880] transition-all duration-300 mb-2.5" />
                  <p className="text-xs sm:text-sm text-[#4A5868] leading-relaxed font-sans">
                    {isFa 
                      ? 'تامین کالاهای اساسی حجیم، تدارک مواد اولیه و تسهیلات بازرگانی اقلام راهبردی.' 
                      : 'Bulk commodity sourcing, raw material procurement, and essential strategic supply facilities.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#D5DFE8]/70 flex items-center justify-between text-xs font-mono font-bold text-[#004880] uppercase">
                  <span>{isFa ? 'استعلام کالاهای اساسی' : 'COMMERCIAL INQUIRY'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                </div>
              </div>
            </div>

            {/* 08: SUPPLY CHAIN & LOGISTICS */}
            <div 
              onClick={() => onInquire(`Inquiry: Supply Chain & Maritime Logistics`)}
              className="md:col-span-6 bg-[#F4F7FA] border border-[#D5DFE8] hover:border-[#004880] p-3 flex flex-col justify-between group rounded-[2px] transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#EAF0F6] rounded-[2px]">
                <img 
                  src="/images/hero-port.jpg" 
                  alt="Supply Chain & Maritime Logistics"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.97] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#FFFFFF]/95 backdrop-blur-xs text-[#0A1C2E] font-mono text-[10px] font-bold px-2.5 py-1 border border-[#D5DFE8] shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#004880]" />
                  <span>08 // {isFa ? 'لجستیک و زنجیره تامین' : 'LOGISTICS'}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1C2E] group-hover:text-[#004880] transition-colors font-sans mb-1.5">
                    {isFa ? 'راهکارهای زنجیره تأمین و لجستیک' : 'SUPPLY CHAIN & LOGISTICS'}
                  </h3>
                  <div className="w-8 group-hover:w-16 h-[2px] bg-[#004880] transition-all duration-300 mb-2.5" />
                  <p className="text-xs sm:text-sm text-[#4A5868] leading-relaxed font-sans">
                    {isFa 
                      ? 'خدمات یکپارچه حمل‌ونقل، تخلیه و بارگیری بندری، اجرای تجارت و لجستیک دریایی.' 
                      : 'Integrated freight, port handling, trade execution, and cross-border maritime logistics.'}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#D5DFE8]/70 flex items-center justify-between text-xs font-mono font-bold text-[#004880] uppercase">
                  <span>{isFa ? 'خدمات لجستیک' : 'COMMERCIAL INQUIRY'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#004880] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:rotate-180" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 04 GLOBAL MARKETS (LIGHT CORPORATE INFOGRAPHIC) ------------------ */}
      <section id="markets" className="py-24 bg-[#EAF0F6] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#D5DFE8] gap-4">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004880] uppercase tracking-widest mb-2">
                <span className="text-2xl sm:text-4xl font-extrabold">04</span>
                <span>/ {isFa ? 'شبکه کریدورهای بین‌المللی' : 'GLOBAL MARKETS'}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold text-[#0A1C2E] uppercase">
                {isFa ? 'حضور راهبردی در بازارهای هدف' : 'Global Reach & Trade Networks'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#4A5868] max-w-md">
              {isFa ? 'اتصال خریداران، فروشندگان و نهادهای مالی در ۶ منطقه جغرافیایی' : 'Connecting buyers, suppliers, and financial institutions across regions'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Regional Selector Buttons */}
            <div className="lg:col-span-5 space-y-2 font-mono">
              {t.markets.regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setActiveRegion(reg.id)}
                  className={`w-full p-4 text-left rtl:text-right transition-all flex items-center justify-between border cursor-pointer rounded-[2px] ${
                    activeRegion === reg.id
                      ? 'bg-[#FFFFFF] text-[#0A1C2E] border-[#004880] shadow-sm font-bold'
                      : 'bg-[#F4F7FA] text-[#4A5868] border-[#D5DFE8] hover:bg-[#FFFFFF]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#004880]">[{reg.code}]</span>
                    <span className="text-sm font-bold font-sans text-[#0A1C2E]">{reg.name}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 rtl:rotate-180 ${activeRegion === reg.id ? 'text-[#004880]' : 'text-[#4A5868]'}`} />
                </button>
              ))}
            </div>

            {/* Light Corporate Map & Corridor Card */}
            <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D5DFE8] p-8 space-y-6 rounded-[2px] shadow-sm">
              
              {/* Subtle Infographic Map Representation */}
              <div className="relative h-48 w-full bg-[#F4F7FA] border border-[#D5DFE8] overflow-hidden flex items-center justify-center p-4">
                <svg viewBox="0 0 800 400" className="w-full h-full text-[#D5DFE8]">
                  {/* Subtle Grid / World Contour Lines */}
                  <line x1="50" y1="200" x2="750" y2="200" stroke="#D5DFE8" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="400" y1="50" x2="400" y2="350" stroke="#D5DFE8" strokeWidth="1" strokeDasharray="4,4" />
                  
                  {/* Strategic Trade Hub Curves */}
                  <path d="M 200,220 Q 350,150 500,180" fill="none" stroke="#004880" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M 350,150 Q 520,120 650,200" fill="none" stroke="#004880" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M 500,180 Q 420,280 300,280" fill="none" stroke="#004880" strokeWidth="2" strokeDasharray="3,3" />

                  {/* Trade Nodes */}
                  <circle cx="350" cy="150" r="5" fill="#0A1C2E" stroke="#004880" strokeWidth="2" />
                  <circle cx="500" cy="180" r="5" fill="#0A1C2E" stroke="#004880" strokeWidth="2" />
                  <circle cx="200" cy="220" r="4" fill="#4A5868" />
                  <circle cx="650" cy="200" r="4" fill="#4A5868" />
                  <circle cx="300" cy="280" r="4" fill="#4A5868" />
                  
                  {/* Labels */}
                  <text x="360" y="145" fill="#0A1C2E" fontSize="11" fontFamily="monospace" fontWeight="bold">TEHRAN HQ</text>
                  <text x="510" y="175" fill="#0A1C2E" fontSize="11" fontFamily="monospace" fontWeight="bold">DUBAI DESK</text>
                  <text x="660" y="195" fill="#4A5868" fontSize="10" fontFamily="monospace">SINGAPORE</text>
                  <text x="140" y="225" fill="#4A5868" fontSize="10" fontFamily="monospace">ROTTERDAM</text>
                </svg>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-[#D5DFE8] font-mono text-xs">
                <span className="text-[#004880] font-bold">CORRIDOR SPECIFICATIONS // {selectedRegionObj.code}</span>
                <span className="text-[#4A5868]">STATUS: ACTIVE</span>
              </div>

              <h3 className="text-2xl font-bold text-[#0A1C2E] font-sans">
                {selectedRegionObj.name}
              </h3>

              <p className="text-sm text-[#4A5868] leading-relaxed font-sans">
                {selectedRegionObj.desc}
              </p>

              <div className="pt-4 border-t border-[#D5DFE8] grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3.5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[2px]">
                  <div className="text-[10px] text-[#4A5868] uppercase mb-1">SETTLEMENT INSTRUMENTS</div>
                  <div className="text-[#0A1C2E] font-bold">LC / CAD / SBLC</div>
                </div>

                <div className="p-3.5 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[2px]">
                  <div className="text-[10px] text-[#4A5868] uppercase mb-1">CLEARING CURRENCIES</div>
                  <div className="text-[#004880] font-bold">USD / EUR / AED / CNY</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 05 WHY RSP (STRUCTURED NUMBERED LIST) ------------------ */}
      <section id="why-rsp" className="py-24 bg-[#FFFFFF] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#0A1C2E] uppercase tracking-widest mb-2">
                <span className="text-2xl sm:text-4xl font-extrabold text-[#004880]">05</span>
                <span>/ {isFa ? 'مزیت‌های رقابتی' : 'WHY RSP'}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold text-[#0A1C2E] uppercase leading-none font-sans">
                WHY<br />REFAH<br />SANAT<br /><span className="text-[#004880]">PARDIS</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5868] leading-relaxed pt-4 font-mono">
                {isFa 
                  ? 'اصول کلیدی حاکم بر کلیه قراردادهای تجاری و تعهدات اعتباری گروه' 
                  : 'Institutional principles driving contract execution & risk management.'}
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#D5DFE8] border-t border-b border-[#D5DFE8]">
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
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#004880] shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0A1C2E] mb-1 font-sans">
                      {isFa ? item.titleFa : item.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5868] leading-relaxed font-sans">
                      {isFa ? item.descFa : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ------------------ 06 PARTNERSHIP SECTION (BRIGHT PREMIUM STATEMENT) ------------------ */}
      <section id="partnership" className="py-24 bg-[#EAF0F6] text-[#0A1C2E] border-b border-[#D5DFE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFFFF] border border-[#D5DFE8] text-[#004880] text-xs font-mono font-bold uppercase tracking-widest rounded-[2px]">
            <span>06 / PARTNERSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold text-[#0A1C2E] tracking-tight uppercase max-w-4xl mx-auto font-sans">
            {isFa 
              ? 'توسعه ارتباطات پایدار تجاری و تعاملات ساختاریافته' 
              : 'Building Long-Term Commercial Relationships'}
          </h2>

          <p className="text-sm sm:text-base text-[#4A5868] max-w-2xl mx-auto leading-relaxed font-sans">
            {isFa 
              ? 'گروه رفاه صنعت پردیس پذیرای توسعه تعاملات تجاری با خریداران، تامین‌کنندگان، نهادهای مالی و شرکای راهبردی در سراسر بازارهای جهانی است.' 
              : 'We welcome collaboration with trusted buyers, sellers, suppliers, financial institutions and strategic partners across global markets.'}
          </p>

          <div className="pt-4 font-mono">
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, '#contact')}
              className="bg-[#FFFFFF] hover:bg-[#0A1C2E] hover:text-white text-[#0A1C2E] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-2 rounded-[2px] border border-[#0A1C2E] shadow-sm"
            >
              <span>{isFa ? 'شروع گفتگو و ارسال درخواست' : 'START A CONVERSATION'}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180 text-[#004880]" />
            </a>
          </div>

        </div>
      </section>

      {/* ------------------ 07 CONTACT SECTION (INSTITUTIONAL PORTAL) ------------------ */}
      <section id="contact" className="py-20 bg-[#FFFFFF] text-[#0A1C2E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 font-mono text-xs font-bold text-[#004880] uppercase tracking-widest">
              <span className="text-2xl sm:text-4xl font-extrabold">07</span>
              <span>/ {isFa ? 'درگاه ارتباط تجاری' : 'CONTACT'}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#D5DFE8]">
              <h2 className="text-3xl sm:text-5xl font-semibold text-[#0A1C2E] leading-tight font-sans">
                {isFa ? (
                  <>برقراری تعامل <span className="text-[#004880]">تجاری</span></>
                ) : (
                  <>Let's Build the <span className="text-[#004880]">Next Commercial Connection.</span></>
                )}
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5868] leading-relaxed font-sans max-w-md">
                {isFa 
                  ? 'جهت ارتباط با مدیریت بازرگانی، استعلام شرایط گشایش اعتبار یا پیشنهاد شراکت راهبردی از طریق راه‌های ارتباطی زیر با ما در تماس باشید.'
                  : 'Get in touch with our commercial desk for physical commodity procurement, LC facilities, or strategic joint ventures.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#4A5868]">
              <div className="p-6 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[2px] space-y-2.5">
                <div className="flex items-center gap-2 text-[#004880] font-bold">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'نشانی مرکزی' : 'HEADQUARTERS'}</span>
                </div>
                <p className="text-[#0A1C2E] text-xs font-sans leading-relaxed">{t.contact.address}</p>
              </div>

              <div className="p-6 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[2px] space-y-2.5">
                <div className="flex items-center gap-2 text-[#004880] font-bold">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'پست الکترونیک' : 'EMAIL DESK'}</span>
                </div>
                <p className="text-[#0A1C2E] text-xs font-mono">{t.contact.email}</p>
              </div>

              <div className="p-6 bg-[#F4F7FA] border border-[#D5DFE8] rounded-[2px] space-y-2.5">
                <div className="flex items-center gap-2 text-[#004880] font-bold">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{isFa ? 'تلفن تماس' : 'DIRECT LINE'}</span>
                </div>
                <p className="text-[#0A1C2E] text-xs font-mono">{t.contact.phone}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#4A5868] border-t border-[#D5DFE8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#004880] shrink-0" />
                <span>ISO 28000 SECURITY & GOVERNANCE COMPLIANT</span>
              </div>
              <span className="text-[10px] text-[#004880] font-bold">REFAH SANAT PARDIS TRADING DESK</span>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------ FOOTER ------------------ */}
      <footer className="bg-[#0A1C2E] text-[#FFFFFF] py-16 border-t border-[#0A1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1A324A]">
            
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FFFFFF] border border-[#FFFFFF] flex items-center justify-center p-1 shrink-0 rounded-[2px]">
                  <Logo className="w-full h-full text-[#004880]" />
                </div>
                <span className="font-mono font-bold text-white text-base tracking-widest uppercase">
                  {isFa ? 'رفاه صنعت پردیس' : 'REFAH SANAT PARDIS'}
                </span>
              </div>
              <p className="text-xs text-[#8A9AA8] leading-relaxed max-w-md font-sans">
                {t.footer.description}
              </p>
            </div>

            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <div className="text-[#004880] font-bold uppercase tracking-wider mb-2">OPERATIONAL DESKS</div>
              <ul className="space-y-2 text-[#8A9AA8]">
                <li>• International Trading</li>
                <li>• Trade & Supply Chain Finance</li>
                <li>• Commodity Sourcing</li>
                <li>• Strategic Investment</li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <div className="text-[#004880] font-bold uppercase tracking-wider mb-2">GOVERNANCE & TERMS</div>
              <div className="flex flex-col gap-2 text-[#8A9AA8]">
                <button onClick={openTerms} className="text-left rtl:text-right hover:text-[#004880] transition-colors cursor-pointer">
                  &gt; {t.footer.termsTitle}
                </button>
                <button onClick={openPrivacy} className="text-left rtl:text-right hover:text-[#004880] transition-colors cursor-pointer">
                  &gt; {t.footer.privacyTitle}
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8A9AA8] gap-4">
            <div>
              © {new Date().getFullYear()} {t.footer.rights}
            </div>
            <div className="text-[11px] text-[#004880] font-bold uppercase">
              SOFT CORPORATE MINIMAL EDITION
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Layers, Globe, Coins, Handshake, BarChart3, Database } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  currentLang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section id="home" className="relative pt-28 pb-10 flex flex-col justify-between bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      
      {/* Background Photography with Dark Navy Industrial Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/hero-port.jpg" 
          alt={currentLang === 'fa' ? 'پایانه بندرگاه و لوجستیک تجارت بین‌الملل' : 'Port Terminal & Maritime Logistics'}
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/75 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 my-auto w-full">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-8">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 z-10 flex flex-col justify-between">
            
            <div>
              {/* Category / Pill Badge - White Plate with Brand Cyan Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-slate-950 text-xs font-mono font-bold tracking-wider uppercase mb-5 border border-slate-200 shadow-md">
                <Globe className="w-3.5 h-3.5 text-[#00C4CC]" />
                <span>[01] {t.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
                {t.title}
              </h1>

              {/* Corporate Brand Subtitle */}
              <div className="text-slate-200 text-sm font-mono font-semibold uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00C4CC]"></span>
                <span>{t.tagline}</span>
              </div>

              {/* Official Introduction Paragraphs */}
              <div className="space-y-3 text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl mb-8 border-l-2 border-[#00C4CC] rtl:border-r-2 rtl:border-l-0 pl-4 rtl:pr-4 bg-slate-900/60 p-3 backdrop-blur-sm border-r border-t border-b border-slate-800/80">
                <p className="font-medium text-white">{t.introParagraph1}</p>
                <p className="text-slate-300 text-xs">{t.introParagraph2}</p>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                id="hero-primary-cta"
                className="bg-[#00C4CC] hover:bg-[#00b2b8] text-slate-950 px-7 py-3 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 group cursor-pointer border border-[#00C4CC] shadow-lg"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('our-business')}
                id="hero-secondary-cta"
                className="bg-slate-900/90 hover:bg-slate-800 text-slate-100 px-7 py-3 font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-all inline-flex items-center justify-center cursor-pointer backdrop-blur-sm"
              >
                <span>{t.secondaryCta}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Industrial Matrix Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-slate-900 border border-slate-700 p-6 shadow-xl h-full flex flex-col justify-between">
              
              {/* Card Header Badge */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00C4CC]" />
                    <span className="font-mono font-bold text-white uppercase tracking-wider text-xs">
                      {currentLang === 'fa' ? 'نقطه تقاطع عملیات RSP' : 'RSP Operational Matrix'}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono font-semibold bg-slate-950 px-2 py-0.5 border border-slate-800">
                    VERIFIED DESK
                  </span>
                </div>

                {/* 4 Quadrants Matrix */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-4 h-4 text-slate-400" />
                      <span className="text-[9px] font-mono text-slate-500">MTRX-1</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-1">
                      {currentLang === 'fa' ? 'تجارت بین‌المللی' : 'International Trade'}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-normal font-mono">
                      {currentLang === 'fa' ? 'مبادلات فرامرزی کالایی' : 'Cross-border flows'}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <Layers className="w-4 h-4 text-slate-400" />
                      <span className="text-[9px] font-mono text-slate-500">MTRX-2</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-1">
                      {currentLang === 'fa' ? 'بازارهای کالایی' : 'Commodity Markets'}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-normal font-mono">
                      {currentLang === 'fa' ? 'فولاد، انرژی، پتروشیمی' : 'Steel, Energy, Petrochem'}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <Coins className="w-4 h-4 text-slate-400" />
                      <span className="text-[9px] font-mono text-slate-500">MTRX-3</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-1">
                      {currentLang === 'fa' ? 'تامین مالی تجارت' : 'Trade Finance'}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-normal font-mono">
                      {currentLang === 'fa' ? 'ساختاردهی زنجیره تامین' : 'Structured Supply Chain'}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <Handshake className="w-4 h-4 text-slate-400" />
                      <span className="text-[9px] font-mono text-slate-500">MTRX-4</span>
                    </div>
                    <div className="text-xs font-bold text-white mb-1">
                      {currentLang === 'fa' ? 'سرمایه‌گذاری و مشارکت' : 'Investment & JV'}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-normal font-mono">
                      {currentLang === 'fa' ? 'پیوند نهادها و سرمایه‌گذاران' : 'Global Institutional Funds'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Platform Banner */}
              <div className="p-3 bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00C4CC]" />
                  <span className="text-slate-200 font-mono text-[11px]">
                    {currentLang === 'fa' ? 'تسهیل معاملات قابل‌اجرا' : 'Structured & Executable Trade Desk'}
                  </span>
                </div>
                <span className="text-[#00C4CC] text-[10px] font-mono font-bold uppercase tracking-wider">
                  STATUS: ACTIVE
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Concrete High-Density Technical Stats Grid */}
        <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {currentLang === 'fa' ? 'حجم مبادلات سالانه' : 'Annual Volume'}
            </div>
            <div className="text-lg font-mono font-bold text-white">$120M+ USD</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">Physical & Fin. Trade</div>
          </div>

          <div className="p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {currentLang === 'fa' ? 'کریدورهای تجاری فعال' : 'Trade Corridors'}
            </div>
            <div className="text-lg font-mono font-bold text-[#00C4CC]">6 Regions</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">ME, CA, SA, EA, AF, EU</div>
          </div>

          <div className="p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {currentLang === 'fa' ? 'تسویه و ارزها' : 'Settlement Desk'}
            </div>
            <div className="text-lg font-mono font-bold text-white">Multi-FX</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">USD, EUR, AED, CNY</div>
          </div>

          <div className="p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {currentLang === 'fa' ? 'استاندارد کیفیت' : 'Governance & Quality'}
            </div>
            <div className="text-lg font-mono font-bold text-white">ISO 9001:2015</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">ISO 28000 Security</div>
          </div>

          <div className="p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {currentLang === 'fa' ? 'شماره ثبت رسمی' : 'Registration No.'}
            </div>
            <div className="text-lg font-mono font-bold text-white">589412-IR</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">Verified Legal Entity</div>
          </div>

          <div className="p-3 bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {currentLang === 'fa' ? 'سابقه فعالیت' : 'Track Record'}
            </div>
            <div className="text-lg font-mono font-bold text-white">Est. 2012</div>
            <div className="text-[10px] text-slate-400 font-mono mt-0.5">14+ Yrs Operating</div>
          </div>
        </div>

      </div>

      {/* Operational Tags Ticker */}
      <div className="w-full bg-slate-950 border-t border-slate-800 py-2.5 overflow-hidden text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 text-xs font-mono text-slate-300 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="flex items-center gap-1.5 font-bold text-[#00C4CC] uppercase tracking-wider shrink-0 text-[11px]">
            <Globe className="w-3.5 h-3.5 text-[#00C4CC]" />
            {currentLang === 'fa' ? 'ارکان عملیاتی RSP:' : 'RSP OPERATIONAL PILLARS:'}
          </span>
          {t.intersectionTags.map((tag, idx) => (
            <span key={idx} className="flex items-center gap-2 shrink-0 bg-slate-900 px-2.5 py-0.5 border border-slate-800 text-slate-200 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 bg-[#00C4CC]" />
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};


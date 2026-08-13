import React, { useState } from 'react';
import { Layers, Coins, Handshake, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface BusinessSectionProps {
  currentLang: Language;
  onInquire: (context: string) => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({ currentLang, onInquire }) => {
  const t = translations[currentLang].business;
  const [activeTab, setActiveTab] = useState<'commodity' | 'finance' | 'partnerships'>('commodity');

  const commoditySpecs = [
    { code: 'HS-7200', capacity: '150,000 MT/Yr', route: 'ME → East Asia / EU', incoterms: 'FOB / CFR / CIF' },
    { code: 'HS-3900', capacity: '80,000 MT/Yr', route: 'ME → Central Asia / SA', incoterms: 'FOB / DAP' },
    { code: 'HS-3102', capacity: '200,000 MT/Yr', route: 'ME → South Asia / Africa', incoterms: 'FOB / CFR' },
    { code: 'HS-1000', capacity: '120,000 MT/Yr', route: 'Black Sea / CA → ME', incoterms: 'CIF / CPT' },
    { code: 'HS-2700', capacity: '500,000 BBL/Yr', route: 'Global Corridors', incoterms: 'FOB / CFR' },
    { code: 'HS-SPEC', capacity: 'Custom Contracts', route: 'Strategic Corridors', incoterms: 'Structured Terms' },
  ];

  const commodityPhotos = [
    {
      url: '/images/commodity-petrochemical.jpg',
      altFa: 'تولید فولاد و کویل‌های صنعتی',
      altEn: 'Steel production and industrial coils',
    },
    {
      url: '/images/commodity-fertilizers.jpg',
      altFa: 'پالایشگاه و مجتمع‌های پتروشیمی',
      altEn: 'Refinery and petrochemical processing plants',
    },
    {
      url: '/images/commodity-agriculture.jpg',
      altFa: 'اوره و کودهای شیمیایی صنعتی',
      altEn: 'Urea and industrial fertilizers',
    },
    {
      url: '/images/commodity-energy.jpg',
      altFa: 'سیلوهای غلات و نهادهای کشاورزی',
      altEn: 'Grain silos and agricultural commodities',
    },
    {
      url: '/images/commodity-steel.jpg',
      altFa: 'کشتی‌های نفتکش و انرژی',
      altEn: 'Energy tanker vessel and petroleum transport',
    },
    {
      url: '/images/commodity-logistics.jpg',
      altFa: 'پایانه کانتینری و حمل‌ونقل دریایی',
      altEn: 'Container port terminal and maritime logistics',
    },
  ];

  return (
    <section id="our-business" className="relative py-14 sm:py-16 bg-slate-950 text-white border-b border-slate-800">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-slate-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-slate-200">
              <Layers className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>[04] {t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
          <div className="md:text-right max-w-md">
            <p className="text-xs sm:text-sm text-slate-300 font-mono leading-snug">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Subsection Selector Tabs - Sharp Rectangles */}
        <div className="flex justify-start mb-8 overflow-x-auto no-scrollbar">
          <div className="inline-flex p-1 bg-slate-900 border border-slate-800 gap-1">
            <button
              onClick={() => setActiveTab('commodity')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === 'commodity'
                  ? 'bg-slate-800 text-[#00C4CC] border-[#00C4CC]/60'
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Layers className="w-4 h-4 text-[#00C4CC]" />
              <span>{t.commodityTrading.title}</span>
            </button>

            <button
              onClick={() => setActiveTab('finance')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === 'finance'
                  ? 'bg-slate-800 text-[#00C4CC] border-[#00C4CC]/60'
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Coins className="w-4 h-4 text-[#00C4CC]" />
              <span>{t.tradeFinance.title}</span>
            </button>

            <button
              onClick={() => setActiveTab('partnerships')}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer border ${
                activeTab === 'partnerships'
                  ? 'bg-slate-800 text-[#00C4CC] border-[#00C4CC]/60'
                  : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Handshake className="w-4 h-4 text-[#00C4CC]" />
              <span>{t.partnerships.title}</span>
            </button>
          </div>
        </div>

        {/* SUBSECTION 1: International Commodity Trading */}
        {activeTab === 'commodity' && (
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 animate-in fade-in duration-200">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-bold text-[#00C4CC] uppercase tracking-widest block mb-1">
                SEC-01 // COMMODITY DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.commodityTrading.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.commodityTrading.desc}
              </p>
            </div>

            {/* Commodity Grid with Concrete Specs & Industry Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {t.commodityTrading.items.map((item, idx) => {
                const spec = commoditySpecs[idx % commoditySpecs.length];
                const photo = commodityPhotos[idx % commodityPhotos.length];
                return (
                  <div 
                    key={idx}
                    className="bg-slate-950 border border-slate-800 hover:border-[#00C4CC]/50 transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Representative Industry Photo Header */}
                      <div className="relative h-36 w-full overflow-hidden border-b border-slate-800 bg-slate-900">
                        <img 
                          src={photo.url} 
                          alt={currentLang === 'fa' ? photo.altFa : photo.altEn}
                          className="w-full h-full object-cover filter brightness-60 contrast-125 saturate-50 group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                        <div className="absolute top-2 left-2 rtl:left-auto rtl:right-2 font-mono text-[10px] text-white font-bold bg-slate-950/90 px-2 py-0.5 border border-slate-800">
                          [{spec.code}]
                        </div>
                        <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 text-[10px] font-mono text-[#00C4CC] font-bold bg-slate-950/90 px-1.5 py-0.5 border border-slate-800">
                          VERIFIED
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="text-sm font-bold text-white mb-2 group-hover:text-[#00C4CC] transition-colors">
                          {item}
                        </h4>
                      </div>
                    </div>

                    {/* Technical Spec Row */}
                    <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 font-mono text-[10px] space-y-1 text-slate-300">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Vol/Cap:</span>
                        <span className="text-white font-bold">{spec.capacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Corridor:</span>
                        <span className="text-slate-200">{spec.route}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Terms:</span>
                        <span className="text-[#00C4CC] font-bold">{spec.incoterms}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Logistical & Documentary Footnote */}
            <div className="p-4 bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                {t.commodityTrading.footnote}
              </p>
              <button
                onClick={() => onInquire('Commodity Trading Inquiry')}
                className="px-5 py-2.5 bg-[#00C4CC] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00b2b8] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer border border-[#00C4CC]"
              >
                <span>{currentLang === 'fa' ? 'استعلام معامله کالایی' : 'Inquire Commodity Trade'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* SUBSECTION 2: Trade & Supply Chain Finance */}
        {activeTab === 'finance' && (
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 animate-in fade-in duration-200">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-bold text-[#00C4CC] uppercase tracking-widest block mb-1">
                SEC-02 // FINANCIAL DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.tradeFinance.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.tradeFinance.desc}
              </p>
            </div>

            {/* Financial Solutions Grid with Spec Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {t.tradeFinance.solutions.map((sol, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00C4CC] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-white">
                      {sol}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-800 font-mono text-[10px] flex justify-between text-slate-400">
                    <span className="text-slate-500">INSTRUMENT:</span>
                    <span className="text-[#00C4CC] font-bold">LC / SBLC / TT / Escrow</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Objective Footnote */}
            <div className="p-4 bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.tradeFinance.footnote}
              </p>
              <button
                onClick={() => onInquire('Trade & Supply Chain Finance Inquiry')}
                className="px-5 py-2.5 bg-[#00C4CC] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00b2b8] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer border border-[#00C4CC]"
              >
                <span>{currentLang === 'fa' ? 'استعلام تامین مالی' : 'Inquire Trade Finance'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* SUBSECTION 3: Global Partnerships & Investment */}
        {activeTab === 'partnerships' && (
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 animate-in fade-in duration-200">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono font-bold text-[#00C4CC] uppercase tracking-widest block mb-1">
                SEC-03 // PARTNERSHIP DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {t.partnerships.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.partnerships.desc}
              </p>
            </div>

            {/* Connected Counterparties Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8 font-mono text-xs">
              {t.partnerships.connectors.map((conn, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-slate-950 border border-slate-800 font-bold text-slate-200 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00C4CC]" />
                    <span>{conn}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">VERIFIED</span>
                </div>
              ))}
            </div>

            {/* Partnership Footnote */}
            <div className="p-4 bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.partnerships.footnote}
              </p>
              <button
                onClick={() => onInquire('Global Partnership & Investment Co-operation')}
                className="px-5 py-2.5 bg-[#00C4CC] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#00b2b8] transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer border border-[#00C4CC]"
              >
                <span>{currentLang === 'fa' ? 'ارسال پیشنهاد همکاری' : 'Propose Partnership'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};


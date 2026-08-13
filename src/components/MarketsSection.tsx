import React from 'react';
import { Globe, Network, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MarketsSectionProps {
  currentLang: Language;
}

export const MarketsSection: React.FC<MarketsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].markets;

  return (
    <section id="our-markets" className="relative py-14 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-slate-800">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>[05] {t.badge}</span>
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

        {/* Lead Text Narrative */}
        <div className="bg-slate-950 border border-slate-800 p-4 mb-8">
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            {t.leadText}
          </p>
        </div>

        {/* Global Network Map Visualization Layout */}
        <div className="bg-slate-950 border border-slate-800 p-6 mb-8 relative">
          
          {/* Header Badge */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-400" />
              <span className="font-mono font-bold text-white text-xs uppercase tracking-wider">
                {currentLang === 'fa' ? 'شبکه تجاری و مالی بین‌المللی RSP' : 'RSP International Business Network'}
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-slate-900 px-2.5 py-0.5 border border-slate-800 font-bold">
              6 ACTIVE REGIONAL CORRIDORS
            </span>
          </div>

          {/* 6 Regions Visual Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {t.regions.map((region) => (
              <div 
                key={region.id}
                className="p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-slate-950 px-2 py-0.5 border border-slate-800">
                      CORRIDOR //{region.code}
                    </span>
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider">
                    {region.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {region.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>NETWORK STATUS</span>
                  <span className="text-cyan-400 font-bold">ACTIVE CORRIDOR</span>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer / Note Box */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-[11px] text-slate-400 font-mono">
            <span>
              {currentLang === 'fa' 
                ? 'مناطق نشان‌دهنده شبکه تجاری و تمرکز مبادلات بین‌المللی Refah Sanat Pardis هستند.'
                : 'Regions represent international business focus and partner network corridors.'}
            </span>
          </div>

        </div>

        {/* Closing Text */}
        <div className="bg-slate-950 border border-slate-800 p-4 text-center font-mono text-xs text-slate-400">
          {t.closingText}
        </div>

      </div>
    </section>
  );
};


import React from 'react';
import { ArrowRight, ShieldCheck, FileSpreadsheet, Coins, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ValueCreationSectionProps {
  currentLang: Language;
}

export const ValueCreationSection: React.FC<ValueCreationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].valueCreation;

  const stepIcons = [ShieldCheck, FileSpreadsheet, Coins, ShieldAlert, CheckCircle2];

  return (
    <section id="how-we-create-value" className="relative py-14 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
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

        {/* Lead Narrative Banner - Industrial Sharp */}
        <div className="bg-slate-950 border border-slate-800 p-5 sm:p-6 mb-10 text-center">
          <p className="text-sm sm:text-base text-slate-200 font-semibold leading-relaxed border-l-2 border-r-2 border-cyan-500/40 px-4">
            "{t.leadText}"
          </p>
        </div>

        {/* CONNECTED TRANSACTION LIFECYCLE (Visual Flow) */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-slate-950 px-3 py-1 border border-slate-800">
              {currentLang === 'fa' ? 'چرخه حیات معامله متصل' : 'CONNECTED TRANSACTION LIFECYCLE'}
            </span>
          </div>

          {/* Desktop Timeline Step Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            
            {t.lifecycleSteps.map((stepItem, idx) => {
              const IconComp = stepIcons[idx % stepIcons.length];
              const isLast = idx === t.lifecycleSteps.length - 1;

              return (
                <div key={idx} className="relative group">
                  <div className="p-5 bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors h-full flex flex-col justify-between">
                    
                    <div>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl font-mono font-bold text-cyan-400">
                          {stepItem.step}
                        </span>
                        <div className="w-8 h-8 bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xs font-bold text-white mb-2 leading-snug uppercase tracking-wider font-mono">
                        {stepItem.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {stepItem.desc}
                      </p>
                    </div>

                    {/* Step Flow Tag */}
                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>STAGE 0{idx + 1}</span>
                      <span className="text-cyan-400 font-bold">EXECUTION</span>
                    </div>

                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {!isLast && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 w-5 h-5 bg-cyan-500 text-slate-950 items-center justify-center border border-cyan-400">
                      <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>

        {/* End-to-End Lifecycle Explanation Box */}
        <div className="bg-slate-950 border border-slate-800 p-5 font-mono text-xs text-slate-300 leading-relaxed text-center">
          {t.lifecycleExplanation}
        </div>

      </div>
    </section>
  );
};


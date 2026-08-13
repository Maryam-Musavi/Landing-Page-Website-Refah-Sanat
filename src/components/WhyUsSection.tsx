import React from 'react';
import { ShieldCheck, Layers, Network, Target, ShieldAlert, Handshake, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyUsSectionProps {
  currentLang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].whyUs;

  const principleIcons = [Layers, Network, Target, ShieldAlert, Handshake];

  return (
    <section id="why-rsp" className="relative py-14 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>[06] {t.badge}</span>
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

        {/* 5 Institutional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {t.principles.map((principle, idx) => {
            const IconComp = principleIcons[idx % principleIcons.length];

            return (
              <div 
                key={principle.id}
                className="p-6 bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Tag & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-slate-900 px-2.5 py-0.5 border border-slate-800">
                      {principle.tag}
                    </span>
                    <span className="text-lg font-mono font-bold text-slate-600">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug font-mono uppercase tracking-wider">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {principle.desc}
                  </p>
                </div>

                {/* Bottom Bar */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>RSP Governance</span>
                  </span>
                  <span className="text-slate-400 font-bold">INSTITUTIONAL</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credibility Banner */}
        <div className="p-5 bg-slate-950 border border-slate-800 text-center font-mono text-xs text-slate-300 leading-relaxed">
          {currentLang === 'fa'
            ? 'تمرکز ما بر ایجاد ارزش ساختاریافته، مدیریت ریسک انضباطی و تسهیل معاملات با بالاترین میزان اعتبار تجاری است.'
            : 'Communicating institutional credibility, counterparty rigor, and transaction execution expertise across global commodity markets.'}
        </div>

      </div>
    </section>
  );
};


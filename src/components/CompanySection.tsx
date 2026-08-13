import React from 'react';
import { Building2, TrendingUp, Layers, Coins, Handshake, ShieldCheck, FileCheck, Award, Lock, Scale } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';

interface CompanySectionProps {
  currentLang: Language;
}

export const CompanySection: React.FC<CompanySectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].company;

  return (
    <section id="company" className="relative py-14 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-slate-800">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>[02] {t.badge}</span>
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

        {/* Core Overview & Intersection Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 border border-slate-700 bg-slate-900 p-1 flex items-center justify-center">
                  <Logo className="w-full h-full text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {translations[currentLang].brand}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
                    {translations[currentLang].tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p className="font-semibold text-slate-100 text-sm sm:text-base border-l-2 border-slate-700 rtl:border-r-2 rtl:border-l-0 pl-3 rtl:pr-3">
                  {t.aboutText1}
                </p>
                <p className="text-slate-400">
                  {t.aboutText2}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                {currentLang === 'fa' ? 'تمرکز بر ساختاردهی و اجرای معامله' : 'Transaction Structuring & Execution'}
              </span>
              <span className="text-[11px] text-cyan-400 font-bold bg-slate-900 px-2 py-0.5 border border-slate-800">
                REG: 589412-IR
              </span>
            </div>
          </div>

          {/* 4 Pillars of Operation */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {t.intersectionItems.map((item, idx) => {
              const icons = [TrendingUp, Layers, Coins, Handshake];
              const IconComp = icons[idx % icons.length];
              return (
                <div 
                  key={idx}
                  className="p-4 bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3.5"
                >
                  <div className="p-2.5 bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-1 uppercase tracking-wider font-mono">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Corporate Technical Data Specifications Table */}
        <div className="bg-slate-950 border border-slate-800 p-5 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
            <span>Corporate Governance & Compliance Data</span>
            <span className="text-cyan-400">[VERIFIED LEGAL FRAMEWORK]</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-slate-300">
            <div className="space-y-1">
              <span className="text-slate-500 block text-[10px]">LEGAL ENTITY</span>
              <span className="font-bold text-slate-200">Refah Sanat Pardis Co. Ltd.</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 block text-[10px]">GOVERNANCE & AUDIT</span>
              <span className="font-bold text-slate-200">ISO 9001:2015 & ISO 28000</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 block text-[10px]">COMPLIANCE SCREENING</span>
              <span className="font-bold text-slate-200">KYC / AML & OFAC Standard</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 block text-[10px]">PRIMARY JURISDICTION</span>
              <span className="font-bold text-slate-200">Tehran HQ • Global Operations</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


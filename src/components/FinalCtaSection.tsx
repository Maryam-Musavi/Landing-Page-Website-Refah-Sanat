import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FinalCtaSectionProps {
  currentLang: Language;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].finalCta;

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
    <section className="relative py-14 sm:py-16 bg-slate-950 text-white border-b border-slate-800">
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Brand Name Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 text-cyan-400 font-mono font-bold text-xs uppercase tracking-widest mb-5">
          <Globe className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.brandName}</span>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 leading-tight">
          {t.tagline}
        </h2>

        {/* Category Pill */}
        <div className="text-slate-400 font-mono text-xs sm:text-sm font-bold tracking-widest uppercase mb-6">
          {t.category}
        </div>

        {/* Invitation */}
        <p className="text-sm sm:text-xl font-bold text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed font-mono">
          "{t.invitation}"
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => scrollToSection('contact')}
            id="final-primary-cta"
            className="w-full sm:w-auto bg-cyan-500 text-slate-950 hover:bg-cyan-400 px-8 py-3.5 font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 group cursor-pointer border border-cyan-400"
          >
            <span>{t.primaryCta}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('our-business')}
            id="final-secondary-cta"
            className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 px-8 py-3.5 font-semibold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center cursor-pointer"
          >
            <span>{t.secondaryCta}</span>
          </button>
        </div>

      </div>
    </section>
  );
};


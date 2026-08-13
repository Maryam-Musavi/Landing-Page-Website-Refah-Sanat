import React from 'react';
import { Users, ShieldCheck, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LeadershipSectionProps {
  currentLang: Language;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].leadership;

  return (
    <section id="leadership" className="relative py-14 sm:py-16 bg-slate-950 text-white border-b border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-slate-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-slate-200">
              <Users className="w-3.5 h-3.5 text-[#00C4CC]" />
              <span>[03] {t.badge}</span>
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

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {t.members.map((member, idx) => (
            <div 
              key={member.id}
              className="industrial-panel bg-slate-900 border border-slate-800 hover:border-[#00C4CC]/50 transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Executive Headshot Photo Container */}
                <div className="relative h-64 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-110 saturate-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Top Technical Badge on Photo */}
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-1.5 px-2 py-0.5 bg-slate-950/90 border border-slate-800 text-[10px] font-mono font-bold text-[#00C4CC]">
                    <ShieldCheck className="w-3 h-3 text-[#00C4CC]" />
                    <span>MEMBER 0{idx + 1}</span>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-5">
                  <div className="text-[10px] font-mono font-bold text-[#00C4CC] uppercase tracking-wider mb-1">
                    {member.role}
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 font-sans group-hover:text-[#00C4CC] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans border-l-2 border-[#00C4CC]/40 rtl:border-r-2 rtl:border-l-0 pl-2.5 rtl:pr-2.5">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#00C4CC]" />
                  <span>RSP EXECUTIVE DESK</span>
                </span>
                <span className="text-slate-200 font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Integrity Notice */}
        <div className="p-4 bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 bg-[#00C4CC]" />
            <span>
              {currentLang === 'fa' 
                ? 'راهبری شرکتی رفاه صنعت پردیس متعهد به انضباط مالی، شفافیت معامله‌ها و حاکمیت نهادی است.' 
                : 'Refah Sanat Pardis corporate governance adheres strictly to transactional transparency, counterparty rigor, and institutional discipline.'}
            </span>
          </div>
          <span className="text-[#00C4CC] font-bold shrink-0">
            ISO 9001 / ISO 28000 GOVERNANCE
          </span>
        </div>

      </div>
    </section>
  );
};

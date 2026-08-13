import React from 'react';
import { Target, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface VisionMissionSectionProps {
  currentLang: Language;
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].visionMission;

  return (
    <section id="vision-mission" className="relative py-14 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-slate-800">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>[07] {t.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentLang === 'fa' ? 'آرمان و ماموریت راهبردی' : 'Vision & Mission Statement'}
            </h2>
          </div>
        </div>

        {/* Vision & Mission Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* OUR VISION */}
          <div className="p-6 bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                  INSTITUTIONAL MANDATE
                </span>
                <Compass className="w-4 h-4 text-slate-500" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                {t.visionTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-slate-700 rtl:border-r-2 rtl:border-l-0 pl-3 rtl:pr-3">
                "{t.visionText}"
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span>RSP STRATEGIC VISION</span>
              <span className="text-cyan-400 font-bold">GLOBAL HORIZON</span>
            </div>
          </div>

          {/* OUR MISSION */}
          <div className="p-6 bg-slate-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                  OPERATIONAL FRAMEWORK
                </span>
                <Target className="w-4 h-4 text-slate-500" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 font-mono uppercase tracking-wider">
                {t.missionTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans border-l-2 border-slate-700 rtl:border-r-2 rtl:border-l-0 pl-3 rtl:pr-3">
                "{t.missionText}"
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span>RSP OPERATIONAL MISSION</span>
              <span className="text-cyan-400 font-bold">EXECUTION DESK</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


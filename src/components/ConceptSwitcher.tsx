import React from 'react';
import { Palette, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { DesignConcept, Language } from '../types';

interface ConceptSwitcherProps {
  currentConcept: DesignConcept;
  onSelectConcept: (concept: DesignConcept) => void;
  currentLang: Language;
}

export const ConceptSwitcher: React.FC<ConceptSwitcherProps> = ({
  currentConcept,
  onSelectConcept,
  currentLang,
}) => {
  const concepts: {
    id: DesignConcept;
    num: string;
    labelEn: string;
    labelFa: string;
    colors: string[];
    tagEn: string;
    tagFa: string;
  }[] = [
    {
      id: 'dark-industrial',
      num: '01',
      labelEn: 'Dark Technical',
      labelFa: 'صنعتی تکنیكال',
      colors: ['#020617', '#0F172A', '#FFFFFF', '#00C4CC'],
      tagEn: 'Original Navy + Crisp White + Brand Cyan',
      tagFa: 'سرمه‌ای تیره + سفید + سیان صنعتی',
    },
    {
      id: 'soft-corporate',
      num: '02',
      labelEn: 'Soft Corporate Minimal',
      labelFa: 'شرکتی مینیمال و نرم',
      colors: ['#F7F7F5', '#FFFFFF', '#172033', '#B89B63'],
      tagEn: 'Warm Ivory #F7F7F5 + Charcoal #172033 + Bronze #B89B63',
      tagFa: 'عاجی گرم + زغالی + برنز مات',
    },
    {
      id: 'editorial-premium',
      num: '03',
      labelEn: 'Editorial Industrial Premium',
      labelFa: 'صنعتی سرمقاله‌ای و فاخر',
      colors: ['#11161C', '#E8E6E1', '#C7B58A'],
      tagEn: 'Graphite #11161C + Editorial Cream #E8E6E1 + Brass #C7B58A',
      tagFa: 'گرافیت تیره + کرم سرمقاله‌ای + برنجی متالیک',
    },
  ];

  const activeObj = concepts.find((c) => c.id === currentConcept) || concepts[0];

  return (
    <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-xl py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
        
        {/* Left Concept Info Label */}
        <div className="flex items-center gap-2 text-slate-300">
          <div className="p-1 bg-white text-slate-950 font-bold shrink-0 shadow-sm flex items-center justify-center">
            <Palette className="w-3.5 h-3.5 text-[#00C4CC]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">
              {currentLang === 'fa' ? 'جهت‌گیری‌های طراحی:' : 'DESIGN DIRECTIONS:'}
            </span>
            <span className="text-[10px] hidden md:inline-block px-2 py-0.5 bg-slate-900 border border-slate-800 text-[#00C4CC] font-bold">
              {currentLang === 'fa' ? activeObj.tagFa : activeObj.tagEn}
            </span>
          </div>
        </div>

        {/* Concept Switcher Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar pb-1 sm:pb-0">
          {concepts.map((c) => {
            const isActive = c.id === currentConcept;
            return (
              <button
                key={c.id}
                onClick={() => onSelectConcept(c.id)}
                className={`flex items-center gap-2 px-3 py-1.5 transition-all cursor-pointer whitespace-nowrap border text-[11px] font-bold tracking-wider uppercase ${
                  isActive
                    ? 'bg-white text-slate-950 border-white shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800'
                }`}
                title={currentLang === 'fa' ? c.labelFa : c.labelEn}
              >
                {/* Color preview dots */}
                <div className="flex items-center -space-x-1 rtl:space-x-reverse">
                  {c.colors.map((color, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-slate-700/80 inline-block"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <span>
                  [{c.num}] {currentLang === 'fa' ? c.labelFa : c.labelEn}
                </span>

                {isActive && <Check className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

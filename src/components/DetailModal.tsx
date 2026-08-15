import React from 'react';
import { X, Calendar, Clock, Tag, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../types';

interface DetailModalProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'legal' | 'insight';
  legalContent?: { title: string; body: string } | null;
  insightContent?: {
    date: string;
    category: string;
    title: string;
    summary: string;
    readTime: string;
  } | null;
  onInquire?: (contextNote: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  currentLang,
  isOpen,
  onClose,
  title,
  type,
  legalContent,
  insightContent,
  onInquire,
}) => {
  if (!isOpen) return null;
  const isFa = currentLang === 'fa';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1C2E]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#D5DFE8] rounded-[2px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#D5DFE8] bg-[#F4F7FA]">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 bg-[#004C80] text-white rounded-[1px]">
              {type === 'legal' ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            </span>
            <span className="font-mono text-xs font-bold text-[#004C80] uppercase tracking-wider">
              {type === 'legal' 
                ? (isFa ? 'سند حاکمیتی و حقوقی' : 'LEGAL & GOVERNANCE DOCUMENT')
                : (isFa ? 'یادداشت تحلیلی تجاری' : 'COMMERCIAL BRIEFING NOTE')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-[1px] bg-white border border-[#D5DFE8] text-[#5C667A] hover:text-[#0A1C2E] hover:border-[#004C80] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-[#0A1C2E] leading-relaxed">
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0A1C2E]">
            {title}
          </h3>

          {type === 'insight' && insightContent && (
            <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-[#D5DFE8] text-xs font-mono text-[#5C667A]">
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-[#004C80]/10 text-[#004C80] font-bold rounded-[1px]">
                <Tag className="w-3.5 h-3.5" />
                <span>{insightContent.category}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{insightContent.date}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{insightContent.readTime}</span>
              </span>
            </div>
          )}

          <div className="prose prose-slate max-w-none text-[#5C667A] text-sm sm:text-base leading-relaxed space-y-4">
            {type === 'legal' && legalContent && (
              <p>{legalContent.body}</p>
            )}

            {type === 'insight' && insightContent && (
              <>
                <p className="font-medium text-[#0A1C2E]">
                  {insightContent.summary}
                </p>
                <div className="p-4 bg-[#F4F7FA] border-l-4 border-[#004C80] rtl:border-l-0 rtl:border-r-4 text-xs font-mono text-[#0A1C2E] space-y-2">
                  <div className="font-bold uppercase text-[#004C80]">
                    {isFa ? 'نکات کلیدی برای فعالان بازرگانی:' : 'Key Takeaways for Trading Counterparties:'}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[#5C667A]">
                    <li>{isFa ? 'انطباق دقیق با شرایط اعتبارات اسنادی و رویه‌های UCP 600.' : 'Strict alignment with documentary credit terms and ICC UCP 600 protocols.'}</li>
                    <li>{isFa ? 'کاهش ریسک نوسانات ارزی از طریق ساختاردهی ارزی چندگانه.' : 'Mitigation of FX volatility via structured multi-currency clearance.'}</li>
                    <li>{isFa ? 'تضمین سلامت محموله با بازرسی‌های مستقل شخص ثالث نظیر SGS.' : 'Independent third-party inspection (SGS/BV) at loading terminals.'}</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#D5DFE8] bg-[#F4F7FA] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-[1px] bg-white border border-[#D5DFE8] hover:border-[#004C80] text-[#0A1C2E] text-xs font-mono font-bold uppercase transition-colors cursor-pointer"
          >
            {isFa ? 'بستن' : 'Close'}
          </button>

          {onInquire && (
            <button
              onClick={() => {
                onInquire(title);
                onClose();
              }}
              className="px-5 py-2 rounded-[1px] bg-[#004C80] hover:bg-[#003860] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <span>{isFa ? 'استعلام تجاری پیرامون این موضوع' : 'Submit Related Commercial Inquiry'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

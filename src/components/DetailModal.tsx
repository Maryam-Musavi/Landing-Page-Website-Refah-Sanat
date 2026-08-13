import React from 'react';
import { X } from 'lucide-react';
import { Language } from '../types';

interface DetailModalProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: 'legal';
  legalContent?: { title: string; body: string } | null;
  onInquire?: (contextNote: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  currentLang,
  isOpen,
  onClose,
  title,
  legalContent,
  onInquire
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          {legalContent && (
            <p>{legalContent.body}</p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            {currentLang === 'fa' ? 'بستن' : 'Close'}
          </button>

          {onInquire && (
            <button
              onClick={() => {
                onInquire(title);
                onClose();
              }}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              {currentLang === 'fa' ? 'ارسال استعلام مرتبط' : 'Submit Related Inquiry'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

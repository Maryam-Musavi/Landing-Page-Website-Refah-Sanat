import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Upload, CheckCircle2, Copy, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  prefilledNotes = ''
}) => {
  const t = translations[currentLang].contact;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryFocus: 'commodity-trading',
    message: '',
    fileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefCode, setSubmittedRefCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData(prev => ({
        ...prev,
        message: prev.message ? `${prev.message}\n${prefilledNotes}` : prefilledNotes
      }));
    }
  }, [prefilledNotes]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `RSP-TR-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRefCode(randomCode);
    }, 1200);
  };

  const copyRefCode = () => {
    if (submittedRefCode) {
      navigator.clipboard.writeText(submittedRefCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 bg-slate-900 text-white border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-slate-800">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>[08] {t.badge}</span>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Direct Office & Contact Info Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-slate-950 border border-slate-800 space-y-5">
              
              <div>
                <h3 className="text-lg font-bold text-white mb-1 font-mono uppercase tracking-wider">
                  {t.officeTitle}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {t.officeDesc}
                </p>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-slate-800 text-xs">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase mb-0.5">
                      {currentLang === 'fa' ? 'موقعیت عملیاتی:' : 'Operations Location:'}
                    </div>
                    <div className="text-slate-200 font-medium">{t.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase mb-0.5">
                      {currentLang === 'fa' ? 'تلفن تماس تجاری:' : 'Direct Phone Line:'}
                    </div>
                    <div className="text-slate-200 font-mono dir-ltr">{t.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase mb-0.5">
                      {currentLang === 'fa' ? 'پست الکترونیک:' : 'Email Address:'}
                    </div>
                    <div className="text-slate-200 font-mono">{t.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-mono text-[10px] uppercase mb-0.5">
                      {currentLang === 'fa' ? 'ساعات کاری:' : 'Working Hours:'}
                    </div>
                    <div className="text-slate-200 font-mono">{t.hours}</div>
                  </div>
                </div>

              </div>

              <div className="p-3 bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <span className="font-bold text-cyan-400">
                  {currentLang === 'fa' ? 'رفاه صنعت پردیس:' : 'Refah Sanat Pardis:'}
                </span>{' '}
                {currentLang === 'fa' 
                  ? 'تمامی استعلام‌های تجاری و ساختاردهی مالی ظرف ۲۴ ساعت کاری بررسی خواهند شد.'
                  : 'All commercial, commodity, and trade finance inquiries are logged and reviewed promptly.'}
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            
            {submittedRefCode ? (
              <div className="p-8 bg-slate-950 border border-slate-800 text-center space-y-6">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 font-mono">
                  <h3 className="text-xl font-bold text-white">{t.successMessage}</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    {currentLang === 'fa' 
                      ? 'تیم کارشناسی تجاری و مالی رفاه صنعت پردیس به زودی با شما تماس خواهند گرفت.'
                      : 'Our commercial team will evaluate the transaction overview and connect with you shortly.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-900 border border-slate-800 max-w-sm mx-auto flex items-center justify-between font-mono">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">{t.referenceCode}</div>
                    <div className="text-base font-bold text-cyan-400">{submittedRefCode}</div>
                  </div>
                  <button
                    onClick={copyRefCode}
                    className="p-2 bg-slate-950 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Reference Code"
                  >
                    {copiedCode ? <CheckCircle2 className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <button
                  onClick={() => {
                    setSubmittedRefCode(null);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      inquiryFocus: 'commodity-trading',
                      message: '',
                      fileName: ''
                    });
                  }}
                  className="px-6 py-2 bg-cyan-500 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors cursor-pointer border border-cyan-400"
                >
                  {currentLang === 'fa' ? 'ثبت استعلام تجاری جدید' : 'Start Another Conversation'}
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 bg-slate-950 border border-slate-800 space-y-4">
                
                <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>{t.formTitle}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      {t.nameLabel} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      {t.companyLabel} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.companyPlaceholder}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors dir-ltr font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors dir-ltr font-mono"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    {t.inquiryTypeLabel}
                  </label>
                  <select
                    name="inquiryFocus"
                    value={formData.inquiryFocus}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors"
                  >
                    <option value="commodity-trading">{currentLang === 'fa' ? 'تجارت بین‌المللی کالایی (Commodity Trading)' : 'International Commodity Trading'}</option>
                    <option value="trade-finance">{currentLang === 'fa' ? 'تامین مالی تجارت و زنجیره تامین (Trade Finance)' : 'Trade & Supply Chain Finance'}</option>
                    <option value="partnerships">{currentLang === 'fa' ? 'مشارکت‌های جهانی و سرمایه‌گذاری (Global Partnerships)' : 'Global Partnerships & Investment'}</option>
                    <option value="general">{currentLang === 'fa' ? 'گفتگوی عمومی تجاری (Commercial Conversation)' : 'General Commercial Inquiry'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    {t.messageLabel} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 text-white text-xs focus:border-cyan-500 focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                {/* File Upload Simulation */}
                <div>
                  <div className="relative border border-dashed border-slate-800 hover:border-slate-700 p-3 text-center cursor-pointer transition-colors bg-slate-900">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <div className="text-[11px] text-slate-400 font-mono">
                      {formData.fileName ? (
                        <span className="text-cyan-400">{formData.fileName}</span>
                      ) : (
                        <span>{currentLang === 'fa' ? 'بارگذاری اسناد مرتبط معامله (اختیاری)' : 'Attach Transaction Brief Document (Optional)'}</span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-cyan-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer border border-cyan-400"
                >
                  {isSubmitting ? (
                    <span>{t.submittingBtn}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 rtl:-scale-x-100 text-slate-950" />
                      <span>{t.submitBtn}</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};


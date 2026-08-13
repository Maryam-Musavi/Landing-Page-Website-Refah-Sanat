import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CompanySection } from './components/CompanySection';
import { LeadershipSection } from './components/LeadershipSection';
import { BusinessSection } from './components/BusinessSection';
import { ValueCreationSection } from './components/ValueCreationSection';
import { MarketsSection } from './components/MarketsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DetailModal } from './components/DetailModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Modal State for Legal Notices
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [legalContent, setLegalContent] = useState<{ title: string; body: string } | null>(null);

  // Pre-filled Note for Contact Form
  const [prefilledNotes, setPrefilledNotes] = useState('');

  // Synchronize document direction & language attributes on language toggle
  useEffect(() => {
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const handleOpenLegal = (title: string, body: string) => {
    setLegalContent({ title, body });
    setModalTitle(title);
    setModalOpen(true);
  };

  const scrollToContact = (contextNote?: string) => {
    if (contextNote) {
      setPrefilledNotes(contextNote);
    }
    const element = document.getElementById('contact');
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* 1. Navbar Navigation */}
      <Navbar 
        currentLang={currentLang} 
        onLanguageChange={handleLanguageChange} 
      />

      {/* Official Landing Page Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection currentLang={currentLang} />

        {/* Section 2: Company Introduction */}
        <CompanySection currentLang={currentLang} />

        {/* Section 3: Leadership & Management */}
        <LeadershipSection currentLang={currentLang} />

        {/* Section 4: Our Business (Commodity Trading, Trade Finance, Partnerships) */}
        <BusinessSection 
          currentLang={currentLang} 
          onInquire={(ctx) => scrollToContact(ctx)}
        />

        {/* Section 4: How We Create Value (5-Step Lifecycle Visualization) */}
        <ValueCreationSection currentLang={currentLang} />

        {/* Section 5: Our Markets (6 Regions Network Visualization) */}
        <MarketsSection currentLang={currentLang} />

        {/* Section 6: Why RSP? (5 Core Principles) */}
        <WhyUsSection currentLang={currentLang} />

        {/* Section 7: Vision & Mission */}
        <VisionMissionSection currentLang={currentLang} />

        {/* Section 8: Final CTA */}
        <FinalCtaSection currentLang={currentLang} />

        {/* Section 9: Contact Us */}
        <ContactSection 
          currentLang={currentLang} 
          prefilledNotes={prefilledNotes}
        />
      </main>

      {/* 10. Footer */}
      <Footer 
        currentLang={currentLang} 
        onOpenLegal={handleOpenLegal}
      />

      {/* Legal Dialog Modal */}
      <DetailModal
        currentLang={currentLang}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        type="legal"
        legalContent={legalContent}
        onInquire={(ctx) => scrollToContact(`Inquiry regarding: ${ctx}`)}
      />

    </div>
  );
}

export type Language = 'en' | 'fa';

export interface TranslationContent {
  brand: string;
  tagline: string;
  category: string;
  nav: {
    home: string;
    about: string;
    business: string;
    value: string;
    markets: string;
    whyUs: string;
    visionMission: string;
    contact: string;
    ctaBtn: string;
    langName: string;
  };
  hero: {
    badge: string;
    title: string;
    tagline: string;
    introParagraph1: string;
    introParagraph2: string;
    primaryCta: string;
    secondaryCta: string;
    intersectionTags: string[];
  };
  company: {
    badge: string;
    title: string;
    subtitle: string;
    aboutText1: string;
    aboutText2: string;
    intersectionItems: {
      title: string;
      desc: string;
    }[];
  };
  business: {
    badge: string;
    title: string;
    subtitle: string;
    commodityTrading: {
      title: string;
      desc: string;
      items: string[];
      footnote: string;
    };
    tradeFinance: {
      title: string;
      desc: string;
      solutions: string[];
      footnote: string;
    };
    partnerships: {
      title: string;
      desc: string;
      connectors: string[];
      footnote: string;
    };
  };
  valueCreation: {
    badge: string;
    title: string;
    subtitle: string;
    leadText: string;
    lifecycleSteps: {
      step: string;
      title: string;
      desc: string;
    }[];
    lifecycleExplanation: string;
  };
  markets: {
    badge: string;
    title: string;
    subtitle: string;
    leadText: string;
    regions: {
      id: string;
      name: string;
      desc: string;
      code: string;
    }[];
    closingText: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    principles: {
      id: string;
      title: string;
      desc: string;
      tag: string;
    }[];
  };
  visionMission: {
    badge: string;
    visionTitle: string;
    visionText: string;
    missionTitle: string;
    missionText: string;
  };
  finalCta: {
    brandName: string;
    tagline: string;
    category: string;
    invitation: string;
    primaryCta: string;
    secondaryCta: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    inquiryTypeLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successMessage: string;
    referenceCode: string;
    officeTitle: string;
    officeDesc: string;
    address: string;
    email: string;
    phone: string;
    hours: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    positioningTitle: string;
    rights: string;
    termsTitle: string;
    privacyTitle: string;
  };
}

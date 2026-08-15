export type Language = 'en' | 'fa';

export type DesignConcept = 'dark-industrial' | 'soft-corporate' | 'editorial-premium';

export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  brand: string;
  tagline: string;
  category: string;
  nav: {
    home: string;
    about: string;
    leadership: string;
    business: string;
    value: string;
    markets: string;
    stats: string;
    insights: string;
    faq: string;
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
  stats: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      value: string;
      label: string;
      sublabel: string;
    }[];
  };
  leadership: {
    badge: string;
    title: string;
    subtitle: string;
    members: {
      id: string;
      badgeNum: string;
      name: string;
      role: string;
      bio: string;
      monogram: string;
      initialsFa: string;
      image: string;
      isCeo?: boolean;
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
      coords: { x: number; y: number };
      city: string;
      cityFa: string;
    }[];
    closingText: string;
  };
  certifications: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      code: string;
      title: string;
      desc: string;
    }[];
  };
  insights: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    items: {
      id: string;
      date: string;
      category: string;
      title: string;
      summary: string;
      readTime: string;
    }[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      question: string;
      answer: string;
      category: string;
    }[];
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
    officeTitle: string;
    officeDesc: string;
    address: string;
    email: string;
    phone: string;
    hours: string;
    complianceTitle: string;
    complianceText: string;
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

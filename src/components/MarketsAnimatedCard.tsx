import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Radio, 
  Activity, 
  ArrowUpRight, 
  Compass, 
  Anchor, 
  Layers, 
  ShieldCheck, 
  TrendingUp,
  Navigation
} from 'lucide-react';
import { Language } from '../types';

interface RegionData {
  id: string;
  name: string;
  desc: string;
  code: string;
}

interface MarketsAnimatedCardProps {
  currentLang: Language;
  selectedRegion: RegionData;
  closingText: string;
  onInquire: (note?: string) => void;
  onSelectRegion?: (id: string) => void;
}

interface RegionMeta {
  hubs: string[];
  cx: number;
  cy: number;
  dirFa: string;
  dirEn: string;
  mainTitleFa: string;
  mainTitleEn: string;
  subTitleFa: string;
  subTitleEn: string;
  flows: string[];
  transit: string;
  clearanceRate: string;
  liquidityTier: string;
}

// Center of SVG canvas (540x310) is (270, 155) where TEHRAN is positioned as the central nexus
const TEHRAN_CENTER = { 
  x: 270, 
  y: 155, 
  name: 'TEHRAN (IRAN)', 
  nameFa: 'تهران (ایران)' 
};

// Geographically accurate positions relative to Tehran (Center: 270, 155):
// - North (شمال): Caspian & Central Asia (خزر و آسیای میانه) at (300, 48)
// - North-West (شمال‌غرب): Turkey & Eurasia (ترکیه و اوراسیا) at (165, 100)
// - West / Far North-West (غرب / شمال‌غرب دور): Europe (اروپا - هلند، سوئیس، آلمان) at (75, 55)
// - South (جنوب): Middle East & Persian Gulf (خلیج فارس، امارات، دبی) at (250, 252)
// - South-East (جنوب‌شرق): South Asia & Indian Ocean (هند، پاکستان، بمبئی) at (395, 235)
// - East / Far East (شرق و شرق آسیا): East & Southeast Asia (چین، شانگهای، سنگاپور) at (470, 125)
const REGION_METADATA: Record<string, RegionMeta> = {
  caspian: {
    hubs: ['Bandar Anzali / Amirabad', 'Aktau Port', 'Baku Maritime', 'Turkmenbashi', 'Tashkent Rail Hub'],
    cx: 300,
    cy: 48,
    dirFa: 'شمال // خزر و آسیای میانه',
    dirEn: 'NORTH // CASPIAN BASIN',
    mainTitleFa: 'حوزه خزر و آسیای میانه',
    mainTitleEn: 'CASPIAN & CENTRAL ASIA',
    subTitleFa: 'باکو • قزاقستان • تاشکند',
    subTitleEn: 'Baku • Aktau • Tashkent',
    flows: ['Agricultural Grain & Wheat', 'Industrial Fertilizers & Sulfur', 'Steel Billets & Coils', 'Bulk Minerals'],
    transit: '3-5 Days',
    clearanceRate: '98.9%',
    liquidityTier: 'Regional Multi-clearing (USD/CNY/EUR)',
  },
  turkey: {
    hubs: ['Istanbul Gateway', 'Mersin Mediterranean Port', 'Izmir Terminal', 'Ankara Logistics Hub', 'Trabzon Port'],
    cx: 172,
    cy: 112,
    dirFa: 'شمال‌غرب // ترکیه و بالکان',
    dirEn: 'NORTH-WEST // TURKEY GATEWAY',
    mainTitleFa: 'ترکیه و دروازه اوراسیا',
    mainTitleEn: 'TURKEY & EURASIA',
    subTitleFa: 'استانبول • مرسین • آنکارا',
    subTitleEn: 'Istanbul • Mersin • Ankara',
    flows: ['Polymer Feedstocks', 'Industrial Metals & Ingots', 'Chemical Raw Materials', 'Multimodal Transit Cargo'],
    transit: '3-6 Days',
    clearanceRate: '99.2%',
    liquidityTier: 'Eurasia Gateway Clearing (EUR/USD/TRY)',
  },
  europe: {
    hubs: ['Rotterdam Gateway', 'Antwerp Port', 'Genoa Mediterranean', 'Hamburg Hub', 'Geneva Trade Desk'],
    cx: 62,
    cy: 52,
    dirFa: 'غرب // اروپا و هاب‌های تجاری',
    dirEn: 'WEST // EUROPEAN DESKS',
    mainTitleFa: 'اروپا و هاب‌های بازرگانی',
    mainTitleEn: 'EUROPE LOGISTICS',
    subTitleFa: 'روتردام • ژنو • آنتورپ',
    subTitleEn: 'Rotterdam • Geneva • Antwerp',
    flows: ['Trade Credit Facilities', 'Multilateral SBLC Clearing', 'Specialized Chemistry & Catalysts', 'High-Tech Industrial Equipment'],
    transit: '5-9 Days',
    clearanceRate: '99.9%',
    liquidityTier: 'Institutional Banking LC / SBLC (EUR/USD)',
  },
  mideast: {
    hubs: ['Bandar Abbas Port', 'Dubai Hub (UAE)', 'Salalah Maritime', 'Jeddah Terminal', 'Doha Hub'],
    cx: 250,
    cy: 252,
    dirFa: 'جنوب // خلیج فارس و خاورمیانه',
    dirEn: 'SOUTH // PERSIAN GULF & GCC',
    mainTitleFa: 'خلیج فارس و خاورمیانه',
    mainTitleEn: 'PERSIAN GULF & MID-EAST',
    subTitleFa: 'دبی (امارات) • صلاله • جبل علی',
    subTitleEn: 'Dubai (UAE) • Salalah • Jebel Ali',
    flows: ['Petrochemical Polymers', 'Granular Urea 46%', 'Base Oils & Bitumen', 'Refined Fuel & Hydrocarbons'],
    transit: '2-4 Days',
    clearanceRate: '99.4%',
    liquidityTier: 'Tier-1 Multicurrency (USD/EUR/AED)',
  },
  southasia: {
    hubs: ['Chabahar Port Corridor', 'Nhava Sheva (Mumbai)', 'Mundra Terminal', 'Karachi Seaport', 'Colombo Transshipment'],
    cx: 395,
    cy: 235,
    dirFa: 'جنوب‌شرق // هند و جنوب آسیا',
    dirEn: 'SOUTH-EAST // INDIA & S. ASIA',
    mainTitleFa: 'جنوب آسیا و اقیانوس هند',
    mainTitleEn: 'SOUTH ASIA & INDIA',
    subTitleFa: 'بمبئی • ناوا شیوا • کراچی',
    subTitleEn: 'Mumbai • Nhava Sheva • Karachi',
    flows: ['Bitumen & Petrochemicals', 'Agricultural Rice & Grains', 'Granular Urea', 'Industrial Construction Steel'],
    transit: '4-7 Days',
    clearanceRate: '99.1%',
    liquidityTier: 'Direct Trade Credit (USD/AED/INR)',
  },
  eastasia: {
    hubs: ['Shanghai Maritime Gateway', 'Singapore Strategic Hub', 'Ningbo-Zhoushan Port', 'Qingdao Terminal', 'Busan Hub'],
    cx: 470,
    cy: 125,
    dirFa: 'شرق // چین و شرق آسیا',
    dirEn: 'EAST // CHINA & SE ASIA',
    mainTitleFa: 'شرق و جنوب‌شرقی آسیا',
    mainTitleEn: 'EAST ASIA & CHINA',
    subTitleFa: 'شانگهای • سنگاپور • نینگبو',
    subTitleEn: 'Shanghai • Singapore • Ningbo',
    flows: ['Bulk Methanol & Aromatics', 'High-Grade Polyethylene & Polypropylene', 'Specialized Chemical Feedstocks', 'Containerized Freight'],
    transit: '7-12 Days',
    clearanceRate: '99.7%',
    liquidityTier: 'Deep Liquidity Settlement (USD/CNY/AED)',
  },
};

export const MarketsAnimatedCard: React.FC<MarketsAnimatedCardProps> = ({
  currentLang,
  selectedRegion,
  closingText,
  onInquire,
  onSelectRegion,
}) => {
  const isFa = currentLang === 'fa';
  const meta = REGION_METADATA[selectedRegion.id] || REGION_METADATA.mideast;

  return (
    <div className="relative bg-[#0A1C2E] text-white border border-[#1E293B] p-6 sm:p-8 space-y-6 rounded-[1px] shadow-xl overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-[#004C80]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header & Live Telemetry Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1E293B] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold uppercase tracking-wider">
            RADAR CORRIDOR TELEMETRY // {selectedRegion.code}
          </span>
          <span className="px-2 py-0.5 bg-[#1E293B] text-slate-300 rounded-[1px] text-[10px]">
            GEOGRAPHIC ALIGNMENT: 100%
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>BEACON FREQ: 4.88 GHz</span>
          </div>

          <span className="text-emerald-400 flex items-center gap-1.5 font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>STATUS: ACTIVE TRADE DESK</span>
          </span>
        </div>
      </div>

      {/* Interactive Animated SVG Radar & Global Trade Network */}
      <div className="relative z-10 bg-[#071320] border border-[#1E293B] rounded-[1px] p-3 sm:p-5 overflow-hidden">
        
        {/* Radar Corner Coordinates & Compass Info */}
        <div className="absolute top-2.5 left-3 text-[10px] font-mono text-sky-400 tracking-wider pointer-events-none flex flex-wrap items-center gap-2 z-20">
          <span className="hidden md:inline">LAT 35.6892°N // LNG 51.3890°E</span>
          <span className="text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 border border-amber-400/30 rounded-[1px]">
            {isFa ? 'مرکز جغرافیایی: تهران (ایران)' : 'CENTER: TEHRAN (IRAN)'}
          </span>
        </div>

        {/* Live Radar Tag Top Right */}
        <div className="absolute top-2.5 right-3 text-[10px] font-mono text-emerald-400/90 font-bold flex items-center gap-1.5 pointer-events-none z-20">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>RADAR: 24/7 ACTIVE</span>
        </div>

        {/* SVG Canvas with Animated Trade Routes & Geographically Accurate Hub Beacons */}
        <svg 
          viewBox="0 0 540 310" 
          className="w-full h-64 sm:h-80 md:h-96 select-none"
        >
          <defs>
            {/* Fine Radar Grid Pattern */}
            <pattern id="radarGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E293B" strokeWidth="0.6" strokeDasharray="1 3" />
            </pattern>
            
            {/* Linear Gradient for Routes */}
            <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
            </linearGradient>

            {/* Glowing filter for selected nodes */}
            <filter id="glowEffect" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gold glow filter for Tehran */}
            <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid Background */}
          <rect width="540" height="310" fill="url(#radarGrid)" />

          {/* ======================================================== */}
          {/* RADAR RETICLE & DISTANCE RINGS CENTERED ON TEHRAN (270, 155) */}
          {/* ======================================================== */}

          {/* Cardinal Axes across the Canvas */}
          <line x1="270" y1="12" x2="270" y2="298" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.35" />
          <line x1="15" y1="155" x2="525" y2="155" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.35" />
          <line x1="90" y1="35" x2="450" y2="275" stroke="#0284c7" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2" />
          <line x1="90" y1="275" x2="450" y2="35" stroke="#0284c7" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.2" />

          {/* Concentric Range Rings Centered on Tehran */}
          {/* 1,000 KM Ring */}
          <circle cx="270" cy="155" r="50" fill="none" stroke="#0284c7" strokeWidth="0.7" strokeDasharray="2 3" opacity="0.4" />
          <text x="274" y="108" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" opacity="0.6">1,000 KM</text>

          {/* 2,500 KM Ring with pulse */}
          <motion.circle
            cx="270"
            cy="155"
            r="95"
            fill="none"
            stroke="#0284c7"
            strokeWidth="0.7"
            strokeDasharray="3 5"
            animate={{ opacity: [0.25, 0.55, 0.25] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="274" y="63" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" opacity="0.6">2,500 KM</text>

          {/* 5,000 KM Ring */}
          <circle cx="270" cy="155" r="140" fill="none" stroke="#0284c7" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.3" />
          <text x="274" y="22" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" opacity="0.6">5,000 KM</text>

          {/* 8,000 KM Outer Reach Ring */}
          <circle cx="270" cy="155" r="185" fill="none" stroke="#0284c7" strokeWidth="0.4" strokeDasharray="5 8" opacity="0.2" />

          {/* Cardinal Direction Indicators */}
          {/* North (شمال) */}
          <g transform="translate(270, 16)">
            <rect x="-18" y="-10" width="36" height="14" fill="#0A1C2E" stroke="#0284c7" strokeWidth="0.8" rx="1" />
            <text x="0" y="0" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              ▲ N ({isFa ? 'شمال' : 'NORTH'})
            </text>
          </g>

          {/* South (جنوب) */}
          <g transform="translate(270, 302)">
            <rect x="-18" y="-10" width="36" height="14" fill="#0A1C2E" stroke="#0284c7" strokeWidth="0.8" rx="1" />
            <text x="0" y="0" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              ▼ S ({isFa ? 'جنوب' : 'SOUTH'})
            </text>
          </g>

          {/* East (شرق) */}
          <g transform="translate(520, 155)">
            <rect x="-16" y="-7" width="32" height="14" fill="#0A1C2E" stroke="#0284c7" strokeWidth="0.8" rx="1" />
            <text x="0" y="3" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              E ▶ ({isFa ? 'شرق' : 'EAST'})
            </text>
          </g>

          {/* West (غرب) */}
          <g transform="translate(20, 155)">
            <rect x="-16" y="-7" width="32" height="14" fill="#0A1C2E" stroke="#0284c7" strokeWidth="0.8" rx="1" />
            <text x="0" y="3" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              ◀ W ({isFa ? 'غرب' : 'WEST'})
            </text>
          </g>

          {/* Radar Sweep Rotating Beam Centered on Tehran */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '270px 155px' }}
          >
            <line
              x1="270"
              y1="155"
              x2="270"
              y2="18"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeOpacity="0.8"
            />
            {/* Radar Beam Sector Glow */}
            <path
              d="M 270 155 L 270 18 A 137 137 0 0 1 367 58 Z"
              fill="rgba(56, 189, 248, 0.12)"
            />
          </motion.g>

          {/* ======================================================== */}
          {/* PERMANENT RADIAL TRADE CORRIDORS FROM TEHRAN TO HUBS */}
          {/* ======================================================== */}
          {Object.entries(REGION_METADATA).map(([key, rMeta]) => {
            const isSelected = key === selectedRegion.id;
            const midX = (270 + rMeta.cx) / 2;
            const midY = (155 + rMeta.cy) / 2 - (rMeta.cy < 155 ? 12 : -12);
            const pathD = `M 270 155 Q ${midX} ${midY} ${rMeta.cx} ${rMeta.cy}`;

            return (
              <g key={`corridor-${key}`}>
                {/* Outer halo line for selected route */}
                {isSelected && (
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth={4}
                    opacity={0.3}
                  />
                )}

                {/* Base corridor path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isSelected ? '#38bdf8' : '#334155'}
                  strokeWidth={isSelected ? 2.2 : 1.1}
                  strokeDasharray={isSelected ? '5 3' : '3 4'}
                  opacity={isSelected ? 1 : 0.55}
                />

                {/* Animated glowing cargo/trade particle along corridor */}
                <motion.circle
                  r={isSelected ? 4 : 2.5}
                  fill={isSelected ? '#38bdf8' : '#f59e0b'}
                  filter={isSelected ? 'url(#glowEffect)' : undefined}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: isSelected ? 2.2 : 4.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    offsetPath: `path('${pathD}')`,
                  }}
                />
              </g>
            );
          })}

          {/* ======================================================== */}
          {/* REGIONAL COUNTRY / HUB NODES WITH LARGE, CRISP LABELS */}
          {/* ======================================================== */}
          {Object.entries(REGION_METADATA).map(([key, rMeta]) => {
            const isSelected = key === selectedRegion.id;
            const title = isFa ? rMeta.mainTitleFa : rMeta.mainTitleEn;
            const subtitle = isFa ? rMeta.subTitleFa : rMeta.subTitleEn;
            const dirTag = isFa ? rMeta.dirFa : rMeta.dirEn;

            // Positioning text box smartly relative to node point
            // Depending on position on canvas to prevent badge overflow:
            let badgeX = rMeta.cx;
            let badgeY = rMeta.cy;
            let textAnchor = 'middle';
            let rectX = -54;
            let rectY = -23;
            const rectW = 108;
            const rectH = 24;

            if (key === 'europe') {
              // Far Top-Left (West/North-West)
              badgeX = 62;
              badgeY = 30;
            } else if (key === 'turkey') {
              // North-West Gateway
              badgeX = rMeta.cx + 2;
              badgeY = rMeta.cy - 16;
            } else if (key === 'caspian') {
              // Top-Center/Right (North)
              badgeX = rMeta.cx + 5;
              badgeY = rMeta.cy - 12;
            } else if (key === 'eastasia') {
              // Far East (Right)
              badgeX = rMeta.cx - 52;
              badgeY = rMeta.cy - 10;
            } else if (key === 'southasia') {
              // South-East (Bottom-Right)
              badgeX = rMeta.cx + 5;
              badgeY = rMeta.cy + 18;
            } else if (key === 'mideast') {
              // South (Bottom)
              badgeX = rMeta.cx - 10;
              badgeY = rMeta.cy + 18;
            }

            return (
              <g 
                key={`hub-${key}`} 
                className="cursor-pointer group"
                onClick={() => onSelectRegion?.(key)}
              >
                {/* Outer halo beacon when selected */}
                {isSelected && (
                  <>
                    <motion.circle
                      cx={rMeta.cx}
                      cy={rMeta.cy}
                      r="16"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.8"
                      animate={{
                        r: [8, 26],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                    <circle
                      cx={rMeta.cx}
                      cy={rMeta.cy}
                      r="10"
                      fill="rgba(56, 189, 248, 0.2)"
                    />
                  </>
                )}

                {/* Hub Node Dot */}
                <circle
                  cx={rMeta.cx}
                  cy={rMeta.cy}
                  r={isSelected ? 7 : 5}
                  fill={isSelected ? '#38bdf8' : '#64748b'}
                  stroke={isSelected ? '#ffffff' : '#0A1C2E'}
                  strokeWidth={2}
                  filter={isSelected ? 'url(#glowEffect)' : undefined}
                />
                
                {/* Node inner pip */}
                <circle
                  cx={rMeta.cx}
                  cy={rMeta.cy}
                  r={isSelected ? 2.5 : 1.8}
                  fill="#ffffff"
                />

                {/* Connecting hairline from node to badge */}
                <line
                  x1={rMeta.cx}
                  y1={rMeta.cy}
                  x2={badgeX}
                  y2={badgeY}
                  stroke={isSelected ? '#38bdf8' : '#475569'}
                  strokeWidth={0.8}
                  strokeDasharray="1 2"
                  opacity={0.7}
                />

                {/* Prominent High-Contrast Country/Region Badge Card */}
                <g transform={`translate(${badgeX}, ${badgeY})`}>
                  {/* Badge Background Plate */}
                  <rect
                    x={rectX}
                    y={rectY}
                    width={rectW}
                    height={rectH}
                    fill={isSelected ? '#092338' : '#071524'}
                    stroke={isSelected ? '#38bdf8' : '#334155'}
                    strokeWidth={isSelected ? 1.5 : 0.9}
                    rx="2"
                    filter={isSelected ? 'url(#glowEffect)' : undefined}
                    className="transition-colors duration-200 group-hover:stroke-sky-400"
                  />

                  {/* Directional Tag / Region Header */}
                  <text
                    x="0"
                    y={rectY + 6.5}
                    fill={isSelected ? '#38bdf8' : '#94a3b8'}
                    fontSize="5.2"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                    letterSpacing="0.2"
                  >
                    {dirTag}
                  </text>

                  {/* Main Country / Region Name */}
                  <text
                    x="0"
                    y={rectY + 14.5}
                    fill={isSelected ? '#ffffff' : '#e2e8f0'}
                    fontSize="6.8"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="select-none"
                  >
                    {title}
                  </text>
                </g>
              </g>
            );
          })}

          {/* ======================================================== */}
          {/* TEHRAN (IRAN) - PROMINENT CENTRAL EPICENTER AT (270, 155) */}
          {/* ======================================================== */}
          <g>
            {/* Ambient Multi-layer Pulse Rings for Tehran Center */}
            <motion.circle
              cx="270"
              cy="155"
              r="20"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.2"
              animate={{
                r: [10, 36],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.circle
              cx="270"
              cy="155"
              r="26"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.2"
              strokeDasharray="2 3"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: '270px 155px' }}
            />

            {/* Central Diamond / Reticle for Tehran */}
            <rect
              x="262"
              y="147"
              width="16"
              height="16"
              fill="#f59e0b"
              filter="url(#goldGlow)"
              transform="rotate(45 270 155)"
            />
            <circle
              cx="270"
              cy="155"
              r="4.5"
              fill="#ffffff"
            />
            <circle
              cx="270"
              cy="155"
              r="2"
              fill="#0A1C2E"
            />

            {/* Tehran Central Label Badge */}
            <g transform="translate(270, 186)">
              <rect
                x="-45"
                y="-9"
                width="90"
                height="17"
                fill="#0A1C2E"
                stroke="#f59e0b"
                strokeWidth="1.2"
                rx="2"
                filter="url(#goldGlow)"
              />
              <text
                x="0"
                y="3"
                fill="#fbbf24"
                fontSize="7"
                fontFamily="sans-serif"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.3"
              >
                {isFa ? '★ تهران (ایران - کانون مرکزی)' : '★ TEHRAN (IRAN - NEXUS)'}
              </text>
            </g>
          </g>
        </svg>

        {/* Bottom Interactive Legend on Radar Screen */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#1E293B] text-[11px] font-mono text-slate-300">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-[1px] bg-amber-400 inline-block rotate-45" />
              <span>TEHRAN (CENTRAL NEXUS)</span>
            </span>
            <span className="flex items-center gap-1.5 text-sky-400 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" />
              <span>ACTIVE CORRIDOR</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>CLEARING HUB</span>
            </span>
          </div>
          <span className="text-slate-400 text-xs font-sans">
            {isFa ? '💡 جهت انتخاب یا مشاهده جزئیات هر منطقه، روی نشانگر آن در نقشه کلیک کنید.' : '💡 Click on any regional node on the radar to view detailed telemetry.'}
          </span>
        </div>

      </div>

      {/* Animated Region Details via AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedRegion.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="space-y-5"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase">
                [{selectedRegion.code}]
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {selectedRegion.name}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed text-justify">
              {selectedRegion.desc}
            </p>
          </div>

          {/* Primary Port & Logistics Hubs Chips */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-sky-300 font-bold uppercase flex items-center gap-1.5">
              <Anchor className="w-3.5 h-3.5" />
              <span>{isFa ? 'هاب‌ها و ترمینال‌های بندری راهبردی' : 'STRATEGIC PORT & TERMINAL HUBS'}:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {meta.hubs.map((hub, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.04, backgroundColor: '#1E3A5F' }}
                  className="px-2.5 py-1 bg-[#132A42] border border-[#1E293B] text-[11px] font-mono text-slate-200 rounded-[1px] cursor-default transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-sky-400" />
                  <span>{hub}</span>
                </motion.span>
              ))}
            </div>
          </div>

          {/* Key Commodity Inflow/Outflow */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-emerald-300 font-bold uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{isFa ? 'محموله‌ها و جریان‌های اصلی کالا' : 'PRIMARY COMMODITY FLOWS'}:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {meta.flows.map((flow, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 bg-[#071320] border border-[#1E293B] text-xs font-sans text-slate-300 flex items-center justify-between rounded-[1px]"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
                    <span>{flow}</span>
                  </span>
                  <span className="text-[10px] font-mono text-sky-400 font-bold">FOB/CIF</span>
                </div>
              ))}
            </div>
          </div>

          {/* Settlement Instruments & Performance Metrics */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-3.5 bg-[#132A42] border border-[#1E293B] rounded-[1px] space-y-1">
              <div className="text-[10px] text-[#94A3B8] uppercase">SETTLEMENT INSTRUMENTS</div>
              <div className="text-white font-bold text-sm">LC / CAD / SBLC / USANCE</div>
              <div className="text-[10px] text-emerald-400 font-sans">
                {isFa ? 'اعتبارات اسنادی دیداری و مدت‌دار' : 'Sight & Deferred Letter of Credit'}
              </div>
            </div>

            <div className="p-3.5 bg-[#132A42] border border-[#1E293B] rounded-[1px] space-y-1">
              <div className="text-[10px] text-[#94A3B8] uppercase">CLEARING CURRENCIES</div>
              <div className="text-sky-400 font-bold text-sm">USD / EUR / AED / CNY</div>
              <div className="text-[10px] text-slate-400 font-sans">
                {isFa ? 'تسویه ارزی چندگانه و پوشش نوسان' : 'Multi-currency hedging & settlement'}
              </div>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Action CTA & Closing Text */}
      <div className="pt-4 border-t border-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-slate-300 font-sans max-w-md leading-relaxed text-justify">
          {closingText}
        </p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onInquire(`Market Inquiry: ${selectedRegion.name} (${selectedRegion.code})`)}
          className="bg-sky-500 hover:bg-sky-400 text-[#0A1C2E] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-[1px] transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
        >
          <span>{isFa ? 'استعلام کریدور' : 'CORRIDOR INQUIRY'}</span>
          <ArrowUpRight className="w-4 h-4 rtl:rotate-90" />
        </motion.button>
      </div>

    </div>
  );
};

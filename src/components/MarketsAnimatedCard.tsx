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
  TrendingUp 
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
}

interface RegionMeta {
  hubs: string[];
  cx: number;
  cy: number;
  routes: Array<{ x: number; y: number; label: string }>;
  flows: string[];
  transit: string;
  clearanceRate: string;
  liquidityTier: string;
}

// Center of SVG canvas (500x280) is (250, 140) where TEHRAN is positioned as the central nexus
const TEHRAN_CENTER = { x: 250, y: 140, name: 'TEHRAN (HQ)', nameFa: 'تهران (مرکز فرماندهی)' };

const REGION_METADATA: Record<string, RegionMeta> = {
  me: {
    hubs: ['Dubai (UAE)', 'Bandar Abbas', 'Salalah Port', 'Jeddah', 'Doha Hub'],
    cx: 235,
    cy: 185,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 105, y: 75, label: 'EUR' },
      { x: 365, y: 195, label: 'SA' },
      { x: 435, y: 125, label: 'EA' },
      { x: 130, y: 215, label: 'AF' },
    ],
    flows: ['Crude & Hydrocarbons', 'Petrochemical Polymers', 'Granular Urea 46%', 'Base Metals'],
    transit: '2-4 Days',
    clearanceRate: '99.4%',
    liquidityTier: 'Tier-1 Multicurrency (USD/EUR/AED)',
  },
  ca: {
    hubs: ['Almaty Hub', 'Tashkent', 'Baku Port', 'Aktau Maritime', 'Ashgabat'],
    cx: 310,
    cy: 75,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 235, y: 185, label: 'ME' },
      { x: 105, y: 75, label: 'EUR' },
      { x: 435, y: 125, label: 'EA' },
    ],
    flows: ['Sulfur & Fertilizers', 'Industrial Minerals', 'Metals & Billets', 'Grain Corridors'],
    transit: '3-6 Days',
    clearanceRate: '98.8%',
    liquidityTier: 'Regional Multi-clearing (USD/CNY)',
  },
  sa: {
    hubs: ['Nhava Sheva (Mumbai)', 'Mundra Port', 'Karachi', 'Chittagong', 'Colombo Hub'],
    cx: 365,
    cy: 195,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 235, y: 185, label: 'ME' },
      { x: 435, y: 125, label: 'EA' },
      { x: 130, y: 215, label: 'AF' },
    ],
    flows: ['Bitumen & Petrochemicals', 'Agricultural Grain', 'Chemical Feedstocks', 'Steel Coils'],
    transit: '4-7 Days',
    clearanceRate: '99.1%',
    liquidityTier: 'Direct Trade Credit (USD/AED/INR)',
  },
  ea: {
    hubs: ['Shanghai Maritime', 'Ningbo-Zhoushan', 'Singapore Hub', 'Qingdao', 'Busan'],
    cx: 435,
    cy: 125,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 235, y: 185, label: 'ME' },
      { x: 365, y: 195, label: 'SA' },
      { x: 105, y: 75, label: 'EUR' },
    ],
    flows: ['High-Grade Polymers', 'Methanol & Aromatics', 'Bulk Petrochemicals', 'Industrial Feedstocks'],
    transit: '7-12 Days',
    clearanceRate: '99.7%',
    liquidityTier: 'Deep Liquidity Settlement (USD/CNY)',
  },
  af: {
    hubs: ['Mombasa Port', 'Durban Hub', 'Alexandria', 'Dar es Salaam', 'Djibouti Terminal'],
    cx: 130,
    cy: 215,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 235, y: 185, label: 'ME' },
      { x: 365, y: 195, label: 'SA' },
      { x: 105, y: 75, label: 'EUR' },
    ],
    flows: ['Granular Urea & Fertilizer', 'Food & Agriculture Rice', 'Rebar & Steel', 'Refined Fuels'],
    transit: '6-10 Days',
    clearanceRate: '98.5%',
    liquidityTier: 'Structured Trade Finance & LC (USD/EUR)',
  },
  eu: {
    hubs: ['Rotterdam Gateway', 'Antwerp Port', 'Genoa', 'Istanbul Port', 'Hamburg Hub'],
    cx: 105,
    cy: 75,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 235, y: 185, label: 'ME' },
      { x: 310, y: 75, label: 'CA' },
      { x: 435, y: 125, label: 'EA' },
    ],
    flows: ['Trade Credit Facilities', 'Multilateral SBLC Clearing', 'Specialized Chemistry', 'Industrial Equipment'],
    transit: '5-9 Days',
    clearanceRate: '99.9%',
    liquidityTier: 'Institutional Banking LC / SBLC (EUR/USD)',
  },
};

export const MarketsAnimatedCard: React.FC<MarketsAnimatedCardProps> = ({
  currentLang,
  selectedRegion,
  closingText,
  onInquire,
}) => {
  const isFa = currentLang === 'fa';
  const meta = REGION_METADATA[selectedRegion.id] || REGION_METADATA.me;

  return (
    <div className="relative bg-[#0A1C2E] text-white border border-[#1E293B] p-6 sm:p-8 space-y-6 rounded-[1px] shadow-xl overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-[#004C80]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header & Live Telemetry Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1E293B] font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold uppercase tracking-wider">
            CORRIDOR TELEMETRY // {selectedRegion.code}
          </span>
          <span className="text-[10px] px-2 py-0.5 bg-[#132A42] border border-[#1E293B] text-slate-300 rounded-[1px]">
            {meta.transit} AVG TRANSIT
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Animated soundwave bars */}
          <div className="flex items-end gap-1 h-3.5">
            {[40, 90, 60, 100, 75, 45].map((h, i) => (
              <motion.span
                key={i}
                className="w-0.5 bg-emerald-400 rounded-full"
                animate={{ height: ['20%', `${h}%`, '30%'] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          <span className="text-emerald-400 flex items-center gap-1.5 font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>STATUS: ACTIVE DESK</span>
          </span>
        </div>
      </div>

      {/* Interactive Animated SVG Radar & Global Trade Network */}
      <div className="relative z-10 bg-[#071320] border border-[#1E293B] rounded-[1px] p-4 overflow-hidden">
        
        {/* Radar Corner Coordinates */}
        <div className="absolute top-2 left-3 text-[9px] font-mono text-sky-400/80 tracking-widest pointer-events-none flex items-center gap-2">
          <span>LAT 35.6892°N // LNG 51.3890°E</span>
          <span className="text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 border border-amber-400/30 rounded-[1px]">
            {isFa ? 'مرکز: تهران (دفتر مرکزی)' : 'CENTER: TEHRAN (HQ)'}
          </span>
        </div>
        <div className="absolute top-2 right-3 text-[9px] font-mono text-emerald-400/80 font-bold flex items-center gap-1 pointer-events-none">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>RADAR: 24/7 LIVE</span>
        </div>

        {/* SVG Canvas with Animated Trade Routes & Hub Beacons */}
        <svg 
          viewBox="0 0 500 280" 
          className="w-full h-52 sm:h-64 select-none"
        >
          <defs>
            {/* Radar Grid Pattern */}
            <pattern id="radarGrid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1E293B" strokeWidth="0.6" strokeDasharray="1 3" />
            </pattern>
            
            {/* Linear Gradient for Routes */}
            <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing filter for nodes */}
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Gold glow filter for Tehran */}
            <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid Background */}
          <rect width="500" height="280" fill="url(#radarGrid)" />

          {/* Crosshair Centered on Tehran (250, 140) */}
          <line x1="250" y1="20" x2="250" y2="260" stroke="#0284c7" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.4" />
          <line x1="40" y1="140" x2="460" y2="140" stroke="#0284c7" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.4" />

          {/* Concentric Radar Rings Centered on Tehran (250, 140) */}
          <motion.circle
            cx="250"
            cy="140"
            r="45"
            fill="none"
            stroke="#0284c7"
            strokeWidth="0.8"
            strokeDasharray="2 4"
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="250"
            cy="140"
            r="90"
            fill="none"
            stroke="#0284c7"
            strokeWidth="0.6"
            strokeDasharray="3 6"
            animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <circle
            cx="250"
            cy="140"
            r="135"
            fill="none"
            stroke="#0284c7"
            strokeWidth="0.4"
            strokeDasharray="4 8"
            opacity="0.2"
          />

          {/* Radar Sweep Rotating Line Centered on Tehran */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 140px' }}
          >
            <line
              x1="250"
              y1="140"
              x2="250"
              y2="15"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeOpacity="0.7"
            />
            {/* Sweep gradient sector */}
            <path
              d="M 250 140 L 250 15 A 125 125 0 0 1 338 52 Z"
              fill="rgba(56, 189, 248, 0.12)"
            />
          </motion.g>

          {/* Dynamic Animated Trade Corridors to Other Hubs */}
          {meta.routes.map((rt, idx) => {
            // Cubic bezier curved trade paths
            const midX = (meta.cx + rt.x) / 2;
            const midY = Math.min(meta.cy, rt.y) - 20;
            const pathD = `M ${meta.cx} ${meta.cy} Q ${midX} ${midY} ${rt.x} ${rt.y}`;

            return (
              <g key={idx}>
                {/* Path line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#routeGlow)"
                  strokeWidth="1.3"
                  strokeDasharray="4 4"
                  className="opacity-75"
                />

                {/* Animated Glowing Packet Traveling Along the Path */}
                <motion.circle
                  r="3"
                  fill="#38bdf8"
                  filter="url(#glowEffect)"
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3.2 + idx * 0.7,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: idx * 0.4,
                  }}
                  style={{
                    offsetPath: `path('${pathD}')`,
                  }}
                />

                {/* Terminal Node */}
                <circle
                  cx={rt.x}
                  cy={rt.y}
                  r="3.5"
                  fill="#10b981"
                  opacity="0.8"
                />
                <text
                  x={rt.x}
                  y={rt.y + (rt.y > 140 ? 12 : -8)}
                  fill="#94a3b8"
                  fontSize="7.5"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {rt.label}
                </text>
              </g>
            );
          })}

          {/* Global World Reference Hubs */}
          {Object.entries(REGION_METADATA).map(([key, rMeta]) => {
            const isSelected = key === selectedRegion.id;
            return (
              <g key={key} className="cursor-pointer">
                {/* Secondary Hub Circles */}
                <circle
                  cx={rMeta.cx}
                  cy={rMeta.cy}
                  r={isSelected ? 6 : 3.5}
                  fill={isSelected ? '#38bdf8' : '#475569'}
                  filter={isSelected ? 'url(#glowEffect)' : undefined}
                />
                
                {/* Text Label */}
                <text
                  x={rMeta.cx + (rMeta.cx > 250 ? 10 : -10)}
                  y={rMeta.cy + (rMeta.cy > 140 ? 12 : -6)}
                  fill={isSelected ? '#ffffff' : '#64748b'}
                  fontSize={isSelected ? '9.5' : '8'}
                  fontFamily="monospace"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                  textAnchor={rMeta.cx > 250 ? 'start' : 'end'}
                >
                  {rMeta.hubs[0].split(' ')[0]}
                </text>
              </g>
            );
          })}

          {/* Active Selected Node Pulse Rings */}
          <motion.circle
            cx={meta.cx}
            cy={meta.cy}
            r="12"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            animate={{
              r: [6, 22],
              opacity: [1, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
          <motion.circle
            cx={meta.cx}
            cy={meta.cy}
            r="4.5"
            fill="#38bdf8"
          />

          {/* ======================================================== */}
          {/* TEHRAN (HQ) - PROMINENT CENTRAL EPICENTER AT (250, 140) */}
          {/* ======================================================== */}
          <g>
            {/* Glowing Amber Pulse Ring for Tehran Center */}
            <motion.circle
              cx="250"
              cy="140"
              r="14"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.8"
              animate={{
                r: [7, 28],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Central Diamond / Star Reticle for Tehran */}
            <rect
              x="244"
              y="134"
              width="12"
              height="12"
              fill="#f59e0b"
              filter="url(#goldGlow)"
              transform="rotate(45 250 140)"
            />
            <circle
              cx="250"
              cy="140"
              r="3.5"
              fill="#ffffff"
            />

            {/* Tehran Central Label Badge */}
            <g transform="translate(250, 162)">
              <rect
                x="-52"
                y="-9"
                width="104"
                height="17"
                fill="#0A1C2E"
                stroke="#f59e0b"
                strokeWidth="1"
                rx="1"
              />
              <text
                x="0"
                y="3"
                fill="#fbbf24"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                ★ TEHRAN (HQ DESK)
              </text>
            </g>
          </g>
        </svg>

        {/* Bottom Legend on Radar Screen */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-[#1E293B] text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="w-2 h-2 rounded-[1px] bg-amber-400 inline-block rotate-45" />
              <span>TEHRAN (CENTRAL NEXUS)</span>
            </span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
              <span>PRIMARY CORRIDOR</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>CLEARING HUB</span>
            </span>
          </div>
          <span className="text-slate-400 font-sans">
            {isFa ? 'تهران: مرکز هماهنگی و تسویه اعتبارات اسنادی' : 'Tehran: Central Coordination & Trade Finance Desk'}
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
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
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
        <p className="text-xs text-slate-300 font-sans max-w-md leading-relaxed">
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

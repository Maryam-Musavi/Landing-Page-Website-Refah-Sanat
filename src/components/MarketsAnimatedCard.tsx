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
const TEHRAN_CENTER = { 
  x: 250, 
  y: 140, 
  name: 'TEHRAN (HQ)', 
  nameFa: 'تهران (مرکز فرماندهی)' 
};

const REGION_METADATA: Record<string, RegionMeta> = {
  mideast: {
    hubs: ['Bandar Abbas Port', 'Dubai Hub (UAE)', 'Salalah Maritime', 'Jeddah Terminal', 'Doha Hub'],
    cx: 250,
    cy: 215,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 355, y: 185, label: 'SOUTH ASIA' },
      { x: 170, y: 100, label: 'TURKEY' },
      { x: 430, y: 120, label: 'EAST ASIA' },
    ],
    flows: ['Petrochemical Polymers', 'Granular Urea 46%', 'Base Oils & Bitumen', 'Refined Fuel & Hydrocarbons'],
    transit: '2-4 Days',
    clearanceRate: '99.4%',
    liquidityTier: 'Tier-1 Multicurrency (USD/EUR/AED)',
  },
  caspian: {
    hubs: ['Bandar Anzali / Amirabad', 'Aktau Port', 'Baku Maritime', 'Turkmenbashi', 'Tashkent Rail Hub'],
    cx: 275,
    cy: 65,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 170, y: 100, label: 'TURKEY' },
      { x: 430, y: 120, label: 'EAST ASIA' },
      { x: 95, y: 65, label: 'EUROPE' },
    ],
    flows: ['Agricultural Grain & Wheat', 'Industrial Fertilizers & Sulfur', 'Steel Billets & Coils', 'Bulk Minerals'],
    transit: '3-5 Days',
    clearanceRate: '98.9%',
    liquidityTier: 'Regional Multi-clearing (USD/CNY/EUR)',
  },
  turkey: {
    hubs: ['Istanbul Gateway', 'Mersin Mediterranean Port', 'Izmir Terminal', 'Ankara Logistics Hub', 'Trabzon Port'],
    cx: 165,
    cy: 105,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 95, y: 65, label: 'EUROPE' },
      { x: 250, y: 215, label: 'MID-EAST' },
      { x: 275, y: 65, label: 'CASPIAN' },
    ],
    flows: ['Polymer Feedstocks', 'Industrial Metals & Ingots', 'Chemical Raw Materials', 'Multimodal Transit Cargo'],
    transit: '3-6 Days',
    clearanceRate: '99.2%',
    liquidityTier: 'Eurasia Gateway Clearing (EUR/USD/TRY)',
  },
  southasia: {
    hubs: ['Chabahar Port Corridor', 'Nhava Sheva (Mumbai)', 'Mundra Terminal', 'Karachi Seaport', 'Colombo Transshipment'],
    cx: 355,
    cy: 190,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 250, y: 215, label: 'MID-EAST' },
      { x: 430, y: 120, label: 'EAST ASIA' },
    ],
    flows: ['Bitumen & Petrochemicals', 'Agricultural Rice & Grains', 'Granular Urea', 'Industrial Construction Steel'],
    transit: '4-7 Days',
    clearanceRate: '99.1%',
    liquidityTier: 'Direct Trade Credit (USD/AED/INR)',
  },
  eastasia: {
    hubs: ['Shanghai Maritime Gateway', 'Singapore Strategic Hub', 'Ningbo-Zhoushan Port', 'Qingdao Terminal', 'Busan Hub'],
    cx: 430,
    cy: 120,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 355, y: 190, label: 'SOUTH ASIA' },
      { x: 250, y: 215, label: 'MID-EAST' },
      { x: 275, y: 65, label: 'CASPIAN' },
    ],
    flows: ['Bulk Methanol & Aromatics', 'High-Grade Polyethylene & Polypropylene', 'Specialized Chemical Feedstocks', 'Containerized Freight'],
    transit: '7-12 Days',
    clearanceRate: '99.7%',
    liquidityTier: 'Deep Liquidity Settlement (USD/CNY/AED)',
  },
  europe: {
    hubs: ['Rotterdam Gateway', 'Antwerp Port', 'Genoa Mediterranean', 'Hamburg Hub', 'Geneva Trade Desk'],
    cx: 95,
    cy: 65,
    routes: [
      { x: 250, y: 140, label: 'TEHRAN HQ' },
      { x: 165, y: 105, label: 'TURKEY' },
      { x: 275, y: 65, label: 'CASPIAN' },
    ],
    flows: ['Trade Credit Facilities', 'Multilateral SBLC Clearing', 'Specialized Chemistry & Catalysts', 'High-Tech Industrial Equipment'],
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

          {/* Background Permanent Radial Corridors Radiating from Tehran to All Hubs */}
          {Object.entries(REGION_METADATA).map(([key, rMeta]) => {
            const isSelected = key === selectedRegion.id;
            const midX = (250 + rMeta.cx) / 2;
            const midY = (140 + rMeta.cy) / 2 - 12;
            const pathD = `M 250 140 Q ${midX} ${midY} ${rMeta.cx} ${rMeta.cy}`;

            return (
              <g key={`corridor-${key}`}>
                {/* Base corridor line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={isSelected ? '#38bdf8' : '#334155'}
                  strokeWidth={isSelected ? 1.8 : 0.9}
                  strokeDasharray={isSelected ? '4 3' : '2 4'}
                  opacity={isSelected ? 0.95 : 0.45}
                />

                {/* Animated glowing energy particle flowing between Tehran and Hub */}
                <motion.circle
                  r={isSelected ? 3.5 : 2}
                  fill={isSelected ? '#38bdf8' : '#f59e0b'}
                  filter={isSelected ? 'url(#glowEffect)' : undefined}
                  animate={{
                    offsetDistance: ['0%', '100%'],
                  }}
                  transition={{
                    duration: isSelected ? 2.4 : 4.5,
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

          {/* Regional Hub Markers & Labels */}
          {Object.entries(REGION_METADATA).map(([key, rMeta]) => {
            const isSelected = key === selectedRegion.id;
            const hubMainName = rMeta.hubs[0].split('/')[0].split('(')[0].trim();
            const isRightSide = rMeta.cx >= 250;
            const isBottomSide = rMeta.cy >= 140;

            return (
              <g key={`hub-${key}`} className="cursor-pointer">
                {/* Outer halo when selected */}
                {isSelected && (
                  <motion.circle
                    cx={rMeta.cx}
                    cy={rMeta.cy}
                    r="14"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    animate={{
                      r: [8, 22],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                )}

                {/* Hub Node Dot */}
                <circle
                  cx={rMeta.cx}
                  cy={rMeta.cy}
                  r={isSelected ? 6 : 4}
                  fill={isSelected ? '#38bdf8' : '#64748b'}
                  stroke={isSelected ? '#ffffff' : '#0A1C2E'}
                  strokeWidth={1.5}
                  filter={isSelected ? 'url(#glowEffect)' : undefined}
                />
                
                {/* Node inner pip */}
                <circle
                  cx={rMeta.cx}
                  cy={rMeta.cy}
                  r={isSelected ? 2 : 1.5}
                  fill="#ffffff"
                />

                {/* Text Label Badge */}
                <g transform={`translate(${rMeta.cx + (isRightSide ? 10 : -10)}, ${rMeta.cy + (isBottomSide ? 14 : -10)})`}>
                  <rect
                    x={isRightSide ? 0 : -95}
                    y={-10}
                    width={95}
                    height={16}
                    fill={isSelected ? 'rgba(14, 116, 144, 0.85)' : 'rgba(15, 23, 42, 0.75)'}
                    stroke={isSelected ? '#38bdf8' : '#334155'}
                    strokeWidth={0.8}
                    rx="1"
                  />
                  <text
                    x={isRightSide ? 6 : -48}
                    y={1}
                    fill={isSelected ? '#ffffff' : '#94a3b8'}
                    fontSize={isSelected ? '8' : '7.5'}
                    fontFamily="monospace"
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    textAnchor={isRightSide ? 'start' : 'middle'}
                  >
                    {hubMainName}
                  </text>
                </g>
              </g>
            );
          })}

          {/* ======================================================== */}
          {/* TEHRAN (HQ) - PROMINENT CENTRAL EPICENTER AT (250, 140) */}
          {/* ======================================================== */}
          <g>
            {/* Ambient Multi-layer Pulse Rings for Tehran Center */}
            <motion.circle
              cx="250"
              cy="140"
              r="16"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              animate={{
                r: [8, 32],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.circle
              cx="250"
              cy="140"
              r="24"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1"
              strokeDasharray="2 2"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: '250px 140px' }}
            />

            {/* Central Diamond / Star Reticle for Tehran */}
            <rect
              x="243"
              y="133"
              width="14"
              height="14"
              fill="#f59e0b"
              filter="url(#goldGlow)"
              transform="rotate(45 250 140)"
            />
            <circle
              cx="250"
              cy="140"
              r="4"
              fill="#ffffff"
            />
            <circle
              cx="250"
              cy="140"
              r="1.8"
              fill="#0A1C2E"
            />

            {/* Tehran Central Label Badge */}
            <g transform="translate(250, 168)">
              <rect
                x="-64"
                y="-10"
                width="128"
                height="19"
                fill="#0A1C2E"
                stroke="#f59e0b"
                strokeWidth="1.2"
                rx="1"
                filter="url(#goldGlow)"
              />
              <text
                x="0"
                y="3"
                fill="#fbbf24"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="middle"
                letterSpacing="0.6"
              >
                {isFa ? '★ تهران (مرکز فرماندهی HQ)' : '★ TEHRAN (HQ CENTRAL DESK)'}
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

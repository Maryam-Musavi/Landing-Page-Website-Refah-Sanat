import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size }) => {
  const widthHeight = size ? { width: size, height: size } : {};

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...widthHeight}
    >
      {/* Outer Diamond Framework */}
      
      {/* Top Arrow (Pointing UP) - Official Deep Navy Blue */}
      <polygon
        points="100,8 138,44 122,44 100,22 78,44 62,44"
        fill="#004C80"
      />

      {/* Bottom Arrow (Pointing DOWN) - Official Deep Navy Blue */}
      <polygon
        points="100,192 138,156 122,156 100,178 78,156 62,156"
        fill="#004C80"
      />

      {/* Left Arrow (Pointing LEFT) - Official Deep Navy Blue */}
      <polygon
        points="8,100 44,62 44,78 22,100 44,122 44,138"
        fill="#004C80"
      />

      {/* Right Arrow (Pointing RIGHT) - Official Deep Navy Blue */}
      <polygon
        points="192,100 156,62 156,78 178,100 156,122 156,138"
        fill="#004C80"
      />

      {/* Central Square Container - Official Deep Navy Blue */}
      <rect
        x="46"
        y="46"
        width="108"
        height="108"
        rx="1"
        fill="#004C80"
      />

      {/* Inner Central Gear Symbol */}
      <g transform="translate(100, 85)" fill="none" stroke="#ffffff" strokeWidth="2.5">
        {/* Gear teeth ring */}
        <circle cx="0" cy="0" r="16" fill="none" stroke="#ffffff" strokeWidth="3" />
        
        {/* Teeth */}
        <rect x="-3" y="-22" width="6" height="5" fill="#ffffff" rx="1" />
        <rect x="-3" y="17" width="6" height="5" fill="#ffffff" rx="1" />
        <rect x="-22" y="-3" width="5" height="6" fill="#ffffff" rx="1" />
        <rect x="17" y="-3" width="5" height="6" fill="#ffffff" rx="1" />

        <rect x="-16" y="-16" width="5" height="5" fill="#ffffff" transform="rotate(45)" rx="1" />
        <rect x="11" y="-16" width="5" height="5" fill="#ffffff" transform="rotate(45)" rx="1" />
        <rect x="-16" y="11" width="5" height="5" fill="#ffffff" transform="rotate(45)" rx="1" />
        <rect x="11" y="11" width="5" height="5" fill="#ffffff" transform="rotate(45)" rx="1" />

        {/* Center hole with arrows */}
        <circle cx="0" cy="0" r="10" fill="#004C80" stroke="#ffffff" strokeWidth="2" />
        
        {/* Inner refresh / trade arrows */}
        <path
          d="M -5,-2 A 5 5 0 0 1 5,-2 L 3,-5 M 5,2 A 5 5 0 0 1 -5,2 L -3,5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Stacked Commodity / Finance Bills / Documents at Bottom */}
      <g transform="translate(100, 128)">
        {/* Stack 1 (Left Sheet Stack) */}
        <polygon points="-38,-4 -8,8 -8,18 -38,6" fill="#004C80" stroke="#ffffff" strokeWidth="1.5" />
        <polygon points="-8,8 22,-4 22,6 -8,18" fill="#004C80" stroke="#ffffff" strokeWidth="1.5" />
        <polygon points="-38,-4 -8,8 22,-4 -8,-16" fill="#ffffff" />
        {/* Document line details */}
        <line x1="-22" y1="-5" x2="-8" y2="2" stroke="#004C80" strokeWidth="1.5" />
        <line x1="-8" y1="2" x2="6" y2="-5" stroke="#004C80" strokeWidth="1.5" />

        {/* Stack 2 (Right Sheet Stack) */}
        <polygon points="-22,10 8,22 8,30 -22,18" fill="#004C80" stroke="#ffffff" strokeWidth="1.5" />
        <polygon points="8,22 38,10 38,18 8,30" fill="#004C80" stroke="#ffffff" strokeWidth="1.5" />
        <polygon points="-22,10 8,22 38,10 8,-2" fill="#ffffff" />
        {/* Document line details */}
        <line x1="-8" y1="9" x2="8" y2="16" stroke="#004C80" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="22" y2="9" stroke="#004C80" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

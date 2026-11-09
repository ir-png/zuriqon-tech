import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ size = 'default', showText = true }) {
  const isLarge = size === 'large';

  return (
    <Link to="/" className="group flex items-center gap-3 select-none" aria-label="Zuriqon Technology Group">
      {/* Geometric Futuristic Brand Mark */}
      <div className="relative flex items-center justify-center">
        {/* Subtle glow backdrop */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-ztg-blue/30 to-ztg-cyan/30 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
        
        <svg
          className={`${isLarge ? 'w-10 h-10' : 'w-9 h-9'} relative z-10 transition-transform duration-300 group-hover:scale-105`}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ztg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#19BFFF" />
              <stop offset="100%" stopColor="#51E5F5" />
            </linearGradient>
            <linearGradient id="ztg-grad-subtle" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#51E5F5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#19BFFF" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Outer Tech Hexagon */}
          <polygon
            points="50,6 88,28 88,72 50,94 12,72 12,28"
            stroke="url(#ztg-grad)"
            strokeWidth="5"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Dynamic Z-Vector Path */}
          <path
            d="M28,34 L72,34 L32,66 L72,66"
            stroke="url(#ztg-grad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Central Node */}
          <circle cx="50" cy="50" r="4.5" fill="#51E5F5" />
          <circle cx="72" cy="34" r="3" fill="#FFFFFF" />
          <circle cx="32" cy="66" r="3" fill="#19BFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-tight">
            <span className="font-bold tracking-tight text-white text-lg sm:text-xl font-sans group-hover:text-ztg-cyan transition-colors">
              ZURIQON
            </span>
            <span className="text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded bg-ztg-blue/15 text-ztg-cyan border border-ztg-blue/30">
              ZTG
            </span>
          </div>
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-ztg-muted group-hover:text-white transition-colors">
            Technology Group
          </span>
        </div>
      )}
    </Link>
  );
}


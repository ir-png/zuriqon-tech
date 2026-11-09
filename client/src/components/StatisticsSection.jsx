import React from 'react';
import { COMPANY_INDICATORS } from '../data/companyData';
import { Layers, Network, UserCheck, Lightbulb } from 'lucide-react';

const INDICATOR_ICONS = {
  solutions: Layers,
  services: Network,
  'client-focus': UserCheck,
  innovation: Lightbulb,
};

export default function StatisticsSection() {
  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Glassmorphic Panel Container */}
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 border border-ztg-border relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-ztg-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-32 bg-ztg-cyan/10 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COMPANY_INDICATORS.map((indicator, idx) => {
            const IconComponent = INDICATOR_ICONS[indicator.id] || Layers;
            return (
              <div
                key={indicator.id}
                className="relative flex flex-col p-5 rounded-2xl bg-[#09121d]/60 border border-ztg-border/50 hover:border-ztg-cyan/40 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Header with Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan group-hover:scale-110 group-hover:bg-ztg-blue/25 transition-all">
                    <IconComponent className="w-5 h-5 text-ztg-cyan" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-ztg-blue/10 text-ztg-blue border border-ztg-blue/20">
                    {indicator.tag}
                  </span>
                </div>

                {/* Primary Indicator Label */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 font-sans group-hover:text-ztg-cyan transition-colors">
                  {indicator.label}
                </h3>

                {/* Subtitle / Context */}
                <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed">
                  {indicator.subtitle}
                </p>

                {/* Subtle bottom indicator line */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-ztg-cyan/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-ztg-cyan" />
                  <span>Strategic Pillar 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


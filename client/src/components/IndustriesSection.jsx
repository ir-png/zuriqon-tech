import React from 'react';
import { INDUSTRIES_DATA } from '../data/companyData';
import { 
  Building2, 
  GraduationCap, 
  Activity, 
  ShoppingBag, 
  Coins, 
  Landmark,
  ArrowRight
} from 'lucide-react';

const INDUSTRY_ICONS = {
  Building2,
  GraduationCap,
  Activity,
  ShoppingBag,
  Coins,
  Landmark,
};

export default function IndustriesSection({ onSelectIndustryForQuote }) {
  return (
    <section id="industries" className="py-24 sm:py-32 relative bg-[#070B10] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-ztg-blue/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              CROSS-SECTOR EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Industries We <span className="text-ztg-cyan">Empower.</span>
          </h2>

          <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal">
            Every sector faces distinct digital challenges. We tailor our architectural frameworks and software engineering to the exact regulatory and operational demands of your vertical.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES_DATA.map((ind) => {
            const IconComp = INDUSTRY_ICONS[ind.icon] || Building2;
            return (
              <div
                key={ind.id}
                className="group relative glass-panel rounded-3xl p-8 border border-ztg-border/60 hover:border-ztg-cyan/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Icon & Sector Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-ztg-blue/10 border border-ztg-blue/25 flex items-center justify-center text-ztg-cyan group-hover:scale-105 group-hover:bg-ztg-blue/20 transition-all">
                      <IconComp className="w-7 h-7 text-ztg-cyan" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-ztg-muted/70 group-hover:text-ztg-cyan transition-colors">
                      Sector Focus
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ztg-cyan transition-colors font-sans">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-ztg-muted leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                {/* Subtle Interactive Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onSelectIndustryForQuote && onSelectIndustryForQuote(ind.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ztg-cyan hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Discuss Industry Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/companyData';
import { Zap, HeartHandshake, CheckCircle2, TrendingUp, Rocket, Shield } from 'lucide-react';

const PROP_ICONS = {
  Zap,
  HeartHandshake,
  CheckCircle2,
  TrendingUp,
  Rocket,
};

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 sm:py-32 relative overflow-hidden bg-[#070B10]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-ztg-blue/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Company Commitment Promise */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
                <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
                  THE ZTG COMMITMENT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Your Technology Partner for <span className="text-ztg-cyan">What's Next.</span>
              </h2>

              <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal mb-8">
                In a rapidly evolving digital world, organizations need more than vendors—they need committed technology partners who think strategically, architect with integrity, and build for durability.
              </p>
            </div>

            {/* Futuristic Commitment Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-ztg-border relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-ztg-blue/20 border border-ztg-blue/40 flex items-center justify-center text-ztg-cyan shadow-glow-sm">
                  <Shield className="w-6 h-6 text-ztg-cyan" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Future-Proof Methodology</h3>
                  <span className="text-xs text-ztg-muted font-mono">Modern Architectures · Clean Standards</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed">
                We believe great technology is built on clarity, disciplined execution, and long-term sustainability rather than superficial shortcuts.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Value Propositions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {VALUE_PROPOSITIONS.map((prop, idx) => {
              const IconComp = PROP_ICONS[prop.icon] || Zap;
              return (
                <div
                  key={prop.id}
                  className="glass-panel p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-ztg-border/60 hover:border-ztg-cyan/40 transition-all duration-300 flex items-start gap-5 group hover:-translate-x-1"
                >
                  {/* Number / Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-ztg-blue/10 border border-ztg-blue/25 flex items-center justify-center text-ztg-cyan shrink-0 group-hover:bg-ztg-blue/25 group-hover:scale-105 transition-all shadow-glow-sm">
                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7 text-ztg-cyan" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-ztg-cyan transition-colors font-sans">
                        {prop.title}
                      </h3>
                      <span className="text-xs font-mono text-ztg-muted/60">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}


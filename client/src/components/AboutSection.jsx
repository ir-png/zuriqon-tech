import React from 'react';
import { ABOUT_DATA } from '../data/companyData';
import { Target, Eye, ShieldCheck, Sparkles, Users, Layers, CheckCircle } from 'lucide-react';

const VALUE_ICONS = {
  ShieldCheck,
  Sparkles,
  Users,
  Layers,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#19BFFF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#51E5F5]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              ABOUT ZURIQON TECHNOLOGY GROUP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Technology That Moves <span className="text-ztg-cyan">Businesses Forward.</span>
          </h2>

          <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal">
            {ABOUT_DATA.description}
          </p>
        </div>

        {/* Mission & Vision Twin Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-ztg-border relative group hover:border-ztg-cyan/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ztg-blue/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-ztg-blue/15 border border-ztg-blue/40 flex items-center justify-center text-ztg-cyan shadow-glow-sm group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7 text-ztg-cyan" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-ztg-cyan uppercase">Purpose</span>
                <h3 className="text-2xl font-bold text-white">{ABOUT_DATA.mission.title}</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-ztg-muted leading-relaxed">
              {ABOUT_DATA.mission.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-ztg-blue font-medium">
              <CheckCircle className="w-4 h-4 text-ztg-cyan" />
              <span>Dedicated to measurable impact and digital efficiency</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-ztg-border relative group hover:border-ztg-cyan/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ztg-cyan/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-ztg-cyan/15 border border-ztg-cyan/40 flex items-center justify-center text-ztg-cyan shadow-glow-cyan group-hover:scale-105 transition-transform">
                <Eye className="w-7 h-7 text-ztg-cyan" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-ztg-cyan uppercase">Horizon</span>
                <h3 className="text-2xl font-bold text-white">{ABOUT_DATA.vision.title}</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-ztg-muted leading-relaxed">
              {ABOUT_DATA.vision.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-ztg-cyan font-medium">
              <CheckCircle className="w-4 h-4 text-ztg-blue" />
              <span>Building high-standard engineering for global scalability</span>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-ztg-muted mt-2">
              The foundational principles that guide every solution we engineer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.values.map((val) => {
              const IconComp = VALUE_ICONS[val.icon] || ShieldCheck;
              return (
                <div
                  key={val.title}
                  className="glass-panel p-6 rounded-2xl border border-ztg-border/60 hover:border-ztg-cyan/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-ztg-blue/10 border border-ztg-blue/20 flex items-center justify-center text-ztg-cyan mb-4 group-hover:bg-ztg-blue/20 group-hover:scale-105 transition-all">
                    <IconComp className="w-6 h-6 text-ztg-cyan" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-ztg-cyan transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


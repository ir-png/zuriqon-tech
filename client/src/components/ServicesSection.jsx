import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { 
  Code2, 
  Globe, 
  Shield, 
  Cpu, 
  Palette, 
  Compass, 
  ArrowRight, 
  Check, 
  X,
  Sparkles
} from 'lucide-react';

const SERVICE_ICONS = {
  Code2,
  Globe,
  Shield,
  Cpu,
  Palette,
  Compass,
};

export default function ServicesSection({ onSelectServiceForQuote }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#070B10]">
      {/* Background radial accent glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-ztg-blue/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-ztg-cyan/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              OUR CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Solutions Designed for the <span className="text-ztg-cyan">Digital Future.</span>
          </h2>

          <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal">
            From modern cloud architectures to intelligent automation and bespoke web engineering, we deliver comprehensive technology capabilities built to drive business impact.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative glass-panel rounded-3xl p-8 border border-ztg-border/70 hover:border-ztg-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-ztg-blue/10"
              >
                {/* Subtle top indicator number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan group-hover:scale-110 group-hover:bg-ztg-cyan/20 group-hover:text-white transition-all shadow-glow-sm">
                    <IconComp className="w-7 h-7 text-ztg-cyan group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-ztg-muted/60 group-hover:text-ztg-cyan transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-ztg-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ztg-muted leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-ztg-muted border border-white/10 group-hover:border-ztg-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action / Learn More */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-ztg-cyan hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-ztg-blue/10 hover:bg-ztg-blue/20 text-ztg-blue border border-ztg-blue/30 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-ztg-border shadow-2xl bg-[#09121d]/95">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-ztg-muted hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 rounded-xl bg-ztg-blue/20 text-ztg-cyan border border-ztg-blue/30">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-ztg-cyan">Service Overview</span>
                <h3 className="text-xl font-bold text-white">{activeModalService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-ztg-muted leading-relaxed mb-6">
              {activeModalService.details}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white">Included Capabilities:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalService.tags.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs text-ztg-muted bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <Check className="w-3.5 h-3.5 text-ztg-cyan" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForQuote(serviceName);
                }}
                className="flex-1 py-3 px-5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-ztg-blue to-ztg-cyan text-center transition-all shadow-glow-sm"
              >
                Inquire About This Service
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-5 rounded-full text-sm font-medium text-ztg-muted hover:text-white bg-white/5 text-center transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


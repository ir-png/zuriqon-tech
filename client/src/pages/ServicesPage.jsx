import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/companyData';
import CTASection from '../components/CTASection';
import { 
  Code2, 
  Globe, 
  Shield, 
  Cpu, 
  Palette, 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles,
  GitBranch,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';

const SERVICE_ICONS = {
  Code2,
  Globe,
  Shield,
  Cpu,
  Palette,
  Compass,
};

export default function ServicesPage({ onSelectServiceForQuote, onOpenQuoteModal }) {
  return (
    <div className="pt-28 sm:pt-36 bg-[#070B10]">
      {/* Services Header */}
      <section className="relative pb-16 sm:pb-24 border-b border-ztg-border/40 bg-tech-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ztg-blue/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-ztg-muted mb-6">
            <Link to="/" className="hover:text-ztg-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ztg-cyan">Services</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-6">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              ENTERPRISE CAPABILITIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Solutions Designed for the <span className="text-ztg-cyan">Digital Future.</span>
          </h1>

          <p className="text-base sm:text-lg text-ztg-muted max-w-3xl mx-auto leading-relaxed">
            From modern cloud architectures to intelligent automation, zero-trust cybersecurity and bespoke enterprise software, our multidisciplinary teams deliver durable digital assets.
          </p>
        </div>
      </section>

      {/* 6 Services Deep Dive */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.icon] || Code2;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="glass-panel rounded-3xl p-8 sm:p-12 border border-ztg-border/70 relative overflow-hidden transition-all duration-300 hover:border-ztg-cyan/40"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left / Main Info */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shadow-glow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono tracking-widest text-ztg-cyan uppercase">
                        Service Pillar 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-ztg-muted mb-4 leading-relaxed">
                      {service.summary}
                    </p>

                    <p className="text-xs sm:text-sm text-ztg-muted/80 mb-6 leading-relaxed">
                      {service.details}
                    </p>

                    {/* Capabilities Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-ztg-cyan border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectServiceForQuote(service.title)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-ztg-blue to-ztg-cyan shadow-glow-sm hover:opacity-90 transition-all cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Inquire About This Service</span>
                      </button>

                      <Link
                        to="/contact"
                        className="text-xs sm:text-sm text-ztg-muted hover:text-white transition-colors"
                      >
                        Schedule Technical Discovery &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Right / Visual Tech Specifications */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-ztg-navy/90 border border-ztg-border/60 p-6 sm:p-7 relative shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <span className="text-xs font-mono text-white flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-ztg-cyan" />
                          <span>ZTG Architecture Matrix</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">READY FOR DISCOVERY</span>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div className="flex items-start gap-2.5 text-ztg-muted">
                          <Check className="w-4 h-4 text-ztg-cyan shrink-0 mt-0.5" />
                          <span>Strict adherence to cloud security & zero-trust compliance standards</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-ztg-muted">
                          <Check className="w-4 h-4 text-ztg-cyan shrink-0 mt-0.5" />
                          <span>Automated CI/CD pipelines with comprehensive test coverage</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-ztg-muted">
                          <Check className="w-4 h-4 text-ztg-cyan shrink-0 mt-0.5" />
                          <span>Scalable microservices and distributed database architectures</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-ztg-muted">
                          <Check className="w-4 h-4 text-ztg-cyan shrink-0 mt-0.5" />
                          <span>Direct integration with PostgreSQL / Supabase enterprise storage</span>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-ztg-muted/70">
                        <span>Lead Architect: ZTG Kigali</span>
                        <span className="text-ztg-cyan">Production SLA</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Delivery Process */}
      <section className="py-20 border-t border-white/5 bg-[#05080C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-ztg-cyan mb-2 block">
              OUR METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The ZTG Engineering Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-ztg-muted mt-2">
              How we take your technological vision from discovery to scalable production deployment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery & Blueprint", desc: "Requirements analysis, technical stack evaluation, and architectural roadmap design." },
              { step: "02", title: "Agile Engineering", desc: "Modular sprint cycles, clean code patterns, continuous review, and bi-weekly milestone demos." },
              { step: "03", title: "Security & QA Audit", desc: "Automated vulnerability scanning, unit testing, performance benchmarking, and pentesting." },
              { step: "04", title: "Deployment & Scaling", desc: "Zero-downtime containerized release, edge observability, automated backups, and 24/7 telemetry." },
            ].map((cycle) => (
              <div key={cycle.step} className="glass-panel p-6 rounded-2xl border border-ztg-border/50">
                <span className="text-2xl font-mono font-bold text-ztg-cyan/60 mb-3 block">{cycle.step}</span>
                <h3 className="text-base font-bold text-white mb-2">{cycle.title}</h3>
                <p className="text-xs text-ztg-muted leading-relaxed">{cycle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal('')} />
    </div>
  );
}


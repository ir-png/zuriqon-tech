import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_DATA, COMPANY_INFO } from '../data/companyData';
import CTASection from '../components/CTASection';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Layers, 
  MapPin, 
  Cpu, 
  Code2, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const VALUE_ICONS = {
  ShieldCheck,
  Sparkles,
  Users,
  Layers,
};

export default function AboutPage({ onOpenQuoteModal }) {
  return (
    <div className="pt-28 sm:pt-36 bg-[#070B10]">
      {/* Header Banner */}
      <section className="relative pb-16 sm:pb-24 border-b border-ztg-border/40 bg-tech-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ztg-blue/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-ztg-muted mb-6">
            <Link to="/" className="hover:text-ztg-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ztg-cyan">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-6">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              CORPORATE PROFILE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Engineering the Next Generation of <span className="text-ztg-cyan">Intelligent Enterprise.</span>
          </h1>

          <p className="text-base sm:text-lg text-ztg-muted max-w-3xl mx-auto leading-relaxed">
            {ABOUT_DATA.description}
          </p>
        </div>
      </section>

      {/* Strategic Tech Hub - Kigali, Rwanda */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-ztg-border relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-ztg-cyan mb-3">
                <MapPin className="w-4 h-4 text-ztg-blue" />
                <span>CENTRAL HUB: {COMPANY_INFO.contact.location.toUpperCase()}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Positioned in East Africa's Leading Technology Capital
              </h2>
              <p className="text-sm sm:text-base text-ztg-muted leading-relaxed mb-6">
                Headquartered in Kigali, Rwanda—widely recognized as one of the continent's most dynamic, innovative, and digital-first innovation ecosystems—Zuriqon Technology Group bridges local engineering excellence with world-class international standards.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-ztg-cyan font-bold text-base mb-0.5">CAT Zone</div>
                  <div className="text-ztg-muted">GMT+2 Strategic Alignment</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-ztg-cyan font-bold text-base mb-0.5">Global Reach</div>
                  <div className="text-ztg-muted">Distributed Teams</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 col-span-2 sm:col-span-1">
                  <div className="text-ztg-cyan font-bold text-base mb-0.5">Fast Response</div>
                  <div className="text-ztg-muted">&lt; 24h Consultation SLA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-ztg-navy via-[#0c1828] to-[#070b10] border border-ztg-border/60 p-6 flex flex-col justify-between shadow-glow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-white">Active Kigali Hub</span>
                  </div>
                  <span className="text-xs font-mono text-ztg-cyan">{COMPANY_INFO.shortName}</span>
                </div>
                <div className="space-y-1 my-auto">
                  <div className="text-xs text-ztg-muted font-mono">Official Email:</div>
                  <div className="text-sm font-bold text-white">{COMPANY_INFO.contact.email}</div>
                  <div className="text-xs text-ztg-muted font-mono mt-2">Telephone:</div>
                  <div className="text-sm font-bold text-ztg-cyan">{COMPANY_INFO.contact.phone}</div>
                </div>
                <div className="text-[11px] font-mono text-ztg-muted border-t border-white/10 pt-3 flex items-center justify-between">
                  <span>Innovation · Transformation</span>
                  <span className="text-ztg-cyan">RWANDA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-ztg-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shadow-glow-sm">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-ztg-cyan uppercase tracking-wider">Mission Statement</span>
                <h3 className="text-2xl font-bold text-white">{ABOUT_DATA.mission.title}</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-ztg-muted leading-relaxed">
              {ABOUT_DATA.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-ztg-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-ztg-cyan/15 border border-ztg-cyan/30 flex items-center justify-center text-ztg-cyan shadow-glow-cyan">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-ztg-cyan uppercase tracking-wider">Long-Term Vision</span>
                <h3 className="text-2xl font-bold text-white">{ABOUT_DATA.vision.title}</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-ztg-muted leading-relaxed">
              {ABOUT_DATA.vision.description}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Core Values</h2>
            <p className="text-xs sm:text-sm text-ztg-muted mt-2">
              The non-negotiable principles that drive our engineering culture and client partnerships
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
                  <div className="w-12 h-12 rounded-xl bg-ztg-blue/10 border border-ztg-blue/20 flex items-center justify-center text-ztg-cyan mb-4 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
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
      </section>

      {/* CTA Section */}
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal('')} />
    </div>
  );
}


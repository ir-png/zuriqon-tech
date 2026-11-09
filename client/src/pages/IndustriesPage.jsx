import React from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_DATA } from '../data/companyData';
import CTASection from '../components/CTASection';
import { 
  Building2, 
  GraduationCap, 
  Activity, 
  ShoppingBag, 
  Coins, 
  Landmark, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  Sparkles 
} from 'lucide-react';

const INDUSTRY_ICONS = {
  Building2,
  GraduationCap,
  Activity,
  ShoppingBag,
  Coins,
  Landmark,
};

export default function IndustriesPage({ onSelectServiceForQuote, onOpenQuoteModal }) {
  return (
    <div className="pt-28 sm:pt-36 bg-[#070B10]">
      {/* Header */}
      <section className="relative pb-16 sm:pb-24 border-b border-ztg-border/40 bg-tech-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ztg-blue/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-ztg-muted mb-6">
            <Link to="/" className="hover:text-ztg-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ztg-cyan">Industries</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-6">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              CROSS-SECTOR IMPACT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Sector-Specific Digital <span className="text-ztg-cyan">Architecture & Scale.</span>
          </h1>

          <p className="text-base sm:text-lg text-ztg-muted max-w-3xl mx-auto leading-relaxed">
            Every vertical presents distinct regulatory, security, and performance prerequisites. We engineer tailored technology solutions aligned precisely with the realities of your industry.
          </p>
        </div>
      </section>

      {/* 6 Industry Verticals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const IconComp = INDUSTRY_ICONS[ind.icon] || Building2;

            return (
              <div
                key={ind.id}
                className="glass-panel rounded-3xl p-8 border border-ztg-border/70 flex flex-col justify-between hover:border-ztg-cyan/40 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shadow-glow-sm">
                      <IconComp className="w-7 h-7 text-ztg-cyan" />
                    </div>
                    <span className="text-xs font-mono text-ztg-muted/70">
                      Sector 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-3 font-sans">
                    {ind.title}
                  </h2>

                  <p className="text-sm text-ztg-muted leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6 text-xs text-ztg-muted space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-ztg-cyan shrink-0" />
                      <span>Custom API integrations & legacy migration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-ztg-cyan shrink-0" />
                      <span>Zero-trust security & regulatory compliance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForQuote(`Consulting for ${ind.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ztg-cyan hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Request Industry Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-ztg-border text-center max-w-4xl mx-auto">
          <ShieldCheck className="w-12 h-12 text-ztg-cyan mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Built on Rigorous Enterprise Standards
          </h3>
          <p className="text-sm text-ztg-muted max-w-2xl mx-auto leading-relaxed mb-6">
            Whether your platform operates in financial compliance zones, healthcare privacy regulations (HIPAA/GDPR), or cross-border trade networks, Zuriqon designs systems that adhere to the highest international criteria.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-ztg-cyan">
            <span>Operating from Kigali, Rwanda with Global Delivery Frameworks</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal('')} />
    </div>
  );
}


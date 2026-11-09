import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactPage({ preSelectedService }) {
  return (
    <div className="pt-28 sm:pt-36 bg-[#070B10]">
      {/* Header */}
      <section className="relative pb-12 sm:pb-20 border-b border-ztg-border/40 bg-tech-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ztg-blue/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-ztg-muted mb-6">
            <Link to="/" className="hover:text-ztg-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ztg-cyan">Contact</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-6">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              GLOBAL CONSULTATION & INQUIRIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Connect With Our <span className="text-ztg-cyan">Engineering Team.</span>
          </h1>

          <p className="text-base sm:text-lg text-ztg-muted max-w-3xl mx-auto leading-relaxed">
            Reach out to our technology advisors and software architects in Kigali, Rwanda to discuss your digital roadmap, system modernization, or project estimation.
          </p>
        </div>
      </section>

      {/* Direct Contact Cards Bar */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="glass-panel p-6 rounded-2xl border border-ztg-border/70 hover:border-ztg-cyan/50 transition-all flex flex-col justify-between group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan mb-4 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-ztg-muted block mb-1">Direct Email</span>
              <span className="text-sm font-bold text-white group-hover:text-ztg-cyan transition-colors break-all">
                {COMPANY_INFO.contact.email}
              </span>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="glass-panel p-6 rounded-2xl border border-ztg-border/70 hover:border-ztg-cyan/50 transition-all flex flex-col justify-between group hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-ztg-cyan/15 border border-ztg-cyan/30 flex items-center justify-center text-ztg-cyan mb-4 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-ztg-muted block mb-1">Telephone / WhatsApp</span>
              <span className="text-sm font-bold text-white group-hover:text-ztg-cyan transition-colors">
                {COMPANY_INFO.contact.phone}
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="glass-panel p-6 rounded-2xl border border-ztg-border/70 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-ztg-muted block mb-1">Headquarters</span>
              <span className="text-sm font-bold text-white">
                {COMPANY_INFO.contact.location}
              </span>
            </div>
          </div>

          {/* Hours */}
          <div className="glass-panel p-6 rounded-2xl border border-ztg-border/70 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-ztg-cyan/15 border border-ztg-cyan/30 flex items-center justify-center text-ztg-cyan mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-ztg-muted block mb-1">Working Hours</span>
              <span className="text-xs font-bold text-white">
                {COMPANY_INFO.contact.hours}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Supabase Form */}
      <div className="-mt-8">
        <ContactSection preSelectedService={preSelectedService} />
      </div>
    </div>
  );
}


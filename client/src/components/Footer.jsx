import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  ArrowUp, 
  ShieldCheck,
  X
} from 'lucide-react';

const SOCIAL_ICONS = {
  Linkedin,
  Twitter,
  Github,
  Instagram,
};

export default function Footer() {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05080C] border-t border-ztg-border/50 pt-16 pb-12 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-ztg-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Logo & Company Description (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-5">
                <BrandLogo size="large" />
              </div>
              <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed max-w-sm mb-6">
                {COMPANY_INFO.positioning}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-ztg-cyan font-mono">
                <span>{COMPANY_INFO.slogan}</span>
              </div>
            </div>

            {/* Social media links */}
            <div className="mt-6 flex items-center gap-3">
              {COMPANY_INFO.socials.map((soc) => {
                const IconComp = SOCIAL_ICONS[soc.iconName] || Github;
                return (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.name}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ztg-muted hover:text-ztg-cyan hover:border-ztg-cyan/40 hover:bg-ztg-blue/10 transition-all"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-5">
              Our Capabilities
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  IT Solutions & Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Artificial Intelligence & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Digital Design & Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ztg-muted hover:text-ztg-cyan transition-colors">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-5">
              Headquarters & Contact
            </h4>
            <div className="space-y-3.5 text-xs text-ztg-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-ztg-cyan shrink-0 mt-0.5" />
                <span className="text-white font-medium">{COMPANY_INFO.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-ztg-blue shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-ztg-cyan shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5">
              <span className="text-[11px] font-mono text-ztg-muted/70 block mb-1">
                Hours of Operation
              </span>
              <p className="text-[11px] text-ztg-muted/90">
                {COMPANY_INFO.contact.hours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ztg-muted">
          <div>
            &copy; {new Date().getFullYear()} Zuriqon Technology Group (ZTG). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-ztg-cyan transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-ztg-cyan transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-white/5 hover:bg-ztg-blue/20 hover:text-ztg-cyan text-white transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Policy Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-ztg-border shadow-2xl bg-[#09121d]/95">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-ztg-muted hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-ztg-cyan" />
              <h3 className="text-xl font-bold text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-ztg-muted leading-relaxed space-y-3 max-h-80 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Zuriqon Technology Group (Kigali, Rwanda) is committed to safeguarding client data and maintaining transparent data practices. Any project specifications or contact details provided through this platform are utilized exclusively to respond to inquiries and deliver requested technology services.
                  </p>
                  <p>
                    We implement modern encryption and zero-trust data protection principles across all customer interactions and Supabase data channels.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All content, architectural blueprints, software concepts, and branding materials showcased on this site are property of Zuriqon Technology Group.
                  </p>
                  <p>
                    Services rendered are subject to definitive master service agreements (MSAs) and statement-of-work (SOW) documents tailored to each engagement.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="py-2 px-5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

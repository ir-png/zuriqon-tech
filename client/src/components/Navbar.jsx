import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../data/companyData';
import { Menu, X, ArrowRight, Sparkles, MapPin, Phone } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-[#070B10]/90 to-transparent py-4 sm:py-5'
      }`}
    >


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <BrandLogo />

        {/* Center/Right Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B1420]/80 border border-ztg-border/70 backdrop-blur-xl">
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold shadow-glow-sm'
                    : 'text-ztg-muted hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-ztg-blue/25 to-ztg-cyan/20 border border-ztg-blue/40 -z-10" />
                  )}
                  {link.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-ztg-blue to-[#1095cc] hover:from-ztg-cyan hover:to-ztg-blue transition-all duration-300 shadow-glow-sm hover:shadow-glow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-ztg-navy/90 border border-ztg-border text-white focus:outline-none focus:ring-2 focus:ring-ztg-blue"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-ztg-cyan" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Dark backdrop */}
          <div className="fixed inset-0 bg-black/70 z-40" onClick={() => setMobileMenuOpen(false)} />
          <div className="lg:hidden absolute top-full left-0 right-0 glass-panel border-b border-ztg-border/60 bg-[#070B10]/98 backdrop-blur-2xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200 z-50">
            <div className="flex flex-col space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-ztg-blue/15 text-ztg-cyan border border-ztg-blue/30 font-semibold'
                        : 'text-ztg-muted hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                <div className="text-xs text-ztg-muted px-2 space-y-1">
                  <div className="flex items-center gap-2 text-ztg-cyan">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.contact.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-ztg-blue" />
                    <span>{COMPANY_INFO.contact.phone}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-ztg-blue to-[#1095cc] shadow-glow-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { submitInquiry, isSupabaseConfigured } from '../lib/supabase';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  Database
} from 'lucide-react';

export default function ContactSection({ preSelectedService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: preSelectedService || 'SOFTWARE DEVELOPMENT',
    message: '',
  });

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // { type: 'success' | 'error', message: string, details?: string }

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.service) {
      errs.service = 'Please select a requested service.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief project description.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Project description must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const result = await submitInquiry(formData);
      setSubmissionStatus({
        type: 'success',
        message: 'Thank you! Your project inquiry has been successfully received.',
        details: isSupabaseConfigured
          ? 'Synchronized directly with the Supabase inquiries table.'
          : 'Ready for Supabase PostgreSQL connection. Form inputs verified.',
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: 'SOFTWARE DEVELOPMENT',
        message: '',
      });
    } catch (err) {
      setSubmissionStatus({
        type: 'error',
        message: 'Failed to submit inquiry. Please try again or reach out directly via email.',
        details: err?.message || '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#070B10]">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-ztg-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-ztg-cyan/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Get in Touch With <span className="text-ztg-cyan">Our Engineers.</span>
          </h2>

          <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal">
            Discuss your technical roadmap, request a detailed project quote, or explore how Zuriqon can accelerate your digital initiatives.
          </p>
        </div>

        {/* Grid: Contact Info + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Column 1: Contact Information & Supabase Readiness */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-ztg-border">
              <h3 className="text-xl font-bold text-white mb-6">Company Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-ztg-muted block">Direct Email</span>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-sm font-semibold text-white hover:text-ztg-cyan transition-colors">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-ztg-muted block">Telephone Placeholder</span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_INFO.contact.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-ztg-muted block">Location / Hub</span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_INFO.contact.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ztg-blue/15 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-ztg-muted block">Operational Hours</span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_INFO.contact.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supabase Status Pill */}
            <div className="glass-panel p-5 rounded-2xl border border-ztg-border/60 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">
                  Supabase Integration Ready
                </span>
                <span className="text-ztg-muted">
                  {isSupabaseConfigured
                    ? 'Connected live to Supabase PostgreSQL database.'
                    : 'Inquiries schema prepared for VITE_SUPABASE_URL connection.'}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: The Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-ztg-border shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-white mb-2">Project Inquiry Form</h3>
              <p className="text-xs sm:text-sm text-ztg-muted mb-8">
                Fill in the details below to receive a consultation or customized proposal.
              </p>

              {submissionStatus && (
                <div
                  className={`p-4 rounded-2xl mb-6 flex items-start gap-3 border ${
                    submissionStatus.type === 'success'
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  }`}
                >
                  {submissionStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-semibold text-sm">{submissionStatus.message}</div>
                    {submissionStatus.details && (
                      <div className="text-xs opacity-80 mt-1">{submissionStatus.details}</div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Full Name <span className="text-ztg-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-ztg-navy/80 border ${
                      errors.fullName ? 'border-rose-500' : 'border-ztg-border focus:border-ztg-cyan'
                    } text-white placeholder-ztg-muted/40 text-sm focus:outline-none focus:ring-1 focus:ring-ztg-cyan transition-colors`}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                      Email Address <span className="text-ztg-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-ztg-navy/80 border ${
                        errors.email ? 'border-rose-500' : 'border-ztg-border focus:border-ztg-cyan'
                      } text-white placeholder-ztg-muted/40 text-sm focus:outline-none focus:ring-1 focus:ring-ztg-cyan transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 012-3456"
                      className="w-full px-4 py-3 rounded-xl bg-ztg-navy/80 border border-ztg-border focus:border-ztg-cyan text-white placeholder-ztg-muted/40 text-sm focus:outline-none focus:ring-1 focus:ring-ztg-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Requested Service */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Requested Service <span className="text-ztg-cyan">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-ztg-navy border border-ztg-border focus:border-ztg-cyan text-white text-sm focus:outline-none focus:ring-1 focus:ring-ztg-cyan transition-colors"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#0B1420] text-white">
                        {srv.title}
                      </option>
                    ))}
                    <option value="Complete Digital Transformation" className="bg-[#0B1420] text-white">
                      COMPLETE DIGITAL TRANSFORMATION
                    </option>
                    <option value="General Technical Inquiry" className="bg-[#0B1420] text-white">
                      GENERAL TECHNICAL INQUIRY
                    </option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Project Description <span className="text-ztg-cyan">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, technical scope, timeline, and any specific requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-ztg-navy/80 border ${
                      errors.message ? 'border-rose-500' : 'border-ztg-border focus:border-ztg-cyan'
                    } text-white placeholder-ztg-muted/40 text-sm focus:outline-none focus:ring-1 focus:ring-ztg-cyan transition-colors resize-y`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-ztg-blue via-[#18a8e0] to-[#1281b3] hover:from-ztg-cyan hover:to-ztg-blue transition-all duration-300 shadow-glow-sm hover:shadow-glow-md flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Transmit Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


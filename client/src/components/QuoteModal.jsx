import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { submitInquiry, isSupabaseConfigured } from '../lib/supabase';
import { X, Sparkles, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: initialService || 'SOFTWARE DEVELOPMENT',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.service) errs.service = 'Please select a requested service.';
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
      await submitInquiry(formData);
      setSubmissionStatus({
        type: 'success',
        message: 'Your quote request has been transmitted successfully! An engineer will reach out to you shortly.',
      });
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'SOFTWARE DEVELOPMENT',
          message: '',
        });
      }, 1000);
    } catch (err) {
      setSubmissionStatus({
        type: 'error',
        message: 'Failed to transmit request. Please retry.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-ztg-border shadow-2xl bg-[#09121E]/95 overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-ztg-blue/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-ztg-muted hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-ztg-blue/20 border border-ztg-blue/30 flex items-center justify-center text-ztg-cyan shadow-glow-sm">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-ztg-cyan">Quote & Estimation</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Request a Project Proposal</h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-ztg-muted mb-6">
          Share your technological requirements and our engineering team will provide a comprehensive scope and timeline.
        </p>

        {submissionStatus && (
          <div
            className={`p-3.5 rounded-xl mb-4 flex items-start gap-2.5 border text-xs sm:text-sm ${
              submissionStatus.type === 'success'
                ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200'
                : 'bg-rose-950/50 border-rose-500/40 text-rose-200'
            }`}
          >
            {submissionStatus.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            )}
            <span>{submissionStatus.message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5">
              Full Name <span className="text-ztg-cyan">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Elena Rostova"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-ztg-navy border ${
                errors.fullName ? 'border-rose-500' : 'border-ztg-border focus:border-ztg-cyan'
              } text-white placeholder-ztg-muted/40 text-sm focus:outline-none transition-colors`}
            />
            {errors.fullName && <span className="text-xs text-rose-400 mt-0.5 block">{errors.fullName}</span>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5">
                Email Address <span className="text-ztg-cyan">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="elena@enterprise.com"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-ztg-navy border ${
                  errors.email ? 'border-rose-500' : 'border-ztg-border focus:border-ztg-cyan'
                } text-white placeholder-ztg-muted/40 text-sm focus:outline-none transition-colors`}
              />
              {errors.email && <span className="text-xs text-rose-400 mt-0.5 block">{errors.email}</span>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 019-2834"
                className="w-full px-3.5 py-2.5 rounded-xl bg-ztg-navy border border-ztg-border focus:border-ztg-cyan text-white placeholder-ztg-muted/40 text-sm focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5">
              Target Service <span className="text-ztg-cyan">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-ztg-navy border border-ztg-border focus:border-ztg-cyan text-white text-sm focus:outline-none transition-colors"
            >
              {SERVICES_DATA.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#0B1420] text-white">
                  {s.title}
                </option>
              ))}
              <option value="Complete Digital Transformation" className="bg-[#0B1420] text-white">
                COMPLETE DIGITAL TRANSFORMATION
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-white mb-1.5">
              Project Description <span className="text-ztg-cyan">*</span>
            </label>
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe objectives, scope, or timeline..."
              className={`w-full px-3.5 py-2.5 rounded-xl bg-ztg-navy border ${
                errors.message ? 'border-rose-500' : 'border-ztg-border focus:border-ztg-cyan'
              } text-white placeholder-ztg-muted/40 text-sm focus:outline-none transition-colors resize-y`}
            />
            {errors.message && <span className="text-xs text-rose-400 mt-0.5 block">{errors.message}</span>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-ztg-blue to-ztg-cyan hover:opacity-95 flex items-center justify-center gap-2 shadow-glow-sm disabled:opacity-60 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Quote Request</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 rounded-full text-sm text-ztg-muted hover:text-white bg-white/5 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS_DATA } from '../data/companyData';
import CTASection from '../components/CTASection';
import { Calendar, Clock, ArrowRight, X, Sparkles, BookOpen, Send, CheckCircle2 } from 'lucide-react';

export default function InsightsPage({ onOpenQuoteModal }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#070B10]">
      {/* Header */}
      <section className="relative pb-16 sm:pb-24 border-b border-ztg-border/40 bg-tech-grid">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ztg-blue/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-ztg-muted mb-6">
            <Link to="/" className="hover:text-ztg-cyan transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ztg-cyan">Insights</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-6">
            <span className="w-2 h-2 rounded-full bg-ztg-cyan animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
              ENGINEERING RESEARCH & BRIEFS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-4xl mx-auto">
            Technology Intelligence & <span className="text-ztg-cyan">Perspectives.</span>
          </h1>

          <p className="text-base sm:text-lg text-ztg-muted max-w-3xl mx-auto leading-relaxed">
            Analytical insights, architectural methodologies, and strategic guidance published by the engineers, architects, and security specialists at Zuriqon Technology Group.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-ztg-border/70 hover:border-ztg-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-ztg-blue/10"
            >
              <div className="relative h-52 w-full overflow-hidden bg-ztg-navy">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1420] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#070B10]/80 text-ztg-cyan border border-ztg-cyan/30 backdrop-blur-md">
                  {article.category}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-ztg-muted mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-ztg-blue" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-ztg-cyan" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-ztg-cyan transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-ztg-muted font-mono">{article.author}</span>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ztg-cyan hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Read Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tech Briefing Subscription */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-ztg-border text-center max-w-3xl mx-auto relative overflow-hidden">
          <Sparkles className="w-10 h-10 text-ztg-cyan mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Receive Our Strategic Architecture Briefs
          </h3>
          <p className="text-xs sm:text-sm text-ztg-muted mb-6">
            Periodic executive intelligence on cloud infrastructure, AI adoption, and zero-trust engineering.
          </p>

          {newsletterSuccess ? (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Thank you! You are now subscribed to ZTG Technical Intelligence.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="architect@enterprise.com"
                className="flex-1 px-4 py-3 rounded-full bg-ztg-navy border border-ztg-border text-white text-xs sm:text-sm focus:outline-none focus:border-ztg-cyan"
              />
              <button
                type="submit"
                className="py-3 px-6 rounded-full font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-ztg-blue to-ztg-cyan shadow-glow-sm hover:opacity-90 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-ztg-border shadow-2xl bg-[#09121d]/98 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-ztg-muted hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-ztg-blue/15 text-ztg-cyan border border-ztg-blue/30 mb-3 inline-block">
              {selectedArticle.category}
            </span>

            <h2 className="text-2xl font-bold text-white mb-3">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs font-mono text-ztg-muted mb-6 pb-4 border-b border-white/10">
              <span>{selectedArticle.author}</span>
              <span>·</span>
              <span>{selectedArticle.date}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs sm:text-sm text-ztg-muted leading-relaxed space-y-4 mb-8">
              <p className="text-white font-medium">
                {selectedArticle.excerpt}
              </p>
              <p>
                In today's interconnected technological ecosystem, organizations in emerging and global technology capitals require distributed system models that resist latency spikes and regional failures.
              </p>
              <p>
                At Zuriqon Technology Group (Kigali, Rwanda), our engineering approach prioritizes edge caching nodes, automated container failovers, and end-to-end data encryption across transactional workloads.
              </p>
              <p>
                By building modular cloud infrastructure from day one, enterprises unlock continuous deployment without compromising security or regulatory auditability.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-mono text-ztg-muted">ZTG Thought Leadership Series</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="py-2.5 px-6 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal('')} />
    </div>
  );
}


import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';

import { INSIGHTS_DATA } from '../data/companyData';
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from 'lucide-react';

export default function HomePage({ onOpenQuoteModal, onSelectServiceForQuote, preSelectedService }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Outlined Electric Blue Typography & 3D Three.js Globe */}
      <HeroSection onOpenQuoteModal={() => onOpenQuoteModal('')} />

      {/* Floating Company Indicators / Statistics Panel */}
      <StatisticsSection />

      {/* About Zuriqon Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection onSelectServiceForQuote={onSelectServiceForQuote} />

      {/* Industries Section */}
      <IndustriesSection onSelectIndustryForQuote={(ind) => onSelectServiceForQuote(`Consulting for ${ind}`)} />

      {/* Why Choose Zuriqon Section */}
      <WhyChooseUsSection />

      {/* Projects Showcase */}
      <ProjectsSection />

      {/* Insights / Tech Intelligence Preview Section */}
      <section className="py-24 sm:py-32 relative bg-[#070B10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/90 border border-ztg-border mb-4">
                <span className="w-2 h-2 rounded-full bg-ztg-cyan" />
                <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
                  THOUGHT LEADERSHIP
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Tech Intelligence & <span className="text-ztg-cyan">Insights.</span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ztg-cyan hover:text-white transition-colors group"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS_DATA.map((item) => (
              <article
                key={item.id}
                className="group glass-panel rounded-3xl overflow-hidden border border-ztg-border/70 hover:border-ztg-cyan/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 w-full overflow-hidden bg-ztg-navy">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1420] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#070B10]/80 text-ztg-cyan border border-ztg-cyan/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-ztg-muted mb-3 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-ztg-blue" />
                        {item.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-ztg-cyan" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ztg-cyan transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ztg-muted leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-ztg-muted font-mono">{item.author}</span>
                    <Link
                      to="/insights"
                      className="text-xs font-semibold text-ztg-cyan hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Read Brief</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <CTASection onOpenQuoteModal={() => onOpenQuoteModal('')} />


      
    </div>
  );
}


import React from 'react';
import { useNavigate } from 'react-router-dom';
import DigitalGlobe from './DigitalGlobe';
import { ArrowRight, MessageSquare, Compass, ShieldCheck, Cpu } from 'lucide-react';

export default function HeroSection({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 768);
  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const goToServices = () => navigate('/services');
  const goToContact = () => navigate('/contact');

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-tech-grid"
    >
      {/* Background Radial Glow & Futuristic Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#19BFFF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#51E5F5]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">
            
            {/* Small Introductory Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-navy/80 border border-ztg-border mb-6 w-fit backdrop-blur-md shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-ztg-cyan animate-ping" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-ztg-cyan">
                WELCOME TO ZURIQON TECHNOLOGY GROUP
              </span>
            </div>

            {/* Main Headline with White & Outlined Electric-Blue Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
              <span className="text-white block font-sans">
                Building the Future
              </span>
              <span className="text-outline-blue block font-sans tracking-tight hover:text-ztg-blue/20 transition-colors duration-300">
                Through Technology.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-ztg-muted font-normal max-w-2xl mb-8 sm:mb-10 leading-relaxed">
              We transform ideas into intelligent digital solutions, empowering businesses and individuals through innovation, technology and strategic expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
              {/* Button 1: Explore Our Services */}
              <button
                onClick={goToServices}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-ztg-blue via-[#18a8e0] to-[#1281b3] hover:from-ztg-cyan hover:to-ztg-blue transition-all duration-300 shadow-glow-sm hover:shadow-glow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              {/* Button 2: Let's Talk */}
              <button
                onClick={goToContact}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-[#0F1B2D]/80 hover:bg-[#15253e] border border-ztg-border hover:border-ztg-cyan/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-ztg-cyan" />
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 text-ztg-cyan transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </div>

            {/* Technology Assurance Micro-Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-ztg-border/40">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-ztg-cyan shrink-0" />
                <span className="text-xs text-ztg-muted font-medium">Intelligent Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-ztg-blue shrink-0" />
                <span className="text-xs text-ztg-muted font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-xs text-ztg-muted font-medium">Cloud Scalable</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: 3D Digital Globe / Network Spherical Visualization */}
          <div className="lg:col-span-5 flex items-center justify-center relative hidden md:block">
            <DigitalGlobe />
          </div>
          {/* Show a fallback image on small screens */}
          <div className="lg:col-span-5 flex items-center justify-center relative md:hidden mb-8">
            <img src="/placeholder-globe.png" alt="Globe" className="w-48 h-48 object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
}


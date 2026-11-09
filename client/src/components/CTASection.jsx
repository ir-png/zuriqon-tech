import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function CTASection({ onOpenQuoteModal }) {
  const navigate = useNavigate();
  const goToContact = () => navigate('/contact');

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#070B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glow backdrop frame */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden border border-ztg-border/80 bg-gradient-to-br from-[#0B1420] via-[#09121E] to-[#070B10] shadow-2xl shadow-black/80">
          
          {/* Glowing blue background elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-ztg-blue/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-ztg-cyan/20 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Subtle tech grid lines */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ztg-blue/10 border border-ztg-blue/30 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-ztg-cyan" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-widest uppercase text-ztg-cyan">
                LET'S COLLABORATE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Have an Idea? <span className="text-ztg-cyan">Let's Build Something Extraordinary.</span>
            </h2>

            <p className="text-base sm:text-lg text-ztg-muted leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
              Whether you need a website, software solution, IT support or a complete digital transformation strategy, Zuriqon Technology Group is ready to help turn your vision into reality.
            </p>

            {/* Buttons: Start Your Project & Contact Our Team */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-ztg-blue via-[#18a8e0] to-[#1281b3] hover:from-ztg-cyan hover:to-ztg-blue transition-all duration-300 shadow-glow-sm hover:shadow-glow-md transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={goToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-[#0F1B2D]/90 hover:bg-[#16273f] border border-ztg-border hover:border-ztg-cyan/60 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-ztg-cyan" />
                <span>Contact Our Team</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


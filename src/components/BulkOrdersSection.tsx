import React from 'react';
import { Layers, MessageCircle, CheckCircle2 } from 'lucide-react';

export const BulkOrdersSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/916383479097?text=${encodeURIComponent(
    "Hi GoldenPic Pro! We have a bulk order of 100+ images / ongoing property shoots and would like to discuss dedicated agency volume pricing."
  )}`;

  return (
    <section className="py-20 relative bg-[#060709] border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card-gold rounded-3xl p-8 sm:p-14 relative overflow-hidden border-2 border-[#E5B849]/50 shadow-2xl bg-gradient-to-r from-[#0E1017] via-[#141824] to-[#0E1017]">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5B849]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5B849]/15 text-[#E5B849] border border-[#E5B849]/40 text-xs font-extrabold uppercase tracking-widest">
                <Layers className="w-4 h-4 text-[#E5B849]" />
                Photographers & Agencies Dedicated Desk
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
                  Have <span className="text-gradient-gold">100+ Images?</span> <br />
                  We've Got You Covered.
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Bulk orders, consistent editing style matching your brand aesthetic, and reliable turnaround for high-volume real estate photographers, agents, and agencies.
                </p>
              </div>

              {/* Bulk Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849] shrink-0" />
                  <span>Dedicated Master Editor</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849] shrink-0" />
                  <span>Custom Preset Matching</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849] shrink-0" />
                  <span>Priority 12-24H Queue</span>
                </div>
              </div>

            </div>

            {/* Right Action Callout */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl font-extrabold text-base text-black bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] shadow-2xl hover:shadow-[#E5B849]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group text-center"
              >
                <MessageCircle className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                <span>Talk About Your Project</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center lg:text-right font-medium">
                Direct WhatsApp consultation with SJ Subramani
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

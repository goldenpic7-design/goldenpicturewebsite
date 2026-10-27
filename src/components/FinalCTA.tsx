import React from 'react';
import { Sparkles, MessageCircle, Mail, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenSampleModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenSampleModal }) => {
  const whatsappUrl = `https://wa.me/916383479097?text=${encodeURIComponent(
    "Hi GoldenPic Pro! I'm ready to make my property photos stand out. I'd like to get 3 free sample edits."
  )}`;

  return (
    <section className="py-28 relative bg-[#060709] overflow-hidden border-t border-[#E5B849]/20">
      
      {/* Background Zooming Twilight Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div
          className="w-full h-full bg-cover bg-center animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23100C2A'/%3E%3Cstop offset='50%25' stop-color='%23381658'/%3E%3Cstop offset='80%25' stop-color='%238C315B'/%3E%3Cstop offset='100%25' stop-color='%23F39C12'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23sky)'/%3E%3Ccircle cx='600' cy='500' r='300' fill='%23FFD700' opacity='0.15' blur='50'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Radial overlay */}
      <div className="absolute inset-0 bg-radial-gradient opacity-90 z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#E5B849]/40 text-xs font-bold text-[#FFF0CA] uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#E5B849] animate-spin-slow" />
          Experience Our Quality Risk Free
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl font-extrabold font-display text-white">
            Ready to Make Your Property <br />
            <span className="text-gradient-gold">Photos Stand Out?</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Send us 3 images and experience our editing quality with zero risk or commitment.
          </p>
        </div>

        {/* Big Highlight CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenSampleModal}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl font-extrabold text-lg text-black bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] shadow-2xl shadow-[#E5B849]/30 hover:shadow-2xl hover:shadow-[#E5B849]/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <Sparkles className="w-6 h-6 text-black" />
            <span>GET 3 FREE SAMPLE EDITS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-5 rounded-2xl font-bold text-base text-white bg-[#0E1017] hover:bg-[#25D366]/20 border border-slate-700 hover:border-[#25D366]/60 hover:text-[#25D366] transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>WhatsApp Direct</span>
          </a>

          <a
            href="mailto:goldenpic7@gmail.com?subject=Requesting%203%20Free%20Sample%20Edits&body=Hi%20GoldenPic%20Pro,%20I'd%20like%20to%20send%203%20test%20images%20for%20editing."
            className="w-full sm:w-auto px-8 py-5 rounded-2xl font-bold text-base text-slate-200 hover:text-white bg-slate-900/80 border border-slate-700 flex items-center justify-center gap-2.5 hover:border-[#E5B849]/40 transition-all"
          >
            <Mail className="w-5 h-5 text-[#E5B849]" />
            <span>Email Us</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 font-mono pt-2">
          ⚡ 24-Hour Delivery • 100% Quality Check • No Credit Card Required
        </p>

      </div>
    </section>
  );
};

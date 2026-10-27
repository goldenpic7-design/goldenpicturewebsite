import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { Sparkles, MessageCircle, ShieldCheck, Clock, Layers, Award, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenSampleModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSampleModal }) => {
  const whatsappUrl = `https://wa.me/916383479097?text=${encodeURIComponent(
    "Hi GoldenPic Pro! I'm interested in real estate photo editing services and would like to claim 3 free sample edits."
  )}`;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-radial-gradient">
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5B849]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#C59B27]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#E5B849]/30 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#E5B849] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#FFF0CA] uppercase">GOLDENPIC PRO</span>
              <span className="text-slate-500">•</span>
              <span className="text-xs font-semibold text-slate-300">Real Estate Photo Editing Studio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.1] text-white">
                Make Every Property <br />
                <span className="text-gradient-gold">Look Its Best.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
                Professional real estate photo editing, HDR enhancement, virtual twilight, sky replacement, and video editing — delivered fast and consistently starting at <span className="text-[#E5B849] font-semibold">$0.50 / image</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenSampleModal}
                className="group relative px-8 py-4 rounded-2xl font-bold text-base text-black bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] shadow-xl shadow-[#E5B849]/20 hover:shadow-2xl hover:shadow-[#E5B849]/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-black animate-spin-slow" />
                <span>Get 3 Free Samples</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-bold text-base text-white bg-[#0E1017] hover:bg-[#25D366]/15 border border-slate-700 hover:border-[#25D366]/60 hover:text-[#25D366] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Us Direct</span>
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E5B849]" />
                <span className="text-xs font-semibold text-slate-300">24H Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E5B849]" />
                <span className="text-xs font-semibold text-slate-300">MLS-Ready Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#E5B849]" />
                <span className="text-xs font-semibold text-slate-300">Free Sky & TV Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E5B849]" />
                <span className="text-xs font-semibold text-slate-300">Led by SJ Subramani</span>
              </div>
            </div>

          </div>

          {/* Right 3D Spatial Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card-gold rounded-3xl p-3 relative overflow-hidden shadow-2xl">
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#E5B849]/40 text-[10px] uppercase font-bold tracking-widest text-[#E5B849]">
                3D Studio Environment
              </div>
              <Hero3DCanvas />
            </div>

            {/* Floating Miniature Property Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-panel border border-[#E5B849]/30 shadow-2xl animate-float-slow z-20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5B849] to-[#8C6612] flex items-center justify-center font-bold text-black text-sm font-display">
                $0.50
              </div>
              <div>
                <p className="text-xs font-bold text-white">Starting Price</p>
                <p className="text-[10px] text-slate-400">All standard enhancements included</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

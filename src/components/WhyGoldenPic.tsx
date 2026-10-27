import React from 'react';
import { Award, Clock, Image, ShieldCheck, UserCheck, CheckCircle2, Sparkles } from 'lucide-react';

interface StatCard {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STATS: StatCard[] = [
  { value: '8+', label: 'Years Experience', icon: Award },
  { value: '10K+', label: 'Images Edited', icon: Image },
  { value: '24H', label: 'Fast Turnaround*', icon: Clock },
  { value: '100%', label: 'Quality Focus', icon: ShieldCheck }
];

export const WhyGoldenPic: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative bg-[#07080B] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#E5B849]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            <UserCheck className="w-3.5 h-3.5" />
            Studio Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Why Choose <span className="text-gradient-gold">GoldenPic Pro?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Built on years of high-volume real estate post-production experience, delivering speed without compromising precision.
          </p>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card-gold rounded-3xl p-6 sm:p-8 text-center space-y-3 border border-[#E5B849]/25 hover:border-[#E5B849]/60 hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-[#E5B849] to-[#8C6612] p-[1px] shadow-md">
                  <div className="w-full h-full bg-[#0E1017] rounded-[15px] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E5B849]" />
                  </div>
                </div>

                <div className="text-3xl sm:text-5xl font-extrabold font-display text-white text-gradient-gold">
                  {stat.value}
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founder / Studio Spotlight Card */}
        <div className="glass-card-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#E5B849]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Founder Avatar / Emblem */}
            <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-[#E5B849] via-[#C59B27] to-[#8C6612] p-1 shadow-2xl shadow-[#E5B849]/30 mb-4">
                <div className="w-full h-full bg-[#0E1017] rounded-[22px] flex items-center justify-center flex-col p-4">
                  <Sparkles className="w-10 h-10 text-[#E5B849] animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Master Editor</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B849]/15 text-[#E5B849] text-xs font-bold border border-[#E5B849]/30">
                <Award className="w-3.5 h-3.5" />
                Led by SJ Subramani
              </div>
            </div>

            {/* Right Bio & Values */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Dedicated Real Estate Visual Expertise
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                With over 8 years of professional experience in real estate photo editing, GoldenPic Pro focuses on delivering consistent, clean, and market-ready property visuals. We understand the tight timelines real estate photographers and agents operate under, which is why we guarantee 24-hour turnaround with rigorous quality control on every batch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849]" />
                  <span>Strict white balance & natural lighting standards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849]" />
                  <span>Consistent editing style customized to your branding</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849]" />
                  <span>Direct founder communication & fast revisions</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B849]" />
                  <span>Full confidentiality & secure file transfers</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

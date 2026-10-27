import React from 'react';
import { Gift, CloudSun, Tv, Flame, Sprout, CheckCircle2 } from 'lucide-react';

interface FreeFeature {
  icon: React.ComponentType<{ className?: string }>;
  emoji: string;
  title: string;
  description: string;
  gradient: string;
}

const FREE_ITEMS: FreeFeature[] = [
  {
    icon: CloudSun,
    emoji: '☁️',
    title: 'Sky Replacement',
    description: 'Transform overcast, gloomy, or blown-out skies with beautiful realistic blue skies.',
    gradient: 'from-[#0EA5E9] to-[#0284C7]'
  },
  {
    icon: Tv,
    emoji: '📺',
    title: 'TV Screen Enhancement',
    description: 'Insert modern, high-definition screen images onto blank, black, or reflective television screens.',
    gradient: 'from-[#8B5CF6] to-[#6D28D9]'
  },
  {
    icon: Flame,
    emoji: '🔥',
    title: 'Fireplace Enhancement',
    description: 'Add realistic, cozy flaming logs into empty fireplace hearths for a welcoming feel.',
    gradient: 'from-[#EF4444] to-[#DC2626]'
  },
  {
    icon: Sprout,
    emoji: '🌱',
    title: 'Grass Enhancement',
    description: 'Fix patchy, brown, or dead lawn grass with rich emerald green landscaping.',
    gradient: 'from-[#10B981] to-[#059669]'
  }
];

export const IncludedFreeSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-[#08090C] via-[#0D1017] to-[#08090C] border-y border-[#E5B849]/15">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5B849]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] text-black font-extrabold text-xs tracking-widest uppercase shadow-lg shadow-[#E5B849]/20">
            <Gift className="w-4 h-4 text-black" />
            🎁 INCLUDED FREE WITH EVERY EDIT
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Standard Enhancements. <span className="text-gradient-gold">Zero Extra Fees.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Unlike other agencies that charge hidden fees for simple add-ons, GoldenPic Pro includes all essential property enhancements in our base price.
          </p>

          <div className="pt-2">
            <span className="inline-block text-xs font-bold text-[#E5B849] bg-[#E5B849]/10 px-4 py-1.5 rounded-full border border-[#E5B849]/30">
              ✨ No extra charge for standard enhancements.
            </span>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card-gold rounded-3xl p-6 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-[#E5B849]/20 hover:border-[#E5B849]/60 shadow-xl"
              >
                {/* FREE Ribbon Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-extrabold tracking-widest uppercase">
                  FREE
                </div>

                <div className="space-y-4">
                  {/* Emoji / Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#0E1017] border border-[#E5B849]/30 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform relative">
                    <span>{item.emoji}</span>
                    <Icon className="w-3.5 h-3.5 text-[#E5B849] absolute -bottom-1 -right-1" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-[#E5B849] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-[#E5B849]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5B849]" />
                    <span>Included at $0.50/image base price</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

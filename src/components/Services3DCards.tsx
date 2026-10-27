import React from 'react';
import { Home, Zap, Flame, Sunset, CloudSun, Tv, Video, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge?: string;
  description: string;
  features: string[];
  gradient: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Home,
    title: 'HDR Enhancement',
    badge: 'Popular',
    description: 'Natural exposure, balanced highlights and shadows, and clean professional finishing for complex window pulls.',
    features: ['Multi-exposure fusion', 'Window pull view recovery', 'True-color shadow recovery', 'MLS brightness standard'],
    gradient: 'from-[#E5B849] to-[#997315]'
  },
  {
    icon: Zap,
    title: 'Single Image Enhancement',
    description: 'Professional color correction, exposure correction, contrast and detail enhancement for crisp property photos.',
    features: ['Lens distortion correction', 'White balance tuning', 'Sharpness recovery', 'Vignette removal'],
    gradient: 'from-[#F59E0B] to-[#D97706]'
  },
  {
    icon: Flame,
    title: 'Flash + Ambient Blending',
    badge: 'High End',
    description: 'Combine flash and ambient exposures to create natural-looking interiors with zero wall glare.',
    features: ['Glare & flare elimination', 'Marble texture reflection', 'Wall color cast correction', 'Ambient warm light balance'],
    gradient: 'from-[#EF4444] to-[#B91C1C]'
  },
  {
    icon: Sunset,
    title: 'Day → Dusk (Virtual Twilight)',
    badge: 'High Value',
    description: 'Transform daytime property photos into beautiful, romantic twilight scenes with glowing window lights.',
    features: ['Golden hour sky backdrop', 'Warm interior light activation', 'Exterior landscape lighting', 'Pool water glow'],
    gradient: 'from-[#8B5CF6] to-[#6D28D9]'
  },
  {
    icon: CloudSun,
    title: 'Sky Replacement',
    badge: 'FREE Included',
    description: 'Replace overcast, gloomy, or blown-out skies with clear, realistic blue skies and fluffy clouds.',
    features: ['Natural cloud blending', 'Realistic horizon masking', 'Light direction alignment', 'Zero extra charge'],
    gradient: 'from-[#0EA5E9] to-[#0369A1]'
  },
  {
    icon: Tv,
    title: 'Virtual Enhancement',
    badge: 'FREE Included',
    description: 'TV screens replacement, fireplace flame insertion, green grass restoration and property de-cluttering.',
    features: ['4K TV screen display', 'Realistic fireplace warmth', 'Lawn greenery restoration', 'Minor object removal'],
    gradient: 'from-[#10B981] to-[#047857]'
  },
  {
    icon: Video,
    title: 'Real Estate Video Editing',
    badge: 'Custom Quote',
    description: 'Short promotional reels and high-impact property videos tailored for social media & YouTube.',
    features: ['Walkthrough reel editing', 'Dynamic text overlays', 'Cinematic color grading', 'Royalty-free audio track'],
    gradient: 'from-[#EC4899] to-[#BE185D]'
  }
];

interface ServicesProps {
  onOpenSampleModal: () => void;
}

export const Services3DCards: React.FC<ServicesProps> = ({ onOpenSampleModal }) => {
  return (
    <section id="services" className="py-24 relative bg-[#07080B] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E5B849]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            Complete Post-Production Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Everything Your <span className="text-gradient-gold">Property Photos</span> Need
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            From single-frame color tuning to multi-exposure HDR fusion and virtual twilight transformations, we deliver consistent quality for every listing.
          </p>
        </div>

        {/* 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl glass-panel p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#E5B849]/50 hover:shadow-2xl hover:shadow-[#E5B849]/15 flex flex-col justify-between"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#E5B849]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] shadow-lg shadow-[#E5B849]/10 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-[#0E1017] rounded-[15px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#E5B849]" />
                      </div>
                    </div>

                    {service.badge && (
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                        service.badge.includes('FREE')
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : 'bg-[#E5B849]/15 text-[#FFF0CA] border border-[#E5B849]/30'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-[#E5B849] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E5B849] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 relative z-10">
                  <button
                    onClick={onOpenSampleModal}
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#FFF0CA] group-hover:to-[#E5B849] group-hover:text-black border border-slate-700/60 group-hover:border-[#E5B849] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

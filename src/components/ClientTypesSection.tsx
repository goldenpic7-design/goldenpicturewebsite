import React from 'react';
import { Home, Camera, Building2, HardHat, Hotel, Megaphone } from 'lucide-react';

interface ClientType {
  emoji: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  subtext: string;
}

const CLIENTS: ClientType[] = [
  { emoji: '🏠', icon: Home, label: 'Real Estate Agents', subtext: 'MLS-ready property listings that get clicked faster.' },
  { emoji: '📸', icon: Camera, label: 'Real Estate Photographers', subtext: 'Outsource post-production to focus on shooting.' },
  { emoji: '🏢', icon: Building2, label: 'Property Agencies', subtext: 'Consistent high-volume visual brand standards.' },
  { emoji: '🏗️', icon: HardHat, label: 'Builders & Developers', subtext: 'Showcase architectural projects in golden hour light.' },
  { emoji: '🏨', icon: Hotel, label: 'Hotels & Resorts', subtext: 'Luxury hospitality imagery for booking portals.' },
  { emoji: '📱', icon: Megaphone, label: 'Property Marketing Teams', subtext: 'High-impact social reels & digital ad assets.' }
];

export const ClientTypesSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#08090C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            Who We Partner With
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Tailored For <span className="text-gradient-gold">Industry Professionals</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            We work directly with real estate professionals worldwide to elevate property marketing visuals.
          </p>
        </div>

        {/* 6 Client Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS.map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-[#E5B849]/50 hover:-translate-y-1.5 transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0E1017] border border-[#E5B849]/30 flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform relative">
                    <span>{client.emoji}</span>
                    <Icon className="w-3.5 h-3.5 text-[#E5B849] absolute -bottom-1 -right-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-[#E5B849] transition-colors">
                      {client.label}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {client.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Upload, Wand2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Send Your Photos',
    description: 'Upload your property RAW or JPEG images through WhatsApp, Google Drive, Dropbox, or Email.',
    icon: Upload
  },
  {
    number: '02',
    title: 'We Edit',
    description: 'Our senior editing team enhances exposure, applies window pulls, swaps skies, and tunes color temperature.',
    icon: Wand2
  },
  {
    number: '03',
    title: 'Quality Check',
    description: 'Every single photo passes through a final quality inspection before client sign-off.',
    icon: ShieldCheck
  },
  {
    number: '04',
    title: 'Fast Delivery',
    description: 'Receive full-resolution MLS-compliant images within 24 hours, ready for instant property listing.',
    icon: CheckCircle2
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#07080B] border-t border-slate-800/80 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            Seamless Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            From Upload to <span className="text-gradient-gold">Market-Ready</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Our streamlined 4-step workflow ensures zero friction and lightning-fast turnarounds.
          </p>
        </div>

        {/* Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-card-gold rounded-3xl p-6 relative overflow-hidden space-y-4 border border-[#E5B849]/20 hover:border-[#E5B849]/60 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-display text-[#E5B849]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0E1017] border border-[#E5B849]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#E5B849]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-display text-white">{step.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                  </div>

                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-[#E5B849]/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

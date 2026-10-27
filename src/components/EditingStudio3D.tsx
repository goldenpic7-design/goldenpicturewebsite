import React, { useState } from 'react';
import { Sparkles, Sliders, Eye, Check, Wand2, ShieldCheck } from 'lucide-react';

interface LayerChannel {
  id: string;
  name: string;
  shortLabel: string;
  icon: string;
  active: boolean;
  description: string;
}

export const EditingStudio3D: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1); // 0: RAW, 1: EDITING, 2: FINAL
  const [channels, setChannels] = useState<LayerChannel[]>([
    { id: 'hdr', name: 'HDR Window Pull', shortLabel: 'HDR', icon: '☀️', active: true, description: 'Balancing indoor ambient light with outdoor window view exposure.' },
    { id: 'sky', name: 'Sky Replacement', shortLabel: 'SKY', icon: '☁️', active: true, description: 'Blending realistic azure blue sky & soft clouds onto horizon.' },
    { id: 'light', name: 'Lighting & Fire Glow', shortLabel: 'LIGHT', icon: '✨', active: true, description: 'Activating warm interior lamp glows and fireplace flames.' },
    { id: 'color', name: 'Color Cast Correction', shortLabel: 'COLOR', icon: '🎨', active: true, description: 'Removing yellow ceiling cast for crisp neutral whites.' },
    { id: 'declutter', name: 'TV & Grass Enhancement', shortLabel: 'FREE ADD-ON', icon: '🌱', active: true, description: 'Inserting 4K screen art and restoring emerald grass lawn.' }
  ]);

  const toggleChannel = (id: string) => {
    setChannels(prev =>
      prev.map(ch => (ch.id === id ? { ...ch, active: !ch.active } : ch))
    );
  };

  const getStepTitle = () => {
    switch (activeStep) {
      case 0: return '01. RAW Camera Import';
      case 1: return '02. Multi-Layer Editing & Masking';
      case 2: return '03. MLS-Ready Master Export';
      default: return '';
    }
  };

  return (
    <section id="studio" className="py-24 relative bg-[#060709] overflow-hidden">
      {/* Background Studio Light Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#E5B849]/10 via-transparent to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            <Wand2 className="w-3.5 h-3.5" />
            Interactive 3D Editing Studio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Inside Our <span className="text-gradient-gold">Post-Production Pipeline</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Experience how our editing team stacks multi-exposure frames, masks sky channels, and balances natural lighting to craft flawless property photos.
          </p>
        </div>

        {/* Pipeline Step Navigator */}
        <div className="flex items-center justify-center gap-2 sm:gap-6 mb-12">
          {[
            { step: 0, label: 'RAW FILE', icon: '📷' },
            { step: 1, label: 'AI & LAYER EDITING', icon: '✨' },
            { step: 2, label: 'FINAL MASTER', icon: '🏆' }
          ].map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`px-4 sm:px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeStep === item.step
                  ? 'bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] text-black shadow-lg shadow-[#E5B849]/25 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white border-slate-700/60'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Studio Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Virtual Viewport Canvas */}
          <div className="lg:col-span-8">
            <div className="glass-card-gold rounded-3xl p-4 sm:p-6 relative overflow-hidden border border-[#E5B849]/30 shadow-2xl">
              
              {/* Studio Canvas Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#E5B849] font-bold">GOLDENPIC STUDIO v2.6</span>
                </div>
                <div>{getStepTitle()}</div>
              </div>

              {/* Central Visual Showcase */}
              <div className="relative my-6 aspect-[16/10] rounded-2xl overflow-hidden bg-black/80 border border-slate-800 flex items-center justify-center">
                
                {/* Visual Representation of Layers */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  
                  {/* Layer Stack Visualization */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl transition-all duration-700">
                    
                    {/* Base Background Image Layer */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ${
                        activeStep === 0
                          ? 'brightness-75 contrast-90 hue-rotate-15 blur-[0.5px]'
                          : 'brightness-105 contrast-105'
                      }`}
                      style={{
                        background: activeStep === 0
                          ? 'linear-gradient(135deg, #1E2530 0%, #0F131A 100%)'
                          : 'linear-gradient(135deg, #2A364F 0%, #151C28 100%)'
                      }}
                    >
                      {/* Render Simulated Interior Room Graphics */}
                      <div className="w-full h-full relative">
                        
                        {/* Window Element */}
                        <div
                          className={`absolute top-[15%] left-[10%] w-[30%] h-[50%] transition-all duration-500 rounded border-2 ${
                            channels.find(c => c.id === 'hdr')?.active && activeStep !== 0
                              ? 'bg-gradient-to-b from-[#38BDF8] to-[#1E3A8A] border-white shadow-[0_0_25px_rgba(56,189,248,0.5)]'
                              : 'bg-white border-slate-400 opacity-90'
                          }`}
                        >
                          <div className="p-2 text-[10px] font-bold text-black/60 uppercase">
                            {channels.find(c => c.id === 'hdr')?.active && activeStep !== 0 ? 'HDR Window View' : 'Blown Out White'}
                          </div>
                        </div>

                        {/* Sky Horizon (If twilight/sky layer active) */}
                        {channels.find(c => c.id === 'sky')?.active && activeStep !== 0 && (
                          <div className="absolute top-0 right-0 w-[55%] h-[40%] bg-gradient-to-b from-[#8C315B] via-[#D4634B] to-[#F39C12] opacity-85 rounded-bl-3xl p-3 border-b border-l border-[#FFC845]/40 animate-pulse">
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">☁️ Sunset Sky Active</span>
                          </div>
                        )}

                        {/* Interior Sofa & Lighting Glow */}
                        <div className="absolute bottom-[20%] right-[15%] w-[40%] h-[30%] bg-slate-800 rounded-2xl p-4 border border-slate-700 flex flex-col justify-between">
                          <span className="text-xs text-slate-300 font-bold">Luxury Interior Sofa</span>
                          
                          {channels.find(c => c.id === 'light')?.active && activeStep !== 0 && (
                            <div className="absolute -top-12 right-6 w-16 h-16 rounded-full bg-[#FFD700]/30 blur-md border border-[#FFD700] flex items-center justify-center animate-ping">
                              <span className="text-[9px] font-bold text-[#FFD700]">GLOW</span>
                            </div>
                          )}
                        </div>

                        {/* Fireplace / TV Screen Channel */}
                        {channels.find(c => c.id === 'declutter')?.active && activeStep !== 0 && (
                          <div className="absolute bottom-[10%] left-[10%] w-[25%] h-[20%] bg-gradient-to-r from-orange-600 to-amber-500 rounded-lg p-2 border border-yellow-300 shadow-lg text-black font-bold text-[10px] flex items-center justify-center">
                            🔥 Fireplace Flame Active
                          </div>
                        )}

                      </div>
                    </div>

                    {/* Step Overlay Info */}
                    <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#E5B849]/40 text-xs font-bold text-[#E5B849] flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#E5B849]" />
                      <span>{getStepTitle()}</span>
                    </div>

                  </div>

                </div>

              </div>

              {/* Bottom Channel Toggles Bar */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#E5B849]" />
                    <span>Active Layer Channels ({channels.filter(c => c.active).length}/5)</span>
                  </span>
                  <span>Click to toggle edit channel</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {channels.map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => toggleChannel(ch.id)}
                      className={`p-2.5 rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-between ${
                        ch.active
                          ? 'bg-[#E5B849]/20 border border-[#E5B849] text-white shadow-md'
                          : 'bg-slate-900/60 border border-slate-800 text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{ch.icon}</span>
                        <span className="truncate">{ch.shortLabel}</span>
                      </span>
                      {ch.active ? (
                        <Check className="w-3.5 h-3.5 text-[#E5B849] shrink-0" />
                      ) : (
                        <Eye className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Pipeline Info & Workflow Detail */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="glass-panel p-6 rounded-3xl border border-[#E5B849]/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5B849] to-[#8C6612] flex items-center justify-center text-black font-bold font-display">
                  {activeStep + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">{getStepTitle()}</h3>
                  <p className="text-xs text-[#E5B849] font-medium">Standard GoldenPic Pro Pipeline</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeStep === 0 && 'We start by ingesting raw camera exposures (BRACKETED HDR / ambient / flash). Our QA team checks resolution, lens metadata, and alignment.'}
                {activeStep === 1 && 'Our senior editors blend multi-exposure brackets, isolate window frames, swap skies, and inject subtle interior warm light for maximum curb appeal.'}
                {activeStep === 2 && 'Final quality control review verifying color accuracy, perspective alignment, and MLS size compliance. Delivered within 24 hours.'}
              </p>

              <div className="pt-3 border-t border-slate-800 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#E5B849]" />
                  <span>100% Quality Assurance Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Sparkles className="w-4 h-4 text-[#E5B849]" />
                  <span>Free re-edits until 100% satisfied</span>
                </div>
              </div>

            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#E5B849]/15 to-[#0E1017] border border-[#E5B849]/40 space-y-2">
              <span className="text-xs font-bold text-[#E5B849] uppercase tracking-wider block">Studio Efficiency</span>
              <p className="text-sm font-bold text-white">Over 10,000+ photos edited with 24-hour delivery turnaround.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

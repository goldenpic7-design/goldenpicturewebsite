import React, { useState, useRef, useCallback } from 'react';
import { DEMO_PAIRS } from '../utils/imageGenerator';
import type { ImagePair } from '../utils/imageGenerator';
import { Sparkles, CheckCircle2, Sliders, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair: ImagePair = DEMO_PAIRS[selectedPairIndex];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-24 relative bg-[#08090C] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#E5B849]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            <Sliders className="w-3.5 h-3.5" />
            Interactive 3D Visualizer
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            See The Transformation <span className="text-gradient-gold">Before → After</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Drag the slider across to see how our studio elevates dull camera RAW captures into MLS-ready luxury property listings.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {DEMO_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                setSelectedPairIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                selectedPairIndex === idx
                  ? 'bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] text-black shadow-lg shadow-[#E5B849]/20 scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-[#E5B849]/40'
              }`}
            >
              {pair.category}
            </button>
          ))}
        </div>

        {/* Main Draggable Slider Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Slider Container */}
          <div className="lg:col-span-8">
            <div className="glass-card-gold rounded-3xl p-3 relative overflow-hidden shadow-2xl">
              
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700/50"
              >
                {/* AFTER Image (Full Layer at Back) */}
                <img
                  src={activePair.after}
                  alt={`${activePair.title} After`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* AFTER Badge Top Right */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-[#E5B849]/40 text-xs font-bold text-[#E5B849] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5B849]" />
                  <span>AFTER (MLS READY)</span>
                </div>

                {/* BEFORE Image (Clipped Overlay Layer) */}
                <div
                  style={{ width: `${sliderPosition}%` }}
                  className="absolute top-0 left-0 bottom-0 overflow-hidden z-10 border-r-2 border-[#E5B849] shadow-2xl"
                >
                  <img
                    src={activePair.before}
                    alt={`${activePair.title} Before`}
                    className="absolute top-0 left-0 max-w-none h-full object-cover"
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                  />
                  {/* BEFORE Badge Top Left */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-slate-700 text-xs font-bold text-slate-300">
                    BEFORE (DULL RAW)
                  </div>
                </div>

                {/* Draggable Slider Bar & Handle */}
                <div
                  style={{ left: `${sliderPosition}%` }}
                  className="absolute top-0 bottom-0 z-30 -ml-4 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] text-black shadow-2xl flex items-center justify-center border-2 border-black animate-pulse">
                    <ArrowLeftRight className="w-4 h-4 font-bold" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#E5B849]/30 text-xs text-slate-200">
                    <span className="text-[#E5B849] font-bold">Drag slider ◀ ▶</span> to compare quality
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Feature Panel */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B849]/10 border border-[#E5B849]/40 text-xs font-bold text-[#E5B849]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Professional Enhancement</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-display text-white">{activePair.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{activePair.description}</p>
            </div>

            {/* List of Applied Enhancements */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Enhancements:</h4>
              <div className="space-y-2">
                {activePair.tags.map((tag, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E5B849] shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-[#E5B849]/20 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Photo Editing Price</span>
                <span className="text-lg font-bold text-[#E5B849] font-display">$0.50 / Image</span>
              </div>
              <span className="text-[11px] font-bold text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] px-3 py-1.5 rounded-lg">
                24H Delivery
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

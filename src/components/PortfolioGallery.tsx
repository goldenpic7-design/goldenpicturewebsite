import React, { useState } from 'react';
import { DEMO_PAIRS } from '../utils/imageGenerator';
import type { ImagePair } from '../utils/imageGenerator';
import { Sparkles, Eye, ArrowLeftRight, X, Layers } from 'lucide-react';

interface PortfolioProps {
  onOpenSampleModal: () => void;
}

export const PortfolioGallery: React.FC<PortfolioProps> = ({ onOpenSampleModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPair, setSelectedPair] = useState<ImagePair | null>(null);
  const [modalSliderPos, setModalSliderPos] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'twilight', label: 'Twilight / Day to Dusk' },
    { id: 'hdr', label: 'Interior HDR' },
    { id: 'sky', label: 'Sky & Lawn' },
    { id: 'kitchen', label: 'Flash + Ambient' }
  ];

  const filteredPairs = activeCategory === 'all'
    ? DEMO_PAIRS
    : DEMO_PAIRS.filter(p => p.id === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#060709] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#E5B849]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            Cinematic Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            3D Floating <span className="text-gradient-gold">Showcase</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hover over any project card to inspect the editing quality or click to open the full-screen Before / After slider viewer.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] text-black shadow-lg shadow-[#E5B849]/20'
                  : 'glass-panel text-slate-300 hover:text-white border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Floating Cards Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPairs.map((pair) => (
            <div
              key={pair.id}
              onClick={() => setSelectedPair(pair)}
              className="group relative rounded-3xl glass-card-gold overflow-hidden cursor-pointer border border-[#E5B849]/30 hover:border-[#E5B849] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E5B849]/20"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pair.after}
                  alt={pair.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category & Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-[#E5B849]/30 text-[11px] font-bold text-[#E5B849]">
                    {pair.category}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-black/70 backdrop-blur-md border border-slate-700 text-[11px] font-bold text-slate-300">
                    {pair.badge}
                  </span>
                </div>

                {/* Hover CTA Button Center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] text-black font-extrabold text-xs tracking-wider uppercase shadow-2xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Inspect Before / After</span>
                  </div>
                </div>

                {/* Bottom Details Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <h3 className="text-xl font-bold font-display text-white">{pair.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-1">{pair.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Before/After Modal Lightbox */}
      {selectedPair && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-5xl glass-card-gold rounded-3xl p-6 border border-[#E5B849]/50 shadow-2xl space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#E5B849] uppercase tracking-widest block">{selectedPair.category}</span>
                <h3 className="text-2xl font-extrabold text-white font-display">{selectedPair.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPair(null)}
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Draggable Slider View */}
            <div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                setModalSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
              }}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700"
            >
              <img src={selectedPair.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
              
              <div style={{ width: `${modalSliderPos}%` }} className="absolute top-0 left-0 bottom-0 overflow-hidden z-10 border-r-2 border-[#E5B849]">
                <img src={selectedPair.before} alt="Before" className="absolute top-0 left-0 max-w-none h-full object-cover w-full" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-black/80 text-xs font-bold text-slate-300">BEFORE (RAW)</div>
              </div>

              <div className="absolute top-4 right-4 px-3 py-1 rounded-xl bg-black/80 text-xs font-bold text-[#E5B849] z-20">AFTER (MLS MASTER)</div>

              <div style={{ left: `${modalSliderPos}%` }} className="absolute top-0 bottom-0 z-30 -ml-4 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[#E5B849] text-black flex items-center justify-center font-bold shadow-2xl">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
              <span className="text-xs text-slate-400">Move cursor or drag across image to compare edits</span>
              <button
                onClick={() => { setSelectedPair(null); onOpenSampleModal(); }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get 3 Free Sample Edits
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

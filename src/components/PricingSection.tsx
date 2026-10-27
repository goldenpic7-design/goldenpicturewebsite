import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Video, Camera, ArrowRight, MessageCircle, DollarSign, Calculator } from 'lucide-react';

interface PricingProps {
  onOpenSampleModal: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenSampleModal }) => {
  const [photoCount, setPhotoCount] = useState<number>(30);

  const calculateCost = (count: number) => {
    return (count * 0.5).toFixed(2);
  };

  const whatsappUrl = `https://wa.me/916383479097?text=${encodeURIComponent(
    `Hi GoldenPic Pro! I'm interested in ordering photo editing for approximately ${photoCount} images at $0.50/image.`
  )}`;

  return (
    <section id="pricing" className="py-24 relative bg-[#08090C] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5B849]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#E5B849]/30 text-xs font-bold text-[#E5B849] uppercase tracking-widest">
            <DollarSign className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Simple & Honest <span className="text-gradient-gold">Rates</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            No hidden fees, no subscriptions. Pay only for what you edit with premium quality guaranteed.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card 1: Photo Editing ($0.50 / image) */}
          <div className="lg:col-span-7 glass-card-gold rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border-2 border-[#E5B849]/40 shadow-2xl">
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-[#E5B849]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#E5B849] tracking-widest uppercase block">Core Photo Service</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Real Estate Photo Editing</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E5B849] to-[#C59B27] p-[1px] shadow-lg">
                  <div className="w-full h-full bg-[#0E1017] rounded-[15px] flex items-center justify-center">
                    <Camera className="w-6 h-6 text-[#E5B849]" />
                  </div>
                </div>
              </div>

              {/* Price Banner */}
              <div className="py-4 border-y border-slate-800 flex items-baseline gap-3">
                <span className="text-4xl sm:text-6xl font-black text-white font-display">$0.50</span>
                <span className="text-slate-400 font-medium text-base sm:text-lg">/ Image</span>
                <span className="ml-auto px-3 py-1 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849]">
                  Starting Price
                </span>
              </div>

              {/* Inclusions Check Grid */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">What's Included in $0.50:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'HDR Enhancement',
                    'Color Correction',
                    'Exposure Correction',
                    'Sky Replacement (FREE)',
                    'TV Enhancement (FREE)',
                    'Fireplace Enhancement (FREE)',
                    'Grass Enhancement (FREE)',
                    'Professional Quality Control'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#E5B849] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Quantity Cost Estimator */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-[#E5B849]" />
                    <span>Instant Price Estimator:</span>
                  </span>
                  <span className="text-[#E5B849] text-sm font-display font-extrabold">
                    {photoCount} Photos = ${calculateCost(photoCount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={photoCount}
                  onChange={(e) => setPhotoCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#E5B849]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>5 Photos ($2.50)</span>
                  <span>50 Photos ($25.00)</span>
                  <span>200+ Photos ($100.00)</span>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-8 space-y-3">
              <button
                onClick={onOpenSampleModal}
                className="w-full py-4 rounded-2xl font-bold text-base text-black bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] shadow-xl hover:shadow-[#E5B849]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-black" />
                <span>Get 3 Free Sample Edits First</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-slate-300 hover:text-white bg-slate-900/60 border border-slate-700/60 hover:border-[#25D366]/40 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order {photoCount} Photos via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Card 2: Real Estate Video Editing */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border border-slate-700/70 shadow-xl">
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-pink-400 tracking-widest uppercase block">Video Post-Production</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Video Editing</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-[1px] shadow-lg">
                  <div className="w-full h-full bg-[#0E1017] rounded-[15px] flex items-center justify-center">
                    <Video className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
              </div>

              <div className="py-4 border-y border-slate-800">
                <span className="text-3xl font-extrabold text-white font-display">Custom Pricing</span>
                <p className="text-xs text-slate-400 mt-1">Tailored based on footage length & complexity</p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Video Formats We Edit:</p>
                <div className="space-y-2.5">
                  {[
                    'Short Property Reels (Instagram / TikTok)',
                    'Full Property Walkthrough Reels',
                    'YouTube Property Tour Videos',
                    'High-Impact Highlight Videos',
                    'Agency & Personal Branding Videos'
                  ].map((vFormat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{vFormat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Quote CTA */}
            <div className="pt-8">
              <a
                href={`https://wa.me/916383479097?text=${encodeURIComponent(
                  "Hi GoldenPic Pro! I'd like to get a custom quote for Real Estate Video Editing."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Get Your Quote →</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

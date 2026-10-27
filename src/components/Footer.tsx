import React from 'react';
import { Camera, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-slate-400 pt-16 pb-12 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5B849] to-[#8C6612] p-[1px]">
                <div className="w-full h-full bg-[#0E1017] rounded-[11px] flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[#E5B849]" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-bold tracking-wider text-white">GOLDENPIC</span>
                <span className="px-1.5 py-0.5 text-[10px] font-extrabold tracking-widest text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] rounded uppercase">PRO</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Professional Real Estate Photo Editing Studio. Delivering MLS-ready HDR enhancement, virtual twilight, sky replacement, and property video post-production.
            </p>

            <p className="text-xs text-[#E5B849] font-medium">
              HDR • Flash & Ambient • Twilight • Sky Replacement • Video Editing • Property Enhancement
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#before-after" className="hover:text-[#E5B849] transition-colors">Before & After Showcase</a></li>
              <li><a href="#services" className="hover:text-[#E5B849] transition-colors">Services & Inclusions</a></li>
              <li><a href="#studio" className="hover:text-[#E5B849] transition-colors">3D Editing Studio</a></li>
              <li><a href="#pricing" className="hover:text-[#E5B849] transition-colors">Pricing ($0.50/Image)</a></li>
              <li><a href="#portfolio" className="hover:text-[#E5B849] transition-colors">Portfolio Gallery</a></li>
              <li><a href="#why-us" className="hover:text-[#E5B849] transition-colors">Why GoldenPic Pro</a></li>
            </ul>
          </div>

          {/* Contact Metadata */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Direct Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a href="mailto:goldenpic7@gmail.com" className="flex items-center gap-2.5 hover:text-[#E5B849] transition-colors">
                <Mail className="w-4 h-4 text-[#E5B849]" />
                <span>goldenpic7@gmail.com</span>
              </a>
              <a href="https://wa.me/916383479097" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-[#25D366] transition-colors">
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>+91 63834 79097</span>
              </a>
              <a href="https://instagram.com/Goldenpic7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-pink-400 transition-colors">
                <Camera className="w-4 h-4 text-pink-400" />
                <span>Instagram: @Goldenpic7</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-400 pt-2">
              Studio Lead: SJ Subramani • 8+ Years Expertise
            </p>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 GoldenPic Pro. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#E5B849] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

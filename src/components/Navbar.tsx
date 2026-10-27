import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenSampleModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSampleModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/916383479097?text=${encodeURIComponent(
    "Hi GoldenPic Pro! I'm interested in real estate photo editing services and would like to claim 3 free sample edits."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#08090C]/85 backdrop-blur-xl border-b border-[#E5B849]/15 shadow-2xl shadow-black/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Emblem */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5B849] via-[#C59B27] to-[#8C6612] p-[1px] shadow-lg shadow-[#E5B849]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0E1017] rounded-[11px] flex items-center justify-center">
                <Camera className="w-5 h-5 text-[#E5B849] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xl font-bold tracking-wider text-white">GOLDENPIC</span>
                <span className="px-1.5 py-0.5 text-[10px] font-extrabold tracking-widest text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] rounded uppercase shadow-sm">PRO</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">Real Estate Photo Editing Studio</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#before-after" className="hover:text-[#E5B849] transition-colors">Before & After</a>
            <a href="#services" className="hover:text-[#E5B849] transition-colors">Services</a>
            <a href="#studio" className="hover:text-[#E5B849] transition-colors">3D Studio</a>
            <a href="#pricing" className="hover:text-[#E5B849] transition-colors">Pricing</a>
            <a href="#portfolio" className="hover:text-[#E5B849] transition-colors">Portfolio</a>
            <a href="#why-us" className="hover:text-[#E5B849] transition-colors">Why GoldenPic</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSampleModal}
              className="relative group px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-black bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] hover:shadow-lg hover:shadow-[#E5B849]/25 transition-all duration-300 active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
              <span>Get 3 Free Samples</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-white bg-slate-900/80 hover:bg-[#25D366]/20 border border-slate-700 hover:border-[#25D366]/50 hover:text-[#25D366] transition-all duration-300 flex items-center gap-2 group"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-800 space-y-3 bg-[#0B0D13]/95 backdrop-blur-2xl rounded-2xl p-5 border border-slate-700/50">
            <a href="#before-after" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#E5B849] py-1 font-medium">Before & After</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#E5B849] py-1 font-medium">Services</a>
            <a href="#studio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#E5B849] py-1 font-medium">3D Studio</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#E5B849] py-1 font-medium">Pricing</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#E5B849] py-1 font-medium">Portfolio</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#E5B849] py-1 font-medium">Why GoldenPic Pro</a>
            
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSampleModal(); }}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Get 3 Free Samples
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Direct (+91 63834 79097)
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

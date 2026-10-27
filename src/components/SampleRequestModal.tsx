import { useState } from 'react';
import { X, Sparkles, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyType, setPropertyType] = useState('Luxury Villa / Single Family');
  const [services, setServices] = useState<string[]>(['HDR Enhancement', 'Sky Replacement']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    setServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setSubmitted(true);

    const message = `Hi GoldenPic Pro! I'd like to request 3 FREE sample edits.
Name: ${name || 'Real Estate Professional'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
Property Type: ${propertyType}
Enhancements: ${services.join(', ')}`;

    window.open(`https://wa.me/916383479097?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmailSubmit = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setSubmitted(true);

    const body = `Hi GoldenPic Pro!

I would like to request 3 FREE sample edits for my property photos.

Name: ${name}
Email: ${email}
Phone: ${phone}
Property Type: ${propertyType}
Enhancements: ${services.join(', ')}`;

    window.open(`mailto:goldenpic7@gmail.com?subject=3%20Free%20Sample%20Edits%20Request&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl glass-card-gold rounded-3xl p-6 sm:p-8 border border-[#E5B849]/50 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5B849]/15 text-[#E5B849] text-xs font-bold border border-[#E5B849]/30">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free • No Credit Card Required
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Claim Your <span className="text-gradient-gold">3 Free Sample Edits</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Send us 3 of your RAW or unedited property photos. We will process them within 24 hours to show you our quality.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Sample Request Ready!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Your message was prepared. Send your 3 photos over WhatsApp or Email now to get your edits within 24 hours!
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 rounded-xl font-bold text-xs text-black bg-gradient-to-r from-[#FFF0CA] to-[#E5B849]"
            >
              Done / Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
            
            {/* Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. SJ Subramani"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:border-[#E5B849] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="goldenpic7@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:border-[#E5B849] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">WhatsApp / Phone</label>
                <input
                  type="text"
                  required
                  placeholder="+91 63834 79097"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:border-[#E5B849] focus:outline-none"
                />
              </div>
            </div>

            {/* Property Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Property Type</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700 text-white text-sm focus:border-[#E5B849] focus:outline-none"
              >
                <option value="Luxury Villa / Single Family">Luxury Villa / Single Family Residence</option>
                <option value="Condo / Apartment Interior">Condo / Apartment Interior</option>
                <option value="Commercial Estate / Hotel">Commercial Estate / Hotel</option>
                <option value="Drone Aerial Shoot">Drone Aerial Shoot</option>
              </select>
            </div>

            {/* Enhancements Toggle */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Enhancements Needed for Samples</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'HDR Enhancement',
                  'Day to Twilight',
                  'Sky Replacement',
                  'Grass Enhancement',
                  'Flash + Ambient',
                  'TV / Fireplace'
                ].map((srv) => (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => toggleService(srv)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      services.includes(srv)
                        ? 'bg-[#E5B849]/20 border border-[#E5B849] text-white'
                        : 'bg-slate-900/60 border border-slate-800 text-slate-400'
                    }`}
                  >
                    {services.includes(srv) ? '✓ ' : '+ '}{srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 rounded-2xl font-bold text-sm text-black bg-gradient-to-r from-[#FFF0CA] via-[#E5B849] to-[#C59B27] shadow-xl hover:shadow-[#E5B849]/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Submit & Send Photos via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#E5B849]" />
                <span>Send via Email</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

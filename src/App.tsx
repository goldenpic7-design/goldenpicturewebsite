import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { Services3DCards } from './components/Services3DCards';
import { EditingStudio3D } from './components/EditingStudio3D';
import { IncludedFreeSection } from './components/IncludedFreeSection';
import { PricingSection } from './components/PricingSection';
import { WhyGoldenPic } from './components/WhyGoldenPic';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ProcessSection } from './components/ProcessSection';
import { BulkOrdersSection } from './components/BulkOrdersSection';
import { ClientTypesSection } from './components/ClientTypesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { SampleRequestModal } from './components/SampleRequestModal';

export function App() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const openSampleModal = () => setIsSampleModalOpen(true);
  const closeSampleModal = () => setIsSampleModalOpen(false);

  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 font-sans selection:bg-[#E5B849] selection:text-black">
      {/* Top Fixed Header Navbar */}
      <Navbar onOpenSampleModal={openSampleModal} />

      <main>
        {/* Section 1: Hero with 3D Canvas */}
        <Hero onOpenSampleModal={openSampleModal} />

        {/* Section 2: Animated Draggable Before -> After */}
        <BeforeAfterSection />

        {/* Section 3: Services — 3D Glass Cards */}
        <Services3DCards onOpenSampleModal={openSampleModal} />

        {/* Section 4: 3D "Editing Studio" Pipeline */}
        <EditingStudio3D />

        {/* Section 5: Included Free Section */}
        <IncludedFreeSection />

        {/* Section 6: Simple & Transparent Pricing */}
        <PricingSection onOpenSampleModal={openSampleModal} />

        {/* Section 7: Why GoldenPic Pro? Stats & SJ Subramani Spotlight */}
        <WhyGoldenPic />

        {/* Section 8: Portfolio Floating Gallery */}
        <PortfolioGallery onOpenSampleModal={openSampleModal} />

        {/* Section 9: 4-Step Process Timeline */}
        <ProcessSection />

        {/* Section 10: High-Volume Bulk Orders Banner */}
        <BulkOrdersSection />

        {/* Section 11: Industry Client Types */}
        <ClientTypesSection />

        {/* Section 12: Final High-Impact CTA */}
        <FinalCTA onOpenSampleModal={openSampleModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 3 Free Samples Modal */}
      <SampleRequestModal isOpen={isSampleModalOpen} onClose={closeSampleModal} />
    </div>
  );
}

export default App;

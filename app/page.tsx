'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSectionVideo from '@/components/HeroSectionVideo';
import AboutSection from '@/components/AboutSection';
import BasicTraining from '@/components/BasicTraining';
import IntermediateTraining from '@/components/IntermediateTraining';
import EliteTraining from '@/components/EliteTraining';
import CadreSection from '@/components/CadreSection';
import TestimonialSection from '@/components/TestimonialSection';
import MapSection from '@/components/MapSection';
import ShopSection from '@/components/ShopSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Preloader from '@/components/Preloader';
import ScrollSections from '@/components/ScrollSections';
import AudioPlayer from '@/components/AudioPlayer';
import EnlistModal from '@/components/EnlistModal';

export default function Home() {
  const [isEnlistOpen, setIsEnlistOpen] = useState(false);

  return (
    <main className="bg-black text-white">
      <Preloader />
      <Navbar />
      <AudioPlayer />
      <EnlistModal isOpen={isEnlistOpen} onClose={() => setIsEnlistOpen(false)} />

      <ScrollSections>
        <HeroSectionVideo onEnlist={() => setIsEnlistOpen(true)} />
        <AboutSection />
        <BasicTraining />
        <IntermediateTraining />
        <EliteTraining />
        <CadreSection />
        <TestimonialSection />
        <MapSection />
        <ShopSection />
        <FaqSection />
        <ContactSection />
      </ScrollSections>
    </main>
  );
}

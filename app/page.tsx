'use client';

import Navbar from '@/components/Navbar';
import HeroSectionVideo from '@/components/HeroSectionVideo';
import AboutSection from '@/components/AboutSection';
import BasicTraining from '@/components/BasicTraining';
import IntermediateTraining from '@/components/IntermediateTraining';
import EliteTraining from '@/components/EliteTraining';
import ContactSection from '@/components/ContactSection';
import Preloader from '@/components/Preloader';
import ScrollSections from '@/components/ScrollSections';

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Preloader />
      <Navbar />
      <ScrollSections>
        <HeroSectionVideo />
        <AboutSection />
        <BasicTraining />
        <IntermediateTraining />
        <EliteTraining />
        <ContactSection />
      </ScrollSections>
    </main>
  );
}

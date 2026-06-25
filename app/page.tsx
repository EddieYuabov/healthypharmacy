'use client';

import {
  Navbar,
  HeroSection,
  FeaturesSection,
  AboutSplitSection,
  TransferFormSection,
  StatisticsSection,
  TestimonialsSection,
  FinalCtaSection,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <HeroSection />
        <FeaturesSection />
        <AboutSplitSection />
        <TransferFormSection />
        <StatisticsSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

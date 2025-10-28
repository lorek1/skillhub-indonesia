import HeroSection from '@/components/home/HeroSection';
import OffersSection from '@/components/home/OffersSection';
import PopularCoursesSection from '@/components/home/PopularCoursesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import StatisticsSection from '@/components/home/StatisticsSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersSection />
      <PopularCoursesSection />
      <TestimonialsSection />
      <StatisticsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

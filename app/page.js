import AdvantagesSection from '@/components/AdvantagesSection';
import AdvisorSection from '@/components/AdvisorSection';
import AppBuiltSection from '@/components/AppBuiltSection';
import CardSection from '@/components/CardSection';
import FeatureSection from '@/components/FeatureSection';
import HeroSection from '@/components/HeroSection';
import PlanSection from '@/components/PlanSection';
import ShowcaseSection from '@/components/ShowcaseSection';
import TechnologySection from '@/components/TechnologySection';
import TestimonialSection from '@/components/TestimonialSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-black'>
      <HeroSection />
      <TechnologySection />
      <AdvisorSection />
      <FeatureSection />
      <AppBuiltSection />
      <AdvantagesSection />
      <ShowcaseSection />
      <PlanSection />
      <CardSection />
      <TestimonialSection />
    </div>
  );
}

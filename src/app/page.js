import AboutSection from '@/components/sections/AboutSection';
import Hero from '../components/sections/Hero';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <AboutSection />
      <SkillsSection></SkillsSection>
    </div>
  );
}
import AboutSection from '@/components/sections/AboutSection';
import Hero from '../components/sections/Hero';

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <AboutSection />
    </div>
  );
}
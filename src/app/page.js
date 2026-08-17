import AboutSection from '@/components/sections/AboutSection';
import Hero from '../components/sections/Hero';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CurrentFocusSection from '@/components/sections/CurrentFocusSection';
import TimelineSection from '@/components/sections/TimelineSection';
import ContactSection from '@/components/sections/ContactSection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sefat Ullah Fahad',
  jobTitle: 'Full Stack Developer',
  description:
    "Full-Stack Web Developer building fast, scalable, and user-friendly web applications.",
  url: 'https://sefat-ullah-fahad.web.app/', 
  image:
    'https://res.cloudinary.com/dsga4gyw9/image/upload/v1786959761/sefat-ullah-fahad_fdxwuu.jpg',
  email: 'mailto:fahad.web.code@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rajshahi',
    addressCountry: 'BD',
  },
  sameAs: [
    'https://www.linkedin.com/in/sefat-ullah-fahad/',
    'https://www.facebook.com/sefat.ullah.fahad',
    'https://www.instagram.com/sifatullahfahad/',
    'https://github.com/Sefat-Ullah-Fahad',
  ],
  knowsAbout: [
    'Next.js',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Full Stack Development',
  ],
};

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
      <EducationSection></EducationSection>
      <ProjectsSection></ProjectsSection>
      <ServicesSection></ServicesSection>
      <CurrentFocusSection></CurrentFocusSection>
      <TimelineSection></TimelineSection>
      <ContactSection></ContactSection>
    </div>
  );
}
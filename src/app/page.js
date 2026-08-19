import dynamic from 'next/dynamic';
import Hero from '../components/sections/Hero';


const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'));
const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'));
const EducationSection = dynamic(() => import('@/components/sections/EducationSection'));
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'));
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const CurrentFocusSection = dynamic(() => import('@/components/sections/CurrentFocusSection'));
const TimelineSection = dynamic(() => import('@/components/sections/TimelineSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

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



        <SkillsSection />
    


        <ExperienceSection />



        <EducationSection />
  

    
        <ProjectsSection />


 
        <ServicesSection />
      

     
        <CurrentFocusSection />
   

        <TimelineSection />
   

    
        <ContactSection />
      
    </div>
  );
}
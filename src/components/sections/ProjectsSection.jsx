"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  HiOutlineCodeBracket,
  HiOutlineSparkles,
  HiOutlineArrowTopRightOnSquare,
  HiOutlineGlobeAlt
} from 'react-icons/hi2';

const projectsData = [
  {
    id: 'proj-1',
    title: 'Zero Olympiad',
    url: 'https://www.zeroolympiad.com/',
    description: "Zero Olympiad empowers students to become Global Citizens by mastering the UN's 17 SDGs. From Zero Poverty to Zero Hunger, we prepare future leaders to navigate World Affairs, Global Policies, and Diplomacy by 2030.",
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1779348906/Zero-Olympiad-Cultivating-Global-Leaders-from-Bangladesh-05-21-2026_01_22_PM_jjcs6w.png',
    tech: ['Next.js', 'Tailwind', 'NextAuth.js', 'Redux Toolkit', 'GSAP', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Supabase']
  },
  {
    id: 'proj-2',
    title: 'GLTS : Global Leadership Training & Skills',
    url: 'https://glts.faatihaaayat.com/',
    description: 'Transform your potential into global excellence with GLTS by Faatiha Aayat. An exclusive professional development program for strategic leadership, public speaking, and global representation.',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1779348881/GLTS-Global-Leadership-Training-Skills-Faatiha-Aayat-05-21-2026_01_23_PM_gdwluf.png',
    tech: ['Next.js', 'Tailwind', 'Supabase Auth', 'Redux Toolkit', 'GSAP', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Supabase']
  },
  {
    id: 'proj-3',
    title: 'Axialoop',
    url: 'https://axialoop.vercel.app/en',
    description: 'Empowering Businesses Through Advanced AI Transformation. Your Strategic AI Partner for Seamless Solutions at 360 Degrees.',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1781001892/axialoop-vercel-app-en-06-09-2026_04_44_PM_qvrmwn.png',
    tech: ['Next.js', 'Tailwind', 'Redux Toolkit', 'GSAP', 'Framer Motion']
  },
  {
    id: 'proj-4',
    title: 'William White',
    url: 'https://alabamaoutside.vercel.app/',
    description: 'With decades of combined legal experience, our firm is dedicated to delivering high-caliber, strategic solutions for our clients. We combine seasoned courtroom expertise with personalized client care to ensure your rights and assets are fully protected.',
    image: 'https://res.cloudinary.com/dsga4gyw9/image/upload/v1781783904/alabamaoutside-vercel-app-06-18-2026_05_57_PM_nhtsww.png',
    tech: ['Next.js', 'React-DOM', 'Tailwind CSS', 'Framer Motion', 'Motion', 'Swiper', 'Lucide React', 'React icon', 'ESLint', 'eslint-config-next']
  }
];

function optimizeCloudinaryUrl(url, width = 1200) {
  if (!url.includes('/upload/')) return url;
  return url.replace(
    '/upload/',
    `/upload/f_auto,q_auto,w_${width},dpr_auto/`
  );
}

const SHIMMER_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iIzBmMTcyYSIvPjwvc3ZnPg==';

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger এর বদলে Raw JS Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // 'top 80%' এর মতো কাজ করবে
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = sectionRef.current.querySelectorAll('.project-card-animate');
          cards.forEach((card, index) => {
            // GSAP এর stagger: 0.2 এর হুবহু কাজ
            card.style.transitionDelay = `${index * 0.2}s`;
            card.classList.add('animate-project-in');
          });
          // একবার অ্যানিমেশন হওয়ার পর অবজার্ভার বন্ধ করে দেওয়া হবে
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 bg-[#07090e]/90 border-t border-slate-900 overflow-hidden backdrop-blur-[3px]"
    >
      <div className="absolute inset-0 bg-wireframe-net opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.03)_0%,transparent_100%)] pointer-events-none" />

      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#5B21B6]/15 rounded-full blur-[150px] pointer-events-none transform-gpu" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#DB2777]/15 rounded-full blur-[150px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                06 // Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Selected <span className="text-brand-gradient-glow">Projects</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-purple-500/40 text-pink-300 text-xs font-mono">
            <HiOutlineCodeBracket className="w-4 h-4 text-purple-400" />
            <span>Full-Stack Implementations</span>
          </div>
        </div>

        <div className="space-y-20 lg:space-y-32">
          {projectsData.map((project, index) => {
            const isEven = index % 2 !== 0;
            const isPriority = index === 0;

            return (
              <div
                key={project.id}
                className={`project-card-animate flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group ${
                  isEven ? 'lg:flex-row-reverse' : ''
                } transform-gpu`}
              >
                <div className="w-full lg:w-7/12 relative">
                  <div className="absolute inset-0 bg-brand-gradient rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform-gpu" />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 group-hover:border-pink-500/50 transition-colors duration-500 bg-slate-900 aspect-[16/10] sm:aspect-[16/9] shadow-2xl">
                    <Image
                      src={optimizeCloudinaryUrl(project.image, 1200)}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
                      priority={isPriority}
                      loading={isPriority ? undefined : 'lazy'}
                      quality={75}
                      placeholder="blur"
                      blurDataURL={SHIMMER_BLUR_DATA_URL}
                      className="object-cover object-top filter transition-all duration-700 group-hover:scale-105 group-hover:saturate-110 transform-gpu"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-mono text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                      Live Project
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-5/12 flex flex-col items-start">
                  <div className="flex items-center gap-2 text-pink-400 mb-4">
                    <HiOutlineSparkles className="w-5 h-5" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                      Project Showcase
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-6 group-hover:text-pink-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-10">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-purple-500/30 text-xs font-mono text-slate-300 hover:border-pink-500/60 hover:text-pink-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:scale-[1.02] active:scale-95 transform-gpu"
                  >
                    <HiOutlineGlobeAlt className="w-5 h-5" />
                    <span>View Live Application</span>
                    <HiOutlineArrowTopRightOnSquare className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Raw CSS Animation replacing GSAP */}
      <style jsx>{`
        .project-card-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.7s cubic-bezier(0.215, 0.61, 0.355, 1),
                      transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .project-card-animate.animate-project-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card-animate {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
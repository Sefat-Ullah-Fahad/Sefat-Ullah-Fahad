"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HiOutlineSparkles, HiOutlineArrowRight, HiOutlinePaperAirplane, HiOutlineCommandLine } from 'react-icons/hi2';
import { FaBolt, FaRocket, FaShieldHalved } from 'react-icons/fa6';
import Image from 'next/image';

const heroSectionData = {
  name: 'Sefat Ullah Fahad',
  nickname: 'Sefat ullah Fahad',
  title: 'Full Stack Developer',
  tagline: 'Building scalable digital experiences with clean code, thoughtful design and modern technology.',
  location: 'Rajshahi Shaheed A. H. M. Kamaruzzaman Stadium, Bangladesh',
  status: 'Available for selected opportunities',
  heroIntro: "Hi, I'm Sefatullah Fahad, a passionate Full-Stack Web Developer. I love building fast, scalable, and user-friendly web applications from scratch.",
  heroSubIntro: "As a tech-agnostic developer, I adapt quickly and use the best tools, frameworks, and technologies required to turn ideas into clean, efficient code.",
  floatingBadges: [
    { label: 'Next.js 15 App Router', icon: <FaBolt className="text-pink-400" />, pos: 'top-2 -left-4 sm:-left-8' },
    { label: 'Full-Stack MERN', icon: <FaRocket className="text-purple-400" />, pos: 'bottom-8 -left-4 sm:-left-10' },
    { label: 'GSAP Animation Suite', icon: <HiOutlineSparkles className="text-pink-400" />, pos: 'top-14 -right-4 sm:-right-8' },
    { label: 'Supabase & REST APIs', icon: <FaShieldHalved className="text-purple-400" />, pos: 'bottom-4 -right-4 sm:-right-6' },
  ],
  stats: [
    { label: 'Clean Code & RLS', value: '100', suffix: '%', color: 'pink' },
    { label: 'Modern Full Stack', value: 'MERN', suffix: '+Next', color: 'purple' },
    { label: 'Active Full-Time', value: 'Experivia', suffix: '', color: 'pink' },
  ]
};

export default function Hero({ onExploreWork, onContactClick }) {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-animate-item',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
      )
      .fromTo(
        rightColRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
        '-=0.5'
      )
      .fromTo(
        '.hero-floating-badge',
        { opacity: 0, y: 15, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/15 via-fuchsia-600/10 to-pink-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div
            ref={leftColRef}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="hero-animate-item inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/40 text-pink-300 text-xs font-medium mb-6 shadow-[0_0_20px_rgba(236,72,153,0.2)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-purple-500 to-pink-500" />
              </span>
              <span className="font-mono">{heroSectionData.status}</span>
            </div>

            <div className="hero-animate-item space-y-1 mb-3">
              <span className="font-mono text-xs sm:text-sm text-purple-400 tracking-wider uppercase font-semibold flex items-center gap-2">
                <HiOutlineSparkles className="w-4 h-4 text-pink-400" />
                <span>Full-Stack Portfolio of</span>
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                Sefat Ullah fahad <br className="hidden sm:block" />
                <span className="text-brand-gradient-glow font-black">Fahad</span>
              </h1>
            </div>

            <div className="hero-animate-item flex flex-wrap items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <h2 className="text-lg sm:text-xl font-mono font-semibold text-slate-200 tracking-tight">
                {heroSectionData.title}
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-950/50 border border-purple-500/40 text-pink-300 font-mono">
                Software & Financial Accounting
              </span>
            </div>

            <div className="hero-animate-item space-y-3.5 mb-8 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-100">
                {heroSectionData.heroIntro}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                {heroSectionData.heroSubIntro}
              </p>
            </div>

            <div className="hero-animate-item flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={onExploreWork}
                id="hero-cta-projects"
                className="btn-shimmer group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={onContactClick}
                id="hero-cta-contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-purple-500/40 hover:border-pink-500/70 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Let is Build Together</span>
                <HiOutlinePaperAirplane className="w-4 h-4 text-pink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12" />
              </button>
            </div>

            <div className="hero-animate-item grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80 w-full max-w-lg">
              {heroSectionData.stats.map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className={`text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight ${stat.color === 'pink' ? 'group-hover:text-pink-400' : 'group-hover:text-purple-400'} transition-colors`}>
                    {stat.value}<span className={stat.color === 'pink' ? 'text-pink-400' : 'text-purple-400'}>{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightColRef}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[410px] sm:h-[410px] flex items-center justify-center [perspective:1000px]">
              
              <div className="absolute -inset-8 rounded-full border-2 border-dashed border-purple-500/40 animate-spin-cw pointer-events-none" />

              <div className="absolute -inset-4 rounded-full border border-dotted border-pink-500/50 animate-spin-ccw-fast pointer-events-none" />

              <div className="absolute -inset-6 rounded-full border-2 border-purple-400/50 animate-spin-3d-cw pointer-events-none shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-[0_0_15px_#EC4899] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>
              </div>

              <div className="absolute -inset-10 rounded-full border border-pink-400/40 animate-spin-3d-ccw pointer-events-none shadow-[0_0_25px_rgba(236,72,153,0.25)]">
                <div className="absolute -bottom-2 right-1/4 w-3.5 h-3.5 rounded-full bg-pink-400 shadow-[0_0_15px_#f472b6]" />
              </div>

              <div className="absolute -inset-2 rounded-full border border-dashed border-fuchsia-400/40 animate-spin-3d-vert pointer-events-none" />

              <div className="absolute -inset-6 rounded-full animate-spin-cw-fast pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-purple-300 shadow-[0_0_12px_#c084fc] absolute -top-1.5 left-1/3" />
                <div className="w-2.5 h-2.5 rounded-full bg-pink-400 shadow-[0_0_12px_#f472b6] absolute -bottom-1 right-1/3" />
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-purple-800/10 blur-2xl animate-pulse-glow pointer-events-none" />

              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full p-1.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-900 shadow-2xl shadow-purple-950/70 overflow-hidden group">
                <div className="w-full h-full rounded-full bg-[#0d1117] overflow-hidden relative flex items-center justify-center border border-purple-500/30">
                  
                <Image
  src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1786885325/WhatsApp_Image_2026-08-09_at_11.49.18_PM_cqbxns.jpg"
  alt="Md Sefat Ullah Fahad - Full Stack Developer"
  fill
  preload
  quality={85}
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-center filter saturate-105 contrast-105 transition-transform duration-700 group-hover:scale-110"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-3 inset-x-0 flex justify-center">
                    <span className="px-3.5 py-1 rounded-full bg-slate-950/90 border border-purple-500/50 text-[11px] font-mono text-pink-300 backdrop-blur-md shadow-lg flex items-center gap-1.5">
                      <HiOutlineCommandLine className="w-3.5 h-3.5 text-purple-400" />
                      <span>fahad.dev</span>
                    </span>
                  </div>
                </div>
              </div>

              {heroSectionData.floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`hero-floating-badge absolute ${badge.pos} z-20 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/95 border border-purple-500/40 hover:border-pink-500/80 text-slate-200 text-xs font-mono font-medium shadow-2xl shadow-black/60 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer`}
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="whitespace-nowrap">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
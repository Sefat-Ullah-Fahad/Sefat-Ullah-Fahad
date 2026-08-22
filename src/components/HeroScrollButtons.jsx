"use client";

import React from 'react';
import { HiOutlineArrowRight, HiOutlinePaperAirplane } from 'react-icons/hi2';

export default function HeroScrollButtons() {
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-animate-text flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8" style={{ animationDelay: '0.4s' }}>
      <button
        onClick={(e) => handleScrollToSection(e, '#projects')}
        id="hero-cta-projects"
        className="btn-shimmer group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-gradient text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-[1.03] active:scale-95 cursor-pointer"
      >
        <span>Explore Projects</span>
        <HiOutlineArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </button>

      <button
        onClick={(e) => handleScrollToSection(e, '#contact')}
        id="hero-cta-contact"
        className="btn-shimmer group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-purple-500/40 hover:border-pink-500/70 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
      >
        <span>Let&#39;s Build Together</span>
        <HiOutlinePaperAirplane className="w-4 h-4 text-pink-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12" />
      </button>
    </div>
  );
}
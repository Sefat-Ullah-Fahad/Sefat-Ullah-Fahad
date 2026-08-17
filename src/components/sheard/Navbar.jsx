"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { FaLinkedin } from 'react-icons/fa6';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Focus', href: '#focus' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSectionId = `#${section.getAttribute("id")}`;
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#07090e]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleScrollToSection(e, 'top')}>
            <Image
              src="/logo.png"
              alt="Brand Logo"
              width={140}
              height={40}
              priority
              className="h-8 sm:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex items-center gap-6 lg:gap-8">
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className={`text-sm font-mono transition-colors duration-300 relative group ${
                      isActive ? 'text-pink-400 font-bold' : 'text-white hover:text-pink-400'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/in/sefatullahfahad"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.5)] transition-all duration-300 group"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-1 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <HiOutlineXMark className="w-7 h-7 text-pink-400" />
                ) : (
                  <HiOutlineBars3 className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0 border-transparent'
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-mono transition-all ${
                  isActive ? 'text-pink-400 bg-white/10 font-bold border border-pink-500/20' : 'text-white hover:text-pink-300 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
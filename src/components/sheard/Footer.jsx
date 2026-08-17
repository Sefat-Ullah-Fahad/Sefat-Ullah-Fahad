"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineArrowUp
} from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa6';

const personalInfo = {
  name: 'Md Sefat Ullah Fahad',
  tagline: 'Building scalable digital experiences with clean code, thoughtful design and modern technology.',
  location: 'Rajshahi, Bangladesh',
  email: 'fahad.web.code@gmail.com',
  phone: '01943850789',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sefatullahfahad', icon: FaLinkedin },
    { name: 'GitHub', url: 'https://github.com/sefatullahfahad', icon: FaGithub },
    { name: 'Facebook', url: 'https://facebook.com/sefatullahfahad', icon: FaFacebook },
    { name: 'Instagram', url: 'https://instagram.com/sefatullahfahad', icon: FaInstagram },
    { name: 'Discord', url: 'https://discord.com/users/fahad_5562', icon: FaDiscord }
  ]
};

const quickLinks = [
  { name: 'Skills & Capabilities', href: '#skills' },
  { name: 'Work Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Featured Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact Me', href: '#contact' }
];

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer
      ref={footerRef}
      className="relative bg-[#05070a] pt-20 pb-10 border-t border-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-graph-matrix opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="footer-element md:col-span-12 lg:col-span-5">
            <div className="flex-shrink-0 cursor-pointer inline-block mb-6" onClick={scrollToTop}>
              <Image
                src="/logo.png"
                alt="Brand Logo"
                width={160}
                height={45}
                className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-8">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-brand-gradient hover:border-transparent hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-element md:col-span-6 lg:col-span-3">
            <h4 className="text-white font-display font-bold text-lg mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-sm font-mono text-slate-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-pink-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-element md:col-span-6 lg:col-span-4">
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-5">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="flex items-start gap-3 text-slate-400 hover:text-pink-300 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-pink-500/30 transition-colors">
                    <HiOutlineEnvelope className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Email</span>
                    <span className="text-sm">{personalInfo.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="flex items-start gap-3 text-slate-400 hover:text-pink-300 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-pink-500/30 transition-colors">
                    <HiOutlinePhone className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Phone</span>
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <HiOutlineMapPin className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Location</span>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-element pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-500">
              Built with Next.js & Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-purple-500/30 hover:border-pink-500/60 text-pink-400 hover:text-white hover:bg-brand-gradient transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
              aria-label="Scroll to top"
            >
              <HiOutlineArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
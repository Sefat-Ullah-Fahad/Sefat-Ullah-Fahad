"use client";

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVuedotjs,
  SiBootstrap,
  SiDaisyui,
  SiGraphql,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSupabase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiCloudinary,
  SiGreensock
} from 'react-icons/si';
import { TbApi, TbBrandSocketIo } from 'react-icons/tb';
import {
  HiOutlineSparkles,
  HiOutlineMagnifyingGlass,
  HiOutlineSquares2X2,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineCursorArrowRays,
  HiOutlineCodeBracket,
  HiOutlineBolt
} from 'react-icons/hi2';
import SkillsGlobe3D from './SkillsGlobe3D';

const skillsSectionData = [
  { name: 'HTML5', category: 'frontend', icon: 'Code', level: 'Advanced', description: 'Semantic markup, accessibility (a11y), SEO-friendly structure', popular: true },
  { name: 'CSS3', category: 'frontend', icon: 'Palette', level: 'Advanced', description: 'Modern flexbox, grid layouts, animations, responsive design', popular: true },
  { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'Sparkles', level: 'Advanced', description: 'Async/await, closures, functional programming, DOM performance', popular: true },
  { name: 'TypeScript', category: 'frontend', icon: 'ShieldCheck', level: 'Advanced', description: 'Strict typing, generic interfaces, scalable enterprise architecture', popular: true },
  { name: 'React.js', category: 'frontend', icon: 'Atom', level: 'Advanced', description: 'Custom hooks, concurrent mode, performance memoization', popular: true },
  { name: 'Next.js', category: 'frontend', icon: 'Layers', level: 'Advanced', description: 'App router, SSR/SSG, Server Actions, route handlers, metadata', popular: true },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'Wind', level: 'Advanced', description: 'Utility-first styling, design system tokens, responsive setups', popular: true },
  { name: 'GSAP', category: 'frontend', icon: 'Zap', level: 'Proficient', description: 'High-performance timeline animations, SVG morphing', popular: true },
  { name: 'ScrollTrigger', category: 'frontend', icon: 'MousePointerClick', level: 'Proficient', description: 'Scroll-linked choreography, pinning, scrubbed motions', popular: true },
  { name: 'Framer Motion', category: 'frontend', icon: 'Workflow', level: 'Advanced', description: 'Declarative layout animations, gesture controls, exit transitions', popular: true },
  { name: 'Redux / Redux Toolkit', category: 'frontend', icon: 'Database', level: 'Advanced', description: 'Global state slices, RTK Query, predictable state pipelines', popular: true },
  { name: 'Vue.js', category: 'frontend', icon: 'Box', level: 'Intermediate', description: 'Reactivity system, Single File Components (SFC), Pinia' },
  { name: 'Bootstrap', category: 'frontend', icon: 'Grid', level: 'Advanced', description: 'Rapid grid prototyping, responsive component themes' },
  { name: 'DaisyUI', category: 'frontend', icon: 'Component', level: 'Advanced', description: 'Tailwind CSS component system with theme switching' },
  { name: 'GraphQL', category: 'frontend', icon: 'Cpu', level: 'Proficient', description: 'Schema definition, queries, mutations, Apollo Client' },
  { name: 'NextAuth.js / Auth.js', category: 'frontend', icon: 'KeyRound', level: 'Advanced', description: 'OAuth providers, session tokens, secure callbacks', popular: true },
  { name: 'Better Auth', category: 'frontend', icon: 'Lock', level: 'Proficient', description: 'Modern authentication framework for full-stack apps' },
  { name: 'Supabase Auth', category: 'frontend', icon: 'Shield', level: 'Advanced', description: 'Row Level Security, magic links, social auth, JWTs', popular: true },
  { name: 'Firebase', category: 'frontend', icon: 'Flame', level: 'Proficient', description: 'Auth, Firestore, Cloud Functions, real-time sync' },

  { name: 'Node.js', category: 'backend', icon: 'Server', level: 'Advanced', description: 'Event loop architecture, streaming APIs, microservices', popular: true },
  { name: 'Express.js', category: 'backend', icon: 'Share2', level: 'Advanced', description: 'RESTful architecture, custom middleware, error handling', popular: true },
  { name: 'JWT Authentication', category: 'backend', icon: 'Key', level: 'Advanced', description: 'Stateless authorization, token refresh cycles, HMAC/RSA' },
  { name: 'OAuth 2.0', category: 'backend', icon: 'LockKeyhole', level: 'Advanced', description: 'Third-party authorization flows, PKCE, secure tokens' },
  { name: 'RESTful APIs', category: 'backend', icon: 'Globe', level: 'Advanced', description: 'Clean endpoint schemas, status codes, OpenAPI docs', popular: true },
  { name: 'WebSockets', category: 'backend', icon: 'Radio', level: 'Intermediate', description: 'Bi-directional real-time communication, events' },

  { name: 'Supabase', category: 'database', icon: 'DatabaseZap', level: 'Advanced', description: 'PostgreSQL, Row Level Security (RLS), Realtime triggers', popular: true },
  { name: 'MongoDB Atlas', category: 'database', icon: 'HardDrive', level: 'Advanced', description: 'Aggregation pipelines, indexing, schema design, Mongoose', popular: true },
  { name: 'MySQL', category: 'database', icon: 'Table', level: 'Proficient', description: 'Relational querying, foreign keys, transaction handling' },
  { name: 'PostgreSQL', category: 'database', icon: 'Layers', level: 'Advanced', description: 'Complex joins, JSONB indexing, ACID compliance', popular: true },

  { name: 'Git', category: 'tools', icon: 'GitBranch', level: 'Advanced', description: 'Branch management, interactive rebase, team workflows', popular: true },
  { name: 'GitHub', category: 'tools', icon: 'Github', level: 'Advanced', description: 'CI/CD actions, pull requests, issue tracking, projects', popular: true },
  { name: 'Figma', category: 'tools', icon: 'Figma', level: 'Advanced', description: 'UI/UX design, auto-layout inspection, design systems', popular: true },
  { name: 'VS Code', category: 'tools', icon: 'Terminal', level: 'Advanced', description: 'Custom dev workflow, debugging, extensions, snippets' },
  { name: 'Postman', category: 'tools', icon: 'Send', level: 'Advanced', description: 'API testing suites, collection automation, environment variables' },
  { name: 'Vercel', category: 'tools', icon: 'Triangle', level: 'Advanced', description: 'Edge deployment, serverless functions, analytics', popular: true },
  { name: 'Netlify', category: 'tools', icon: 'Cloud', level: 'Proficient', description: 'Static site hosting, form handling, build hooks' },
  { name: 'Thunder Client', category: 'tools', icon: 'Zap', level: 'Proficient', description: 'Lightweight in-editor API testing client' },
  { name: 'Docker', category: 'tools', icon: 'Container', level: 'Intermediate', description: 'Containerization, Dockerfiles, isolated dev environments' },
  { name: 'Nodemon', category: 'tools', icon: 'RefreshCw', level: 'Advanced', description: 'Fast auto-reloading backend developer environment' },
  { name: 'Cloudinary', category: 'tools', icon: 'Image', level: 'Advanced', description: 'Dynamic image optimization, CDN uploads, auto-formatting' },
  { name: 'Canva', category: 'tools', icon: 'Layout', level: 'Proficient', description: 'Asset creation, brand materials, presentation graphics' }
];

const skillIconMap = {
  TypeScript: SiTypescript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  GSAP: SiGreensock,
  ScrollTrigger: HiOutlineCursorArrowRays,
  'Framer Motion': HiOutlineSparkles,
  'Redux / Redux Toolkit': SiRedux,
  'Vue.js': SiVuedotjs,
  Bootstrap: SiBootstrap,
  DaisyUI: SiDaisyui,
  GraphQL: SiGraphql,
  'NextAuth.js / Auth.js': HiOutlineShieldCheck,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'REST APIs': TbApi,
  'JWT & OAuth': SiJsonwebtokens,
  WebSockets: TbBrandSocketIo,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  'MongoDB & Mongoose': SiMongodb,
  MySQL: SiMysql,
  'PostgreSQL (Basics)': SiPostgresql,
  'Git & GitHub': SiGithub,
  'Figma to Code': SiFigma,
  'Postman API Testing': SiPostman,
  'Vercel & Netlify': SiVercel,
  'Docker (Basics)': SiDocker,
  'Cloudinary Media': SiCloudinary,
  'Canva UI Design': SiFigma,
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('sphere3d');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Capabilities', count: skillsSectionData.length },
    { id: 'frontend', label: 'Frontend & UI', count: skillsSectionData.filter((s) => s.category === 'frontend').length },
    { id: 'backend', label: 'Backend & APIs', count: skillsSectionData.filter((s) => s.category === 'backend').length },
    { id: 'database', label: 'Databases & ORM', count: skillsSectionData.filter((s) => s.category === 'database').length },
    { id: 'tools', label: 'DevOps & Tooling', count: skillsSectionData.filter((s) => s.category === 'tools').length },
  ];

  const filteredSkills = skillsSectionData.filter((skill) => {
    const matchesCategory = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-badge-card',
        { opacity: 0, scale: 0.92, y: 16 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab, searchQuery, viewMode]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 lg:py-32 bg-[#07090e]/85 border-t border-slate-900 overflow-hidden backdrop-blur-[2px]"
    >
      <div className="absolute inset-0 bg-graph-matrix opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5B21B6]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#DB2777]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-pink-400 font-semibold uppercase tracking-wider">
                03 // Technical Arsenal
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Skills & <span className="text-brand-gradient-glow">Capabilities</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-950 border border-purple-500/30 text-xs font-mono text-pink-300">
            <HiOutlineGlobeAsiaAustralia className="w-4 h-4 text-purple-400" />
            <span>Interactive 3D Earth Orbit + Full Stack Inventory</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`btn-shimmer flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-brand-gradient text-white font-bold shadow-md shadow-pink-500/30 scale-105'
                    : 'bg-slate-900/80 border border-purple-500/20 text-slate-400 hover:text-white hover:border-purple-500/50'
                }`}
              >
                <span>{cat.label}</span>
                <span className="px-1.5 py-0.2 rounded-full bg-slate-950/60 text-[10px] opacity-80">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <HiOutlineMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-purple-500/30 focus:border-pink-500 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="space-y-12">
          <div className="p-2 sm:p-4 rounded-3xl bg-slate-950/85 border border-purple-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <SkillsGlobe3D
              skills={skillsSectionData}
              selectedCategory={activeTab}
              onSelectSkill={(skill) => setHoveredSkill(skill)}
              hoveredSkill={hoveredSkill}
              skillIconMap={skillIconMap}
            />
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#EC4899]" />
                  <span>Comprehensive Stack Inventory</span>
                  <span className="text-xs font-mono text-pink-400 font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30">
                    {filteredSkills.length} Technologies
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Hover or click any technology to inspect details and cross-reference with the 3D Earth hub.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
                <HiOutlineBolt className="w-4 h-4 text-pink-400" />
                <span>Active Filter: <strong className="text-white capitalize">{activeTab}</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredSkills.map((skill) => {
                const Icon = skillIconMap[skill.name] || HiOutlineCube;
                const isHovered = hoveredSkill?.name === skill.name;

                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => setHoveredSkill(skill)}
                    className={`skill-badge-card group relative p-5 rounded-2xl bg-slate-950/85 border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl flex flex-col justify-between ${
                      isHovered
                        ? 'border-pink-500 shadow-[0_0_25px_rgba(219,39,119,0.35)] ring-1 ring-pink-500/50'
                        : 'border-purple-500/30 hover:border-pink-500/70 hover:shadow-purple-950/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl border transition-all duration-300 shadow-sm ${
                        isHovered
                          ? 'bg-brand-gradient text-white border-pink-500 shadow-md'
                          : 'bg-slate-900 border-purple-500/30 text-pink-400 group-hover:bg-brand-gradient group-hover:text-white'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border transition-colors ${
                        skill.level === 'Advanced'
                          ? 'bg-pink-950/50 border-pink-500/40 text-pink-300'
                          : 'bg-purple-950/50 border-purple-500/40 text-purple-300'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="space-y-1.5 mb-4">
                      <h4 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-pink-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {skill.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="capitalize text-pink-400/90 font-medium">
                        {skill.category}
                      </span>
                      <div className="flex items-center gap-1 text-purple-400 group-hover:text-pink-300">
                        <span className="text-[11px]">Sync 3D</span>
                        <HiOutlineSparkles className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span>Continuous Learning: Actively scaling expertise in Gemini AI Agents & Enterprise System Design</span>
          </div>
          <div className="text-pink-400 font-semibold">
            Production Validated // 60 FPS Optimized
          </div>
        </div>

      </div>
    </section>
  );
}
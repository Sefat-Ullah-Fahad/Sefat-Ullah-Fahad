// import {
//   Project,
//   Service,
//   SkillItem,
//   ExperienceItem,
//   EducationItem,
//   ApproachStep,
//   CareerMilestone
// } from '../types';

// export const personalInfo = {
//   name: 'Md Sefat Ullah Fahad',
//   nickname: 'Sefatullah Fahad',
//   title: 'Full Stack Developer',
//   tagline: 'Building scalable digital experiences with clean code, thoughtful design and modern technology.',
//   location: 'Rajshahi Shaheed A. H. M. Kamaruzzaman Stadium, Bangladesh',
//   email: 'fahad.web.code@gmail.com',
//   phone: '01943850789',
//   discord: 'fahad_5562',
//   status: 'Available for selected opportunities',
//   heroIntro: "Hi, I'm Sefatullah Fahad, a passionate Full-Stack Web Developer. I love building fast, scalable, and user-friendly web applications from scratch.",
//   heroSubIntro: "As a tech-agnostic developer, I adapt quickly and use the best tools, frameworks, and technologies required to turn ideas into clean, efficient code.",
//   aboutStory: "I am a Full-Stack Web Developer and Accountant currently managing dual responsibilities at Experivia. Balancing the logic of clean code with the precision of financial data has allowed me to develop a unique problem-solving mindset.",
//   aboutHighlights: [
//     {
//       title: "Full-Stack Craftsmanship",
//       description: "Architecting end-to-end applications from responsive frontend interfaces to resilient backend APIs and performant databases.",
//       badge: "Architecture"
//     },
//     {
//       title: "Financial Precision",
//       description: "Applying meticulous data analysis and accounting discipline to ensure strict logic, security, and high reliability in enterprise software.",
//       badge: "Integrity"
//     },
//     {
//       title: "Continuous Learning",
//       description: "Relentlessly expanding knowledge across modern full-stack frameworks, AI engineering, and cloud-native scalable systems.",
//       badge: "Growth"
//     },
//     {
//       title: "Business Value First",
//       description: "Understanding commercial workflows deeply to turn technical requirements into intuitive, conversion-optimized user experiences.",
//       badge: "ROI Driven"
//     }
//   ],
//   socialLinks: [
//     { name: 'LinkedIn', url: 'https://linkedin.com/in/sefatullahfahad', handle: 'in/sefatullahfahad' },
//     { name: 'GitHub', url: 'https://github.com/sefatullahfahad', handle: '@sefatullahfahad' },
//     { name: 'Facebook', url: 'https://facebook.com/sefatullahfahad', handle: 'fb/sefatullahfahad' },
//     { name: 'Instagram', url: 'https://instagram.com/sefatullahfahad', handle: '@sefatullahfahad' },
//     { name: 'Discord', url: 'https://discord.com/users/fahad_5562', handle: 'fahad_5562' }
//   ]
// };

// export const skillsData: SkillItem[] = [
//   // Frontend
//   { name: 'HTML5', category: 'frontend', icon: 'Code', level: 'Advanced', description: 'Semantic markup, accessibility (a11y), SEO-friendly structure', popular: true },
//   { name: 'CSS3', category: 'frontend', icon: 'Palette', level: 'Advanced', description: 'Modern flexbox, grid layouts, animations, responsive design', popular: true },
//   { name: 'JavaScript (ES6+)', category: 'frontend', icon: 'Sparkles', level: 'Advanced', description: 'Async/await, closures, functional programming, DOM performance', popular: true },
//   { name: 'TypeScript', category: 'frontend', icon: 'ShieldCheck', level: 'Advanced', description: 'Strict typing, generic interfaces, scalable enterprise architecture', popular: true },
//   { name: 'React.js', category: 'frontend', icon: 'Atom', level: 'Advanced', description: 'Custom hooks, concurrent mode, performance memoization', popular: true },
//   { name: 'Next.js', category: 'frontend', icon: 'Layers', level: 'Advanced', description: 'App router, SSR/SSG, Server Actions, route handlers, metadata', popular: true },
//   { name: 'Tailwind CSS', category: 'frontend', icon: 'Wind', level: 'Advanced', description: 'Utility-first styling, design system tokens, responsive setups', popular: true },
//   { name: 'GSAP', category: 'frontend', icon: 'Zap', level: 'Proficient', description: 'High-performance timeline animations, SVG morphing', popular: true },
//   { name: 'ScrollTrigger', category: 'frontend', icon: 'MousePointerClick', level: 'Proficient', description: 'Scroll-linked choreography, pinning, scrubbed motions', popular: true },
//   { name: 'Framer Motion', category: 'frontend', icon: 'Workflow', level: 'Advanced', description: 'Declarative layout animations, gesture controls, exit transitions', popular: true },
//   { name: 'Redux / Redux Toolkit', category: 'frontend', icon: 'Database', level: 'Advanced', description: 'Global state slices, RTK Query, predictable state pipelines', popular: true },
//   { name: 'Vue.js', category: 'frontend', icon: 'Box', level: 'Intermediate', description: 'Reactivity system, Single File Components (SFC), Pinia' },
//   { name: 'Bootstrap', category: 'frontend', icon: 'Grid', level: 'Advanced', description: 'Rapid grid prototyping, responsive component themes' },
//   { name: 'DaisyUI', category: 'frontend', icon: 'Component', level: 'Advanced', description: 'Tailwind CSS component system with theme switching' },
//   { name: 'GraphQL', category: 'frontend', icon: 'Cpu', level: 'Proficient', description: 'Schema definition, queries, mutations, Apollo Client' },
//   { name: 'NextAuth.js / Auth.js', category: 'frontend', icon: 'KeyRound', level: 'Advanced', description: 'OAuth providers, session tokens, secure callbacks', popular: true },
//   { name: 'Better Auth', category: 'frontend', icon: 'Lock', level: 'Proficient', description: 'Modern authentication framework for full-stack apps' },
//   { name: 'Supabase Auth', category: 'frontend', icon: 'Shield', level: 'Advanced', description: 'Row Level Security, magic links, social auth, JWTs', popular: true },
//   { name: 'Firebase', category: 'frontend', icon: 'Flame', level: 'Proficient', description: 'Auth, Firestore, Cloud Functions, real-time sync' },

//   // Backend
//   { name: 'Node.js', category: 'backend', icon: 'Server', level: 'Advanced', description: 'Event loop architecture, streaming APIs, microservices', popular: true },
//   { name: 'Express.js', category: 'backend', icon: 'Share2', level: 'Advanced', description: 'RESTful architecture, custom middleware, error handling', popular: true },
//   { name: 'JWT Authentication', category: 'backend', icon: 'Key', level: 'Advanced', description: 'Stateless authorization, token refresh cycles, HMAC/RSA' },
//   { name: 'OAuth 2.0', category: 'backend', icon: 'LockKeyhole', level: 'Advanced', description: 'Third-party authorization flows, PKCE, secure tokens' },
//   { name: 'RESTful APIs', category: 'backend', icon: 'Globe', level: 'Advanced', description: 'Clean endpoint schemas, status codes, OpenAPI docs', popular: true },
//   { name: 'WebSockets', category: 'backend', icon: 'Radio', level: 'Intermediate', description: 'Bi-directional real-time communication, events' },

//   // Database
//   { name: 'Supabase', category: 'database', icon: 'DatabaseZap', level: 'Advanced', description: 'PostgreSQL, Row Level Security (RLS), Realtime triggers', popular: true },
//   { name: 'MongoDB Atlas', category: 'database', icon: 'HardDrive', level: 'Advanced', description: 'Aggregation pipelines, indexing, schema design, Mongoose', popular: true },
//   { name: 'MySQL', category: 'database', icon: 'Table', level: 'Proficient', description: 'Relational querying, foreign keys, transaction handling' },
//   { name: 'PostgreSQL', category: 'database', icon: 'Layers', level: 'Advanced', description: 'Complex joins, JSONB indexing, ACID compliance', popular: true },

//   // Tools & Other
//   { name: 'Git', category: 'tools', icon: 'GitBranch', level: 'Advanced', description: 'Branch management, interactive rebase, team workflows', popular: true },
//   { name: 'GitHub', category: 'tools', icon: 'Github', level: 'Advanced', description: 'CI/CD actions, pull requests, issue tracking, projects', popular: true },
//   { name: 'Figma', category: 'tools', icon: 'Figma', level: 'Advanced', description: 'UI/UX design, auto-layout inspection, design systems', popular: true },
//   { name: 'VS Code', category: 'tools', icon: 'Terminal', level: 'Advanced', description: 'Custom dev workflow, debugging, extensions, snippets' },
//   { name: 'Postman', category: 'tools', icon: 'Send', level: 'Advanced', description: 'API testing suites, collection automation, environment variables' },
//   { name: 'Vercel', category: 'tools', icon: 'Triangle', level: 'Advanced', description: 'Edge deployment, serverless functions, analytics', popular: true },
//   { name: 'Netlify', category: 'tools', icon: 'Cloud', level: 'Proficient', description: 'Static site hosting, form handling, build hooks' },
//   { name: 'Thunder Client', category: 'tools', icon: 'Zap', level: 'Proficient', description: 'Lightweight in-editor API testing client' },
//   { name: 'Docker', category: 'tools', icon: 'Container', level: 'Intermediate', description: 'Containerization, Dockerfiles, isolated dev environments' },
//   { name: 'Nodemon', category: 'tools', icon: 'RefreshCw', level: 'Advanced', description: 'Fast auto-reloading backend developer environment' },
//   { name: 'Cloudinary', category: 'tools', icon: 'Image', level: 'Advanced', description: 'Dynamic image optimization, CDN uploads, auto-formatting' },
//   { name: 'Canva', category: 'tools', icon: 'Layout', level: 'Proficient', description: 'Asset creation, brand materials, presentation graphics' }
// ];

// export const experienceData: ExperienceItem[] = [
//   {
//     id: 'exp-1',
//     title: 'Full-Stack Developer & Accountant',
//     company: 'Experivia',
//     period: 'April 2026 – Present',
//     isCurrent: true,
//     type: 'Full-time / Permanent',
//     responsibilities: [
//       'Architecting and maintaining full-stack web applications and client CMS environments with Next.js and MERN stack.',
//       'Building custom WordPress widgets, themes, and dynamic plugins tailored for high-conversion marketing funnels.',
//       'Developing secure backend REST APIs, JWT authentication protocols, and Supabase / MongoDB query pipelines.',
//       'Leading database schema optimization and automated data migration pipelines for growing product catalogs.',
//       'Managing corporate bookkeeping, financial reporting, cash flow analysis, and data auditing with strict accuracy.'
//     ],
//     skills: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Supabase', 'WordPress', 'Financial Analysis', 'API Optimization']
//   },
//   {
//     id: 'exp-2',
//     title: 'Full-Stack Developer & Accountant — Intern',
//     company: 'Experivia',
//     period: 'December 2025 – March 2026',
//     isCurrent: false,
//     type: '4-Month Intensive Internship',
//     responsibilities: [
//       'Contributed actively to core frontend development sprints, converting design specifications into responsive React components.',
//       'Assisted in backend endpoint testing, bug remediation, and third-party API integrations.',
//       'Handled day-to-day transaction records, financial ledger updates, and weekly financial summarization.',
//       'Demonstrated high engineering velocity and dual-discipline reliability, resulting in rapid promotion to permanent full-time role.'
//     ],
//     skills: ['JavaScript ES6+', 'React.js', 'Express.js', 'Tailwind CSS', 'Bookkeeping', 'Postman']
//   }
// ];

// export const educationData: EducationItem[] = [
//   {
//     id: 'edu-1',
//     degree: 'Alim — 2nd Year (Higher Secondary Equivalent)',
//     institution: 'Khulna Nesaria Kamil Madrasah',
//     location: 'Khulna, Bangladesh',
//     period: '2024 – Present',
//     expectedGraduation: '2026',
//     status: 'In Progress',
//     highlights: [
//       'Advanced curriculum in Islamic Studies, Arabic literature, Logic, and General Science & Mathematics.',
//       'Mastered disciplined time management by successfully balancing rigorous academic curriculum with full-time software engineering.',
//       'Cultivated ethical leadership, analytical problem breakdown, and focused personal dedication.'
//     ]
//   },
//   {
//     id: 'edu-2',
//     degree: 'Dakhil — Secondary School Certificate',
//     institution: 'East Chitki D H D Madrasa',
//     location: 'Jhalakathi, Kathalia, Bangladesh',
//     period: 'Graduated 2024',
//     status: 'Completed',
//     highlights: [
//       'Graduated with outstanding academic distinction across core sciences and foundational studies.',
//       'Active participant in regional logic debates, mathematical problem solving, and community initiatives.',
//       'Established early passion for programming, computer science principles, and web technologies.'
//     ]
//   }
// ];

// export const projectsData: Project[] = [
//   {
//     id: 'zero-olympiad',
//     title: 'Zero Olympiad',
//     subtitle: 'UN 17 SDGs Global Education & Competition Platform',
//     category: 'Global SDG Platform',
//     role: 'Lead Full-Stack Developer',
//     year: '2025 – 2026',
//     description: "Zero Olympiad empowers students to become Global Citizens by mastering the UN's 17 Sustainable Development Goals (SDGs). From Zero Poverty to Zero Hunger, we prepare future leaders to navigate World Affairs, Global Policies, and Diplomacy by 2030.",
//     technologies: ['Next.js', 'Tailwind CSS', 'NextAuth.js', 'Redux', 'Redux Toolkit', 'GSAP', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Supabase'],
//     metrics: [
//       { label: 'Global Reach', value: '17 SDGs' },
//       { label: 'Target Horizon', value: 'Vision 2030' },
//       { label: 'Platform Speed', value: '99 Score' },
//       { label: 'Security', value: 'Enterprise JWT' }
//     ],
//     highlights: [
//       'Interactive SDG quiz simulation engine with dynamic countdown timers and randomized question banks.',
//       'Seamless multi-tier authentication powered by NextAuth.js and Supabase Row Level Security.',
//       'Silky smooth interactive animations and micro-interactions choreographed using GSAP and Framer Motion.',
//       'Centralized global state with Redux Toolkit ensuring instantaneous leaderboard and dashboard updates.'
//     ],
//     mockupTheme: 'emerald',
//     imagePlaceholder: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
//     liveUrl: 'https://zero-olympiad.org',
//     caseStudyUrl: '#case-study'
//   },
//   {
//     id: 'glts',
//     title: 'GLTS — Global Leadership Training & Skills',
//     subtitle: 'Executive Leadership Program by Faatiha Aayat',
//     category: 'Leadership & Executive Training',
//     role: 'Full-Stack Developer & UI Architect',
//     year: '2025',
//     description: "Transform your potential into global excellence with GLTS by Faatiha Aayat. An exclusive professional development program for strategic leadership, public speaking, and global representation.",
//     technologies: ['Next.js', 'Tailwind CSS', 'Supabase Auth', 'Redux', 'Redux Toolkit', 'GSAP', 'Framer Motion', 'Node.js', 'Express.js', 'JWT', 'Supabase'],
//     metrics: [
//       { label: 'Curriculum Modules', value: '12+ Tracks' },
//       { label: 'Authentication', value: 'Supabase RLS' },
//       { label: 'Core Vitals', value: '100% Green' },
//       { label: 'Interaction', value: 'Smooth GSAP' }
//     ],
//     highlights: [
//       'Cohort enrollment engine with automated email notifications, seat booking, and verified credential issuing.',
//       'Executive dashboard tailored for mentors and students with real-time video workshop schedules.',
//       'Immersive typography and editorial layout emphasizing prestige, credibility, and international appeal.',
//       'Modular Supabase database schema supporting high-throughput student profile queries.'
//     ],
//     mockupTheme: 'blue',
//     imagePlaceholder: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
//     liveUrl: 'https://glts.example.org',
//     caseStudyUrl: '#case-study'
//   },
//   {
//     id: 'axialoop',
//     title: 'Axialoop',
//     subtitle: 'Strategic 360° AI Transformation & Enterprise Solutions',
//     category: 'Enterprise AI Ecosystem',
//     role: 'Frontend Architect & Motion Specialist',
//     year: '2025 – 2026',
//     description: "Empowering Businesses Through Advanced AI Transformation. Your Strategic AI Partner for Seamless Solutions at 360 Degrees.",
//     technologies: ['Next.js', 'Tailwind CSS', 'Redux', 'Redux Toolkit', 'GSAP', 'Framer Motion'],
//     metrics: [
//       { label: 'Solution Matrix', value: '360° AI' },
//       { label: 'FPS Performance', value: '60 FPS' },
//       { label: 'Interaction', value: 'ScrollTrigger' },
//       { label: 'Design System', value: 'Dark Luxury' }
//     ],
//     highlights: [
//       'Dynamic interactive AI service calculator helping enterprise clients estimate automation ROI.',
//       'Sleek dark-mode aesthetic with fine emerald & cyan kinetic light accents and particle meshes.',
//       'Component-driven architecture built for rapid feature expansion and cross-device fluidity.',
//       'Custom GSAP scroll choreography creating a smooth storytelling experience across solutions.'
//     ],
//     mockupTheme: 'purple',
//     imagePlaceholder: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
//     liveUrl: 'https://axialoop.example.com',
//     caseStudyUrl: '#case-study'
//   },
//   {
//     id: 'william-white',
//     title: 'William White / Alabama Outside',
//     subtitle: 'High-Caliber Legal & Strategic Advisory Portal',
//     category: 'Legal & Advisory',
//     role: 'Frontend Developer & Interaction Specialist',
//     year: '2025',
//     description: "With decades of combined legal experience, our firm is dedicated to delivering high-caliber, strategic solutions for our clients.",
//     technologies: ['Next.js', 'React-DOM', 'Tailwind CSS', 'Framer Motion', 'Motion', 'Swiper', 'Lucide React', 'React Icons', 'ESLint', 'eslint-config-next'],
//     metrics: [
//       { label: 'Case Studies', value: '50+ Records' },
//       { label: 'Consult Booking', value: 'Instant' },
//       { label: 'Accessibility', value: 'WCAG AAA' },
//       { label: 'Code Quality', value: 'Strict ESLint' }
//     ],
//     highlights: [
//       'Sophisticated serif-infused editorial styling conveying unmatched legal authority and client trust.',
//       'Interactive case directory with responsive filtering, category switching, and modal briefs.',
//       'Fluid slider carousels powered by Swiper and Framer Motion for client testimonials and legal insights.',
//       'Strict TypeScript and ESLint compliance ensuring long-term code maintainability.'
//     ],
//     mockupTheme: 'amber',
//     imagePlaceholder: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
//     liveUrl: 'https://williamwhite.example.com',
//     caseStudyUrl: '#case-study'
//   }
// ];

// export const servicesData: Service[] = [
//   {
//     id: 'srv-1',
//     number: '01',
//     title: 'Full-Stack Web Development',
//     shortTitle: 'End-to-End Solutions',
//     description: 'Building secure, scalable, and high-performance full-stack web applications from scratch using the MERN stack and Next.js.',
//     iconName: 'Layers',
//     deliverables: [
//       'Complete MERN / Next.js Web Apps',
//       'Scalable Node.js & Express REST APIs',
//       'Database Schema Design (Supabase/Mongo)',
//       'Secure Authentication & Role-Based Access'
//     ],
//     tags: ['Next.js', 'Node.js', 'Express', 'Supabase', 'MongoDB'],
//     accentColor: '#10b981'
//   },
//   {
//     id: 'srv-2',
//     number: '02',
//     title: 'Pixel-Perfect Frontend',
//     shortTitle: 'Figma to React/Next.js',
//     description: 'Converting Figma, Adobe XD, or reference designs into highly accurate, fully responsive and clean-coded frontend interfaces.',
//     iconName: 'MonitorCheck',
//     deliverables: [
//       '100% Accurate Figma-to-Code Translation',
//       'Fully Responsive (Mobile, Tablet, Desktop)',
//       'Clean Semantic HTML5 & Modern CSS/Tailwind',
//       'Accessible & Cross-Browser Tested'
//     ],
//     tags: ['Figma', 'React', 'Tailwind CSS', 'TypeScript', 'A11y'],
//     accentColor: '#34d399'
//   },
//   {
//     id: 'srv-3',
//     number: '03',
//     title: 'Creative Web Animations',
//     shortTitle: 'Interactive UI/UX',
//     description: 'Crafting dynamic scroll-based animations and smooth transitions using GSAP, ScrollTrigger, and Framer Motion.',
//     iconName: 'Sparkles',
//     deliverables: [
//       'ScrollTrigger Choreography & Parallax',
//       'Micro-Interactions & Magnetic Hover Effects',
//       'Smooth Page Transitions & Staggered Enters',
//       'High-Performance 60FPS GPU Animations'
//     ],
//     tags: ['GSAP', 'ScrollTrigger', 'Framer Motion', 'Canvas', 'UI/UX'],
//     accentColor: '#06b6d4'
//   },
//   {
//     id: 'srv-4',
//     number: '04',
//     title: 'Performance & SEO Optimization',
//     shortTitle: 'Speed & Visibility',
//     description: 'Optimizing loading speeds and Core Web Vitals using modern Next.js rendering strategies to create fast and SEO-friendly websites.',
//     iconName: 'Zap',
//     deliverables: [
//       '95+ Google PageSpeed & Core Web Vitals',
//       'Next.js SSR/SSG & Edge Caching',
//       'Dynamic OpenGraph & Structured JSON-LD',
//       'Asset Compression & Code Splitting'
//     ],
//     tags: ['Core Web Vitals', 'SSR/SSG', 'SEO', 'Edge Caching'],
//     accentColor: '#f59e0b'
//   },
//   {
//     id: 'srv-5',
//     number: '05',
//     title: 'WordPress Development',
//     shortTitle: 'CMS & Custom Sites',
//     description: 'Developing custom WordPress websites, landing pages and blogs that are responsive, editable and easy for clients to manage.',
//     iconName: 'FileCode2',
//     deliverables: [
//       'Custom Elementor / Gutenberg Widgets',
//       'Tailored Themes & Fast Loading Speed',
//       'E-Commerce (WooCommerce) Integration',
//       'Zero-Hassle Client Dashboard Training'
//     ],
//     tags: ['WordPress', 'Elementor', 'PHP', 'Custom Widgets', 'CMS'],
//     accentColor: '#8b5cf6'
//   },
//   {
//     id: 'srv-6',
//     number: '06',
//     title: 'Custom Web Applications',
//     shortTitle: 'Dashboards & E-Commerce',
//     description: 'Developing tailored web solutions including authentication, complex state management, custom dashboards and e-commerce platforms.',
//     iconName: 'LayoutGrid',
//     deliverables: [
//       'Interactive Analytics & Admin Dashboards',
//       'Custom E-Commerce & Checkout Workflows',
//       'Real-Time Notifications & WebSockets',
//       'Redux Toolkit Predictable State Flow'
//     ],
//     tags: ['Redux Toolkit', 'Auth.js', 'Stripe/Payment', 'Dashboards'],
//     accentColor: '#ec4899'
//   }
// ];

// export const approachSteps: ApproachStep[] = [
//   {
//     number: '01',
//     title: 'Understand',
//     subtitle: 'Deep Dive & Discovery',
//     description: 'Understand the business, users and requirements thoroughly. Unpack project goals, target audience personas, and technical constraints to establish a bulletproof roadmap.',
//     deliverables: ['Requirement Mapping', 'Technical Scope Document', 'Architecture Blueprints'],
//     icon: 'Search'
//   },
//   {
//     number: '02',
//     title: 'Plan',
//     subtitle: 'Architecture & Tech Stack',
//     description: 'Choose the right architecture and technologies. Plan database schemas, API contracts, state management boundaries, and performance benchmarks before writing a single line of code.',
//     deliverables: ['Database Schema Diagrams', 'API Specification', 'Design System Setup'],
//     icon: 'Compass'
//   },
//   {
//     number: '03',
//     title: 'Build',
//     subtitle: 'Clean & Scalable Code',
//     description: 'Create clean, scalable and maintainable systems. Develop modular components, type-safe APIs, and responsive layouts following enterprise best practices and atomic design principles.',
//     deliverables: ['Modular React/Next Components', 'Secure REST Endpoints', 'Interactive Animations'],
//     icon: 'Code2'
//   },
//   {
//     number: '04',
//     title: 'Optimize',
//     subtitle: 'Speed, Security & Quality',
//     description: 'Improve performance, security and user experience. Audit Core Web Vitals, implement caching strategies, test cross-browser responsiveness, and stress-test endpoints.',
//     deliverables: ['Performance Audits (95+ Vitals)', 'Security & Auth Verification', 'Cross-Device QA'],
//     icon: 'Gauge'
//   },
//   {
//     number: '05',
//     title: 'Deliver',
//     subtitle: 'Deployment & Continuity',
//     description: 'Deploy a polished production-ready solution. Configure CI/CD pipelines, live monitoring, SSL certification, and provide clear documentation for frictionless handover.',
//     deliverables: ['Vercel/Production Deployment', 'Domain & DNS Setup', 'Handover & Ongoing Support'],
//     icon: 'Rocket'
//   }
// ];

// export const currentFocusAreas = [
//   {
//     id: 'focus-1',
//     title: 'AI Integration',
//     category: 'Next-Gen Engineering',
//     tag: 'GenAI & LLMs',
//     description: 'Orchestrating autonomous AI agents, semantic vector search, dynamic prompt pipelines, and embedding Gemini / OpenAI models directly into production web workflows.',
//     technologies: ['Gemini API', 'LangChain', 'Vector DBs', 'Function Calling', 'RAG Architecture'],
//     highlight: 'Building smart, context-aware user interfaces that automate real business tasks.'
//   },
//   {
//     id: 'focus-2',
//     title: 'System Design',
//     category: 'Scalable Systems',
//     tag: 'Enterprise Architecture',
//     description: 'Mastering distributed system principles, microservice boundaries, event-driven messaging, high-availability caching, and resilient API gateway design.',
//     technologies: ['Microservices', 'Event Bus', 'Redis Caching', 'Load Balancing', 'Rate Limiting'],
//     highlight: 'Engineering software designed to scale gracefully from 1,000 to 1,000,000+ concurrent requests.'
//   },
//   {
//     id: 'focus-3',
//     title: 'Backend Scaling',
//     category: 'High Concurrency',
//     tag: 'Data & Performance',
//     description: 'Optimizing high-throughput Node.js clustering, Supabase / PostgreSQL query planning, indexing strategies, and connection pooling under heavy load.',
//     technologies: ['PostgreSQL Indexing', 'Node Cluster API', 'Supabase RLS', 'Connection Pooling'],
//     highlight: 'Eliminating database bottlenecks and delivering sub-50ms API response times.'
//   }
// ];

// export const languagesData = [
//   {
//     name: 'Bangla (বাংলা)',
//     proficiency: 'Native / Bilingual',
//     desc: 'Fluent primary language for clear communication, collaboration and conceptual articulation.',
//     flag: '🇧🇩',
//     greeting: 'নমস্কার / আসসালামু আলাইকুম'
//   },
//   {
//     name: 'English',
//     proficiency: 'Professional Working Proficiency',
//     desc: 'Full professional command for international team collaboration, technical writing, and code reviews.',
//     flag: '🌐',
//     greeting: 'Hello, welcome!'
//   },
//   {
//     name: 'Hindi (हिन्दी)',
//     proficiency: 'Conversational Proficiency',
//     desc: 'Strong verbal comprehension and spoken fluency for regional communication.',
//     flag: '🇮🇳',
//     greeting: 'नमस्ते'
//   }
// ];

// export const careerTimeline: CareerMilestone[] = [
//   {
//     year: '2024',
//     tag: 'Foundation & Rigor',
//     title: 'Education Foundation & Computer Science Immersion',
//     description: 'Graduated Dakhil with honors and commenced Alim at Khulna Nesaria Kamil Madrasah. Established core programming fundamentals, algorithmic logic, and web standards.',
//     skills: ['JavaScript ES6+', 'HTML5/CSS3', 'Data Structures', 'Islamic Studies & Ethics']
//   },
//   {
//     year: '2025',
//     tag: 'Growth & Rapid Velocity',
//     title: 'Intensive Internship & Full-Stack Development',
//     description: 'Joined Experivia as Full-Stack Developer & Accountant Intern. Mastered the MERN stack, Next.js App Router, GSAP motion systems, and corporate financial data integrity.',
//     skills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Accounting Systems']
//   },
//   {
//     year: '2026',
//     tag: 'Professional Impact',
//     title: 'Full-Time Professional Role at Experivia',
//     description: 'Promoted to permanent dual-discipline role managing full-stack web platforms, custom WordPress CMS engineering, API architecture, and financial reporting.',
//     skills: ['Full-Stack Leadership', 'Supabase RLS', 'Custom WordPress', 'Performance Optimization']
//   },
//   {
//     year: 'Present',
//     tag: 'Advanced Frontier',
//     title: 'AI Engineering, System Design & High Concurrency',
//     description: 'Deepening practical mastery in autonomous AI integration, cloud-native system design, and sub-50ms backend scaling to build world-class products.',
//     skills: ['Gemini / LLMs', 'Distributed Architecture', 'High-Load Databases', 'Scalability']
//   },
//   {
//     year: 'Future',
//     tag: 'Aspirational Horizon',
//     title: 'Building High-Impact Global Technology Platforms',
//     description: 'Aspirational trajectory toward architecting transformative web products, contributing to open-source developer ecosystems, and creating global solutions.',
//     skills: ['Cloud Native', 'Global SaaS', 'Developer Tools', 'Strategic Leadership'],
//     isFuture: true
//   }
// ];

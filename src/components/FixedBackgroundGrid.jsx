"use client";

import { useEffect, useRef } from 'react';

export default function FixedBackgroundGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: 1 + Math.random() * 2,
      color: Math.random() > 0.5 ? '#5B21B6' : '#DB2777',
      alpha: 0.2 + Math.random() * 0.5,
    }));

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulse += 0.02;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#5B21B6'
          ? `rgba(91, 33, 182, ${p.alpha * 0.7})`
          : `rgba(219, 39, 119, ${p.alpha * 0.7})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute inset-0 bg-[#07090e]" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-50" />
      <div className="absolute inset-0 bg-graph-matrix opacity-35" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] rounded-full opacity-35 animate-radar-sweep border border-purple-800/30 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#DB2777]/20 to-transparent rounded-t-full" />
      </div>

      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-30 animate-radar-sweep border border-pink-700/25 pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '24s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#5B21B6]/25 to-transparent rounded-t-full" />
      </div>

      <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#5B21B6]/15 to-transparent animate-scanline" />

      <svg className="absolute inset-0 w-full h-full opacity-45" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gridGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#5B21B6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#DB2777" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="gridGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DB2777" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5B21B6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <line x1="0" y1="120" x2="1920" y2="720" stroke="url(#gridGrad1)" strokeWidth="1" strokeDasharray="8 8" opacity="0.4" />
        <line x1="0" y1="680" x2="1920" y2="180" stroke="url(#gridGrad2)" strokeWidth="1" strokeDasharray="12 6" opacity="0.3" />

        <path
          d="M-50,300 C300,150 600,450 950,250 C1300,50 1600,400 2000,200"
          fill="none"
          stroke="url(#gridGrad1)"
          strokeWidth="2"
          opacity="0.45"
          strokeDasharray="4 4"
        />
        <path
          d="M-50,650 C350,850 700,500 1100,700 C1500,900 1750,600 2000,750"
          fill="none"
          stroke="url(#gridGrad2)"
          strokeWidth="1.5"
          opacity="0.35"
        />

        <g opacity="0.75">
          <circle cx="180" cy="220" r="4" fill="#DB2777" />
          <circle cx="180" cy="220" r="14" fill="none" stroke="#5B21B6" strokeWidth="1.2" strokeDasharray="2 2" />
          <text x="200" y="224" fill="#DB2777" fontSize="10" fontFamily="monospace" opacity="0.9">NODE_01 [LAT.41]</text>
        </g>

        <g opacity="0.75">
          <circle cx="85%" cy="320" r="4" fill="#5B21B6" />
          <circle cx="85%" cy="320" r="16" fill="none" stroke="#DB2777" strokeWidth="1.2" strokeDasharray="3 3" />
          <text x="calc(85% + 22px)" y="324" fill="#c4b5fd" fontSize="10" fontFamily="monospace" opacity="0.9">SYS_CORE [ONLINE]</text>
        </g>

        <g opacity="0.65">
          <circle cx="28%" cy="78%" r="3" fill="#F472B6" />
          <circle cx="28%" cy="78%" r="12" fill="none" stroke="#5B21B6" strokeWidth="1" />
          <text x="calc(28% + 18px)" y="calc(78% + 4px)" fill="#DB2777" fontSize="9" fontFamily="monospace" opacity="0.9">GEO_POS // 23.81</text>
        </g>
      </svg>

      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#5B21B6]/20 rounded-full blur-[160px] animate-graph-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[550px] h-[550px] bg-[#DB2777]/18 rounded-full blur-[170px] animate-graph-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-[#5B21B6]/15 rounded-full blur-[140px] animate-graph-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="absolute top-6 left-6 font-mono text-[10px] text-purple-400/50 uppercase tracking-widest hidden md:block">
        GRID_SYSTEM_V2.4 // LAT 24.3745° N // LON 88.6042° E
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-pink-400/50 uppercase tracking-widest hidden md:block">
        RENDER_MODE: FIXED_ANIMATED // GSAP_ENGINE
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-purple-400/40 uppercase tracking-widest hidden md:block">
        SEFAT_ULLAH_FAHAD // FULL_STACK_DEV
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-pink-400/40 uppercase tracking-widest hidden md:block">
        STATUS: LIVE_PIPELINE
      </div>
    </div>
  );
}
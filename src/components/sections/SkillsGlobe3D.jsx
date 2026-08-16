"use client";

import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import gsap from 'gsap';
import {
  HiOutlineGlobeAsiaAustralia,
  HiOutlineArrowPath,
  HiOutlinePlay,
  HiOutlinePause,
  HiOutlineMagnifyingGlassPlus,
  HiOutlineMagnifyingGlassMinus,
  HiOutlineSparkles,
  HiOutlineMapPin,
  HiOutlineBolt,
  HiOutlineCube
} from 'react-icons/hi2';
import { TbCompass, TbRadar2 } from 'react-icons/tb';

function generateEarthContinents() {
  const points = [];

  const landmassRegions = [
    { minLat: 25, maxLat: 68, minLon: -140, maxLon: -55, count: 180 },
    { minLat: 8, maxLat: 24, minLon: -105, maxLon: -60, count: 40 },
    { minLat: -55, maxLat: 12, minLon: -80, maxLon: -35, count: 150 },
    { minLat: 36, maxLat: 65, minLon: -10, maxLon: 45, count: 160 },
    { minLat: 50, maxLat: 70, minLon: -10, maxLon: 30, count: 60 },
    { minLat: -35, maxLat: 37, minLon: -17, maxLon: 51, count: 190 },
    { minLat: 15, maxLat: 40, minLon: 35, maxLon: 60, count: 70 },
    { minLat: 6, maxLat: 36, minLon: 68, maxLon: 95, count: 140 },
    { minLat: 20, maxLat: 55, minLon: 95, maxLon: 145, count: 180 },
    { minLat: -10, maxLat: 20, minLon: 95, maxLon: 140, count: 100 },
    { minLat: -45, maxLat: -10, minLon: 112, maxLon: 178, count: 120 },
    { minLat: 50, maxLat: 72, minLon: 45, maxLon: 175, count: 160 },
    { minLat: -82, maxLat: -65, minLon: -180, maxLon: 180, count: 90 },
  ];

  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  landmassRegions.forEach((region) => {
    for (let i = 0; i < region.count; i++) {
      const lat = region.minLat + pseudoRandom() * (region.maxLat - region.minLat);
      const lon = region.minLon + pseudoRandom() * (region.maxLon - region.minLon);

      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = -(Math.sin(phi) * Math.cos(theta));
      const z = Math.sin(phi) * Math.sin(theta);
      const y = Math.cos(phi);

      points.push({
        x,
        y,
        z,
        lat,
        lon,
        brightness: 0.4 + pseudoRandom() * 0.6,
      });
    }
  });

  return points;
}

export default function SkillsGlobe3D({
  skills,
  selectedCategory,
  onSelectSkill,
  hoveredSkill,
  skillIconMap = {},
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1.0);
  const [activeSkill, setActiveSkill] = useState(hoveredSkill);
  const [currentCategory, setCurrentCategory] = useState(selectedCategory || 'all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'DevOps & Tools' },
  ];

  const rotationRef = useRef({
    rx: 0.35,
    ry: 2.1,
    rz: 0,
    zoom: 1.0,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    dragVelocityX: 0,
    dragVelocityY: 0,
  });

  const continentPoints = useMemo(() => generateEarthContinents(), []);

  const skill3DPoints = useMemo(() => {
    const total = skills.length;
    const phiAngle = Math.PI * (3 - Math.sqrt(5));

    return skills.map((skill, index) => {
      const y = 1 - (index / (total - 1 || 1)) * 1.8 - 0.1;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phiAngle * index * 1.618;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const lat = Math.asin(y) * (180 / Math.PI);
      const lon = (Math.atan2(z, x) * (180 / Math.PI));

      return {
        skill,
        x,
        y,
        z,
        lat,
        lon,
      };
    });
  }, [skills]);

  const homeBaseLocation = useMemo(() => {
    const lat = 22.8456;
    const lon = 89.5403;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return {
      name: 'Khulna, BD (Ashish)',
      x: -(Math.sin(phi) * Math.cos(theta)),
      y: Math.cos(phi),
      z: Math.sin(phi) * Math.sin(theta),
      lat,
      lon,
    };
  }, []);

  useEffect(() => {
    if (hoveredSkill) {
      setActiveSkill(hoveredSkill);
    }
  }, [hoveredSkill]);

  const flyToTarget = useCallback((targetLat, targetLon) => {
    setIsAutoRotating(false);

    const targetRy = -((targetLon + 90) * (Math.PI / 180));
    const targetRx = (targetLat * (Math.PI / 180)) * 0.6;

    gsap.to(rotationRef.current, {
      ry: targetRy,
      rx: targetRx,
      duration: 1.4,
      ease: 'power3.out',
      overwrite: 'auto',
      onComplete: () => {
        rotationRef.current.dragVelocityX = 0.0005;
      }
    });
  }, []);

  const handleFlyHome = () => {
    flyToTarget(homeBaseLocation.lat, homeBaseLocation.lon);
  };

  const handleSelectSkillNode = (skill) => {
    setActiveSkill(skill);
    onSelectSkill(skill);

    const point = skill3DPoints.find((p) => p.skill.name === skill.name);
    if (point) {
      flyToTarget(point.lat, point.lon);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let arcPulsePhase = 0;

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const render = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      const centerX = width / 2;
      const centerY = height / 2;
      
      const baseRadius = Math.min(width, height) * 0.35 * rotationRef.current.zoom;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const r = rotationRef.current;
      if (!r.isDragging) {
        if (isAutoRotating) {
          r.ry += 0.003;
        }
        r.ry += r.dragVelocityX;
        r.rx += r.dragVelocityY;
        r.dragVelocityX *= 0.93;
        r.dragVelocityY *= 0.93;
      }

      r.rx = Math.max(-1.1, Math.min(1.1, r.rx));

      arcPulsePhase = (arcPulsePhase + 0.02) % (Math.PI * 2);

      const cosX = Math.cos(r.rx);
      const sinX = Math.sin(r.rx);
      const cosY = Math.cos(r.ry);
      const sinY = Math.sin(r.ry);

      const project3D = (x, y, z, scaleMultiplier = 1.0) => {
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        const fov = 380;
        const perspective = fov / (fov + z2 * baseRadius * 0.85);

        const screenX = centerX + x1 * baseRadius * scaleMultiplier * perspective;
        const screenY = centerY + y2 * baseRadius * scaleMultiplier * perspective;

        return { screenX, screenY, zDepth: z2, perspective };
      };

      const outerGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.6,
        centerX,
        centerY,
        baseRadius * 1.45
      );
      outerGlow.addColorStop(0, 'rgba(124, 58, 237, 0.22)');
      outerGlow.addColorStop(0.4, 'rgba(236, 72, 153, 0.14)');
      outerGlow.addColorStop(0.75, 'rgba(56, 189, 248, 0.08)');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.45, 0, Math.PI * 2);
      ctx.fill();

      const oceanShading = ctx.createRadialGradient(
        centerX - baseRadius * 0.35,
        centerY - baseRadius * 0.35,
        baseRadius * 0.1,
        centerX,
        centerY,
        baseRadius
      );
      oceanShading.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      oceanShading.addColorStop(0.65, 'rgba(10, 15, 30, 0.96)');
      oceanShading.addColorStop(0.92, 'rgba(124, 58, 237, 0.35)');
      oceanShading.addColorStop(1, 'rgba(236, 72, 153, 0.65)');

      ctx.fillStyle = oceanShading;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      const latitudes = [-0.65, -0.35, 0, 0.35, 0.65];
      latitudes.forEach((latY) => {
        const isEquator = latY === 0;
        const latRadius = Math.sqrt(1 - latY * latY);
        
        ctx.beginPath();
        let first = true;
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.15) {
          const x = Math.cos(a) * latRadius;
          const z = Math.sin(a) * latRadius;
          const proj = project3D(x, latY, z);
          
          if (proj.zDepth > -0.2) {
            if (first) {
              ctx.moveTo(proj.screenX, proj.screenY);
              first = false;
            } else {
              ctx.lineTo(proj.screenX, proj.screenY);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = isEquator
          ? 'rgba(236, 72, 153, 0.45)'
          : 'rgba(124, 58, 237, 0.16)';
        ctx.lineWidth = isEquator ? 1.4 : 0.75;
        ctx.stroke();
      });

      for (let m = 0; m < 8; m++) {
        const lonAngle = (m * Math.PI) / 8;
        ctx.beginPath();
        let first = true;
        for (let a = -Math.PI / 2; a <= Math.PI / 2 + 0.1; a += 0.15) {
          const latY = Math.sin(a);
          const radAtY = Math.cos(a);
          const x = Math.cos(lonAngle) * radAtY;
          const z = Math.sin(lonAngle) * radAtY;
          const proj = project3D(x, latY, z);

          if (proj.zDepth > -0.2) {
            if (first) {
              ctx.moveTo(proj.screenX, proj.screenY);
              first = false;
            } else {
              ctx.lineTo(proj.screenX, proj.screenY);
            }
          } else {
            first = true;
          }
        }
        ctx.strokeStyle = 'rgba(124, 58, 237, 0.14)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.1) {
        const x = Math.cos(a + arcPulsePhase * 0.4);
        const z = Math.sin(a + arcPulsePhase * 0.4);
        const proj = project3D(x, 0, z, 1.24);
        if (a === 0) ctx.moveTo(proj.screenX, proj.screenY);
        else ctx.lineTo(proj.screenX, proj.screenY);
      }
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      continentPoints.forEach((pt) => {
        const proj = project3D(pt.x, pt.y, pt.z);

        if (proj.zDepth > -0.15) {
          const depthAlpha = Math.max(0.1, (proj.zDepth + 0.15) / 1.15);
          const dotSize = Math.max(0.8, 1.4 * proj.perspective * (proj.zDepth > 0.3 ? 1.2 : 0.9));

          ctx.beginPath();
          ctx.arc(proj.screenX, proj.screenY, dotSize, 0, Math.PI * 2);

          ctx.fillStyle = `rgba(52, 211, 153, ${depthAlpha * pt.brightness * 0.75})`;
          ctx.fill();
        }
      });

      const homeProj = project3D(homeBaseLocation.x, homeBaseLocation.y, homeBaseLocation.z);
      if (homeProj.zDepth > -0.1) {
        const depthAlpha = Math.max(0.2, (homeProj.zDepth + 0.1) / 1.1);

        const radarSize = (10 + Math.sin(arcPulsePhase * 3) * 4) * homeProj.perspective;
        ctx.beginPath();
        ctx.arc(homeProj.screenX, homeProj.screenY, radarSize, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.8 * depthAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(homeProj.screenX, homeProj.screenY, 4 * homeProj.perspective, 0, Math.PI * 2);
        ctx.fillStyle = '#EC4899';
        ctx.fill();

        if (homeProj.zDepth > 0.2) {
          ctx.font = '600 10px "Plus Jakarta Sans", sans-serif';
          ctx.fillStyle = '#F472B6';
          ctx.fillText('🇧🇩 Khulna (HQ)', homeProj.screenX + 8, homeProj.screenY - 6);
        }
      }

      const projectedSkills = skill3DPoints.map((pt) => {
        const elevation = 1.08;
        const proj = project3D(pt.x, pt.y, pt.z, elevation);
        return {
          ...pt,
          screenX: proj.screenX,
          screenY: proj.screenY,
          zDepth: proj.zDepth,
          perspective: proj.perspective,
        };
      });

      projectedSkills.sort((a, b) => a.zDepth - b.zDepth);

      for (let i = 0; i < projectedSkills.length; i++) {
        const s1 = projectedSkills[i];
        if (s1.zDepth < -0.2) continue;

        for (let j = i + 1; j < projectedSkills.length; j++) {
          const s2 = projectedSkills[j];
          if (s2.zDepth < -0.2) continue;

          const isConnectedCategory = s1.skill.category === s2.skill.category;
          const isSelectedLink = activeSkill && (s1.skill.name === activeSkill.name || s2.skill.name === activeSkill.name);

          const dx = s1.screenX - s2.screenX;
          const dy = s1.screenY - s2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < (isSelectedLink ? 160 : 90) && (isConnectedCategory || isSelectedLink)) {
            const alpha = (1 - dist / (isSelectedLink ? 160 : 90)) * (isSelectedLink ? 0.65 : 0.22) * ((s1.zDepth + 1) / 2);
            
            ctx.beginPath();
            const midX = (s1.screenX + s2.screenX) / 2;
            const midY = (s1.screenY + s2.screenY) / 2 - dist * 0.15;
            
            ctx.moveTo(s1.screenX, s1.screenY);
            ctx.quadraticCurveTo(midX, midY, s2.screenX, s2.screenY);
            ctx.strokeStyle = isSelectedLink ? `rgba(236, 72, 153, ${alpha})` : `rgba(167, 139, 250, ${alpha})`;
            ctx.lineWidth = isSelectedLink ? 1.6 : 0.8;
            ctx.stroke();

            if (isSelectedLink || (i % 3 === 0)) {
              const t = (arcPulsePhase + i) % 1;
              const px = (1 - t) * (1 - t) * s1.screenX + 2 * (1 - t) * t * midX + t * t * s2.screenX;
              const py = (1 - t) * (1 - t) * s1.screenY + 2 * (1 - t) * t * midY + t * t * s2.screenY;

              ctx.beginPath();
              ctx.arc(px, py, 2.2 * s1.perspective, 0, Math.PI * 2);
              ctx.fillStyle = isSelectedLink ? '#F43F5E' : '#38BDF8';
              ctx.fill();
            }
          }
        }
      }

      projectedSkills.forEach((node) => {
        const isSelected = activeSkill?.name === node.skill.name;
        const isCategoryMatch = selectedCategory === 'all' || node.skill.category === selectedCategory;
        const isFront = node.zDepth > 0.05;

        const baseAlpha = Math.max(0.18, (node.zDepth + 0.9) / 1.9);
        const finalAlpha = isCategoryMatch ? baseAlpha : baseAlpha * 0.25;

        if (isFront || isSelected) {
          const haloRadius = (isSelected ? 26 : 14) * node.perspective;
          const haloGrad = ctx.createRadialGradient(
            node.screenX,
            node.screenY,
            0,
            node.screenX,
            node.screenY,
            haloRadius
          );

          if (isSelected) {
            haloGrad.addColorStop(0, 'rgba(236, 72, 153, 0.9)');
            haloGrad.addColorStop(1, 'rgba(236, 72, 153, 0)');
          } else {
            haloGrad.addColorStop(0, `rgba(124, 58, 237, ${0.45 * finalAlpha})`);
            haloGrad.addColorStop(1, 'rgba(124, 58, 237, 0)');
          }

          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(node.screenX, node.screenY, haloRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        const dotRadius = (isSelected ? 6 : 3.6) * node.perspective;
        ctx.beginPath();
        ctx.arc(node.screenX, node.screenY, Math.max(2.5, dotRadius), 0, Math.PI * 2);
        ctx.fillStyle = isSelected
          ? '#DB2777'
          : isCategoryMatch
          ? isFront
            ? '#C4B5FD'
            : 'rgba(167, 139, 250, 0.45)'
          : 'rgba(100, 116, 139, 0.3)';
        ctx.fill();

        if (isFront || isSelected) {
          const fontSize = Math.max(13, Math.min(19, 15.5 * node.perspective * (isSelected ? 1.3 : 1)));
          ctx.font = `${isSelected ? '700' : '600'} ${fontSize}px "Plus Jakarta Sans", sans-serif`;

          const text = node.skill.name;
          const textMetrics = ctx.measureText(text);
          const padX = 12 * node.perspective;
          const padY = 6.5 * node.perspective;
          const tagW = textMetrics.width + padX * 2;
          const tagH = fontSize + padY * 2;
          const tagX = node.screenX - tagW / 2;
          const tagY = node.screenY - tagH - 8 * node.perspective;

          ctx.fillStyle = isSelected
            ? 'rgba(23, 15, 38, 0.98)'
            : `rgba(9, 12, 22, ${Math.min(0.95, finalAlpha * 1.35)})`;

          ctx.strokeStyle = isSelected
            ? '#DB2777'
            : isCategoryMatch
            ? `rgba(139, 92, 246, ${0.8 * finalAlpha})`
            : 'rgba(51, 65, 85, 0.35)';

          ctx.lineWidth = isSelected ? 2.2 : 1.4;

          ctx.beginPath();
          const radiusRound = 8 * node.perspective;
          ctx.roundRect(tagX, tagY, tagW, tagH, radiusRound);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = isSelected
            ? '#FFFFFF'
            : isCategoryMatch
            ? isFront
              ? '#FFFFFF'
              : `rgba(241, 245, 249, ${finalAlpha})`
            : `rgba(148, 163, 184, ${finalAlpha * 0.5})`;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, node.screenX, tagY + tagH / 2);
        }
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [
    continentPoints,
    skill3DPoints,
    homeBaseLocation,
    selectedCategory,
    activeSkill,
    isAutoRotating,
    zoomLevel,
  ]);

  const handlePointerDown = (e) => {
    rotationRef.current.isDragging = true;
    rotationRef.current.lastMouseX = e.clientX;
    rotationRef.current.lastMouseY = e.clientY;
    rotationRef.current.dragVelocityX = 0;
    rotationRef.current.dragVelocityY = 0;
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!rotationRef.current.isDragging) return;
    const deltaX = e.clientX - rotationRef.current.lastMouseX;
    const deltaY = e.clientY - rotationRef.current.lastMouseY;

    rotationRef.current.ry += deltaX * 0.0055;
    rotationRef.current.rx += deltaY * 0.0055;
    rotationRef.current.rx = Math.max(-1.1, Math.min(1.1, rotationRef.current.rx));

    rotationRef.current.dragVelocityX = deltaX * 0.0035;
    rotationRef.current.dragVelocityY = deltaY * 0.0035;

    rotationRef.current.lastMouseX = e.clientX;
    rotationRef.current.lastMouseY = e.clientY;
  };

  const handlePointerUp = (e) => {
    rotationRef.current.isDragging = false;
    try {
      e.target.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handleZoom = (direction) => {
    let nextZoom = rotationRef.current.zoom;
    if (direction === 'in') nextZoom = Math.min(1.4, nextZoom + 0.15);
    if (direction === 'out') nextZoom = Math.max(0.7, nextZoom - 0.15);
    if (direction === 'reset') nextZoom = 1.0;

    gsap.to(rotationRef.current, {
      zoom: nextZoom,
      duration: 0.4,
      ease: 'power2.out',
      onUpdate: () => setZoomLevel(rotationRef.current.zoom),
    });
  };

  const handleResetOrientation = () => {
    gsap.to(rotationRef.current, {
      rx: 0.35,
      ry: 2.1,
      zoom: 1.0,
      dragVelocityX: 0,
      dragVelocityY: 0,
      duration: 1.0,
      ease: 'power2.out',
      onUpdate: () => setZoomLevel(1.0),
    });
  };

  return (
    <div className="relative w-full rounded-3xl bg-slate-950/85 border border-purple-500/25 backdrop-blur-2xl p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-950/80 border border-purple-500/40 text-pink-400 shadow-md">
            <HiOutlineGlobeAsiaAustralia className="w-5 h-5 animate-spin-cw-fast" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-display font-bold text-white tracking-wide">
                Interactive 3D Skill Earth & Orbital Telemetry
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-pink-950/60 border border-pink-500/30 text-pink-300">
                Live 3D Globe
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Raw Canvas + GSAP Math Engine • Continents, Geo-orbits, and Real-time Inertia
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleFlyHome}
            className="btn-shimmer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-pink-500/40 hover:border-pink-500 text-xs font-mono text-pink-300 hover:text-white transition-all cursor-pointer shadow-sm"
            title="Rotate 3D Earth to Rajshahi, Bangladesh"
          >
            <HiOutlineMapPin className="w-3.5 h-3.5 text-pink-400" />
            <span>HQ: Rajshahi</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="btn-shimmer flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/30 hover:border-purple-400 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Toggle Earth planetary spin"
          >
            {isAutoRotating ? (
              <HiOutlinePause className="w-3.5 h-3.5 text-pink-400" />
            ) : (
              <HiOutlinePlay className="w-3.5 h-3.5 text-purple-400" />
            )}
            <span>{isAutoRotating ? 'Pause Orbit' : 'Auto Orbit'}</span>
          </button>

          <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-0.5">
            <button
              type="button"
              onClick={() => handleZoom('in')}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Zoom In"
            >
              <HiOutlineMagnifyingGlassPlus className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => handleZoom('out')}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <HiOutlineMagnifyingGlassMinus className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleResetOrientation}
            className="btn-shimmer flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Reset Earth Axis"
          >
            <HiOutlineArrowPath className="w-3.5 h-3.5 text-purple-400" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full h-[450px] sm:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 border border-purple-500/30 text-[11px] font-mono text-purple-300 backdrop-blur-md shadow-lg">
          <TbCompass className="w-3.5 h-3.5 text-pink-400 animate-spin-cw-fast" />
          <span>Click & Drag to spin Planet Earth • Click any technology to inspect</span>
        </div>

        <div className="absolute top-3 right-3 hidden sm:flex flex-col gap-1 text-[10px] font-mono text-slate-400 bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-2 text-pink-400">
            <TbRadar2 className="w-3.5 h-3.5 animate-pulse" />
            <span>ORBIT: ACTIVE</span>
          </div>
          <div>INCLINATION: ~23.4°</div>
          <div>PROJECTION: 3D SPHERICAL</div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <HiOutlineSparkles className="w-4 h-4 text-pink-400" />
              <h4 className="text-sm font-display font-semibold text-white">
                Technical Constellation Database
              </h4>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/80 border border-purple-500/40 text-pink-300">
                {skills.length} Satellites
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Click any skill below to rotate 3D Earth directly to its orbital coordinates
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-purple-300 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-purple-500/20">
              Active Orbit: {activeSkill ? activeSkill.name : 'Spherical Scan'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3.5 scrollbar-none">
          {categories.map((cat) => {
            const isCatActive = currentCategory === cat.id;
            const count = cat.id === 'all' 
              ? skills.length 
              : skills.filter(s => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCurrentCategory(cat.id)}
                className={`btn-shimmer px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer flex-shrink-0 flex items-center gap-1.5 ${
                  isCatActive
                    ? 'bg-brand-gradient text-white font-bold shadow-md shadow-pink-500/25'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isCatActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-[300px] overflow-y-auto p-1.5 pr-2 rounded-2xl bg-slate-950/60 border border-slate-800/80 scrollbar-thin">
          {skills
            .filter((s) => currentCategory === 'all' || s.category === currentCategory)
            .map((s) => {
              const isSelected = activeSkill?.name === s.name;
              const Icon = skillIconMap[s.name] || HiOutlineCube;

              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => handleSelectSkillNode(s)}
                  className={`btn-shimmer text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2.5 group ${
                    isSelected
                      ? 'bg-brand-gradient text-white font-semibold shadow-lg shadow-pink-500/30 scale-[1.02] border border-pink-400/50'
                      : 'bg-slate-900/70 border border-slate-800/80 hover:border-purple-500/50 text-slate-300 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg flex-shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-purple-950/60 text-purple-400 group-hover:text-pink-300'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold truncate leading-tight">
                      {s.name}
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-0.5">
                      <span className="capitalize truncate opacity-80">{s.category}</span>
                      <span className={isSelected ? 'text-white/90 font-bold' : 'text-pink-400'}>
                        {s.level}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
        </div>
      </div>

      {activeSkill && (
        <div className="mt-4 p-5 rounded-2xl bg-slate-900/95 border border-pink-500/60 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-brand-gradient text-white shadow-lg">
              {React.createElement(skillIconMap[activeSkill.name] || HiOutlineCube, {
                className: 'w-6 h-6',
              })}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-base font-display font-bold text-white">
                  {activeSkill.name}
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950 border border-purple-500/40 text-pink-300">
                  {activeSkill.level}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 text-slate-300 capitalize">
                  {activeSkill.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {activeSkill.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
            <button
              type="button"
              onClick={() => handleSelectSkillNode(activeSkill)}
              className="btn-shimmer flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-gradient hover:bg-brand-gradient-hover text-xs font-mono text-white shadow-md shadow-pink-500/25 transition-all cursor-pointer font-semibold"
            >
              <HiOutlineBolt className="w-3.5 h-3.5" />
              <span>Orbit Target</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
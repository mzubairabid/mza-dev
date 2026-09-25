// components/ParticlesBackground.tsx
// Blue → Purple glowing particles + halka aurora glow. Koi library nahi.
// Speed: glow pehle se bane "sprites" se (har frame blur nahi), screen se bahar
// ya tab chhupne par ruk jata hai, mobile par kam particles, reduce-motion respect.
"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  /** Particles ki tadaad (screen area ke hisaab se) */
  density?: number;
  /** Lines kitni doori tak banein (px) */
  linkDistance?: number;
  /** Rang ki range (HSL hue): 215 = blue, 275 = purple */
  hueFrom?: number;
  hueTo?: number;
  /** Peeche halka blue/purple aurora glow */
  aurora?: boolean;
  /** Skills ke icons (public folder ke SVG/PNG paths), e.g. ["/icons/react.svg"] */
  icons?: string[];
  /** Icon ka size (px). Mobile par khud chhota ho jata hai */
  iconSize?: number;
  /** true = icons blue/purple theme me rang jayen, false = asal brand colors */
  tintIcons?: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  sprite: number;
  phase: number;
  twinkle: number;
  icon?: number;
};

const SPRITE_COUNT = 8;

export default function ParticlesBackground({
  className = "",
  density = 0.00009,
  linkDistance = 130,
  hueFrom = 215,
  hueTo = 275,
  aurora = true,
  icons = [],
  iconSize = 30,
  tintIcons = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const iconKey = icons.join("|");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const isDark = () =>
      document.documentElement.classList.contains("dark") ||
      (!document.documentElement.classList.contains("light") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    let dark = isDark();

    // --- Glow sprites: har rang ka ek chamakta dot, sirf ek dafa banta hai ---
    const SPRITE_SIZE = 64;
    const sprites: HTMLCanvasElement[] = Array.from({ length: SPRITE_COUNT }, (_, i) => {
      const hue = hueFrom + ((hueTo - hueFrom) * i) / (SPRITE_COUNT - 1);
      const s = document.createElement("canvas");
      s.width = s.height = SPRITE_SIZE;
      const g = s.getContext("2d")!;
      const half = SPRITE_SIZE / 2;
      const grad = g.createRadialGradient(half, half, 0, half, half, half);
      grad.addColorStop(0, `hsla(${hue}, 100%, 85%, 1)`);
      grad.addColorStop(0.15, `hsla(${hue}, 95%, 65%, 0.9)`);
      grad.addColorStop(0.45, `hsla(${hue}, 90%, 60%, 0.25)`);
      grad.addColorStop(1, `hsla(${hue}, 90%, 60%, 0)`);
      g.fillStyle = grad;
      g.fillRect(0, 0, SPRITE_SIZE, SPRITE_SIZE);
      return s;
    });

    // --- Skill icons: load + (optional) blue/purple tint, sirf ek dafa ---
    const ICON_PX = 96;
    let cancelled = false;
    const iconCanvases: (HTMLCanvasElement | null)[] = icons.map(() => null);
    const iconHue = (i: number) =>
      hueFrom + ((hueTo - hueFrom) * i) / Math.max(1, icons.length - 1);

    icons.forEach((src, i) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      img
        .decode()
        .then(() => {
          if (cancelled) return;
          const c = document.createElement("canvas");
          c.width = c.height = ICON_PX;
          const g = c.getContext("2d")!;
          const scale = Math.min(ICON_PX / img.naturalWidth, ICON_PX / img.naturalHeight) || 1;
          const w = img.naturalWidth * scale || ICON_PX;
          const h = img.naturalHeight * scale || ICON_PX;
          g.drawImage(img, (ICON_PX - w) / 2, (ICON_PX - h) / 2, w, h);
          if (tintIcons) {
            g.globalCompositeOperation = "source-in";
            g.fillStyle = `hsl(${iconHue(i)}, 95%, ${dark ? 72 : 55}%)`;
            g.fillRect(0, 0, ICON_PX, ICON_PX);
          }
          iconCanvases[i] = c;
          if (!running) render();
        })
        .catch(() => {
          /* icon na mila to bas skip */
        });
    });

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let onScreen = true;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    const link2 = linkDistance * linkDistance;
    const mouseRadius = linkDistance * 1.4;

    function render() {
      ctx!.clearRect(0, 0, width, height);
      const lineAlpha = dark ? 0.35 : 0.45;
      const lightness = dark ? 65 : 55;
      ctx!.lineWidth = 1;

      // Lines (dono particles ke rang ka darmiyana rang)
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < link2) {
            const alpha = (1 - Math.sqrt(d2) / linkDistance) * lineAlpha;
            ctx!.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, ${lightness}%, ${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }

        // Mouse ke qareeb: roshan lines
        const mx = a.x - mouse.x;
        const my = a.y - mouse.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < mouseRadius) {
          ctx!.strokeStyle = `hsla(${a.hue}, 95%, ${lightness + 5}%, ${(1 - md / mouseRadius) * 0.6})`;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.stroke();
        }
      }

      // Glowing dots + skill icons
      const size = isMobile ? iconSize * 0.75 : iconSize;
      for (const p of particles) {
        if (p.icon !== undefined) {
          const c = iconCanvases[p.icon];
          if (!c) continue;
          // Icon ke peeche narm glow
          const halo = size * 2.4;
          ctx!.globalAlpha = dark ? 0.35 : 0.25;
          ctx!.drawImage(sprites[p.sprite], p.x - halo / 2, p.y - halo / 2, halo, halo);
          ctx!.globalAlpha = (dark ? 0.8 : 0.9) + Math.sin(p.phase) * 0.1;
          ctx!.drawImage(c, p.x - size / 2, p.y - size / 2, size, size);
          continue;
        }
        const glow = p.r * 7;
        ctx!.globalAlpha = (dark ? 0.55 : 0.75) + Math.sin(p.phase) * 0.35;
        ctx!.drawImage(sprites[p.sprite], p.x - glow / 2, p.y - glow / 2, glow, glow);
      }
      ctx!.globalAlpha = 1;
    }

    function step() {
      for (const p of particles) {
        // Mouse ke qareeb halka sa door dhakelna
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 6400 && d2 > 0.01) {
          const f = (1 - Math.sqrt(d2) / 80) * 0.06;
          p.vx += dx * f * 0.05;
          p.vy += dy * f * 0.05;
        }

        // Raftaar hamesha narm rahe
        p.vx *= 0.99;
        p.vy *= 0.99;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed < 0.15) {
          p.vx += (Math.random() - 0.5) * 0.05;
          p.vy += (Math.random() - 0.5) * 0.05;
        } else if (speed > 1.8) {
          p.vx = (p.vx / speed) * 1.8;
          p.vy = (p.vy / speed) * 1.8;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.twinkle;

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > width) { p.x = width; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > height) { p.y = height; p.vy = -Math.abs(p.vy); }
      }
    }

    function loop() {
      step();
      render();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (reduceMotion || running || !onScreen || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const max = isMobile ? 40 : 100;
      const count = Math.min(max, Math.round(width * height * density));
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        // Rang left (blue) se right (purple) ki taraf badalta hai
        const t = Math.min(1, Math.max(0, x / (width || 1) + (Math.random() - 0.5) * 0.3));
        const sprite = Math.round(t * (SPRITE_COUNT - 1));
        return {
          x,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() * 1.6 + 1,
          hue: hueFrom + (hueTo - hueFrom) * (sprite / (SPRITE_COUNT - 1)),
          sprite,
          phase: Math.random() * Math.PI * 2,
          twinkle: 0.01 + Math.random() * 0.03,
        };
      });

      // Pehle particles ko skill icons bana do (har icon ek dafa), dheeme chalein
      const iconCount = Math.min(icons.length, particles.length);
      for (let i = 0; i < iconCount; i++) {
        const p = particles[i];
        p.icon = i;
        p.hue = iconHue(i);
        p.sprite = Math.round(((p.hue - hueFrom) / Math.max(1, hueTo - hueFrom)) * (SPRITE_COUNT - 1));
        p.vx *= 0.5;
        p.vy *= 0.5;
        p.twinkle = 0.015;
      }

      if (!running) render();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const themeObserver = new MutationObserver(() => {
      dark = isDark();
      if (!running) render();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (finePointer && !reduceMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    resize();
    start();

    return () => {
      cancelled = true;
      stop();
      resizeObserver.disconnect();
      io.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [density, linkDistance, hueFrom, hueTo, iconKey, iconSize, tintIcons]);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {aurora && (
        <>
          <style>{`
            @keyframes mza-drift-a { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(8%, 6%) scale(1.15); } }
            @keyframes mza-drift-b { 0%,100% { transform: translate(0,0) scale(1.1); } 50% { transform: translate(-8%, -5%) scale(0.95); } }
            .mza-aurora-a { animation: mza-drift-a 18s ease-in-out infinite; }
            .mza-aurora-b { animation: mza-drift-b 22s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) { .mza-aurora-a, .mza-aurora-b { animation: none; } }
          `}</style>
          <div
            className="mza-aurora-a absolute left-[-15%] top-[-25%] h-[80%] w-[60%] rounded-full opacity-40 dark:opacity-50"
            style={{ background: `radial-gradient(closest-side, hsla(${hueFrom}, 95%, 60%, 0.55), transparent)` }}
          />
          <div
            className="mza-aurora-b absolute bottom-[-30%] right-[-10%] h-[85%] w-[60%] rounded-full opacity-40 dark:opacity-50"
            style={{ background: `radial-gradient(closest-side, hsla(${hueTo}, 90%, 62%, 0.55), transparent)` }}
          />
        </>
      )}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

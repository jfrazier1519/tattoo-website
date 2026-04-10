import React, { useCallback, useState } from "react";

const BG_CLASS = [
  "bg-cottage-teal-primary",
  "bg-cottage-green-primary",
  "bg-cottage-sage-primary",
  "bg-cottage-green-hover",
  "bg-cottage-green-secondary",
];

const BLUR_CLASS = ["blur-2xl", "blur-xl", "blur-2xl"];

function randomLightConfig({ delay = 0 } = {}) {
  const wRem = 6 + Math.random() * 6;
  const wVw = 18 + Math.random() * 14;
  return {
    id: Math.random().toString(36).slice(2),
    left: 6 + Math.random() * 88,
    top: 4 + Math.random() * 92,
    width: `min(${wRem.toFixed(1)}rem, ${wVw.toFixed(0)}vw)`,
    duration: 14 + Math.random() * 16,
    delay,
    bg: BG_CLASS[Math.floor(Math.random() * BG_CLASS.length)],
    blur: BLUR_CLASS[Math.floor(Math.random() * BLUR_CLASS.length)],
  };
}

/**
 * One soft fairy light: fades in/out (CSS), then jumps to a new random spot and repeats.
 */
function FairLight({ stagger = 0 }) {
  const [cfg, setCfg] = useState(() =>
    randomLightConfig({ delay: stagger + Math.random() * 2 }),
  );

  const onCycleEnd = useCallback(() => {
    setCfg(randomLightConfig({ delay: 0 }));
  }, []);

  return (
    <div
      key={cfg.id}
      className={`absolute pointer-events-none rounded-full will-change-[opacity] ${cfg.bg} ${cfg.blur} animate-fairy-twinkle`}
      style={{
        left: `${cfg.left}%`,
        top: `${cfg.top}%`,
        transform: "translate(-50%, -50%)",
        width: cfg.width,
        height: cfg.width,
        animationDuration: `${cfg.duration}s`,
        animationDelay: `${cfg.delay}s`,
      }}
      onAnimationEnd={onCycleEnd}
      aria-hidden
    />
  );
}

/**
 * Full-height field of independent fairy lights (home background only).
 */
export function FairyGlowField({ count = 16 }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <FairLight key={i} stagger={i * 0.7} />
      ))}
    </>
  );
}

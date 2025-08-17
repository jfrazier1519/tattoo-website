/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Murder Cottage + Victorian Manor Color Palette
        cottage: {
          // Background colors - warm, rich, atmospheric
          "bg-primary": "#1c1917", // Rich charcoal (stone-900)
          "bg-secondary": "#18181b", // Warm dark (zinc-900)
          "bg-accent": "#0c0a09", // Deep rich black (stone-950)
          "bg-card": "#292524", // Card backgrounds (stone-800)
          "bg-border": "#44403c", // Borders (stone-700)

          // Warm Victorian backgrounds - aged wood, leather, paper
          "bg-warm": "#2d1810", // Aged oak wood
          "bg-leather": "#3d2a1a", // Old leather brown
          "bg-paper": "#2a2318", // Aged parchment
          "bg-velvet": "#1a1410", // Deep velvet burgundy

          // Text colors - warm and readable
          "text-primary": "#fafaf9", // Warm white (stone-50)
          "text-secondary": "#e7e5e4", // Warm light gray (stone-200)
          "text-muted": "#d6d3d1", // Warm medium gray (stone-300)
          "text-subtle": "#a8a29e", // Warm subtle gray (stone-400)
          "text-dim": "#78716c", // Warm dim gray (stone-500)

          // Mossy forest green accents - deeper, more atmospheric
          "green-primary": "#14532d", // Deep moss green (emerald-800)
          "green-secondary": "#064e3b", // Dark forest green (emerald-900)
          "green-accent": "#022c22", // Very dark emerald (emerald-950)
          "green-muted": "#065f46", // Muted forest (emerald-800)
          "green-dark": "#064e3b", // Dark forest (emerald-900)

          // Lighter moss highlights for accents
          "green-light": "#16a34a", // Moss highlight (green-600)
          "green-bright": "#22c55e", // Bright moss accent (green-500)

          // Victorian warm accents - rich, aged, elegant
          "amber-primary": "#d97706", // Warm amber (candlelight)
          "amber-secondary": "#b45309", // Rich amber (aged brass)
          "amber-accent": "#92400e", // Deep amber (old gold)
          "amber-warm": "#f59e0b", // Bright amber (firelight)

          // Rich burgundy and wine tones
          "burgundy-primary": "#7f1d1d", // Deep burgundy
          "burgundy-secondary": "#991b1b", // Rich wine
          "burgundy-accent": "#dc2626", // Bright burgundy accent

          // Aged copper and bronze
          "copper-primary": "#b45309", // Aged copper
          "copper-secondary": "#92400e", // Dark copper
          "copper-accent": "#d97706", // Bright copper

          // Warm cream and ivory
          "cream-primary": "#fef3c7", // Warm cream
          "cream-secondary": "#fde68a", // Light cream
          "cream-accent": "#fbbf24", // Golden cream

          // Hover states - deeper moss tones
          "green-hover": "#15803d", // Hover green (green-700)
          "emerald-hover": "#047857", // Hover emerald (emerald-700)
          "amber-hover": "#b45309", // Hover amber
          "burgundy-hover": "#991b1b", // Hover burgundy
        },
      },
      fontFamily: {
        gothic: ["Cinzel", "serif"],
        elegant: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "cottage-gradient":
          "linear-gradient(to right, var(--tw-gradient-stops))",
        "forest-gradient":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "victorian-gradient":
          "linear-gradient(135deg, var(--tw-gradient-stops))",
        "wood-texture":
          "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E')",
      },
      boxShadow: {
        cottage:
          "0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
        "cottage-lg":
          "0 20px 40px -3px rgba(0, 0, 0, 0.4), 0 8px 12px -2px rgba(0, 0, 0, 0.3)",
        victorian:
          "0 20px 40px -3px rgba(127, 29, 29, 0.2), 0 8px 12px -2px rgba(127, 29, 29, 0.1)",
        gothic:
          "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        flicker: "flicker 3s infinite alternate",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "25%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
          "75%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(217, 119, 6, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(217, 119, 6, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

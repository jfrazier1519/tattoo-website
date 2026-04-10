/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Tattoo Artist Color Palette - Logical Naming
        cottage: {
          // Background colors - dark charcoal (no blue undertones)
          "bg-primary": "#0c0a09", // Deep charcoal (stone-950)
          "bg-secondary": "#1c1917", // Rich charcoal (stone-900)
          "bg-accent": "#0a0a0a", // Pure black
          "bg-card": "#292524", // Card backgrounds (stone-800)
          "bg-border": "#44403c", // Borders (stone-700)
          "bg-paper": "#0f5132", // Sage green for forms

          // Text colors - clean and readable
          "text-primary": "#f8fafc", // Clean white (slate-50)
          "text-secondary": "#e2e8f0", // Light gray (slate-200)
          "text-muted": "#cbd5e1", // Medium gray (slate-300)
          "text-subtle": "#94a3b8", // Subtle gray (slate-400)
          "text-dim": "#64748b", // Dim gray (slate-500)

          // Green accents - professional and elegant
          "green-primary": "#059669", // Professional green (emerald-600)
          "green-secondary": "#047857", // Deep green (emerald-700)
          "green-accent": "#065f46", // Accent green (emerald-800)
          "green-hover": "#047857", // Hover green (emerald-700)
          "emerald-hover": "#065f46", // Hover emerald (emerald-800)
          "green-light": "#10b981", // Light green (emerald-500)

          // Teal accents - modern and fresh (was named amber)
          "teal-primary": "#0d9488", // Teal (teal-600)

          // Sage green variants (was named copper)
          "sage-primary": "#059669", // Sage green
          "sage-secondary": "#047857", // Dark sage

          // Clean cream and mint tones
          "cream-primary": "#ecfdf5", // Mint cream
          "cream-secondary": "#d1fae5", // Light mint
        },
      },
      fontFamily: {
        gothic: ["Cinzel", "serif"],
        elegant: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "cottage-gradient":
          "linear-gradient(to right, var(--tw-gradient-stops))",
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
        /** One-shot opacity twinkle; duration overridden per orb */
        "fairy-twinkle": "fairyTwinkle 22s ease-in-out forwards",
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
        /** Soft fairy-light breathe — opacity only (transform stays on element) */
        fairyTwinkle: {
          "0%": { opacity: "0" },
          "14%": { opacity: "0.11" },
          "32%": { opacity: "0.04" },
          "52%": { opacity: "0.14" },
          "72%": { opacity: "0.06" },
          "90%": { opacity: "0.1" },
          "100%": { opacity: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 8px rgba(13, 148, 136, 0.35)" },
          "100%": { boxShadow: "0 0 28px rgba(13, 148, 136, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

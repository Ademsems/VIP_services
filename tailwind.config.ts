import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        surface: "#0F1117",
        border: {
          DEFAULT: "#1E2230",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#C5A059",
        },
        slate: {
          body: "#94A3B8",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #F4E5B2 50%, #C5A059 100%)",
        "mesh-gold":
          "radial-gradient(ellipse at top left, rgba(212,175,55,0.12), transparent 50%), radial-gradient(ellipse at bottom right, rgba(212,175,55,0.08), transparent 50%)",
      },
      boxShadow: {
        gold: "0 0 30px -5px rgba(212,175,55,0.35)",
        "gold-lg": "0 20px 60px -15px rgba(212,175,55,0.25)",
      },
      animation: {
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        dash: {
          "0%": { strokeDashoffset: "32" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

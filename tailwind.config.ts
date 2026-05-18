import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Terminal palette
        bg: {
          DEFAULT: "#0a0e14",
          raised: "#0d1219",
          deep: "#05070a",
          surface: "#10161f",
        },
        line: {
          DEFAULT: "#1c2330",
          soft: "#161c26",
        },
        ink: {
          DEFAULT: "#d6deeb",
          dim: "#8b97ad",
          mute: "#586174",
        },
        // Accents
        phosphor: {
          DEFAULT: "#7ce38b", // primary green
          glow: "#9dffb0",
          dim: "#3a9a4a",
        },
        amber: {
          DEFAULT: "#ffb454",
          glow: "#ffd28a",
        },
        cyan: {
          DEFAULT: "#5ccfe6",
          glow: "#8ee2f2",
        },
        magenta: {
          DEFAULT: "#f07178",
          glow: "#ff9aa0",
        },
      },
      boxShadow: {
        glow: "0 0 6px rgba(124,227,139,0.28), 0 0 14px rgba(124,227,139,0.08)",
        "glow-amber": "0 0 6px rgba(255,180,84,0.28), 0 0 14px rgba(255,180,84,0.08)",
        "glow-cyan": "0 0 6px rgba(92,207,230,0.28), 0 0 14px rgba(92,207,230,0.08)",
        "glow-ink": "0 0 6px rgba(214,222,235,0.22), 0 0 14px rgba(214,222,235,0.07)",
        "inset-line": "inset 0 0 0 1px #1c2330",
      },
      animation: {
        blink: "blink 1.1s steps(2,start) infinite",
        scan: "scan 8s linear infinite",
        flicker: "flicker 6s infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100%)" } },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "0.99" },
          "20%, 24%, 55%": { opacity: "0.85" },
        },
        fadeIn: { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(124,227,139,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,227,139,0.04) 1px, transparent 1px)",
        "scanlines":
          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 3px)",
      },
    },
  },
  plugins: [],
};
export default config;

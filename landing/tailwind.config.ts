import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        signal: "var(--signal)",
        evidence: "var(--evidence)",
        source: "var(--source)",
        danger: "var(--danger)"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 80px rgba(21, 19, 15, 0.12)",
        lift: "0 18px 50px rgba(31, 138, 91, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;


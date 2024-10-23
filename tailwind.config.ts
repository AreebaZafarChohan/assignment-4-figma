import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "var(--customPink)",
        customBlue: "var(--customBlue)",
      },
      fontFamily: {
        heebo: ["heebo", "serif", "sans-serif"],
        inter: ["inter", "sans-serif"]
      },
      boxShadow: {
        "customShadow": "0 4px 4px 0 #4141418a",
      },
    },
  },
  plugins: [],
};
export default config;

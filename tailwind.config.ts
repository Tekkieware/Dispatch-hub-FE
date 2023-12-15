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
        primary: "#F26A3B",
        "gray-light": "#F3F3F3",
      },
      fontFamily: {
        "josefin-sans": ["var(--font-josefin-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "home-hero": "url('/images/d413184df2951eeb3347696718cc9f30.png')",
        "about-us": "url('/images/675eaf4a86a8b867c8d3835005ece59a.png')",
        "support-hero": "url('/images/fb5082cd8f916a07761ce35d94431d23.png')",
        "dispatch-hub-hero":
          "url('/images/8d3f04f215ecdd21ca7f674cdfe61b16.png')",
        download: "url('/images/566f19ed9358ecc89af4777511afca0c.png')",
      },
    },
  },
  plugins: [],
};
export default config;

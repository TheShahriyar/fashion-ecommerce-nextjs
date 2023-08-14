import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["var(--font-open-sans)"],
        jost: ["var(--font-jost)"],
      },
      colors: {
        primary: {
          light: "#38ef7d",
          DEFAULT: "#25c486",
          dark: "#11998e",
        },
        title: "#222222",
        text: "#777777",
      },
    },
  },
  plugins: [],
};
export default config;

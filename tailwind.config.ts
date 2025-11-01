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
        'brand-orange': '#EA580C', // A deep orange from your design
        'brand-orange-light': '#FFF7ED', // The light orange for buttons/backgrounds
        'brand-dark': '#111827', // The primary dark text color
        'brand-gray': '#6B7280', // For secondary text
      },
    },
  },
  plugins: [],
};
export default config;
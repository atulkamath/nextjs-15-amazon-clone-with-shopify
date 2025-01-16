import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "amazon-blue": "#232F3E",
        "amazon-light-blue": "#37475A",
        "amazon-yellow": "#fcbb6a",
        "amazon-orange": "#f19c39",
        "amazon-link": "#007185",
        "amazon-dark-blue": "#131921",
      },
    },
  },
  plugins: [],
} satisfies Config;

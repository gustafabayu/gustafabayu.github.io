/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        paper: "#FFF6E8",
        pink: "#FF3EA5",
        blue: "#1E4FFF",
        yellow: "#FFD22A",
        ink: "#17243A",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"],
        mono: [
          "var(--font-geist-mono)",
          "Menlo",
          "Monaco",
          "Courier New",
          "monospace",
        ],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

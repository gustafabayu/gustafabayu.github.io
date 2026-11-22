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
        bg: "#F2F3EF",
        surface: "#FFFFFF",
        ink: "#1F2421",
        muted: "#626963",
        border: "#D8DDD7",
        accent: "#2F6B50",
        "dark-surface": "#E8ECE7",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
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

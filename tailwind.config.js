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
        bg: "#F7F6F2",
        surface: "#FFFFFF",
        ink: "#202321",
        muted: "#747870",
        border: "#DCDDD5",
        accent: "#426B57",
        "dark-surface": "#ECEDE7",
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "Inter",
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

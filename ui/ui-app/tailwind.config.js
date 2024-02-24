/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: "#377D9F",
        "highlight-light": "#D9EDF7",
        "success-button": "#5BB85B",
        "cancel-button": "#FF4240",
        "highlight-bg": "#F5F5F5",
        "highlight-border-light": "#EEEEEE",
        "highlight-border": "#DCDCDC",
        "primary-bg": "#FFFFFF",
        "primary-text": "#000000",
        "loading-button": "#FFD700",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        base: "0.95rem",
        small: "0.875rem",
        large: "1.125rem",
        huge: "1.25rem",
      },
    },
  },
  plugins: [],
};

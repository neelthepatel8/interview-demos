/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
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

        // Dark mode
        "dark-bg": "#212f38",
        "dark-accent": "#2D3748",
        "dark-accent-bg": "#36434b",
        "dark-accent-bg-light": "#4d5860",
        "dark-text": "#FFFFFF",
        "dark-border": "#2D3748",
        "dark-hightlight-text": "#7fa7be",
        "success-button-dark": "#a8d8a3",
        "cancel-button-dark": "#ff5e53",
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

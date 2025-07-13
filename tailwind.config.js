/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e56a15",
        dark: "#1a1a1a",
        light: "#f8f9fa",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(45deg, #e56a15, #ff8c00)",
        "hero-img": ["./public/images/webp/hero_bg_img.webp"],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

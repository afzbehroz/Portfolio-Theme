// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      colors: {
        "custom-blue": "#123456",
      },
    },
  },
  plugins: [],
};

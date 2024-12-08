/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "stemmer-pattern": "url('src/assets/fidel.png')",
        "stemmer-pattern2": "url('src/assets/fedelat.png')",
        "stemmer-pattern3": "url('src/assets/fidel2.png')",
      },
    },
  },
  plugins: [],
};

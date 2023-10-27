/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          marron: "#412512",
          quesito: "#df9a39",
          chanchito: "#ecd0b8",
          green: "#28a745",
          teal: "#20c997",
          cyan: "#17a2b8",
          ligth: "#f1efdd",
          tomate: "#e54424"
        }
      }
    }
  },
  plugins: []
};


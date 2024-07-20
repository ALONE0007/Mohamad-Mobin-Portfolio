/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "0.5rem",
    },
    extend: {
      colors: {
        'html-color' : '#D9EEE1',
        'css-color' : '#FFF4A3',
        'javascript-color' : '#282A35',
        "python-color" : "#F3ECEA",
        "sql-color" : "#96D4D4",
      },
      fontFamily: {
        "poppins": "Poppins",
        "vazir" : "Vazir",
      },
    },
  },
  plugins: [],
};

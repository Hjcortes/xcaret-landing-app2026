/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta aproximada de la referencia: ajustar con los valores del Figma
        xcaret: {
          blue: "#1565c0",
          "blue-light": "#1976d2",
          "blue-dark": "#0d47a1",
          coral: "#ff6b6b",
          yellow: "#ffe45c",
          lime: "#b6f04d",
          gray: "#e9e9e9",
          ink: "#1b1b1b",
        },
      },
      fontFamily: {
        display: ['"quicksand"', '"Nunito"', "system-ui", "sans-serif"],
        body: ['"Poppins"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1100px",
      },
    },
  },
  plugins: [],
};

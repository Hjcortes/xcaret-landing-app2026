// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig(({ command }) => {
//   return {
//     // Si estás en desarrollo usa "/", si estás compilando para producción (build) usa la ruta de GitHub
//     base: command === "serve" ? "/" : "/xcaret-landing-app2026/",
//     plugins: [react()],
//   };
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/xcaret-landing-app2026/" : "/",
  plugins: [react()],
});
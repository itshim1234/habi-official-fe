import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  server: {
    port: 5175,
    host:true,
     allowedHosts: ['all'],
  },

  plugins: [
    react(),
    Sitemap({
      hostname: "https://habi.one",
      dynamicRoutes: [
        "/",
        "/Construction-Cost-Calculator",
        "/baap",
        "/privacy-policy",
        "/terms-and-condition",
        "/blogs",
        "/login",
        "/admin",
      ],
      generateRobotsTxt: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          chart: ["chartjs", "react-chartjs-2"],
          motion: ["framer-motion", "lottie-react"],
          pdf: ["@react-pdf/renderer", "pdf-lib", "html2canvas", "html2pdf.js"],
          styled: ["styled-components", "react-helmet"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});

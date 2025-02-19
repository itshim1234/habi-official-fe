import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
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
      ],
      generateRobotsTxt: true, // ✅ Automatically generates robots.txt
      robotsTxtOptions: {
        policies: [{ userAgent: "*", allow: "/" }],
        sitemap: "https://habi.one/sitemap.xml",
      },
    }),
  ],
});

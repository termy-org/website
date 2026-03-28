import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";
import { llmsTxtPlugin } from "./vite-plugin-llms-txt";

export default defineConfig({
  plugins: [
    tanstackRouter({
      quoteStyle: "double",
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    llmsTxtPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // React ecosystem
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react";
          }
          // Router
          if (id.includes("node_modules/@tanstack/react-router") || id.includes("node_modules/@tanstack/router-")) {
            return "vendor-router";
          }
          // Query
          if (id.includes("node_modules/@tanstack/react-query")) {
            return "vendor-query";
          }
          // Markdown
          if (id.includes("node_modules/react-markdown") || id.includes("node_modules/rehype-")) {
            return "vendor-markdown";
          }
          // Motion
          if (id.includes("node_modules/framer-motion")) {
            return "vendor-motion";
          }
          // Charts
          if (id.includes("node_modules/recharts") || id.includes("node_modules/d3-")) {
            return "vendor-charts";
          }
          // UI components and utilities
          if (id.includes("node_modules/radix-ui") || id.includes("node_modules/lucide-react")) {
            return "vendor-ui";
          }
        },
      },
    },
  },
  server: {
    proxy: {
      "/theme-api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        rewrite: (routePath) => routePath.replace(/^\/theme-api/, ""),
      },
      "/api": "http://localhost:3000",
    },
  },
});

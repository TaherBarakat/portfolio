import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Set the base path to './'
  build: {
    outDir: "dist", // Default output directory, adjust if necessary
    assetsDir: "assets", // Ensure assets are placed in an 'assets' directory
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
});

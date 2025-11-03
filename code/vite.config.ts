import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    ...(command === "build" ? [viteCompression()] : []),
  ],
}));
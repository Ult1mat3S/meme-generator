import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const hash = Math.floor(Math.random() * 90000) + 10000;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/meme-generator/",
  server: {
    open: true,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`,
      },
    },
    emptyOutDir: true,
  },
});

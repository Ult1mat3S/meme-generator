import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/meme-generator/",
  server: {
    open: true,
  },
  plugins: [react()],
  build: {
    emptyOutDir: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["chunk-REFQX4J5.js", "chunk-373CG7ZK.js"],
  },
});

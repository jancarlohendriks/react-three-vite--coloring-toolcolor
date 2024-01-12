import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// import glsl from "vite-plugin-glsl";

// This is required for Vite to work correctly with CodeSandbox
const server = process.env.APP_ENV === "sandbox" ? { hmr: { clientPort: 443 } } : {};

// https://vitejs.dev/config/
export default defineConfig({
  server: server,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});

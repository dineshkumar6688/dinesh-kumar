import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/dinesh-kumar",
  // assetsInclude: ["**/*.html"],
  plugins: [react()],
});

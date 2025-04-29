/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // very important for React tests
    setupFiles: "./src/test/setup.ts", // (we'll create it)
  },
});

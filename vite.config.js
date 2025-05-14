import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc", // If you're using styled-components
      // OR if you're using emotion, make sure not aliased incorrectly
    },
  },
});

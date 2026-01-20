import { resolve } from "path";
import { defineConfig } from "vite";

/**
 * vite 配置
 */
export default defineConfig({
  server: {
    host: true,
    port: 5000,
    open: true,
  },
  resolve: {
    alias: {
      "~": resolve("./"),
      "@": resolve("./src"),
    },
  },
});

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  base: "/gnesl-portfolio-website/",
  build: {
    target: "es2020",
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ["gsap", "gsap/ScrollTrigger"],
          vendor: ["lenis", "vanilla-tilt", "svelte-carousel"],
        },
      },
    },
  },
});

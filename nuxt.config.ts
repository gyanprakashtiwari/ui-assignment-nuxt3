// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});

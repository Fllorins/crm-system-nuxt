// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    '@pinia/nuxt',
  ],
  shadcn: {
    prefix: 'Ui',

    componentDir: './components/ui',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
});

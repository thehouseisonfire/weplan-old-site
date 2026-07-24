// https://nuxt.com/docs/api/configuration/nuxt-config
//
// clarity: need key, initial consent on application dashboard
// gtm: need key, manual usage so initial consent from there??
// gtag: need key, initial consent API
export default defineNuxtConfig({
  devtools: { enabled: false },

  // bootstrapVueNext: {
  //   plugin: {
  //     components: {
  //       // BLink: {
  //       //   routerComponentName: 'NuxtLink',
  //       // },
  //       BImg: {
  //         tag: 'NuxtImg',
  //       },
  //     },
  //   },
  // },

  // given that the app has a PWA with caching, this is here
  // so the browser does not try to fetch that cache on port 3000

  // devServer: {
  //   port: 8000
  // },

  ssr: true,

  nitro: {
    compressPublicAssets: { gzip: false, brotli: true },
  },

  // debug mode is *crazy* man, but might be useful
  // debug: true,

  experimental: {
    viewTransition: true,
    typedPages: true,
  },

  app: {
    head: {
      title: 'Weplan | Móveis Planejados',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'A Weplan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
        },
        {
          key: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.weplan.com.br/',
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Weplan | Móveis Planejados',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://weplan.com.br/images/equipe-reuniao-weplan.webp',
        },
        {
          key: 'twitter:site',
          name: 'twitter:site',
          content: 'Weplan | Móveis Planejados',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content:
            'A Weplan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          key: 'og:url',
          name: 'og:url',
          content: 'https://www.weplan.com.br/',
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Weplan | Móveis Planejados',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://weplan.com.br/images/equipe-reuniao-weplan.webp',
        },
        {
          key: 'og:site_name',
          name: 'og:site_name',
          content: 'Weplan | Móveis Planejados',
        },
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'og:description',
          name: 'og:description',
          content:
            'A Weplan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
        },
      ],
    },
  },

  image: {
    format: ['webp', 'jpg'],
  },

  robots: {
    allow: '/',
  },

  // this dependency is good because it already downloads the fonts locally by default (no fetching at runtime)
  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
    display: 'swap', // don't block, swap when loaded
  },

  runtimeConfig: {
    public: {
      gtag: {
        id: process.env.GTAG_ID,
        initMode: 'manual', // don't even load without consent (perf)
        loadingStrategy: 'defer', // doesn't block page load
        initCommands: [
          // Setup up consent mode
          [
            'consent',
            'default',
            {
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500,
            },
          ],
        ],
      },
      facebook: {
        pixelId: process.env.PIXEL_ID,
        autoPageView: true,
        disabled: true,
        debug: true,
      },
    },
  },

  modules: [
    '@nuxtjs/robots',
    '@bootstrap-vue-next/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt3-meta-pixel',
    'nuxt-gtag',
    'nuxt-clarity-analytics',
  ],

  css: ['bootstrap/dist/css/bootstrap.min.css', 'assets/styles/main.css'],

  compatibilityDate: '2026-07-24',
  site: {
    name: 'WePlan | Móveis Planejados',
    url: 'https://www.weplan.com.br',
  },
})

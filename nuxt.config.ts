// https://nuxt.com/docs/api/configuration/nuxt-config
//
// clarity: need key, initial consent on application dashboard
// gtm: need key, manual usage so initial consent from there??
// gtag: need key, initial consent API
export default defineNuxtConfig(
  {
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

    ssr: false,

    nitro: {
      compressPublicAssets: { gzip: false, brotli: true },
    },

    // debug mode is *crazy* man, but might be useful
    // debug: true,

    // mostly perf, check if they are already stabilized from time to time
    experimental: {
      // componentIslands: true,
      viewTransition: true,
      payloadExtraction: true,
      renderJsonPayloads: true,
      typedPages: true,
    },

    app: {
      head: {
        title: 'WePlan | Móveis Planejados',
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
              'A WePlan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
          },
          {
            key: 'twitter:url',
            name: 'twitter:url',
            content: 'https://www.weplan.com.br/'
          },
          {
            key: 'twitter:title',
            name: 'twitter:title',
            content: 'WePlan | Móveis Planejados'
          },
          {
            key: 'twitter:image',
            name: 'twitter:image',
            content: 'https://weplan.com.br/images/equipe-reuniao-weplan.webp',
          },
          {
            key: 'twitter:site',
            name: 'twitter:site',
            content: 'WePlan | Móveis Planejados'
          },
          {
            key: 'twitter:description',
            name: 'twitter:description',
            content:
              'A WePlan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
          },
          {
            key: 'twitter:card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            key: 'og:url',
            name: 'og:url',
            content: 'https://www.weplan.com.br/'
          },
          {
            key: 'og:title',
            name: 'og:title',
            content: 'WePlan | Móveis Planejados'
          },
          {
            key: 'og:image',
            name: 'og:image',
            content: 'https://weplan.com.br/images/equipe-reuniao-weplan.webp',
          },
          {
            key: 'og:site_name',
            name: 'og:site_name',
            content: 'WePlan | Móveis Planejados'
          },
          {
            key: 'og:type',
            name: 'og:type',
            content: 'website'
          },
          {
            key: 'og:description',
            name: 'og:description',
            content:
              'A WePlan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
          },
        ],
      },
    },

    image: {
      dir: 'public/',
      format: ['webp', 'jpg'],
    },

    robots: {
      UserAgent: '*',
      Disallow: '',
    },

    // this dependency is good because it already downloads the fonts locally by default (no fetching at runtime)
    googleFonts: {
      families: {
        Poppins: {
          wght: [
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
          ],
          ital: [
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900,
          ],
        },
      },
      display: 'swap', // don't block, swap when loaded
    },

    runtimeConfig: {
      public: {
        gtag: {
          id: process.env.GTAG_ID,
          enabled: false, // don't even load without consent (perf)
          loadingStrategy: 'defer', // doesn't block page load
          initCommands: [
            // Setup up consent mode
            ['consent', 'default', {
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              ad_storage: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500,
            }]
          ]
        },
        // gtm: {
        //   id: process.env.GTM_ID,
        //   // queryParams: {
        //   //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
        //   //   gtm_preview: 'env-4',
        //   //   gtm_cookies_win: 'x',
        //   // },
        //   defer: true,
        //   compatibility: false, // IE stuff?
        //   nonce: '2726c7f26c',
        //   enabled: false,
        //   debug: false,
        //   loadScript: true,
        //   enableRouterSync: true,
        //   ignoredViews: [],
        //   trackOnNextTick: false,
        //   devtools: false,
        // },
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
      // '@zadigetvoltaire/nuxt-gtm',
      'nuxt-clarity-analytics',
    ],

    css: [
      'bootstrap/dist/css/bootstrap.min.css',
      'assets/styles/main.css'
    ],

    compatibilityDate: '2024-07-02'
  })

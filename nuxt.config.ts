// https://nuxt.com/docs/api/configuration/nuxt-config
//
// clarity: need key, initial consent on application dashboard
// gtm: need key, manual usage so initial consent from there??
// gtag: need key, initial consent API
export default defineNuxtConfig(
  {
    devtools: { enabled: false },

    // devServer: {
    //   port: 8000
    // },

    ssr: true,
    // debug: true,

    experimental: {
      // viewTransition: true,
      payloadExtraction: true,
      renderJsonPayloads: true,
      typedPages: true,
    },
    app: {
      head: {
        title: 'WePlan | Móveis Planejados',
        htmlAttrs: {
          lang: 'pt-br',
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content:
              'A WePlan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
          },
          {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: 'https://www.weplan.com.br/'
          },
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: 'WePlan | Móveis Planejados'
          },
          {
            hid: 'twitter:image',
            name: 'twitter:image',
            content:
              'https://www.weplan.com.br/_nuxt/img/equipe-reuniao-weplan.webp',
          },
          {
            hid: 'twitter:site',
            name: 'twitter:site',
            content: 'WePlan | Móveis Planejados'
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content:
              'A WePlan nasceu para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://www.weplan.com.br/'
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: 'WePlan | Móveis Planejados'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content:
              'https://www.weplan.com.br/_nuxt/img/equipe-reuniao-weplan.webp',
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: 'WePlan | Móveis Planejados'
          },
          {
            hid: 'og:type',
            name: 'og:type',
            content: 'website'
          },
          {
            hid: 'og:description',
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
    // this dependency is good because it already downloads the fonts by default
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
      display: 'swap',
    },

    runtimeConfig: {
      public: {
        gtag: {
          id: process.env.GTAG_ID,
          enabled: false,
          loadingStrategy: 'defer',
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
        gtm: {
          id: process.env.GTM_ID,
          // queryParams: {
          //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          //   gtm_preview: 'env-4',
          //   gtm_cookies_win: 'x',
          // },
          defer: true,
          compatibility: false,
          nonce: '2726c7f26c',
          enabled: false,
          debug: false,
          loadScript: true,
          enableRouterSync: true,
          ignoredViews: [],
          trackOnNextTick: false,
          devtools: false,
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
      '@zadigetvoltaire/nuxt-gtm',
      'nuxt-clarity-analytics',
    ],

    css: [
      'bootstrap/dist/css/bootstrap.min.css',
      'assets/styles/main.css'
    ],
  })

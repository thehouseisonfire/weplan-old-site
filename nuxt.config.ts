// https://nuxt.com/docs/api/configuration/nuxt-config
//
// clarity: need key, initial consent on application dashboard
// gtm: need key, manual usage so initial consent from there??
// gtag: need key, initial consent API
export default defineNuxtConfig(
  {
    devtools: { enabled: false },
    srr: true,
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



    gtag: {
      initialConsent: false,
      loadingStrategy: 'defer',
      // Additional configuration for the Google Analytics 4 property
      // config: {
      //   page_title: 'My Custom Page Title'
      // },
    },

    facebook: {
      autoPageView: true,
      disabled: true,
      debug: true,
    },

    runtimeConfig: {
      public: {
        gtag: {
          id: ''
        },
        gtm: {
          id: '',
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
          pixelId: '',
        },
      },
    },

    gtm: {
      id: 'GTM-MVBMH9X', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
      // queryParams: {
      //   // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
      //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      //   gtm_preview: 'env-4',
      //   gtm_cookies_win: 'x',
      // },
      // GOOGLE_TAG_MANAGER_ID="GTM-MVBMH9X"
      defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
      compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
      nonce: '2726c7f26c', // Will add `nonce` to the script tag
      enabled: false, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: false, // Whether or not display console logs debugs (optional)
      loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
      enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
      ignoredViews: [], // Don't trigger events for specified router names (optional)
      trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
      devtools: false, // (optional)
    },

    modules: [
      '@nuxtjs/robots',
      '@bootstrap-vue-next/nuxt',
      '@nuxt/image',
      '@nuxtjs/google-fonts',
      'nuxt3-meta-pixel',
      'nuxt-gtag',
      '@zadigetvoltaire/nuxt-gtm',
      // 'nuxt-clarity-analytics',
    ],

    css: [
      'bootstrap/dist/css/bootstrap.min.css',
      'assets/styles/main.css'
    ],
  })

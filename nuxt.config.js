export default {
  head: {
    title: 'WePlan | Móveis Planejados',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'description',
        content:
          'A WePlan é uma startup que conecta clientes à indústrias através de escritórios com a nossa solução. Nascemos para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
      },
      { property: 'twitter:url', content: 'https://www.weplan.com.br/' },
      { property: 'twitter:title', content: 'WePlan | Móveis Planejados' },
      {
        property: 'twitter:image',
        content:
          'https://www.weplan.com.br/_nuxt/img/equipe-reuniao-weplan.webp',
      },
      { property: 'twitter:site', content: 'WePlan | Móveis Planejados' },
      {
        property: 'twitter:description',
        content:
          'A WePlan é uma startup que conecta clientes à indústrias através de escritórios com a nossa solução. Nascemos para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
      },
      { name: 'twitter:card', content: 'summary' },
      { property: 'og:url', content: 'https://www.weplan.com.br/' },
      { property: 'og:title', content: 'WePlan | Móveis Planejados' },
      {
        property: 'og:image',
        content:
          'https://www.weplan.com.br/_nuxt/img/equipe-reuniao-weplan.webp',
      },
      { property: 'og:site_name', content: 'WePlan | Móveis Planejados' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content:
          'A WePlan é uma startup que conecta clientes à indústrias através de escritórios com a nossa solução. Nascemos para ser um relevante ecossistema no setor moveleiro. Conectamos todas as pontas da operação em um mesmo lugar, cuidando e abrindo cada detalhe para entregar as melhores soluções aos nossos clientes.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

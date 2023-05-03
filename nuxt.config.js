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
          'https://www.weplan.com.br/_nuxt/img/equipe-reuniao-weplan.jpg',
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
          'https://www.weplan.com.br/_nuxt/img/equipe-reuniao-weplan.jpg',
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
    ],
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

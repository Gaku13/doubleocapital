
module.exports = {
  generate: {
    fallback: true
  },
  mode: 'spa',
  head: {
    title: 'Double O Capital Ltd.',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://double-o.jp'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Double O Capital Ltd.'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://double-o.jp/og-image.png'
      }, {
        name: 'application-name',
        content: 'Double O Capital Ltd.'
      },
      { name: "msapplication-TileColor", content: "#E60012" },
      { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "theme-color", content: "#E60012" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", type: "image/png", href: "/android-chrome-256x256.png", sizes: "256x256" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#231815" },
      { rel: "shortcut icon", href: "/favicon.ico" }
    ]
  },
  //loading: false,
  loading: {
    color: '#E60012',
    height: '2px',
    throttle: 0
  },
  css: [
    // 'modern-normalize/modern-normalize.css',
    '~/assets/css/style.styl'
  ],
  plugins: [
    {
      src: '~/plugins/vue-parallax-js',
      ssr: false
    }, '~/plugins/scroll', '~/plugins/vue-scrollto', '~/plugins/i18n'
  ],
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    'nuxt-agile',
    [
      '@nuxtjs/google-analytics', {
        id: ''
      }
    ],
    [
      'nuxt-i18n', {
        parsePages: false,
        locales: [
          {
            code: 'ja', iso: 'ja_JP'
          }, {
            code: 'en', iso: 'en-US'
          }
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja'
        },
        vueI18nLoader: true
      }
    ]
  ],
  styleResources: {
    stylus: './assets/css/_variables.styl'
  },/*
  build: extend = function(config, ctx) {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    return pass;
  }*/
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    }
  }
};

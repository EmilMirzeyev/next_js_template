module.exports = {
  reactStrictMode: false,
  swcMinify: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['tested.codemode.az'],
    formats: ['image/avif', 'image/webp']
  },

  publicRuntimeConfig: {
    staticFolder: '/static',
  },

  axios: {
    baseURL: "https://jsonplaceholder.typicode.com"
  },

  i18n: {
    locales: ["az", "en", "ru"],
    defaultLocale: 'az',
    localeDetection: false,
    prefix: '',
    directory: './locales'
  }
};

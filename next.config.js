module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-GB', 'es-ES'],
    defaultLocale: 'en-GB',
    localeDetection: false,
    domains: [
      {
        domain: 'carlosgm.com',
        defaultLocale: 'en-GB',
      },
      {
        domain: 'carlosgm.es',
        defaultLocale: 'es-ES',
      },
    ],
  },
};

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-GB', 'es-ES'],
    defaultLocale: 'en-GB',
    localeDetection: false,
    domains: [
      {
        domain: 'www.carlosgm.com',
        defaultLocale: 'en-GB',
      },
      {
        domain: 'www.carlosgm.es',
        defaultLocale: 'es-ES',
      },
    ],
  },
};

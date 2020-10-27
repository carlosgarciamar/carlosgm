require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `CarlosGM`,
    description: `Just a software engineer writing about Human-Computer Interaction, development practices, JavaScript development and other stuff...`,
    descripcion: 'Un blog sobre ingeniería software, Interacción Persona-Ordenador, JavaScript y alguna que otra cosa...',
    author: `Carlos Garcia Martin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        'excerpt_separator': '<!-- start -->',
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-behead`,
            options: {
              depth: 2,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          { family: `Permanent Marker` },
          { family: `Overpass` },
        ],
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `carlosgm`,
        short_name: `carlosgm`,
        start_url: `/`,
        background_color: `#D84B39`,
        theme_color: `#D84B39`,
        display: `minimal-ui`,
        icon: `src/images/carlosgm-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

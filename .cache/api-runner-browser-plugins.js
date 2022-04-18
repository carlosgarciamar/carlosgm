module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"carlosgm","short_name":"carlosgm","start_url":"/","background_color":"#D84B39","theme_color":"#D84B39","display":"minimal-ui","icon":"src/images/carlosgm-icon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

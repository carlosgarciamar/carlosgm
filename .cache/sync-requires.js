const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/carlos.garciamartin/Development/carlosgm/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/carlos.garciamartin/Development/carlosgm/src/pages/404.js"))),
  "component---src-pages-all-posts-js": hot(preferDefault(require("/Users/carlos.garciamartin/Development/carlosgm/src/pages/all-posts.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/carlos.garciamartin/Development/carlosgm/src/pages/index.js")))
}


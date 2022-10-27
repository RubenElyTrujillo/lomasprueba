const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  images:{
    domains: [
      'cdn.sanity.io'
    ]
  }
});

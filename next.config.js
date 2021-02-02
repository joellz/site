const path = require('path')

module.exports = {
  poweredByHeader: false,
  distDir: 'build',

  webpack: config => {
    config.module.rules.push({
      test: /\.module\.scss/,
      use: [
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve('src/sass/fonts.scss'),
              path.resolve('src/sass/mixins.scss'),
              path.resolve('src/sass/variables.scss')
            ]
          }
        }
      ]
    })
    return config
  }
}
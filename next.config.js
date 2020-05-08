const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    }),
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
      'file-loader'
    ]
    })
    return config
  },
})
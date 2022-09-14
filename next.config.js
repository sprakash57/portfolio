const path = require('path');

module.exports = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'dev-to-uploads.s3.amazonaws.com',
      'avatars.githubusercontent.com',
      'i.ibb.co'
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "mixins.scss";`
  },
  experimental: { 
    images: { 
      allowFutureImage: true 
    } 
  }
}

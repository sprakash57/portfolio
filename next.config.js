module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'dev-to-uploads.s3.amazonaws.com',
      'www.codewars.com',
      'avatars.githubusercontent.com',
      'i.ibb.co'
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  }
}

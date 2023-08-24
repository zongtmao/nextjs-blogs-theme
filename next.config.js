/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/nextm',
  productionBrowserSourceMaps: false,
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },

};

module.exports = nextConfig;

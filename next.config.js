/** @type {import('next').NextConfig} */
const nextConfig = {
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

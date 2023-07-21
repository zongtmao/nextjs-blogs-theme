/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

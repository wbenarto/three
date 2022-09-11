/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // distDir: "build",
};

module.exports = nextConfig;

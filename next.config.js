/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  assetPrefix: '/', // Add leading slash
  images: {
    unoptimized: true, // Required for static export
    domains: ['github.com', 'linkedin.com', 'twitter.com']
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig;

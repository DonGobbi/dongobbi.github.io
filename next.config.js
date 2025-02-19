/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  basePath: '', // Remove basePath for root domain
  images: {
    unoptimized: true, // Required for static export
    domains: ['github.com', 'linkedin.com', 'twitter.com']
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // This is important for GitHub Pages
  assetPrefix: './'
}

module.exports = nextConfig

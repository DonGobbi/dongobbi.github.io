/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable basePath since we're deploying to the root domain
  // basePath: '',
  // Remove assetPrefix to let Next.js handle it
  reactStrictMode: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Disable basePath since we're deploying to the root domain
  basePath: '',
}

module.exports = nextConfig

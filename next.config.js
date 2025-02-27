/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Disable basePath since we're deploying to the root domain
  basePath: '',
  env: {
    NEXT_PUBLIC_FORMSPREE_ENDPOINT: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static export
  images: {
    unoptimized: true, // Fixes image issues on GitHub Pages
  },
  basePath: "/dongobbi.github.io", // Your GitHub repo name
  assetPrefix: "/dongobbi.github.io/",
};

module.exports = nextConfig;

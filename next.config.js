/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dpv-offshore-redesign-2', // Must match your GitHub repo name exactly
  assetPrefix: '/dpv-offshore-redesign-2/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
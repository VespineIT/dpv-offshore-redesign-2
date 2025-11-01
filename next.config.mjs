/** @type {import('next').NextConfig} */

// The name of your GitHub repository
const repo = 'dpv-offshore-redesign-2';

const nextConfig = {
  // 1. Set the output to 'export' for a static site
  output: 'export',

  // 2. Set the base path to your repo name
  basePath: `/${repo}`,

  // 3. Set the asset prefix to your repo name
  assetPrefix: `/${repo}/`,

  // 4. Disable image optimization (required for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

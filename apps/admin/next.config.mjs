/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  assetPrefix: '/admin-static',
  transpilePackages: ['@workspace/ui', '@workspace/theme'],
};

export default nextConfig;

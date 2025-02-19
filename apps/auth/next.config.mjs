/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  assetPrefix: '/auth-static',
  transpilePackages: ['@workspace/ui', '@workspace/theme'],
};

export default nextConfig;

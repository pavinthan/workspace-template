import type { NextConfig } from 'next';
import type { Rewrite } from 'next/dist/lib/load-custom-routes';

import { rewrites } from './rewrites';

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@workspace/ui', '@workspace/theme'],
  async rewrites() {
    return Object.keys(rewrites).reduce((carry: Rewrite[], path: string) => {
      const domain = rewrites[path];

      return carry.concat([
        {
          source: `${path}`,
          destination: `${domain}/`,
        },
        {
          source: `${path}/:path+`,
          destination: `${domain}/:path+`,
        },
        {
          source: `${path}-static/_next/:path+`,
          destination: `${domain + path}-static/_next/:path+`,
        },
      ]);
    }, []);
  },
};

export default nextConfig;

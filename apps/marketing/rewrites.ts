export const rewrites: Record<string, string> = {
  '/auth': process.env.AUTH_DOMAIN ?? 'http://localhost:3001',
  '/admin': process.env.ADMIN_DOMAIN ?? 'http://localhost:3002',
};

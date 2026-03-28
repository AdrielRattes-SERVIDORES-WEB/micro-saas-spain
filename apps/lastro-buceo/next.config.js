/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@saas/ui', '@saas/db'],
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
module.exports = nextConfig

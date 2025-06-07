/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['placeholder.svg'],
  },
  // Remove output: 'export' to let Vercel handle the build process
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

export default nextConfig

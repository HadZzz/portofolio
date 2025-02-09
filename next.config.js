/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true
}

module.exports = nextConfig 
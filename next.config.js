/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/js/feasible.js',
        destination: 'https://plausible.io/js/script.js'
      },
      {
        source: '/api/event',
        destination: 'https://plausible.io/api/event'
      }
    ];
  }
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

module.exports = withPWA(nextConfig)

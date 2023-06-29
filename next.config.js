/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'atctpwmqlndnpmrxwsds.supabase.co',
        pathname: '/**',
      },
    ],
  },
}
const withTM = require('next-transpile-modules')(['gsap']);


module.exports = withTM(nextConfig);

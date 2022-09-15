/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  transpile: ['gsap'],

  images: {
    domains: [
      'res.cloudinary.com'
    ],
  },
}

module.exports = nextConfig

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  env: {
    STRAPI_API: process.env.STRAPI_API,
    STRAPI_URL: process.env.STRAPI_URL,
    STRAPI_BASE: process.env.STRAPI_BASE,
    SITE_URL: process.env.SITE_URL, 
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
}

export default nextConfig

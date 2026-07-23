import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Exclude nodemailer from bundling — it uses native Node.js modules (fs, net, path)
  // that can't be statically analyzed by Next.js during build
  serverExternalPackages: ['nodemailer', 'isomorphic-dompurify'],
  allowedDevOrigins: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : undefined,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: '8888',
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "parsec.stellarsolutions.md",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
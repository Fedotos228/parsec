import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
    ],
    unoptimized: true,
  },
}

export default nextConfig
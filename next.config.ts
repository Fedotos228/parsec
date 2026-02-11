import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
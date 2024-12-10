import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {}, // Pode ser removido se não tiver outros experimentos
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http2.mlstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

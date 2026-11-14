import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline the (small, atomic) Tailwind CSS into <head>: removes the only render-blocking request.
  experimental: { inlineCss: true },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn-images-1.medium.com", pathname: "/**" }],
  },
};

export default nextConfig;

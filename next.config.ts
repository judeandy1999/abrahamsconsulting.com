import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30
  },
  async redirects() {
    return [
      {
        source: "/consulting-service",
        destination: "/consulting-services",
        permanent: true
      },
      {
        source: "/consulting-service/:path*",
        destination: "/consulting-services",
        permanent: true
      },
      {
        source: "/abrahams-consulting-product-page",
        destination: "https://cmcengage.com/6702",
        permanent: true
      },
      {
        source: "/abrahams-consulting-product-page/:path*",
        destination: "https://cmcengage.com/6702",
        permanent: true
      },
      {
        source: "/manufacturer-store",
        destination: "https://cmcengage.com/6702",
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  }
};

export default nextConfig;

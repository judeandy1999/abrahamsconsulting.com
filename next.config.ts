import type { NextConfig } from "next";

// Source pattern: https://nextjs.org/docs/app/guides/content-security-policy (Without Nonces)
const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://js.hsforms.net https://*.hsforms.net https://www.googletagmanager.com${isDev ? " https://va.vercel-scripts.com" : ""}`,
  "style-src 'self' 'unsafe-inline' https://*.hsforms.net https://*.hsforms.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.hsforms.com https://*.hubapi.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com" +
    (isDev ? " https://va.vercel-scripts.com https://vitals.vercel-insights.com" : ""),
  "frame-src https://www.youtube.com https://youtube.com https://*.hsforms.com https://*.hsforms.net https://abrahams73.lll-ll.com",
  "child-src https://*.hsforms.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.hsforms.com https://*.hubspot.com",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"]
  },
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**"
      },
      {
        protocol: "https",
        hostname: "**.ssl.cf1.rackcdn.com"
      },
      {
        protocol: "https",
        hostname: "**.rackcdn.com"
      },
      {
        protocol: "https",
        hostname: "fe5e0932bbdbee188a67-ade54de1bba9a4fe61c120942a09245b.ssl.cf1.rackcdn.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/capabilities-statement-services-3",
        destination: "/capabilities-statement-services",
        permanent: true
      },
      {
        source: "/capabilities-statement-services-3/",
        destination: "/capabilities-statement-services",
        permanent: true
      },
      {
        source: "/capabilities-statement-products-2",
        destination: "/capabilities-statement-products",
        permanent: true
      },
      {
        source: "/capabilities-statement-products-2/",
        destination: "/capabilities-statement-products",
        permanent: true
      },
      {
        source: "/consultation",
        destination: "/contact-us",
        permanent: true
      },
      {
        source: "/consultation/success",
        destination: "/contact-us/success",
        permanent: true
      },
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
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          },
          { key: "Content-Security-Policy", value: contentSecurityPolicy }
        ]
      }
    ];
  }
};

export default nextConfig;

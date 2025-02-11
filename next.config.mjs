import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    missingSuspenseWithCSRBailout: true,
    optimizeCss: true,
    webpackBuildWorker: true,
    optimizePackageImports: ["dayjs", "lodash", "@fortawesome/fontawesome-svg-core", "@fortawesome/free-brands-svg-icons", "@fortawesome/react-fontawesome"],
  },
  images: {
    disableStaticImages: true,
    minimumCacheTTL: 60 * 60 * 24 * 30, // 1 month
    unoptimized: true,
    loader: "default",
    contentDispositionType: "inline",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vela-e-website.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // apply all files in the public folder
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, immutable", // Cache 1 month
          },
        ],
      },
    ]
  },
}

export default withNextIntl(nextConfig)

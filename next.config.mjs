/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  },
  images: {
    domains: ["mathmozocms.test", "techlearnopedia.com","admin.techlearnopedia.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://admin.techlearnopedia.com/api/v1/:path*",
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;

/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  // Remove output: "export" as we want server-side rendering
  images: {
    unoptimized: true,
  },
  // Add proper static file handling
  experimental: {
    appDir: true,
  },
  distDir: '.next',
  poweredByHeader: false,
};

export default nextConfig;

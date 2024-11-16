
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  // Remove output: "export" as we want server-side rendering
  images: {
    unoptimized: true,
  },
  // Add proper static file handling
};

export default nextConfig;

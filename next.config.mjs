/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.externals.push("pino-pretty", "lokijs", "encoding")
        return config
    },
    output:"export"
}

export default nextConfig;
  
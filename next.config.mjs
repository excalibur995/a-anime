/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@nextui-org/react"],
  },
};

export default nextConfig;

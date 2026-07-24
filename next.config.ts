import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/soy-luca",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
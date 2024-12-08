import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "aceternity.com",
        
      },
      {
        protocol: 'https',
        hostname: "utfs.io",
        port:"",
        
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
        port:"",
      },
      
    ],
  },
};

export default nextConfig;

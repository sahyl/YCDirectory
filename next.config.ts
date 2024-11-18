import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },
  experimental:{
    ppr: "incremental",
    after:true
  },
  devIndicators:{
    appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:'bottom-right'
  },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  
  
  /* config options here */
};

export default nextConfig;

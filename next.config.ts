import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // keep this for Heroku since image optimization needs Node
  },
  output: "export", // enables static export
  distDir: "out",   // optional: folder where static HTML is exported
};

export default nextConfig;


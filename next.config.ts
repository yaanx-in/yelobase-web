import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Emit a self-contained server bundle (.next/standalone) so the Docker
  // runtime image only needs node + the traced deps — no full node_modules.
  output: "standalone",
};

export default nextConfig;

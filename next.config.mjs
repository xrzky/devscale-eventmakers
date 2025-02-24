/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-bda5341f88164a64ae18545c6f50320f.r2.dev",
        pathname: "/eventmakers/**",
      },
    ],
  },
};

export default nextConfig;

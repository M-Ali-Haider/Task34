/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.course-api.com",
      },
    ],
  },
};

export default nextConfig;

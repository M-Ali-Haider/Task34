/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "Task34",
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

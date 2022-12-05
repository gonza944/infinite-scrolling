const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    /* domains: ["images.unsplash.com"], */
     remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

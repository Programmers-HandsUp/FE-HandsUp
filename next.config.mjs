/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["static.shoeprize.com"],
    unoptimized: true
  }
};

export default nextConfig;

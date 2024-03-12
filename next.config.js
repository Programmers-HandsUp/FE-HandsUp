const withPWA = require("next-pwa")({
  dest: "public" // PWA 관련 파일의 출력 디렉토리 지정
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.shoeprize.com"],
    unoptimized: true
  }
});

module.exports = nextConfig;

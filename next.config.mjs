/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["jointeam.s3.ap-northeast-2.amazonaws.com"], // 호스트된 이미지의 도메인 목록
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8080/:path*",
      },
    ];
  },
};

export default nextConfig;

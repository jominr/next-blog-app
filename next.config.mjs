/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'n.sinaimg.cn'
        // 备注每个外部的img url, 否则无法引用
      }
    ]
  }
};

export default nextConfig;

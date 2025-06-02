import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  // config for inport svg as React components
  webpack(config) {
    // Tìm rule mặc định của Next.js về file-loader (tất cả file tĩnh),
    // sau đó chèn rule mới cho .svg trước khi Next.js xử lý bằng file-loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,       // chỉ apply khi import từ file .js/.jsx/.ts/.tsx
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Bạn có thể thêm options tuỳ chỉnh ở đây, ví dụ:
            // icon: true,
            // svgoConfig: {...}
          },
        },
      ],
    });

    return config;
  },
};

const withNextIntl = createNextIntlPlugin(
  "./lib/i18/request.ts"
);

export default withNextIntl(nextConfig);

const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/_next/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  crossOrigin: 'anonymous',
  assetPrefix: 'http://cdn.localhost:3000',
};

// Injected content via Sentry wizard below

module.exports = withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: 'thasuohm-practice',
    project: 'example',
  },
  {
    // Hides source maps from generated client bundles
    hideSourceMaps: true,
  }
);

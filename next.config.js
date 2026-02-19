/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization - disabled for better Render performance
  images: {
    unoptimized: true,
  },
  
  // Optimize font loading
  optimizeFonts: true,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable compression
  compress: true,
  
  // Performance optimizations
  swcMinify: true,
  
  // PoweredBy header removal for security
  poweredByHeader: false,
  
  // Strict mode for better development
  reactStrictMode: true,
  
  // Environment variables available to the client
  env: {
    SITE_URL: process.env.SITE_URL || 'https://www.growmoreparking.com',
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{
      source: '/(.*)\\.pdf',
      headers: [
        {
          key: 'Content-Type',
          value: 'application/pdf',
        },
      ]
    }]
  },
  async redirects() {
    return [
      {
        source: '/initial',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SOCKET_CLIENT: process.env.SOCKET_CLIENT,
    SOCKET_CLIENT_PATH: process.env.SOCKET_CLIENT_PATH,
    APP_API_URL: process.env.APP_API_URL,
  },
  publicRuntimeConfig: {
    SOCKET_CLIENT: process.env.SOCKET_CLIENT,
    SOCKET_CLIENT_PATH: process.env.SOCKET_CLIENT_PATH,
    APP_API_URL: process.env.APP_API_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  swcMinify: false,
}

module.exports = nextConfig

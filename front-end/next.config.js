/** @type {import('next').NextConfig} */ 
const nextConfig = {
    reactStrictMode: false,
    env: {
        API_URL: process.env.API_URL,
        config: {
            splash: false,
            reviews: false,
        },
    },
    images: {
        domains: ['127.0.0.1', 'minecraft-inside.ru'],
    },
    experimental: {
        scrollRestoration: true,
    }
}

module.exports = nextConfig

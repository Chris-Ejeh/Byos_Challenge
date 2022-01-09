/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]',
    },
    trailingSlash: true,
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
    },
    images: {
        domains: ['randomuser.me'],
    },
};

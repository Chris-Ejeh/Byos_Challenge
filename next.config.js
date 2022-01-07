/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]',
    },
    trailingSlash: true,
};

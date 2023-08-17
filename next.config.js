/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const runtimeCaching = require("next-pwa/cache");
const nextPwa = require("next-pwa");

const config = {};

const nextConfig = nextPwa({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: !isProduction,
    buildExcludes: [/middleware-manifest.json$/]
})(config);

module.exports = nextConfig;

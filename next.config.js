/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''


const nextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  reactStrictMode: true,
  publicRuntimeConfig: { urlPrefix },  // ★コレ
}

module.exports = nextConfig

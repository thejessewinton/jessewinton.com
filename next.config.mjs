import { withContentlayer } from 'next-contentlayer'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  }
}

export default withContentlayer(config)

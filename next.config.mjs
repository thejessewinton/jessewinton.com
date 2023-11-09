import { withContentlayer } from 'next-contentlayer'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error'
    }

    return config
  }
}

export default withContentlayer(config)

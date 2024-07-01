import { withContentlayer } from 'next-contentlayer'

/** @type {import("next").NextConfig} */
const config = {
  redirects: async () => {
    return [
      {
        source: '/figuring-it-out-as-we-go',
        destination: 'https://thetanknyc.org/calendar-1/figuringitoutaswego',
        permanent: false
      }
    ]
  }
}

export default withContentlayer(config)

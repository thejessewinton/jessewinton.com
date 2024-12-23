import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

const config = {
  redirects: async () => {
    return [
      {
        source: '/figuring-it-out-as-we-go',
        destination: 'https://thetanknyc.org/calendar-1/figuringitoutaswego',
        permanent: false,
      },
    ]
  },
} satisfies NextConfig

export default withContentCollections(config)

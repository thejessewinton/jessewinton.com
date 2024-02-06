import { Inter, Newsreader } from 'next/font/google'
import { AnalyticsWrapper } from '~/components/analytics-wrapper'
import { Footer } from '~/components/footer'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import '~/styles/globals.css'
import { env } from '~/env.mjs'

const sans = Inter({
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin']
})

const serif = Newsreader({
  variable: '--font-serif',
  display: 'swap',
  style: 'italic',
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: {
    default: 'Jesse Winton',
    template: '%s — Jesse Winton'
  },
  twitter: {
    title: 'Jesse Winton',
    description: 'Actor, playwright, and award-winning musician living and working in New York, NY.',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://jessewinton.com/images/og.jpg'
      }
    ]
  },
  openGraph: {
    title: 'Jesse Winton',
    description: 'Actor, playwright, and award-winning musician living and working in New York, NY.',
    images: [
      {
        url: 'https://jessewinton.com/images/og.jpg'
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL)
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en' className={`${sans.variable} ${serif.variable}`}>
      <link href='/favicon.ico' rel='shortcut icon' />
      <body className='flex min-h-screen flex-col items-center justify-center scroll-smooth leading-loose text-neutral-900 antialiased selection:bg-neutral-800 dark:bg-neutral-900 dark:text-neutral-200'>
        <main className='mx-auto mt-32 flex w-full max-w-3xl flex-grow flex-col items-center justify-center px-8'>
          {children}
        </main>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}

export default RootLayout

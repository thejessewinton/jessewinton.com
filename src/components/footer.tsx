import Link from 'next/link'
import { NowPlaying } from './now-playing'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/thejessewinton'
  },
  {
    label: 'Email',
    href: 'mailto:hi@jessewinton.com'
  }
]

export const Footer = () => {
  return (
    <footer className='mb-0 mt-12 flex h-14 w-full animate-blur items-center border-t border-t-neutral-500 animation-delay-500 dark:border-t-neutral-800'>
      <div className='mx-auto flex w-full max-w-3xl flex-row items-center justify-between gap-4 px-8 text-neutral-900 dark:text-neutral-400'>
        <nav className='flex items-center justify-between gap-6 text-sm'>
          {socials.map((social) => (
            <Link href={social.href} key={social.label} target='_blank'>
              {social.label}
            </Link>
          ))}
          <NowPlaying />
        </nav>

        <div className='flex items-center gap-2'>
          <span className='text-sm'>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}

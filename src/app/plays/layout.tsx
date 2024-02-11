import Link from 'next/link'
import type { ReactNode } from 'react'
import { Arrow } from '~/components/icons'

export default function WritingLayout({ children }: { children: ReactNode }) {
  return (
    <div className='w-full animate-enter'>
      <Link href='/' className='group -mt-16 mb-16 flex items-center gap-2 font-serif italic'>
        <Arrow className='-rotate-90 transition-all group-hover:-translate-x-0.5 group-hover:-translate-y-0.5' />
        Index
      </Link>

      {children}
    </div>
  )
}

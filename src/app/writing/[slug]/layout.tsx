import Link from 'next/link'
import type { ReactNode } from 'react'
import { Arrow } from '~/components/icons'

const WritingLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className='w-full'>
      <Link href='/writing' className='mb-8 flex items-center gap-2 font-serif italic'>
        <Arrow className='-rotate-90' />
        Writings
      </Link>

      {children}
    </div>
  )
}

export default WritingLayout

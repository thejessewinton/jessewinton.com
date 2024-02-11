import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPlays } from '~/content'
import { playsIndex } from '~/contentlayer'

export const metadata: Metadata = {
  title: 'Plays'
}

export default function Plays() {
  const allPlays = getAllPlays()

  return (
    <div className='flex flex-col gap-2 pb-4'>
      <div className='relative z-50 w-full animate-enter'>
        <h1 className='mb-4 text-left font-medium'>{playsIndex.title}</h1>
        <div
          className='font-light'
          dangerouslySetInnerHTML={{
            __html: playsIndex.body.html
          }}
        />
      </div>
      <div className='group mt-8 flex w-full animate-enter flex-col divide-y divide-neutral-800 border-t border-neutral-800'>
        {allPlays.map(([year, plays]) => {
          return (
            <div className='flex gap-20 py-4 md:p-0' key={year}>
              <span className='pointer-events-none pt-3 text-sm text-neutral-500'>{year}</span>

              <div className='group flex-1 divide-y divide-neutral-700'>
                {plays.map((play) => (
                  <Link
                    href={play.url ?? ''}
                    key={play.title}
                    className='flex-1 items-center justify-between py-2 transition-all md:flex hover:md:!opacity-100 hover:md:!blur-none group-hover:md:opacity-40 group-hover:md:blur-xs'
                  >
                    {play.title}
                    <div className='text-sm text-neutral-500'>{play.synopsis}</div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

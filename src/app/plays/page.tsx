import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Link from 'next/link'
import { groupBy } from 'remeda'
import { allPlays, allPlaysIndices } from '~/content-collections'

const playsIndex = allPlaysIndices[0]!

export const metadata: Metadata = {
  title: 'Plays',
}

export default function Plays() {
  const playsByYear = Object.entries(
    groupBy(allPlays, (play) => dayjs(play.date).year()),
  ).sort(([a], [b]) => Number(b) - Number(a))

  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="relative z-50 w-full animate-enter">
        <h1 className="mb-4 text-left font-medium">{playsIndex.title}</h1>
        <div
          className="font-light"
          dangerouslySetInnerHTML={{
            __html: playsIndex.html,
          }}
        />
      </div>
      <div className="group relative mt-8 flex w-full animate-enter flex-col divide-y divide-neutral-300 overflow-hidden border-neutral-300 border-t dark:divide-neutral-800 dark:border-neutral-800">
        {playsByYear.map(([year, plays]) => {
          return (
            <div className="relative top-0 flex gap-20 py-4 md:p-0" key={year}>
              <span className="-z-20 absolute pt-3 text-neutral-500 text-sm">
                {year}
              </span>

              <div className="ml-[25%] flex-1 divide-y divide-neutral-300 dark:divide-neutral-800">
                {plays.map((play) => (
                  <Link
                    href={play.url ?? ''}
                    key={play.title}
                    className='before:-left-1/2 block flex-1 items-center justify-between py-2 transition-all before:absolute before:h-full before:w-full before:content-[""] md:flex md:group-hover:opacity-40 md:group-hover:blur-xs md:hover:opacity-100! md:hover:blur-none!'
                  >
                    {play.title}
                    <div className="text-neutral-500 text-sm">
                      {play.synopsis}
                    </div>
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

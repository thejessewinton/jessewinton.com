import type { Metadata } from 'next'
import Link from 'next/link'
import { Intro } from '~/components/intro'
import { Snowfall } from '~/components/snowfall'
import { index } from '~/contentlayer'

export const generateMetadata = (): Metadata => {
  return {
    title: index.title,
    description: index.description,
  }
}

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-2 pb-4">
        <div className="relative z-50 animate-enter">
          <h1 className="group relative mb-4 inline-block w-full max-w-xs cursor-pointer font-medium">
            <>
              {index.title}
              <Intro />
            </>
          </h1>

          <div
            className="font-light"
            dangerouslySetInnerHTML={{ __html: index.body.html }}
          />
        </div>

        {index.works ? (
          <div className="group animation-delay-300 pointer-events-none relative mt-8 mb-12 grid animate-enter gap-12 sm:grid-cols-3">
            {index.works.map((work) => {
              const isExternal = work.url?.startsWith('https')

              return (
                <Link
                  key={work.label}
                  href={work.url || ''}
                  target={isExternal ? '_blank' : '_self'}
                  className="pointer-events-auto relative min-h-[90px] font-light transition-all md:group-hover:opacity-40 md:group-hover:blur-xs md:hover:opacity-100! md:hover:blur-none!"
                >
                  <h2 className="mb-4 text-neutral-900 text-sm dark:text-neutral-400">
                    {work.label}
                  </h2>
                  <div className="gap-6">
                    <span className="font-normal">{work.title}</span>
                    <div className="text-neutral-900 dark:text-neutral-400">
                      {work.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : null}
      </div>
      <Snowfall />
    </>
  )
}

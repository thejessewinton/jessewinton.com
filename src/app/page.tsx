import type { Metadata } from 'next'
import Link from 'next/link'
import { Intro } from '~/components/intro'
import { allIndices } from '~/content-collections'

const index = allIndices[0]!

export const metadata: Metadata = {
  title: index.title,
  description: index.description,
}

export default function Index() {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="relative z-50 animate-enter">
        <h1 className="group relative mb-4 inline-block w-full max-w-xs font-medium">
          {index.title}
          <Intro />
        </h1>

        <div
          className="prose prose-neutral dark:prose-invert prose-a:italic! max-w-none space-y-4 font-light prose-a:font-serif! prose-a:no-underline"
          dangerouslySetInnerHTML={{ __html: index.html }}
        />
      </div>

      <div className="my-12 space-y-12">
        <div
          className="group relative animate-enter"
          style={{
            animationDelay: '300ms',
          }}
        >
          <h3 className="mb-8 font-medium">Work</h3>
          <div className="flex flex-col gap-12">
            {index.works.map((work, i) => {
              return (
                <Link
                  href={work.url}
                  style={{
                    animationDelay: `${i * 150 + 300}ms`,
                  }}
                  key={work.title}
                  className="pointer-events-auto block animate-enter"
                >
                  <div className="relative block space-y-5 font-light transition-all md:group-hover:opacity-40 md:group-hover:blur-xs md:hover:opacity-100! md:hover:blur-none!">
                    <header className="flex items-center justify-between gap-5">
                      <div className="flex flex-col font-normal md:flex-row md:items-center">
                        <span>{work.title}</span>
                      </div>
                      <div className="h-px grow bg-neutral-300 dark:bg-neutral-800" />
                      <span className="text-neutral-900 dark:text-neutral-400">
                        {work.label}
                      </span>
                    </header>
                    <div className="text-neutral-900 dark:text-neutral-400">
                      {work.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

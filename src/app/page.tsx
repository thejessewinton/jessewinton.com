import Link from 'next/link'
import type { Metadata } from 'next'
import { index } from '~/contentlayer'

export const generateMetadata = (): Metadata => {
  return {
    title: index.title,
    description: index.description
  }
}

export default function Index() {
  return (
    <div className='flex flex-col gap-2 pb-4'>
      <div className='relative z-50 animate-enter'>
        <h1 className='group relative mb-4 inline-block w-full max-w-xs cursor-pointer font-medium'>{index.title}</h1>

        <div className='font-light' dangerouslySetInnerHTML={{ __html: index.body.html }} />
      </div>

      {index.works ? (
        <div className='group pointer-events-none relative mb-12 mt-8 grid animate-enter gap-12 animation-delay-300 sm:grid-cols-3'>
          {index.works.map((work) => (
            <Link
              key={work.label}
              href={work.url || ''}
              target={work.url?.startsWith('http') ? '_blank' : '_self'}
              className='pointer-events-auto relative min-h-[90px] font-light transition-all hover:md:!opacity-100 hover:md:!blur-none group-hover:md:opacity-40 group-hover:md:blur-xs'
            >
              <h2 className='mb-4 text-sm text-neutral-900 dark:text-neutral-400'>{work.label}</h2>
              <div className='gap-6'>
                <span className='font-normal'>{work.title}</span>
                <div className='text-neutral-900 dark:text-neutral-400'>{work.description}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

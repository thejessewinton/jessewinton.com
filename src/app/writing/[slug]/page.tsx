import { allWritings } from '~/contentlayer'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import { getWritingBySlug } from '~/content'

interface PlaysParams {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: PlaysParams): Promise<Metadata> => {
  const post = getWritingBySlug({ slug: params.slug })
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      url: `https://jessewinton.com/writing/${post.slug}`,
      description: post.summary,
      type: 'article',
      images: [
        {
          url: 'https://jessewinton.com/images/og.jpg'
        }
      ]
    },
    twitter: {
      title: post.title,
      description: post.summary,
      card: 'summary_large_image'
    }
  }
}

export const generateStaticParams = async () => {
  return allWritings.map((post) => ({
    slug: post.slug
  }))
}

const Writing = ({ params }: PlaysParams) => {
  const post = getWritingBySlug({ slug: params.slug })

  return (
    <>
      <div className='flex flex-col'>
        {post.title}
        <span className='text-neutral-500'>{dayjs(post.date).format('MM/DD/YY')}</span>

        <div
          className='mt-10'
          dangerouslySetInnerHTML={{
            __html: post.body.html
          }}
        />
      </div>
    </>
  )
}

export default Writing

import Link from 'next/link'
import { getNowPlaying } from '~/utils/spotify'

const NowPlayingIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1}
      stroke='currentColor'
      className='h-4 w-4'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
      />
    </svg>
  )
}

export const NowPlaying = async () => {
  const data = await getNowPlaying()

  if (!data) return null

  return (
    <Link href={data.item.album.artists[0]?.external_urls.spotify || ''} target='_blank'>
      <div className='flex items-center gap-2 text-sm'>
        <NowPlayingIcon />{' '}
        <span className='block max-w-[15ch] overflow-hidden overflow-ellipsis whitespace-nowrap md:max-w-none'>
          {data.item.name}
        </span>
      </div>
    </Link>
  )
}

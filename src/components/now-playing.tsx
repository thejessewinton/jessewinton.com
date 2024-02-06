import Link from 'next/link'
import { getNowPlaying } from '~/utils/spotify'


export const NowPlaying = async () => {
  const data = await getNowPlaying()
  
  if (!data) return null

  return (
    <Link href={data.item.album.artists[0]?.external_urls.spotify || ''} target='_blank'>
      <div className='flex items-center gap-2 text-sm'>
        Now Playing — <span>{data.item.name}</span>
      </div>
    </Link>
  )
}

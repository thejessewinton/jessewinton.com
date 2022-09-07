import { Link } from '../../shared/link/Link';

import { trpc } from 'client-data/utils/trpc';
import { RiSpotifyFill } from 'react-icons/ri';

const NowPlaying = () => {
  const { data: spotify } = trpc.useQuery(['spotify.get-current-track']);
  return (
    <div className="group flex items-center gap-2">
      <RiSpotifyFill className="h-6 w-6 text-spotify" />
      {spotify && spotify?.track?.isPlaying ? (
        <Link to={spotify.track.songUrl} className="!block">
          <span className="block self-start text-xs text-accent-orange">
            {spotify.track?.artist}
          </span>
          <span className="block text-sm">{spotify.track?.title}</span>
        </Link>
      ) : (
        <span className="text-sm">Not Playing</span>
      )}
    </div>
  );
};

export const Header = ({ upNext, link }: { upNext: string; link: string }) => {
  return (
    <header className="container flex h-32 w-full items-center border-b border-b-gray-300">
      <div className="flex w-full items-center justify-between">
        <NowPlaying />

        <div className="flex flex-col text-right">
          <span className="text-xs text-accent-orange">Up Next</span>
          <Link to={link || '#'}>{upNext}</Link>
        </div>
      </div>
    </header>
  );
};

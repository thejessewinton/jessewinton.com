import { trpc } from 'client-data/utils/trpc';
import { Link } from 'components/link/Link';
import { RiSpotifyFill } from 'react-icons/ri';

export const Footer = () => {
  const { data: spotify } = trpc.useQuery(['spotify.get-current-track']);

  return (
    <footer className="flex h-20 w-full items-center justify-between">
      <div className="flex w-full items-center justify-between">
        <nav className="flex items-center justify-between gap-6 text-sm">
          <Link to="https://instagram.com/thejessewinton">Instagram</Link>
          <Link to="https://twitter.com/thejessewinton">Twitter</Link>
          <Link to="mailto:hi@jessewinton.com">Contact</Link>
        </nav>

        <div className="flex gap-2">
          <RiSpotifyFill className="h-5 w-5 text-spotify" />
          {spotify && spotify?.track?.isPlaying ? (
            <Link to={spotify.track.songUrl} className="flex flex-col">
              <span className="block text-sm">{spotify.track?.title}</span>
              <span className="self-end text-xs text-accent-orange">
                {spotify.track?.artist}
              </span>
            </Link>
          ) : (
            <span className="text-xs">Not Playing</span>
          )}
        </div>
      </div>
    </footer>
  );
};

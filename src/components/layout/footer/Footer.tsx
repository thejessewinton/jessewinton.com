import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import { Link } from 'components/shared/link/Link';
import { Copyright } from '../copyright/Copyright';

export const Footer = () => {
  return (
    <footer className="flex w-full items-center bg-light-200 py-4 dark:bg-neutral-900">
      <div className="container flex w-full items-center justify-between">
        <nav className="flex items-center justify-between gap-6 text-sm">
          <Link
            to="https://instagram.com/thejessewinton"
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
          >
            Instagram
          </Link>
          <Link
            to="https://twitter.com/thejessewinton"
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
          >
            Twitter
          </Link>
          <Link
            to="https://www.youtube.com/channel/thejessewinton"
            icon={<ArrowUpRightIcon className="h-4 w-4" />}
          >
            YouTube
          </Link>
        </nav>

        <Copyright />
      </div>
    </footer>
  );
};

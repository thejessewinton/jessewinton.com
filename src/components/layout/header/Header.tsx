import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from '../../shared/link/Link';

export const Header = () => {
  return (
    <header className="flex w-full items-center bg-light-200 py-4 dark:bg-neutral-900">
      <div className="container flex w-full items-center justify-center">
        <div className="group flex items-center gap-2 text-right">
          <span className="block">Up Next: TBA</span>
          <div className="group flex items-center gap-2">
            <ArrowRightIcon className="h-4 w-4 transition-all duration-500 group-hover:-rotate-45" />
            <Link
              to="#"
              className="relative text-accent-orange transition-all duration-500 group-hover:text-white"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

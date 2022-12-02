import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'components/shared/link/Link';

export const CallToAction = () => {
  return (
    <div className="flex h-[300px] flex-col items-center justify-center gap-12 border-t border-gray-300 text-center">
      <div className="flex flex-col items-center gap-8 uppercase leading-tight">
        Want Me To Join Your Cast?
        <Link
          to="mailto:hi@jessewinton.com"
          className="text-accent-orange"
          icon={<ArrowUpRightIcon className="h-10 w-10" />}
        >
          <h3>Reach Out</h3>
        </Link>
      </div>
    </div>
  );
};

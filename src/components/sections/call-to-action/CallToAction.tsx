import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Link } from 'components/shared/link/Link';

export const CallToAction = () => {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-12 border-t border-gray-300 text-center">
      <h2 className="flex items-center uppercase">
        Want Me to&nbsp;
        <Link
          to="mailto:hi@jessewinton.com"
          className="text-accent-orange"
          icon={<ArrowTopRightIcon className="h-10 w-10 text-white" />}
        >
          Join Your Cast
        </Link>
      </h2>
    </div>
  );
};

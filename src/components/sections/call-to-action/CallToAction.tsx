import { PrismicRichText, PrismicText } from '@prismicio/react';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Link } from 'components/shared/link/Link';

export const CallToAction = ({ heading, cta, link }: any) => {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-12 border-t border-gray-300 text-center">
      <div className="flex flex-col items-center gap-8 uppercase leading-tight">
        <PrismicRichText field={heading} />{' '}
        <Link
          to={link.url}
          className="text-accent-orange"
          icon={<ArrowTopRightIcon className="h-10 w-10" />}
        >
          <h2>
            <PrismicText field={cta} />
          </h2>
        </Link>
      </div>
    </div>
  );
};

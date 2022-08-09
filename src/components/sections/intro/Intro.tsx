import Image from 'next/future/image';

import { ArrowBottomRightIcon } from '@radix-ui/react-icons';

import Image1 from '/public/images/Image01.webp';
import { Link } from 'components/shared/link/Link';

export const Intro = () => {
  return (
    <div className="my-12 flex gap-6">
      <div className="flex flex-col">
        <h2 className="pt-10 text-[8vw] uppercase text-accent-orange">Jesse</h2>

        <Link
          to="#bio"
          iconHover="down"
          icon={<ArrowBottomRightIcon />}
          className="mt-auto mb-0 self-end"
        >
          Bio
        </Link>
      </div>

      <div className="lg:max-w-1/2">
        <Image src={Image1} alt="Image" placeholder="blur" />
      </div>

      <div className="flex flex-col">
        <h2 className="pt-10 text-[8vw] font-medium uppercase">Winton</h2>

        <p className="mt-40 border-b border-gray-300 pb-10">
          Actor, playwright, and award-winning musician from New York, NY.
        </p>
      </div>
    </div>
  );
};

import Image from 'next/image';

import { Header } from 'components/layout/header/Header';
import { Link } from 'components/shared/link/Link';
import { ArrowDownRightIcon } from '@heroicons/react/24/outline';
import headshot from '../../../../public/headshot-2022.webp';

export const Intro = () => {
  return (
    <>
      <div className="my-12 gap-6 lg:flex">
        <div className="flex flex-col">
          <h2 className="pb-10 text-[20vw] uppercase text-accent-orange lg:pt-10 lg:text-[8vw]">
            Jesse
          </h2>

          <Link
            to="#bio"
            iconHover="down"
            icon={<ArrowDownRightIcon className="h-4 w-4" />}
            className="self-end lg:mt-auto lg:mb-0"
          >
            Bio
          </Link>
        </div>

        <div className="lg:max-w-1/2">
          <Image
            src={headshot}
            alt="Headshot 2022"
            loading="eager"
            placeholder="blur"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="pt-10 text-[20vw] font-medium uppercase lg:text-[8vw]">
            Winton
          </h2>

          <div className="mt-40 border-gray-300 pb-10 lg:border-b">
            Actor, playwright, and award-winning musician living in{' '}
            <span className="text-accent-orange">Boston, MA</span>.
          </div>
        </div>
      </div>
    </>
  );
};

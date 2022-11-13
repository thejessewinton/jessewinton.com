import Image from 'next/image';

import { PrismicRichText, PrismicText } from '@prismicio/react';
import { RTNode } from '@prismicio/types';
import { ArrowBottomRightIcon } from '@radix-ui/react-icons';

import { Header } from 'components/layout/header/Header';
import { Link } from 'components/shared/link/Link';

type IntroProps = {
  image: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  upNext: string;
  link: string;
  blurb: [] | [RTNode, ...RTNode[]] | null | undefined;
};

export const Intro = ({ image, blurb, upNext, link }: IntroProps) => {
  return (
    <>
      <Header upNext={upNext} link={link} />
      <div className="my-12 gap-6 lg:flex">
        <div className="flex flex-col">
          <h2 className="pb-10 text-[20vw] uppercase text-accent-orange lg:pt-10 lg:text-[8vw]">
            Jesse
          </h2>

          <Link
            to="#bio"
            iconHover="down"
            icon={<ArrowBottomRightIcon />}
            className="self-end lg:mt-auto lg:mb-0"
          >
            Bio
          </Link>
        </div>

        <div className="lg:max-w-1/2">
          <Image
            src={image.url}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
            placeholder="blur"
            blurDataURL={`${image.url}&blur=100`}
            loading="eager"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="pt-10 text-[20vw] font-medium uppercase lg:text-[8vw]">
            Winton
          </h2>

          <div className="mt-40 border-gray-300 pb-10 lg:border-b">
            <PrismicRichText field={blurb} />
          </div>
        </div>
      </div>
    </>
  );
};

import Image from 'next/future/image';

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
      <div className="my-12 flex gap-6">
        <div className="flex flex-col">
          <h2 className="pt-10 text-[8vw] uppercase text-accent-orange">
            Jesse
          </h2>

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
          <Image
            src={image.url}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
            placeholder="blur"
            blurDataURL={`${image.url}&blur=100`}
          />
        </div>

        <div className="flex flex-col">
          <h2 className="pt-10 text-[8vw] font-medium uppercase">Winton</h2>

          <div className="mt-40 border-b border-gray-300 pb-10">
            <PrismicRichText field={blurb} />
          </div>
        </div>
      </div>
    </>
  );
};

import Image from 'next/future/image';

import { PrismicRichText, PrismicRichTextProps } from '@prismicio/react';
import { RTNode } from '@prismicio/types';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import Image1 from '/public/images/Image01.webp';
import { Link } from 'components/shared/link/Link';

type Role = {
  name: string;
  show: string;
  year: string;
};

type BioProps = {
  image: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  url: string;
  roles: Role[];
  bio: [] | [RTNode, ...RTNode[]] | null | undefined;
};

const Roles = ({ roles, url }: { roles: Role[]; url: string }) => {
  return (
    <div className="flex w-full flex-grow flex-col gap-12">
      <div className="divide-y">
        {roles.map((role) => (
          <div className="flex w-full justify-between py-4" key={role.name}>
            <span className="flex-1">{role.name}</span>
            <span className="flex-1">{role.show}</span>
            <span className="flex-1 text-right">{role.year}</span>
          </div>
        ))}
      </div>

      <Link
        to={url}
        icon={<ArrowTopRightIcon />}
        className="mb-0 mt-auto lg:self-end"
      >
        Full Resumé
      </Link>
    </div>
  );
};

export const Bio = ({ roles, bio, image, url }: BioProps) => {
  return (
    <div
      className="flex flex-col justify-between gap-24 border-t border-gray-300 py-12 md:flex-row"
      id="bio"
    >
      <div className="flex flex-col gap-12">
        <div>
          <PrismicRichText field={bio} />
        </div>
        <Roles roles={roles} url={url} />
      </div>
      <div className="lg:max-w-1/3">
        <Image
          src={image.url}
          alt={image.alt}
          width={image.dimensions.width}
          height={image.dimensions.height}
          placeholder="blur"
          blurDataURL={`${image.url}&blur=100`}
          loading="lazy"
        />
      </div>
    </div>
  );
};

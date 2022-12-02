import Image from 'next/image';

import { PrismicRichText, PrismicRichTextProps } from '@prismicio/react';
import { RTNode } from '@prismicio/types';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import headshot from '/public/headshot-2021.webp';
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

const roles: Role[] = [
  {
    name: 'Gaston',
    show: `Disney's Beautfy and the Beast`,
    year: '2018',
  },
  {
    name: 'Algernon Moncrieff',
    show: 'The Importance of Being Earnest',
    year: '2019',
  },
  {
    name: 'Wadsworth',
    show: 'Clue',
    year: '2021',
  },
  {
    name: 'Dr. Craven',
    show: 'The Secret Garden',
    year: '2021',
  },
];

const Roles = () => {
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
        to="/jesse-winton-resume.pdf"
        icon={<ArrowUpRightIcon className="h-4 w-4" />}
        className="mb-0 mt-auto lg:self-end"
        target="blank"
      >
        Full Resumé
      </Link>
    </div>
  );
};

export const Bio = () => {
  return (
    <div
      className="flex flex-col justify-between gap-24 border-t border-gray-300 py-12 md:flex-row"
      id="bio"
    >
      <div className="flex flex-col gap-12">
        <div>
          <p>
            Hi I&apos;m Jesse, and I&apos;m an actor, writer, and musician. I
            love telling good stories, and I&apos;m working on a few plays (more
            on that TBA). As a musician I&apos;ve won over a dozen California &
            Western U.S. flat-picking championships.
          </p>
          <br />
          <p>
            In my free time you can find me studying political theory and public
            policy. You might also be able to catch me working out, although
            you&apos;ll have to be quick as I&apos;m very fast.
          </p>
          <br />
          <p>
            I listed a couple of my favorites roles here, but you should take a
            look at my full resumé.
          </p>
        </div>
        <Roles />
      </div>
      <div className="lg:max-w-1/3">
        <Image
          src={headshot}
          alt="2021 Headshot"
          placeholder="blur"
          loading="lazy"
        />
      </div>
    </div>
  );
};

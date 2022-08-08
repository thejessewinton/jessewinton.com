import Image from 'next/future/image';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import Image1 from '/public/images/Image01.webp';
import { Link } from 'components/shared/link/Link';
import { MotionImage } from 'components/shared/motion-image/MotionImage';

type Role = {
  name: string;
  show: string;
  year: string;
};

// TODO: Mock data
const roles = [
  {
    name: 'Harold Hill',
    show: 'The Music Man',
    year: '2023',
  },
  {
    name: 'Gaston',
    show: 'Beauty and the Beast',
    year: '2018',
  },
  {
    name: 'Wadsworth',
    show: 'Clue',
    year: '2021',
  },
  {
    name: 'Algernon Moncrieff',
    show: 'The Importance of Being Earnest',
    year: '2019',
  },
];

const UpcomingBadge = () => (
  <div className="max-w-min rounded-3xl bg-white py-2 px-3 text-xs font-bold text-gray-100">
    Upcoming
  </div>
);

const Roles = ({ roles }: { roles: Role[] }) => {
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
        to="/"
        icon={<ArrowTopRightIcon />}
        className="mb-0 mt-auto lg:self-end"
      >
        Full Resumé
      </Link>
    </div>
  );
};

export const Bio = () => {
  return (
    <div className="flex flex-col justify-between gap-24 py-12 md:flex-row">
      <div className="flex flex-col gap-12">
        <div>
          I’m a New York based actor, writer, and musician. I love telling good
          stories that address the human condition, and my biggest inspirations
          are Edward Albee and Stephen Sondheim. The being said, I can&apos;t
          write lyrics. At all. So I stick with plays, and I&apos;m working on a
          few. As a musician I’ve won over a dozen California & Western U.S.
          Championships, and I jump into bluegrass with aplomb.
          <br />
          <br />
          In my free time you can find me studying political theory and public
          policy. You might also be able to catch me working out, although
          you’ll have to be quick as I’m very fast.
        </div>
        <Roles roles={roles} />
      </div>
      <div className="lg:max-w-1/3">
        <Image src={Image1} alt="Image" placeholder="blur" />
      </div>
    </div>
  );
};

// transform: rotate(-90deg);
// transform-origin: 0 100%;
// position: absolute;
// line-height: 25px;
// font-size: 14px;
// height: 25px;
// width: 100%;
// left: 25px;
// bottom: 0;

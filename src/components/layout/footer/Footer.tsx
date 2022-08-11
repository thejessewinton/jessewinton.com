import { useEffect, useState } from 'react';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Link } from 'components/shared/link/Link';

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <p className="lg:order-0 text-sm">&copy;{year} Jesse Winton</p>;
};

export const Footer = () => {
  return (
    <footer className="container flex h-32 w-full items-center border-t border-t-gray-300">
      <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
        <nav className="flex items-center justify-between gap-6 text-sm">
          <Link
            to="https://instagram.com/thejessewinton"
            icon={<ArrowTopRightIcon />}
          >
            Instagram
          </Link>
          <Link
            to="https://twitter.com/thejessewinton"
            icon={<ArrowTopRightIcon />}
          >
            Twitter
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCb1cIpvgr_B3WhQHLf0mbHg"
            icon={<ArrowTopRightIcon />}
          >
            YouTube
          </Link>
        </nav>

        <Copyright />
      </div>
    </footer>
  );
};

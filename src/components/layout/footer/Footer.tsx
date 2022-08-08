import { useEffect, useState } from 'react';

import { Link } from 'components/shared/link/Link';

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <p className="text-sm">&copy;{year} Jesse Winton</p>;
};

export const Footer = () => {
  return (
    <footer className="container flex h-32 w-full items-center border-t border-t-gray-300">
      <div className="flex w-full items-center justify-between">
        <Copyright />
        <nav className="flex items-center justify-between gap-6 text-sm">
          <Link to="https://instagram.com/thejessewinton">Instagram</Link>
          <Link to="https://twitter.com/thejessewinton">Twitter</Link>
          <Link to="https://twitter.com/thejessewinton">YouTube</Link>
        </nav>
      </div>
    </footer>
  );
};

'use client';

import { useEffect, useState } from 'react';

export const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <p className="lg:order-0 text-sm">&copy;{year} Jesse Winton</p>;
};

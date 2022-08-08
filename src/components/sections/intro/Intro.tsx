import Image from 'next/future/image';

import Image1 from '/public/images/Image01.webp';

export const Intro = () => {
  return (
    <div className="flex flex-grow py-12">
      <h2>Jesse</h2>
      <div className="lg:max-w-1/2">
        <Image src={Image1} alt="Image" placeholder="blur" />
      </div>
      <div className="flex flex-col gap-6">
        <h2>Winton</h2>
      </div>
    </div>
  );
};

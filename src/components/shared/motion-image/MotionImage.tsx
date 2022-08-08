import Image from 'next/image';

import Image1 from '/public/images/Image01.webp';
import classNames from 'classnames';
import { motion } from 'framer-motion';

type MotionImageProps = { className?: string };

export const MotionImage = ({ className }: MotionImageProps) => {
  return (
    <div className={classNames('relative h-full overflow-hidden', className)}>
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 z-[100] h-full w-full bg-gray-100"
          animate={{
            height: 0,
          }}
          transition={{ duration: 1 }}
        />

        <Image src={Image1} alt="Image" placeholder="blur" />
      </div>

      <p className="w-full">Skyler Greene 2022</p>
    </div>
  );
};

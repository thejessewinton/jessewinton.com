import Image from 'next/image';

import classNames from 'classnames';
import { motion } from 'framer-motion';

type MotionImageProps = { className?: string; src: string };

export const MotionImage = ({ className, src, ...rest }: MotionImageProps) => {
  return (
    <div className={classNames('relative h-full overflow-hidden', className)}>
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 z-[100] h-full w-full bg-gray-100"
          animate={{
            height: 0,
          }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        > */}
        <Image src={src} alt="Image" placeholder="blur" {...rest} />
        {/* </motion.div> */}
      </div>

      <p className="w-full">Skyler Greene 2022</p>
    </div>
  );
};

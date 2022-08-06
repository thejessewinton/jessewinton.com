import { motion } from 'framer-motion';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type MotionTextProps = {
  children: string;
  as?: Tags;
  className?: string;
  stagger?: number;
};

export const MotionText = ({
  children,
  as: Tag = 'p',
  className,
  stagger = 0.025,
}: MotionTextProps) => {
  const item = {
    hidden: {
      y: '200%',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = children.split(' ');
  const words: any = [];

  splitWords.forEach((item) => {
    words.push(item.split(''));
  });

  words.map((word: string[]) => {
    return word.push('\u00A0');
  });

  const container = {
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <Tag className={className}>
        {words.map((word: string, index: number) => {
          return (
            <span className="whitespace-nowrap" key={word}>
              {words[index].flat().map((element: string, index: number) => {
                return (
                  <span className="inline-block overflow-hidden" key={index}>
                    <motion.span className="inline-block" variants={item}>
                      {element}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
        })}
      </Tag>
    </motion.div>
  );
};

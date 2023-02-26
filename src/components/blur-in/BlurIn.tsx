"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { clsx } from "clsx";

export const BlurIn = ({
  className,
  children,
  delay = 0.25,
}: {
  className?: string;
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{
        translateY: 20,
        filter: "blur(2px)",
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        filter: "blur(0px)",
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
        delay,
      }}
      className={clsx(
        "transition-opacity hover:!opacity-100 hover:!blur-none group-hover:opacity-40 group-hover:blur-[2px]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

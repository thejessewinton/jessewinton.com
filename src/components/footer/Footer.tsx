"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/thejessewinton",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/thejessewinton",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@thejessewinton",
  },
];

export const Footer = () => {
  return (
    <motion.footer
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
      }}
      transition={{
        duration: 0.75,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="mb-0 mt-auto flex h-14 w-full items-center border-t border-t-neutral-700"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between gap-4 px-8 text-neutral-400">
        <nav className="flex items-center justify-between gap-6 text-sm">
          {socials.map((social) => (
            <Link href={social.href} key={social.label} target="_blank">
              {social.label}
            </Link>
          ))}
        </nav>

        <em className="font-serif">{new Date().getFullYear()}</em>
      </div>
    </motion.footer>
  );
};

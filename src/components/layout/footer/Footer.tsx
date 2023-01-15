import type { SettingsType } from "content/schemas/settings";
import Link from "next/link";

export const Footer = ({ links }: { links: SettingsType["socials"] }) => {
  return (
    <footer className="mb-0 mt-auto flex h-14 w-full items-center border-t border-t-neutral-700">
      <div className="mx-auto flex w-full max-w-3xl flex-row items-center justify-between gap-4 px-8 text-neutral-400">
        <nav className="flex items-center justify-between gap-6 text-sm">
          {links.map((link) => (
            <Link href={link.link} key={link.label} target="_blank">
              {link.label}
            </Link>
          ))}
        </nav>

        <em>{new Date().getFullYear()}</em>
      </div>
    </footer>
  );
};

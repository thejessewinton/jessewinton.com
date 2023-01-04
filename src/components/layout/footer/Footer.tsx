import Link from "next/link";

const links = [
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
    href: "https://www.youtube.com/channel/thejessewinton",
  },
];

export const Footer = () => {
  return (
    <footer className="container mb-0 mt-auto flex h-32 w-full items-center border-t border-t-gray-300">
      <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
        <nav className="flex items-center justify-between gap-6 text-sm">
          {links.map((link) => (
            <Link href={link.href} key={link.label} target="_blank">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="lg:order-0 text-sm">
          &copy;{new Date().getFullYear()} Jesse Winton
        </p>
      </div>
    </footer>
  );
};

import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "components/icons/Icons";

const WritingLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-12">
      <nav className="">
        <Link href="/writing" className="flex items-center gap-2 font-serif">
          <Arrow className="-rotate-90" />
          Writing
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default WritingLayout;

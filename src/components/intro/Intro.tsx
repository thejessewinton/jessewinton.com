"use client";

import { useMousePosition } from "client-data/hooks/use-mouse-position";
import Image from "next/image";
import Headshot from "../../../public/images/headshot.webp";

export const Intro = () => {
  const position = useMousePosition();

  return (
    <span>
      <Image
        src={Headshot}
        alt={""}
        className="absolute right-0 hidden rounded-md shadow-xl group-hover:block"
        style={{
          transform:
            position.x && position.y
              ? `translate(${position.x / 3}px, ${position.y / 8}px)`
              : "",
        }}
        placeholder="blur"
      />
    </span>
  );
};

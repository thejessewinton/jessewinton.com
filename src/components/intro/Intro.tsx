"use client";

import { useMousePosition } from "client-data/hooks/use-mouse-position";
import Image from "next/image";
import Headshot from "../../../public/images/main.webp";

export const Intro = () => {
  const position = useMousePosition();

  return (
    <span>
      <Image
        src={Headshot}
        alt={""}
        className="absolute right-0 -top-20 hidden group-hover:block"
        style={{
          transform:
            position.x && position.y
              ? `translate(${position.x / 5}px, ${position.y / 5}px)`
              : "",
        }}
        placeholder="blur"
      />
    </span>
  );
};

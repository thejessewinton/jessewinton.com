"use client";

import { useMousePosition } from "client-data/hooks/use-mouse-position";
import Image from "next/image";
import Main from "../../../public/images/main.webp";

export const Intro = () => {
  const position = useMousePosition();
  return (
    <span>
      <Image
        src={Main}
        alt="Headshot"
        height={200}
        className="absolute right-0 -top-20 hidden group-hover:block"
        style={{
          transform:
            position.x && position.y
              ? `translate(${position.x / 5}px, ${position.y / 5}px)`
              : "",
        }}
      />
    </span>
  );
};

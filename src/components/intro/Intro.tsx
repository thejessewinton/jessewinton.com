"use client";

import { useMousePosition } from "client-data/hooks/use-mouse-position";
import Image from "next/image";
import type { IndexDocumentData } from "../../../.slicemachine/prismicio";

export const Intro = ({ image }: { image: IndexDocumentData["image"] }) => {
  const position = useMousePosition();

  if (!image.url || !position.x || !position.y) return null;

  return (
    <span>
      <Image
        src={image.url}
        alt="Headshot"
        height={image.dimensions.height}
        width={image.dimensions.width}
        className="absolute right-0 -top-20 hidden w-44 group-hover:block"
        style={{
          transform: `translate(${position.x / 5}px, ${position.y / 5}px)`,
        }}
        placeholder="blur"
        blurDataURL={`${image.url}&blur=100`}
      />
    </span>
  );
};

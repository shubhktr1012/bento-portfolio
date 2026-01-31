"use client";

import Image from "next/image";
import NextLink from "next/link";

import { BentoCard } from "./BentoCard";

export const SocialsBlock = () => {
  return (
    <BentoCard
      noPadding
      className="aspect-square shrink-0 group relative overflow-hidden"
    >
      <div className="w-full h-full flex items-center justify-center">
        <NextLink
          className="no-drag"
          href="https://www.instagram.com/shubh_khatri10"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="Instagram"
            className="object-cover object-center w-20 h-20 xl:w-32 xl:h-32"
            draggable={false}
            height={120}
            src="/instagram-logo.svg"
            width={120}
          />
        </NextLink>
      </div>
    </BentoCard>
  );
};

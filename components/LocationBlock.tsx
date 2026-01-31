"use client";

import Image from "next/image";

import { BentoCard } from "./BentoCard";

export const LocationBlock = () => {
  return (
    <BentoCard
      noPadding
      className="aspect-[2/1] group max-[1199px]:min-[740px]:aspect-square max-[1199px]:min-[740px]:min-w-[180px] max-[1199px]:min-[740px]:max-w-[180px] max-[1199px]:min-[740px]:min-h-[180px] max-[1199px]:min-[740px]:max-h-[180px]"
    >
      <div className="relative w-full h-full">
        <Image
          fill
          alt="Location Map"
          className="z-0 object-cover object-center transition-all duration-750 pointer-events-none scale-100 group-hover:scale-125"
          src="/portfolio-map.png"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#98d0ff]/60 border-5 border-white rounded-full z-10" />
      <Image
        alt="Memoji"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12"
        height={80}
        src="/pfp.svg"
        width={80}
      />
    </BentoCard>
  );
};

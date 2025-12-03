'use client'

import { BentoCard } from "./BentoCard";
import Image from "next/image";

export const LocationBlock = () => {
    return (
        <BentoCard className="aspect-[2/1] group max-[1199px]:min-[740px]:aspect-square max-[1199px]:min-[740px]:min-w-[180px] max-[1199px]:min-[740px]:max-w-[180px] max-[1199px]:min-[740px]:min-h-[180px] max-[1199px]:min-[740px]:max-h-[180px]" noPadding>
            <div className="relative w-full h-full">
                <Image
                    src="/portfolio-map.png"
                    alt="Location Map"
                    fill
                    className="z-0 object-cover object-center transition-all duration-750 pointer-events-none scale-100 group-hover:scale-125"
                />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#98d0ff]/60 border-5 border-white rounded-full z-10" />
            <Image
                alt="Memoji"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12"
                src="/pfp.svg"
                width={80}
                height={80}
            />
        </BentoCard>
    )
}
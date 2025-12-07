'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import { InfoButton } from "./InfoButton";

export const Website2 = () => {
    return (
        <BentoCard className="aspect-square bg-[#DA2C43] dark:bg-[#0d1117] shrink-0 relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-[100%] -translate-y-[75%] w-60 h-60 z-0 bg-[#F7DECF] rounded-[35px] dark:hidden" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-[50%] w-[100%] aspect-video z-10 shadow-[0_0_28px_-9px_rgba(0,0,0,0.25)] overflow-hidden">
                <Image
                    removeWrapper
                    src="/pmf-ss.png"
                    alt="PMF screenshot"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-3 left-3 z-20">
                <InfoButton label="Punjabi Rishtey" />
            </div>
        </BentoCard>
    );
}

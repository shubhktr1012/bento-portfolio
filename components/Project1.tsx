'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import { InfoButton } from "./InfoButton";

export const Project1 = () => {
    return (
        <BentoCard className="aspect-[1/2] bg-[#378AFF] relative overflow-hidden h-full group">
            <div className="absolute top-1/2 left-1/2 -translate-x-[42%] -translate-y-[-40%] w-42 h-42 bg-[#4AC0B6] rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/5 -translate-y-[55%] w-[70%] h-[70%] z-10 -rotate-[24deg] shadow-[0_0_28px_-9px_rgba(0,0,0,0.25)]">
                <Image
                    alt="unClut.ai screenshot"
                    className="w-full h-full object-contain"
                    src="/unclut-screenshot.png"
                />
            </div>
            <div className="absolute bottom-3 left-3 z-20">
                <InfoButton label="unClut.ai" />
            </div>
        </BentoCard>
    );
}

'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";

export const Project2 = () => {
    return (
        <BentoCard className="aspect-[1/2] bg-[#8B92E9] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/8 -translate-y-[105%] w-80 h-80 bg-[#EFF3F8] rounded-[70px] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/3 w-[135%] aspect-video z-10 -rotate-[24deg] shadow-[0_0_28px_-9px_rgba(0,0,0,0.25)] overflow-hidden">
                <Image

                    alt="RAG screenshot"
                    className="w-full h-full object-contain"
                    src="/rag-screenshot.png"
                />
            </div>

        </BentoCard>
    );
}

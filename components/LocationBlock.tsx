'use client'

import { BentoCard } from "./BentoCard";

export const LocationBlock = () => {
    return (
        <BentoCard className="aspect-[2/1]">
            <div className="flex flex-col justify-center items-center h-full">
                <h2 className="text-lg font-moranga text-gray-400 tracking-wide">Location</h2>
            </div>
        </BentoCard>
    )
}
'use client'

// import { ArrowUpRightIcon } from "./icons";
import { UpArrowIcon } from "./icons";
import { BentoCard } from "./BentoCard";

export const BackToTopBlock = () => {
    return (
        <BentoCard
            className="aspect-square bg-white flex items-center justify-center cursor-pointer group relative overflow-hidden shrink-0"
        >
            <div className="flex items-center justify-center h-full">
                <UpArrowIcon size={64} />
            </div>
        </BentoCard>
    );
}

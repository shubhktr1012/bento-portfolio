'use client'

import { ArrowUpRightIcon } from "./icons";
import { BentoCard } from "./BentoCard";

export const BackToTopBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white flex items-center justify-center cursor-pointer group relative overflow-hidden h-auto shrink-0">
            <div className="flex items-center justify-center h-full">
                <ArrowUpRightIcon size={64} />
            </div>
        </BentoCard>
    );
}

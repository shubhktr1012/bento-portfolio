'use client'

// import { ArrowUpRightIcon } from "./icons";
import { ArrowUpBlackIcon, ArrowUpWhiteIcon } from "./icons";
import { BentoCard } from "./BentoCard";

export const BackToTopBlock = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <BentoCard
            className="aspect-square bg-white dark:bg-[#0d1117] flex items-center justify-center cursor-pointer group relative overflow-hidden shrink-0"
        >
            <div
                className="flex items-center justify-center h-full w-full no-drag"
                onClick={scrollToTop}
            >
                <ArrowUpBlackIcon size={64} className="dark:hidden" />
                <ArrowUpWhiteIcon size={64} className="hidden dark:block" />
            </div>
        </BentoCard>
    );
}

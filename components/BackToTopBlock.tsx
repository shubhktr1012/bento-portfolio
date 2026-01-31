"use client";

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
    <BentoCard className="aspect-square bg-white dark:bg-[#0d1117] flex items-center justify-center cursor-pointer group relative overflow-hidden shrink-0">
      <button
        type="button"
        className="flex items-center justify-center h-full w-full no-drag cursor-pointer"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUpBlackIcon className="dark:hidden" size={64} />
        <ArrowUpWhiteIcon className="hidden dark:block" size={64} />
      </button>
    </BentoCard>
  );
};

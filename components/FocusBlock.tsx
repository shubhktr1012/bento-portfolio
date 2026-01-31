'use client'

import { BentoCard } from "./BentoCard";
import NextLink from "next/link";
import { GithubIcon } from "./icons";
import { Image } from "@heroui/react";

export const FocusBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white dark:bg-[#0d1117] shrink-0">
            <div className="xl:px-4 flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="https://github.com/shubhktr1012"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon
                            className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
                        />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <Image src="/current_focus.png" alt="Focus Icon" width={12} height={12} />
                        <h2 className="text-[10px] md:text-[12px] xl:text-[16px] font-sf-pro-medium text-[#7ED699] tracking-wide">Current Focus</h2>
                    </div>
                    <h1 className="text-lg md:text-lg xl:text-3xl font-moranga text-black dark:text-white">App Development</h1>
                    <h3 className="text-[10px] md:text-[12px] xl:text-[16px] font-sf-pro text-black dark:text-white tracking-wide">Recovery Compass</h3>
                </div>
            </div>
        </BentoCard>
    );
}
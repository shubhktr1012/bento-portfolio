'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import NextLink from "next/link";
import { LinkedInIcon } from "./icons";

export const StatusBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white">
            <div className="xl:px-4 flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink
                        className="flex justify-start items-center gap-1 relative z-20 cursor-pointer no-drag"
                        href="https://www.linkedin.com/in/shubhkhatri1209/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon
                            className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
                        />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <Image src="/Background.png" alt="Status Icon" width={12} height={12} />
                        <h2 className="text-[10px] md:text-[12px] xl:text-[16px] font-sf-pro-medium text-[#0B63BD] tracking-wide">Status</h2>
                    </div>
                    <h1 className="text-lg md:text-lg xl:text-3xl font-moranga text-black dark:text-white">Open to Work</h1>
                    <h3 className="text-[10px] md:text-[12px] xl:text-[16px] font-sf-pro text-black dark:text-white tracking-wide">Freelance & Full-Time</h3>
                </div>
            </div>
        </BentoCard>
    )
}
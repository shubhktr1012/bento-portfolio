'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import NextLink from "next/link";
import { LinkedInIcon } from "./icons";

export const StatusBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white">
            <div className="md:px-4 flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="https://www.linkedin.com/in/shubhkhatri1209/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon
                            className="md:w-10 md:h-10 lg:w-12 lg:h-12"
                        />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <Image src="/Background.png" alt="Status Icon" width={12} height={12} />
                        <h2 className="text-[10px] md:text-[12px] font-sf-pro-medium text-[#0B63BD] tracking-wide">Status</h2>
                    </div>
                    <h1 className="text-lg md:text-xl font-moranga text-black">Open to Work</h1>
                    <h3 className="text-[10px] md:text-[12px] font-sf-pro text-text-black tracking-wide">Freelance & Full-Time</h3>
                </div>
            </div>
        </BentoCard>
    )
}
'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import NextLink from "next/link";
import { LinkedInIcon } from "./icons";

export const StatusBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white h-auto shrink-0">
            <div className="flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <LinkedInIcon />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <Image src="/Background.png" alt="Status Icon" width={12} height={12} />
                        <h2 className="text-xs font-sf-pro-medium text-[#0B63BD] tracking-wide">Status</h2>
                    </div>
                    <h1 className="text-md font-moranga text-black">Open to Work</h1>
                    <h3 className="text-xs font-sf-pro text-text-black tracking-wide">Freelance & Full-Time</h3>
                </div>
            </div>
        </BentoCard>
    )
}
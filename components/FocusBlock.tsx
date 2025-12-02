'use client'

import { BentoCard } from "./BentoCard";
import NextLink from "next/link";
import { GithubIcon } from "./icons";
import { Image } from "@heroui/react";

export const FocusBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white h-auto shrink-0">
            <div className="flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <GithubIcon />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <Image src="/current_focus.png" alt="Focus Icon" width={12} height={12} />
                        <h2 className="text-[10px] font-sf-pro-medium text-[#7ED699] tracking-wide">Current Focus</h2>
                    </div>
                    <h1 className="text-lg font-moranga text-black">Building SaaS</h1>
                    <h3 className="text-[10px] font-sf-pro text-text-black tracking-wide">Ferrals Co. (MVP)</h3>
                </div>
            </div>
        </BentoCard>
    );
}
'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import NextLink from "next/link";
import { MusicIcon } from "./icons";
import { motion } from "framer-motion";

export const MusicBlock = () => {
    return (
        <BentoCard className="xxs:aspect-square sm:aspect-square max-[1199px]:min-[740px]:aspect-auto max-[1199px]:min-[740px]:h-full bg-white dark:bg-[#0d1117]">
            <div className="md:px-4 flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink
                        className="flex justify-start items-center gap-1"
                        href="https://music.apple.com/in/album/no-idea/1465000156?i=1465000157"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MusicIcon
                            className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12"
                        />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <div className="flex items-end gap-0.5 h-4">
                            <motion.div
                                animate={{ height: ["20%", "100%", "20%"] }}
                                transition={{ repeat: Infinity, ease: "easeInOut", duration: 0.85 }}
                                className="w-[3px] bg-[#fe5263] rounded-full"
                            />
                            <motion.div
                                animate={{ height: ["20%", "100%", "20%"] }}
                                transition={{ repeat: Infinity, ease: "easeInOut", duration: 1.26 }}
                                className="w-[3px] bg-[#fe5263] rounded-full"
                            />
                            <motion.div
                                animate={{ height: ["20%", "100%", "20%"] }}
                                transition={{ repeat: Infinity, ease: "easeInOut", duration: 0.62 }}
                                className="w-[3px] bg-[#fe5263] rounded-full"
                            />
                        </div>
                        <h2 className="text-[10px] md:text-[12px] xl:text-[16px] font-sf-pro-medium text-[#FE5263] tracking-wide">On Repeat</h2>
                    </div>
                    <h1 className="text-lg md:text-lg xl:text-3xl font-moranga text-black dark:text-white">No Idea</h1>
                    <h3 className="text-[10px] md:text-[12px] xl:text-[16px] font-sf-pro text-black dark:text-white tracking-wide">Don Toliver</h3>
                </div>
            </div>
        </BentoCard>
    )
}
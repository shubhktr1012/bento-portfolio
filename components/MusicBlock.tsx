'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";
import NextLink from "next/link";
import { MusicIcon } from "./icons";
import { motion } from "framer-motion";

export const MusicBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white h-auto shrink-0">
            <div className="flex flex-col justify-around h-full">
                <div className="flex justify-start items-start">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <MusicIcon />
                    </NextLink>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-1.5">
                        <div className="flex items-end gap-0.5 h-3">
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
                        <h2 className="text-xs font-sf-pro-medium text-[#FE5263] tracking-wide">On Repeat</h2>
                    </div>
                    <h1 className="text-md font-moranga text-black">No Idea</h1>
                    <h3 className="text-xs font-sf-pro text-text-black tracking-wide">Don Toliver</h3>
                </div>
            </div>
        </BentoCard>
    )
}
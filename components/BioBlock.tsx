'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";

export const BioBlock = () => {
    return (
        <BentoCard className="aspect-square lg:aspect-auto">
            <div className="flex flex-col justify-around h-full md:px-2">
                <div className="flex justify-around items-start md:justify-between">
                    <Image
                        removeWrapper
                        alt="Memoji"
                        className="z-0 w-25 h-25 md:w-25 md:h-25"
                        src="/pfp.svg"
                    />
                    <h2 className="text-sm md:text-md font-moranga text-gray-400 tracking-wide">shubh12khatri@gmail.com</h2>
                </div>
                <div className="px-4">
                    <p className="font-sf-pro text-md md:text-lg tracking-wide md:tracking-wider text-black dark:text-white">
                        I’m <span className="font-moranga text-2xl md:text-3xl">shubh</span>,  and Full Stack Developer
                        and Growth Engineer from India. I’m interested in Next.js, Python, Marketing Automation,
                        Startups, Esports, and
                        Music.
                    </p>
                </div>
            </div>
        </BentoCard>
    )

}
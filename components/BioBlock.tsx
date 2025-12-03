'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";

export const BioBlock = () => {
    return (
        <BentoCard className="aspect-square md:min-h-[376px] md:max-h-[376px] max-[1199px]:min-[740px]:min-w-[376px] max-[1199px]:min-[740px]:max-w-[376px] ">
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
                    <p className="font-sf-pro text-md md:text-lg tracking-wide md:tracking-wider">
                        I’m <span className="font-moranga text-2xl md:text-3xl">shubh</span>, a developer and product designer
                        from India. I’m interested in React, Node, Product
                        Design, Jamstack, Startups, Cryptocurrencies and
                        Music.
                    </p>
                </div>
            </div>
        </BentoCard>
    )

}
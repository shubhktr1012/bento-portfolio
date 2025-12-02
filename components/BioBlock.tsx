'use client'

import { BentoCard } from "./BentoCard";
import { Image } from "@heroui/react";

export const BioBlock = () => {
    return (
        <BentoCard className="aspect-square">
            <div className="flex flex-col justify-around h-full">
                <div className="flex justify-around items-start">
                    <Image
                        removeWrapper
                        alt="Memoji"
                        className="z-0 w-25 h-25"
                        src="/pfp.svg"
                    />
                    <h2 className="text-sm font-moranga text-gray-400 tracking-wide">shubh12khatri@gmail.com</h2>
                </div>
                <div className="px-4">
                    <p className="font-sf-pro text-lg tracking-wide">
                        I’m <span className="font-moranga text-3xl">shubh</span>, a developer and product designer
                        from India. I’m interested in React, Node, Product
                        Design, Jamstack, Startups, Cryptocurrencies and
                        Music.
                    </p>
                </div>
            </div>
        </BentoCard>
    )

}
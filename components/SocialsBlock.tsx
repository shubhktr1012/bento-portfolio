'use client'

import { BentoCard } from "./BentoCard";
import Image from "next/image";
import { InstagramIcon } from "./icons";

export const SocialsBlock = () => {
    return (
        <BentoCard className="aspect-square h-auto shrink-0 group relative overflow-hidden">
            <Image
                src="/Instagram.jpeg"
                alt="Instagram"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-colors duration-500" />
            <div className="relative flex flex-col justify-center items-center h-full z-10">
                <InstagramIcon size={56} />
            </div>
        </BentoCard>
    )
}
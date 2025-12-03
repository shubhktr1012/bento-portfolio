'use client'

import { BentoCard } from "./BentoCard";
import Image from "next/image";
import { InstagramIcon } from "./icons";
import NextLink from "next/link";

export const SocialsBlock = () => {
    return (
        <BentoCard className="aspect-square shrink-0 group relative overflow-hidden">
            <Image
                src="/Instagram.jpeg"
                alt="Instagram"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-colors duration-500" />
            <div className="relative flex flex-col justify-center items-center h-full z-10">
                <NextLink href="https://www.instagram.com/shubh_khatri10" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon
                        className="w-16 h-16 lg:w-24 lg:h-24"
                    />
                </NextLink>
            </div>
        </BentoCard>
    )
}
'use client'

import { BentoCard } from "./BentoCard";
import Image from "next/image";
import NextLink from "next/link";

export const SocialsBlock = () => {
    return (
        <BentoCard className="aspect-square shrink-0 group relative overflow-hidden">
            <NextLink
                href="https://www.instagram.com/shubh_khatri10"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
            >
                <Image
                    src="/instagram-logo.svg"
                    alt="Instagram"
                    width={120}
                    height={120}
                    className="object-cover object-center w-20 h-20 xl:w-32 xl:h-32"
                />
            </NextLink>
        </BentoCard>
    )
}
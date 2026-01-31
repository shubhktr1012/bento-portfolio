'use client'

import { Button } from "@heroui/button";
import { ArrowUpRightIcon, ArrowUpRightWhiteIcon } from "./icons";

import Link from "next/link";

export const InfoButton = ({ label = "View", link }: { label?: string, link?: string }) => {
    return (
        <Button
            as={link ? Link : "button"}
            href={link}
            target={link ? "_blank" : undefined}
            radius="full"
            className="no-drag bg-white dark:bg-[#0d1117] dark:border-2 dark:border-solid dark:border-[#30373d] min-w-8 h-8 p-0 border-none flex items-center justify-center gap-0 transition-[min-width,padding,gap,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:min-w-0 group-hover:w-auto group-hover:px-3 group-hover:gap-2 group-hover:ring-6 group-hover:ring-white/60 overflow-hidden"
        >
            <ArrowUpRightIcon size={12} className="shrink-0 dark:hidden" />
            <ArrowUpRightWhiteIcon size={12} className="shrink-0 hidden dark:block" />
            <span className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[100px] transition-[max-width,opacity] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] text-xs font-medium whitespace-nowrap text-black dark:text-white font-sf-pro overflow-hidden">
                {label}
            </span>
        </Button>
    );
}

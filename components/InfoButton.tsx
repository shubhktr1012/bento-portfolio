'use client'

import { Button } from "@heroui/button";
import { ArrowUpRightIcon } from "./icons";

export const InfoButton = ({ label = "View" }: { label?: string }) => {
    return (
        <Button
            radius="full"
            className="bg-white min-w-8 h-8 p-0 border-none flex items-center justify-center gap-0 transition-[min-width,padding,gap,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:min-w-0 group-hover:w-auto group-hover:px-3 group-hover:gap-2 group-hover:ring-6 group-hover:ring-white/60 overflow-hidden"
        >
            <ArrowUpRightIcon size={14} className="shrink-0" />
            <span className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-[100px] transition-[max-width,opacity] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] text-xs font-medium whitespace-nowrap text-black font-sf-pro overflow-hidden">
                {label}
            </span>
        </Button>
    );
}

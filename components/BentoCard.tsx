'use client'

import { Card, CardHeader, CardBody, CardFooter, CardProps } from "@heroui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface BentoCardProps extends CardProps {
    children: React.ReactNode;
    className?: string;
    noPadding?: boolean;
}

export const BentoCard = ({ children, className, noPadding = false, ...props }: BentoCardProps) => {
    return (
        <Card
            className={cn("h-full w-full rounded-[25px] bg-white dark:bg-[#0d1117] dark:border-2 dark:border-[#30373d] transition-shadow duration-300 hover:shadow-[0_0_28px_-9px_rgba(0,0,0,0.15)] cursor-grab active:cursor-grabbing", className)}
            shadow="none"
            radius="lg"
            {...props}
        >
            <CardBody className={noPadding ? "p-0 overflow-hidden" : "px-5 overflow-hidden"}>
                {children}
            </CardBody>
        </Card>
    )
}
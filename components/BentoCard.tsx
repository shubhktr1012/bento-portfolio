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
            className={cn("h-full w-full rounded-[25px]", className)}
            shadow="none"
            radius="lg"
            isHoverable
            {...props}
        >
            <CardBody className={noPadding ? "p-0 overflow-hidden" : "px-5 overflow-hidden"}>
                {children}
            </CardBody>
        </Card>
    )
}
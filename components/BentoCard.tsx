"use client";

import { Card, CardBody, CardProps } from "@heroui/card";
import React from "react";

import { cn } from "@/lib/utils";

interface BentoCardProps extends CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const BentoCard = ({
  children,
  className,
  noPadding = false,
  ...props
}: BentoCardProps) => {
  return (
    <Card
      className={cn(
        "h-full w-full rounded-[25px] bg-white dark:bg-[#0d1117] dark:border-2 dark:border-[#30373d] transition-shadow duration-300 hover:shadow-[0_0_28px_-9px_rgba(0,0,0,0.15)] cursor-grab active:cursor-grabbing",
        className,
      )}
      radius="lg"
      shadow="none"
      {...props}
    >
      <CardBody
        className={noPadding ? "p-0 overflow-hidden" : "px-5 overflow-hidden"}
      >
        {children}
      </CardBody>
    </Card>
  );
};

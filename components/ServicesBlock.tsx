'use client'

import { BentoCard } from "./BentoCard";
import { Divider } from "@heroui/divider";
import { NextIcon, ReactIcon, PostgresIcon, PythonIcon, GraphQLIcon, N8nIcon, ArrowUpRightIcon, ArrowUpRightWhiteIcon } from "./icons";
import NextLink from "next/link";
import { Button } from "@heroui/button";

export const ServicesBlock = () => {
    return (
        <BentoCard className="aspect-square px-4 py-4">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-start items-start h-full gap-5">
                    <h2 className="text-xl md:text-2xl font-moranga tracking-wide">Services Offered/What I do</h2>
                    <div className="flex flex justify-around w-full gap-5">
                        <div className="flex flex-col justify-start h-[80%] gap-2">
                            <div className="flex w-full gap-2">
                                <NextLink href="/">
                                    <NextIcon />
                                </NextLink>
                                <NextLink href="/">
                                    <ReactIcon />
                                </NextLink>
                                <NextLink href="/">
                                    <PostgresIcon />
                                </NextLink>
                            </div>
                            <h3 className="text-sm md:text-md font-sf-pro-medium text-gray-400">Product Engeering</h3>
                            <p className="text-md md:text-lg font-sf-pro text-black dark:text-white">Turning 0 → 1 concepts into shipping products</p>
                        </div>
                        <Divider orientation="vertical" />
                        <div className="flex flex-col justify-start h-[80%] gap-2">
                            <div className="flex w-full gap-2">
                                <NextLink href="/">
                                    <PythonIcon />
                                </NextLink>
                                <NextLink href="/">
                                    <GraphQLIcon />
                                </NextLink>
                                <NextLink href="/">
                                    <N8nIcon />
                                </NextLink>
                            </div>
                            <h3 className="text-sm md:text-md font-sf-pro-medium text-gray-400">AI Solutions</h3>
                            <p className="text-md md:text-lg font-sf-pro text-black dark:text-white">Intelligent automation &
                                RAG pipelines</p>
                        </div>
                    </div>
                </div>
                <Button
                    radius="full"
                    size="md"
                    variant="ghost"
                    startContent={<>
                        <ArrowUpRightIcon size={12} className="dark:hidden" />
                        <ArrowUpRightWhiteIcon size={12} className="hidden dark:block" />
                    </>}
                    className="no-drag self-start text-xs md:text-sm font-sf-pro bg-white dark:bg-[#0d1117] dark:text-white border-2 border-gray-300 dark:border-[#30373d]"
                >
                    Get In Touch
                </Button>
            </div>
        </BentoCard>
    )
}
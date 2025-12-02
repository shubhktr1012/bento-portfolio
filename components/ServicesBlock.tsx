'use client'

import { BentoCard } from "./BentoCard";
import { Divider } from "@heroui/divider";
import { NextIcon, ReactIcon, PostgresIcon, PythonIcon, GraphQLIcon, N8nIcon, ArrowUpRightIcon } from "./icons";
import NextLink from "next/link";
import { Button } from "@heroui/button";

export const ServicesBlock = () => {
    return (
        <BentoCard className="aspect-square px-4 py-4">
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-start items-start h-full gap-5">
                    <h2 className="text-xl font-moranga tracking-wide">Services Offered/What I do</h2>
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
                            <h3 className="text-sm font-sf-pro-medium text-gray-400">Product Engeering</h3>
                            <p className="text-md font-sf-pro text-black">Turning 0 → 1 concepts into shipping products</p>
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
                            <h3 className="text-sm font-sf-pro-medium text-gray-400">AI Solutions</h3>
                            <p className="text-md font-sf-pro text-black">Intelligent automation &
                                RAG pipelines</p>
                        </div>
                    </div>
                </div>
                <Button
                    radius="full"
                    size="sm"
                    variant="ghost"
                    startContent={<ArrowUpRightIcon />}
                    className="self-start text-xs font-sf-pro bg-white border border-gray-300"
                >
                    Get In Touch
                </Button>
            </div>
        </BentoCard>
    )
}
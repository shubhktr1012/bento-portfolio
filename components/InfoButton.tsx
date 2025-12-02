'use client'

import { Button } from "@heroui/button";
import { ArrowUpRightIcon } from "./icons";

export const InfoButton = () => {
    return (
        <Button
            isIconOnly
            radius="full"
            variant="solid"
            className="bg-white w-6 h-6 min-w-6 min-h-6"
        >
            <ArrowUpRightIcon size={12} />
        </Button>
    );
}

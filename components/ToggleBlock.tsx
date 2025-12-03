'use client'

import { BentoCard } from "./BentoCard";
import { Switch } from "@heroui/react";
import { MoonFilledIcon } from "./icons";
import { SunFilledIcon } from "./icons";

export const ToggleBlock = () => {
    return (
        <BentoCard className="aspect-square bg-white flex items-center justify-center cursor-pointer group relative overflow-hidden shrink-0">
            <div className="flex flex-col justify-center items-center h-full">
                <Switch
                    defaultSelected={false}
                    size="lg"
                    classNames={{
                        base: "scale-150",
                        wrapper: "group-data-[selected=true]:bg-black group-data-[selected=false]:bg-gray-200",
                        thumb: "bg-transparent shadow-none group-data-[selected=true]:bg-transparent",
                    }}
                    thumbIcon={({ isSelected, className }) =>
                        isSelected ? (
                            <MoonFilledIcon className={`${className} text-white`} size={22} />
                        ) : (
                            <SunFilledIcon className={`${className} text-black`} size={22} />
                        )
                    }
                />
            </div>
        </BentoCard>
    );
}

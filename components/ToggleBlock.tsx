"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MoonFilledIcon, SunFilledIcon } from "./icons";
import { BentoCard } from "./BentoCard";

export const ToggleBlock = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted)
    return (
      <BentoCard className="aspect-square bg-white flex items-center justify-center shrink-0">
        <div className="w-full h-full" />
      </BentoCard>
    );

  return (
    <BentoCard className="aspect-square bg-white flex items-center justify-center cursor-pointer group relative overflow-hidden shrink-0">
      <div className="flex flex-col justify-center items-center h-full">
        <Switch
          className="no-drag"
          classNames={{
            base: "scale-150",
            wrapper:
              "group-data-[selected=true]:bg-zinc-800 group-data-[selected=false]:bg-gray-200",
            thumb:
              "bg-transparent shadow-none group-data-[selected=true]:bg-transparent",
          }}
          isSelected={resolvedTheme === "dark"}
          size="lg"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <MoonFilledIcon className={`${className} text-white`} size={22} />
            ) : (
              <SunFilledIcon className={`${className} text-black`} size={22} />
            )
          }
          onValueChange={(isSelected) =>
            setTheme(isSelected ? "dark" : "light")
          }
        />
      </div>
    </BentoCard>
  );
};

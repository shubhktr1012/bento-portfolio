'use client'

import { BioBlock } from "@/components/BioBlock";
import { ProjectBlock } from "@/components/ProjectBlock";
import { LocationBlock } from "@/components/LocationBlock";
import { SocialsBlock } from "@/components/SocialsBlock";
import { Project1 } from "@/components/Project1";
import { Project2 } from "@/components/Project2";
import { StatusBlock } from "@/components/StatusBlock";
import { MusicBlock } from "@/components/MusicBlock";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 max-w-[400px] mx-auto">
      <BioBlock />
      <LocationBlock />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <SocialsBlock />
          <Project2 />
          <MusicBlock />
        </div>
        <div className="flex flex-col gap-4">
          <Project1 />
          <StatusBlock />
        </div>
      </div>
    </div>
  );
}

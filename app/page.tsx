'use client'

import { BioBlock } from "@/components/BioBlock";
import { ProjectBlock } from "@/components/ProjectBlock";
import { LocationBlock } from "@/components/LocationBlock";
import { SocialsBlock } from "@/components/SocialsBlock";
import { Project1 } from "@/components/Project1";
import { Project2 } from "@/components/Project2";
import { StatusBlock } from "@/components/StatusBlock";
import { MusicBlock } from "@/components/MusicBlock";
import { Website1 } from "@/components/Website1";
import { Website2 } from "@/components/Website2";
import { FocusBlock } from "@/components/FocusBlock";
import { ServicesBlock } from "@/components/ServicesBlock";
import { Website3 } from "@/components/Website3";
import { ToggleBlock } from "@/components/ToggleBlock";
import { BackToTopBlock } from "@/components/BackToTopBlock";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-950">
      <div className="mx-auto max-w-[1200px]">
        <BentoGrid />
      </div>
    </main>
  );
}

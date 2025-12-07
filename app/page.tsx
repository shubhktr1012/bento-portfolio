'use client'

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

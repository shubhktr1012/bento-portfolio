'use client'

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '@/styles/grid-overrides.css';
import { addToast } from "@heroui/toast";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useFilter } from "@/context/filter-context";
import { BioBlock } from "./BioBlock";
import { LocationBlock } from "./LocationBlock";
import { Project1 } from "./Project1";
import { Project2 } from "./Project2";
import { MusicBlock } from "./MusicBlock";
import { Website1 } from "./Website1";
import { StatusBlock } from "./StatusBlock";
import { SocialsBlock } from "./SocialsBlock";
import { ToggleBlock } from "./ToggleBlock";
import { Website2 } from "./Website2";
import { ServicesBlock } from "./ServicesBlock";
import { Website3 } from "./Website3";
import { FocusBlock } from "./FocusBlock";
import { BackToTopBlock } from "./BackToTopBlock";
import { layouts } from "@/config/layout-config";
import { useState, useEffect } from "react";


const ResponsiveGridLayout = WidthProvider(Responsive);

const rowHeights: { [key: string]: number } = {
    lg: 280,
    md: 183,
    sm: 165,
    xxs: 165,
};

const margins: { [key: string]: [number, number] } = {
    lg: [15, 15],
    md: [15, 15],
    sm: [10, 10],
    xxs: [10, 10],
};

const BLOCK_CATEGORIES: Record<string, string[]> = {
    About: ['bio', 'location', 'services'],
    Projects: ['website1', 'website2', 'website3', 'project1', 'project2'],
    Media: ['music', 'status', 'socials', 'focus'],
};

const columns: { [key: string]: number } = {
    lg: 4,
    md: 4,
    sm: 2,
    xxs: 2,
};

export const BentoGrid = () => {
    const { activeCategory } = useFilter();
    const [width, setWidth] = useState(0);
    const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");

    // Helper to determine if a block is active
    const isBlockActive = (blockKey: string) => {
        if (activeCategory === 'All') return true;
        return BLOCK_CATEGORIES[activeCategory]?.includes(blockKey);
    };

    // Helper to generate sorted layout based on active category
    const getSortedLayouts = () => {
        if (activeCategory === 'All') return layouts;

        const activeKeys = BLOCK_CATEGORIES[activeCategory] || [];
        const newLayouts = { ...layouts };

        (Object.keys(newLayouts) as Array<keyof typeof layouts>).forEach((bp) => {
            const bpLayout = newLayouts[bp];
            // Sort: active blocks come first
            const sorted = [...bpLayout].sort((a, b) => {
                const aActive = activeKeys.includes(a.i);
                const bActive = activeKeys.includes(b.i);
                if (aActive && !bActive) return -1;
                if (!aActive && bActive) return 1;
                return 0; // Maintain relative order otherwise
            });

            // Re-assign (x, y) to compact them at the top
            // Note: Simplistic compaction. For true masonry, react-grid-layout needs to re-process.
            // Since we can't easily re-calculate positions manually without complex logic,
            // we will let them sort but might rely on RGL's compacting.
            // However, simply changing the order in the array doesn't change position if x/y are hardcoded.
            // We need to essentially "reset" y for active blocks to 0 and let RGL handle it,
            // OR manually swap positions.

            // BETTER APPROACH for visuals without breaking layout state:
            // Just let `opacity` handle the "dimming". Reordering might be too jarring or complex to get right instantly.
            // User asked: "rearrange in a way that they come up... rest go down"

            // To achieve "come up", we can try to give them y=0 and others y=Infinity, then let RGL repack.
            newLayouts[bp] = sorted.map((item, index) => {
                const isActive = activeKeys.includes(item.i);
                if (isActive) {
                    return { ...item, y: 0, x: index % (columns[bp] || 4) }; // naive reset to force float up
                }
                return { ...item, y: 100 }; // force down
            });
        });

        // Actually, react-grid-layout is static unless we enable gravity.
        // If we modify layouts, we must pass new layout objects.
        // A safer bet for "reordering" without writing a packing algorithm is to just filter?
        // But user wants "rest go down and dimmed".

        return newLayouts;
    };

    // For now, let's implement the dimming and the visual "filtering".
    // True reordering requires a layout engine update or pre-defined layouts for each category.
    // Given the complexity of "rearrange", I'll implement dimming first as it's safer.
    // Use `isBlockActive` to set opacity.

    // 2. Update width on mount and resize
    useEffect(() => {
        // Set initial width
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        // Show toast after a small delay to ensure hydration
        const timer = setTimeout(() => {
            addToast({
                title: "Try dragging the blocks!",
                description: "Reorder the grid to your liking.",
                color: "default",
                classNames: {
                    base: "bg-white dark:bg-[#0d1117] border-1 border-white/20 shadow-[0_0_28px_-9px_rgba(0,0,0,0.15)] rounded-[20px]",
                    title: "font-moranga text-black dark:text-white text-lg",
                    description: "font-sf-pro text-gray-600 dark:text-gray-400 text-sm",
                    icon: "text-black dark:text-white",
                }
            });
        }, 1500);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, []);

    // 3. Prevent Hydration Mismatch (Optional but recommended)
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const computedLayouts = getSortedLayouts();

    return (
        <div className="mx-auto max-[739px]:w-[376px] min-[740px]:max-[1199px]:w-[762px]">
            <ResponsiveGridLayout
                layouts={computedLayouts}
                breakpoints={{ lg: 1180, md: 740, sm: 600, xxs: 0 }}
                cols={columns}
                margin={margins}
                draggableCancel=".no-drag"
                isDraggable={width > 800}
                isResizable={false}
                rowHeight={rowHeights[currentBreakpoint]}
                onBreakpointChange={(newBreakpoint) => setCurrentBreakpoint(newBreakpoint)}
                className="layout"
            >
                <div key="bio" className={`select-none transition-all duration-500 ${isBlockActive('bio') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><BioBlock /></div>
                <div key="location" className={`select-none transition-all duration-500 ${isBlockActive('location') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><LocationBlock /></div>
                <div key="project1" className={`select-none transition-all duration-500 ${isBlockActive('project1') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><Project1 /></div>
                <div key="project2" className={`select-none transition-all duration-500 ${isBlockActive('project2') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><Project2 /></div>
                <div key="music" className={`select-none transition-all duration-500 ${isBlockActive('music') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><MusicBlock /></div>
                <div key="website1" className={`select-none transition-all duration-500 ${isBlockActive('website1') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><Website1 /></div>
                <div key="status" className={`select-none transition-all duration-500 ${isBlockActive('status') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><StatusBlock /></div>
                <div key="socials" className={`select-none transition-all duration-500 ${isBlockActive('socials') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><SocialsBlock /></div>
                <div key="toggle" className={`select-none transition-all duration-500 ${isBlockActive('toggle') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><ToggleBlock /></div>
                <div key="website2" className={`select-none transition-all duration-500 ${isBlockActive('website2') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><Website2 /></div>
                <div key="services" className={`select-none transition-all duration-500 ${isBlockActive('services') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><ServicesBlock /></div>
                <div key="website3" className={`select-none transition-all duration-500 ${isBlockActive('website3') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><Website3 /></div>
                <div key="focus" className={`select-none transition-all duration-500 ${isBlockActive('focus') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><FocusBlock /></div>
                <div key="backToTop" className={`select-none transition-all duration-500 ${isBlockActive('backToTop') ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}><BackToTopBlock /></div>
            </ResponsiveGridLayout>
        </div>
    );
}

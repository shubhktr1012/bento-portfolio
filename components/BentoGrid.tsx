'use client'

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '@/styles/grid-overrides.css';
import { Responsive, WidthProvider } from "react-grid-layout";
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

export const BentoGrid = () => {
    const [width, setWidth] = useState(0);
    const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");

    // 2. Update width on mount and resize
    useEffect(() => {
        // Set initial width
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 3. Prevent Hydration Mismatch (Optional but recommended)
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="mx-auto max-[739px]:w-[376px] min-[740px]:max-[1199px]:w-[762px]">
            <ResponsiveGridLayout
                key={JSON.stringify(layouts)}
                layouts={layouts}
                breakpoints={{ lg: 1180, md: 740, sm: 600, xxs: 0 }}
                cols={{ lg: 4, md: 4, sm: 2, xxs: 2 }}
                margin={margins}
                isDraggable={width > 800}
                isResizable={false}
                rowHeight={rowHeights[currentBreakpoint]}
                onBreakpointChange={(newBreakpoint) => setCurrentBreakpoint(newBreakpoint)}
                className="layout"
            >
                <div key="bio"><BioBlock /></div>
                <div key="location"><LocationBlock /></div>
                <div key="project1"><Project1 /></div>
                <div key="project2"><Project2 /></div>
                <div key="music"><MusicBlock /></div>
                <div key="website1"><Website1 /></div>
                <div key="status"><StatusBlock /></div>
                <div key="socials"><SocialsBlock /></div>
                <div key="toggle"><ToggleBlock /></div>
                <div key="website2"><Website2 /></div>
                <div key="services"><ServicesBlock /></div>
                <div key="website3"><Website3 /></div>
                <div key="focus"><FocusBlock /></div>
                <div key="backToTop"><BackToTopBlock /></div>
            </ResponsiveGridLayout>
        </div>
    );
}

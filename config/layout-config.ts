const mobileLayout = [
    // --- TOP STACK (Full Width) ---
    { i: 'bio', x: 0, y: 0, w: 2, h: 2 },       // Spans full width
    { i: 'location', x: 0, y: 2, w: 2, h: 1 },  // Spans full width

    // --- THE 2-COLUMN SPLIT ---
    // LEFT COLUMN (x: 0)
    { i: 'socials', x: 0, y: 3, w: 1, h: 1 },
    { i: 'project2', x: 0, y: 4, w: 1, h: 2 },  // Assuming height 2 for projects
    { i: 'music', x: 0, y: 6, w: 1, h: 1 },
    { i: 'website2', x: 0, y: 7, w: 1, h: 1 },

    // RIGHT COLUMN (x: 1) - Starts at same Y as Left Column
    { i: 'project1', x: 1, y: 3, w: 1, h: 2 },  // Starts at Y:3, parallel to Socials
    { i: 'status', x: 1, y: 5, w: 1, h: 1 },
    { i: 'website1', x: 1, y: 6, w: 1, h: 1 },
    { i: 'toggle', x: 1, y: 7, w: 1, h: 1 },

    // --- SERVICES (Full Width) ---
    // Y position = roughly 8 (after the split section ends)
    { i: 'services', x: 0, y: 8, w: 2, h: 2 },

    // --- BOTTOM GRID ---
    { i: 'website3', x: 0, y: 10, w: 1, h: 1 },
    { i: 'focus', x: 1, y: 10, w: 1, h: 1 },

    // Note: In your JSX, BackToTop is inside a grid-cols-2 div. 
    // Standard grid flow puts it on the next row, Left side.
    { i: 'backToTop', x: 0, y: 11, w: 1, h: 1 },
];

export const layouts = {
    lg: [
        { i: 'bio', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'project1', x: 3, y: 0, w: 1, h: 2 },
        { i: 'project2', x: 2, y: 1, w: 1, h: 2 },
        { i: 'music', x: 0, y: 2, w: 2, h: 1 },
        { i: 'website1', x: 0, y: 3, w: 1, h: 1 },
        { i: 'status', x: 1, y: 3, w: 1, h: 1 },
        { i: 'socials', x: 2, y: 3, w: 1, h: 1 },
        { i: 'toggle', x: 3, y: 2, w: 1, h: 1 },
        { i: 'website2', x: 3, y: 3, w: 1, h: 1 },
        { i: 'services', x: 0, y: 4, w: 2, h: 2 },
        { i: 'website3', x: 2, y: 4, w: 1, h: 1 },
        { i: 'focus', x: 3, y: 4, w: 1, h: 1 },
        { i: 'backToTop', x: 2, y: 5, w: 2, h: 1 },
    ],
    md: [
        // Tablet View (4 columns wide)
        { i: 'bio', x: 0, y: 0, w: 2, h: 2 },
        { i: 'location', x: 2, y: 0, w: 1, h: 1 },
        { i: 'project1', x: 3, y: 0, w: 1, h: 2 },
        { i: 'project2', x: 2, y: 1, w: 1, h: 2 },
        { i: 'music', x: 0, y: 2, w: 2, h: 1 },
        { i: 'website1', x: 0, y: 3, w: 1, h: 1 },
        { i: 'status', x: 1, y: 3, w: 1, h: 1 },
        { i: 'socials', x: 2, y: 3, w: 1, h: 1 },
        { i: 'toggle', x: 3, y: 2, w: 1, h: 1 },
        { i: 'website2', x: 3, y: 3, w: 1, h: 1 },
        { i: 'services', x: 0, y: 4, w: 2, h: 2 },
        { i: 'website3', x: 2, y: 4, w: 1, h: 1 },
        { i: 'focus', x: 3, y: 4, w: 1, h: 1 },
        { i: 'backToTop', x: 2, y: 5, w: 1, h: 1 },
    ],
    sm: mobileLayout,
    xxs: mobileLayout
}
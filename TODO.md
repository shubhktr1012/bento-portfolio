# Scheduled Fixes & Todos

## High Priority
- [ ] **SocialsBlock Click/Drag Conflict**: The `SocialsBlock` (Instagram link) is difficult to click because `react-grid-layout` interprets clicks as drag attempts. 
    - *Proposed Fix*: Add `draggableCancel=".no-drag"` to the `ResponsiveGridLayout` in `BentoGrid.tsx` and add the `no-drag` class to the `NextLink` in `SocialsBlock.tsx`.
- [ ] **Mobile Layout Verification**: Investigate and fix layout issues that occur specifically when viewing the site on an actual mobile device (vs. desktop resize).

## Medium Priority
- [ ] **Icon & Logo Consistency**: Ensure all logos and icons have consistent sizing across all breakpoints (mobile, tablet, desktop).
- [ ] **Dark Mode Theme**: Begin implementation and refinement of the dark mode theme across the application.


## Low Priority
- 

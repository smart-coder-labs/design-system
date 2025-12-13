import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils';
/**
 * MasonryLayout: Apple-minimal masonry grid
 * - Responsive, fluid columns
 * - Animaciones suaves al reordenar
 * - Accesible y configurable
 */
export const MasonryLayout = ({ children, columns = 3, gap = 16, className, style, }) => {
    // Distribute children into columns
    const columnItems = Array.from({ length: columns }, () => []);
    children.forEach((child, i) => {
        columnItems[i % columns].push(child);
    });
    return (_jsx("div", { className: cn('w-full flex', className), style: { gap, ...style }, role: "list", children: columnItems.map((items, colIdx) => (_jsx("div", { className: "flex-1 flex flex-col", style: { gap }, role: "listitem", children: items }, colIdx))) }));
};
//# sourceMappingURL=MasonryLayout.js.map
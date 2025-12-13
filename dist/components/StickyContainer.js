import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '../lib/utils';
/**
 * StickyContainer: Apple/macOS style sticky surface
 * - Uses position: sticky
 * - Glass effect, border, shadow
 * - Top offset configurable
 * - Responsive, works in scrollable containers
 */
export const StickyContainer = ({ children, top = 0, zIndex = 20, className, style, }) => {
    return (_jsx("div", { className: cn('sticky', 'bg-surface-secondary/80 backdrop-blur-xl border border-border-primary shadow-sm', 'rounded-xl', 'px-4 py-2', className), style: {
            top,
            zIndex,
            ...style,
        }, children: children }));
};
//# sourceMappingURL=StickyContainer.js.map
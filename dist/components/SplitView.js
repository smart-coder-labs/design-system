import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
import { ResizablePanel } from './ResizablePanel';
/**
 * SplitView (macOS Finder style):
 * - Left panel resizable
 * - Right panel fills remaining space
 * - Glass effect, subtle border, shadow
 * - Responsive, mobile stacks panels
 */
export const SplitView = ({ left, right, initialLeftSize = '320px', minLeftSize = 200, maxLeftSize = 600, className, style, }) => {
    return (_jsxs("div", { className: cn('relative flex h-full w-full bg-background', 'rounded-xl shadow-lg border border-border-primary overflow-hidden', 'md:flex-row flex-col', className), style: style, children: [_jsx(ResizablePanel, { initialSize: initialLeftSize, minSize: minLeftSize, maxSize: maxLeftSize, direction: "horizontal", className: cn('bg-surface-secondary/80 backdrop-blur-xl border-r border-border-primary', 'transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]', 'flex-shrink-0'), style: { minHeight: 0 }, children: _jsx("div", { className: "h-full w-full p-6 flex flex-col gap-4", children: left }) }), _jsx("div", { className: "flex-1 h-full w-full bg-background p-6 flex flex-col gap-4", children: right })] }));
};
//# sourceMappingURL=SplitView.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../lib/utils';
export const Counters = ({ items, className, compact = false }) => {
    return (_jsx("section", { "aria-label": "Counters", className: cn('w-full rounded-2xl overflow-hidden', 'bg-accent-blue', className), children: _jsx("div", { className: cn('flex items-stretch', compact ? 'py-4' : 'py-8 px-6'), children: items.map((it, idx) => (_jsxs("div", { className: cn('flex-1 flex flex-col items-center justify-center text-center', 
                // add separators except on last
                idx < items.length - 1 ? 'border-r border-white/12' : ''), tabIndex: 0, role: "group", "aria-label": `${it.label} ${it.value}`, children: [_jsx("div", { className: cn('text-3xl md:text-4xl lg:text-5xl font-extrabold text-white'), children: it.value }), _jsx("div", { className: "mt-2 text-sm text-white/90", children: it.label }), it.subtitle && _jsx("div", { className: "mt-1 text-xs text-white/80", children: it.subtitle })] }, idx))) }) }));
};
export default Counters;
//# sourceMappingURL=Counters.js.map
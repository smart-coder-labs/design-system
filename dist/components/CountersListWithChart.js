import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { cn } from '../lib/utils';
import Chart from './Chart';
export const CountersListWithChart = ({ title, items, chartType = 'donut', className, }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    // Prepare chart data
    const chartData = {
        labels: items.map(i => i.label),
        datasets: [
            {
                data: items.map(i => i.value),
                backgroundColor: items.map(i => i.color || '#3b82f6'),
            },
        ],
    };
    return (_jsxs("div", { className: cn('bg-surface-primary rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6', className), children: [_jsxs("div", { className: "flex-1 flex flex-col gap-4 justify-center", children: [title && _jsx("h3", { className: "text-lg font-semibold text-text-primary mb-2", children: title }), items.map((item, idx) => {
                        const isActive = activeIndex === idx;
                        return (_jsxs("div", { className: cn('flex items-center justify-between py-2 border-b last:border-b-0 transition-colors', isActive ? 'bg-surface-secondary/80 rounded-lg px-3' : 'border-gray-800'), onMouseEnter: () => setActiveIndex(idx), onMouseLeave: () => setActiveIndex(null), onFocus: () => setActiveIndex(idx), onBlur: () => setActiveIndex(null), tabIndex: 0, role: "button", "aria-pressed": isActive, children: [_jsx("span", { className: cn('text-base font-medium', isActive ? 'text-text-primary' : 'text-text-primary'), children: item.label }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("span", { className: cn('text-xl font-bold', isActive ? 'text-text-primary' : 'text-text-primary'), children: item.value }), _jsxs("span", { className: "text-base font-semibold", style: { color: item.color || '#3b82f6' }, children: [item.percent, "%"] })] })] }, idx));
                    })] }), _jsx("div", { className: "flex items-center justify-center md:w-1/3", children: _jsx(Chart, { type: chartType, data: chartData, activeIndex: activeIndex, onSliceHover: (i) => setActiveIndex(i) }) })] }));
};
//# sourceMappingURL=CountersListWithChart.js.map
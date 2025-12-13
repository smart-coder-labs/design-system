import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Sparkline = ({ data, width = 100, height = 30, color, fillColor, strokeWidth = 2, showArea = false, showDots = false, showLastDot = true, trend, className = '', }) => {
    if (!data || data.length === 0) {
        return null;
    }
    // Determine trend if not provided
    const calculatedTrend = trend || (data[data.length - 1] >= data[0] ? 'up' : 'down');
    // Default colors based on trend
    const defaultColor = calculatedTrend === 'up'
        ? 'rgb(52, 199, 89)' // status-success
        : calculatedTrend === 'down'
            ? 'rgb(255, 59, 48)' // status-error
            : 'rgb(0, 122, 255)'; // accent-blue
    const strokeColor = color || defaultColor;
    const areaColor = fillColor || (calculatedTrend === 'up'
        ? 'rgba(52, 199, 89, 0.1)'
        : calculatedTrend === 'down'
            ? 'rgba(255, 59, 48, 0.1)'
            : 'rgba(0, 122, 255, 0.1)');
    // Calculate min and max values
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1; // Avoid division by zero
    // Calculate points
    const points = data.map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return { x, y, value };
    });
    // Create path for line
    const linePath = points
        .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x},${point.y}`)
        .join(' ');
    // Create path for area (if enabled)
    const areaPath = showArea
        ? `${linePath} L ${width},${height} L 0,${height} Z`
        : '';
    return (_jsxs("svg", { width: width, height: height, className: `sparkline ${className}`, style: { display: 'block' }, children: [showArea && (_jsx("path", { d: areaPath, fill: areaColor, stroke: "none" })), _jsx("path", { d: linePath, fill: "none", stroke: strokeColor, strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" }), showDots && points.map((point, index) => (_jsx("circle", { cx: point.x, cy: point.y, r: strokeWidth, fill: strokeColor }, index))), showLastDot && points.length > 0 && (_jsx("g", { children: _jsx("circle", { cx: points[points.length - 1].x, cy: points[points.length - 1].y, r: strokeWidth * 2, fill: "white", stroke: strokeColor, strokeWidth: strokeWidth }) }))] }));
};
export default Sparkline;
//# sourceMappingURL=Sparkline.js.map
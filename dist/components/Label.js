import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from './Text';
export const Label = ({ children, className = '', htmlFor, required, ...props }) => {
    return (_jsxs(Text, { as: "label", variant: "small", weight: "medium", color: "primary", className: `block mb-1.5 select-none ${className}`, ...props, 
        // @ts-ignore - htmlFor is valid for label element
        htmlFor: htmlFor, children: [children, required && _jsx("span", { className: "text-status-error ml-1", children: "*" })] }));
};
Label.displayName = 'Label';
//# sourceMappingURL=Label.js.map
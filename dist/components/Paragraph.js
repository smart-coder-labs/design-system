import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from './Text';
export const Paragraph = ({ children, className = '', variant = 'body', color = 'secondary', ...props }) => {
    return (_jsx(Text, { as: "p", variant: variant, color: color, className: `mb-4 ${className}`, ...props, children: children }));
};
Paragraph.displayName = 'Paragraph';
//# sourceMappingURL=Paragraph.js.map
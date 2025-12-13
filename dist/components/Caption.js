import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from './Text';
export const Caption = ({ children, className = '', ...props }) => {
    return (_jsx(Text, { as: "p", variant: "tiny", color: "tertiary", className: className, ...props, children: children }));
};
Caption.displayName = 'Caption';
//# sourceMappingURL=Caption.js.map
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Quote } from 'lucide-react';
import { Text } from './Text';
export const Blockquote = ({ children, author, source, className = '', }) => {
    return (_jsxs("figure", { className: `relative pl-6 border-l-4 border-accent-blue/30 ${className}`, children: [_jsx("div", { className: "absolute -top-3 -left-3.5 bg-background-primary p-1 rounded-full", children: _jsx(Quote, { className: "w-5 h-5 text-accent-blue fill-accent-blue/10" }) }), _jsx("blockquote", { className: "mb-3 pt-1", children: _jsxs(Text, { variant: "lead", italic: true, color: "secondary", className: "!leading-relaxed", children: ["\"", children, "\""] }) }), (author || source) && (_jsxs("figcaption", { className: "flex items-center gap-2 text-sm pl-1", children: [_jsx("div", { className: "w-6 h-[1px] bg-border-primary" }), author && _jsx("span", { className: "font-semibold text-text-primary", children: author }), source && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-text-quaternary", children: "\u2022" }), _jsx("cite", { className: "text-text-tertiary not-italic", children: source })] }))] }))] }));
};
Blockquote.displayName = 'Blockquote';
//# sourceMappingURL=Blockquote.js.map
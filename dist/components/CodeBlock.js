import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Check, Copy } from 'lucide-react';
export const CodeBlock = ({ code, language = 'typescript', showLineNumbers = false, className = '', }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (_jsxs("div", { className: `relative group rounded-xl overflow-hidden bg-background-secondary border border-border-primary ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-background-tertiary/50 border-b border-border-primary", children: [_jsx("span", { className: "text-xs font-medium text-text-tertiary uppercase tracking-wider", children: language }), _jsx("button", { onClick: handleCopy, className: "p-1.5 rounded-lg hover:bg-background-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20", "aria-label": "Copy code", children: copied ? _jsx(Check, { className: "w-4 h-4 text-status-success" }) : _jsx(Copy, { className: "w-4 h-4" }) })] }), _jsx("div", { className: "p-4 overflow-x-auto", children: _jsx("pre", { className: "font-mono text-sm text-text-primary leading-relaxed", children: _jsx("code", { children: showLineNumbers
                            ? code.split('\n').map((line, i) => (_jsxs("div", { className: "table-row", children: [_jsx("span", { className: "table-cell text-right pr-4 text-text-quaternary select-none w-8", children: i + 1 }), _jsx("span", { className: "table-cell whitespace-pre", children: line || ' ' })] }, i)))
                            : code }) }) })] }));
};
CodeBlock.displayName = 'CodeBlock';
//# sourceMappingURL=CodeBlock.js.map
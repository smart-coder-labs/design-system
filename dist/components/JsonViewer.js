import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';
const getDataType = (value) => {
    if (value === null)
        return 'null';
    if (Array.isArray(value))
        return 'array';
    return typeof value;
};
const JsonNode = ({ name, value, depth, isLast, indentSize, initiallyExpanded, }) => {
    const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
    const type = getDataType(value);
    const isExpandable = type === 'object' || type === 'array';
    const isEmpty = isExpandable && Object.keys(value).length === 0;
    const handleToggle = (e) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };
    const renderValue = (val, valType) => {
        switch (valType) {
            case 'string':
                return _jsxs("span", { className: "text-[#ce9178]", children: ["\"", val, "\""] });
            case 'number':
                return _jsx("span", { className: "text-[#b5cea8]", children: val });
            case 'boolean':
                return _jsx("span", { className: "text-[#569cd6]", children: val ? 'true' : 'false' });
            case 'null':
                return _jsx("span", { className: "text-[#569cd6]", children: "null" });
            default:
                return null;
        }
    };
    const renderPreview = () => {
        if (type === 'array') {
            return _jsxs("span", { className: "text-gray-400", children: ["Array(", value.length, ")"] });
        }
        return _jsx("span", { className: "text-gray-400", children: '{...}' });
    };
    return (_jsxs("div", { className: "font-mono text-sm leading-6", style: { paddingLeft: depth > 0 ? indentSize : 0 }, children: [_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "w-5 h-6 flex items-center justify-center flex-none mr-1", children: isExpandable && !isEmpty && (_jsx("button", { onClick: handleToggle, className: "text-gray-400 hover:text-gray-200 transition-colors focus:outline-none", children: isExpanded ? (_jsx(ChevronDown, { className: "w-3.5 h-3.5" })) : (_jsx(ChevronRight, { className: "w-3.5 h-3.5" })) })) }), _jsxs("div", { className: "flex-1 break-all", children: [name && (_jsxs("span", { className: "text-[#9cdcfe] mr-1", children: ["\"", name, "\":"] })), !isExpandable ? (_jsxs(_Fragment, { children: [renderValue(value, type), !isLast && _jsx("span", { className: "text-gray-400", children: "," })] })) : (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-[#da70d6]", children: type === 'array' ? '[' : '{' }), !isExpanded && !isEmpty && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: handleToggle, className: "mx-1 hover:bg-white/5 px-1 rounded cursor-pointer", children: renderPreview() }), _jsx("span", { className: "text-[#da70d6]", children: type === 'array' ? ']' : '}' }), !isLast && _jsx("span", { className: "text-gray-400", children: "," })] })), isEmpty && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-[#da70d6]", children: type === 'array' ? ']' : '}' }), !isLast && _jsx("span", { className: "text-gray-400", children: "," })] }))] }))] })] }), isExpandable && isExpanded && !isEmpty && (_jsxs("div", { children: [Object.entries(value).map(([key, val], index, arr) => (_jsx(JsonNode, { name: type === 'array' ? undefined : key, value: val, depth: depth + 1, isLast: index === arr.length - 1, indentSize: indentSize, initiallyExpanded: initiallyExpanded }, key))), _jsxs("div", { className: "pl-6 text-[#da70d6]", children: [type === 'array' ? ']' : '}', !isLast && _jsx("span", { className: "text-gray-400", children: "," })] })] }))] }));
};
export const JsonViewer = ({ data, initiallyExpanded = false, indentSize = 20, className, showCopyButton = true, maxHeight, }) => {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
        catch (err) {
            console.error('Failed to copy JSON:', err);
        }
    };
    return (_jsxs("div", { className: cn("relative rounded-xl border border-border-primary/50 bg-[#1e1e1e] text-white shadow-sm overflow-hidden", className), children: [showCopyButton && (_jsx("div", { className: "absolute top-2 right-2 z-10", children: _jsx(Button, { variant: "ghost", size: "sm", onClick: copyToClipboard, className: "h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10 bg-[#1e1e1e]/80 backdrop-blur-sm", children: isCopied ? (_jsx(Check, { className: "w-4 h-4 text-green-400" })) : (_jsx(Copy, { className: "w-4 h-4" })) }) })), _jsx("div", { className: "p-4 overflow-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent", style: { maxHeight }, children: _jsx(JsonNode, { value: data, depth: 0, isLast: true, indentSize: indentSize, initiallyExpanded: initiallyExpanded }) })] }));
};
//# sourceMappingURL=JsonViewer.js.map
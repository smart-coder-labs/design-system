import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import { Bold, Italic, Link, List, ListOrdered, Code, Eye, Edit3, Image as ImageIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Label } from './Label';
/* ========================================
   MARKDOWN EDITOR COMPONENT
   ======================================== */
export const MarkdownEditor = ({ value = '', onChange, placeholder = 'Type markdown here...', label, error, helperText, disabled = false, className, minHeight = '200px', }) => {
    const [activeTab, setActiveTab] = useState('write');
    const textareaRef = useRef(null);
    const mdParserRef = useRef(null);
    if (!mdParserRef.current) {
        // Keep parser instance stable across renders
        mdParserRef.current = new MarkdownIt({
            html: false,
            linkify: true,
            breaks: true,
            typographer: true,
        });
    }
    const insertSyntax = (prefix, suffix = '') => {
        if (!textareaRef.current || disabled)
            return;
        const start = textareaRef.current.selectionStart;
        const end = textareaRef.current.selectionEnd;
        const text = textareaRef.current.value;
        const selection = text.substring(start, end);
        const newText = text.substring(0, start) + prefix + selection + suffix + text.substring(end);
        onChange?.(newText);
        // Restore focus and selection
        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.focus();
                textareaRef.current.setSelectionRange(start + prefix.length, end + prefix.length);
            }
        }, 0);
    };
    const ToolbarButton = ({ icon: Icon, onClick, title }) => (_jsx("button", { type: "button", onClick: (e) => {
            e.preventDefault();
            onClick();
        }, disabled: disabled || activeTab === 'preview', className: "p-1.5 rounded-md text-text-tertiary hover:text-text-primary hover:bg-surface-tertiary transition-colors focus:outline-none disabled:opacity-50", title: title, children: _jsx(Icon, { className: "w-4 h-4" }) }));
    const renderedPreview = useMemo(() => {
        return mdParserRef.current?.render(value || '') ?? '';
    }, [value]);
    return (_jsxs("div", { className: cn("w-full space-y-2", className), children: [label && (_jsx(Label, { className: "mb-2", children: label })), _jsxs("div", { className: cn("w-full rounded-xl border bg-surface-primary overflow-hidden transition-all", "border-border-primary", error ? "border-status-error" : "", disabled ? "opacity-50 cursor-not-allowed bg-surface-secondary" : ""), children: [_jsxs("div", { className: "flex items-center justify-between px-2 py-1.5 border-b border-border-primary bg-surface-secondary/50", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(ToolbarButton, { icon: Bold, onClick: () => insertSyntax('**', '**'), title: "Bold" }), _jsx(ToolbarButton, { icon: Italic, onClick: () => insertSyntax('*', '*'), title: "Italic" }), _jsx(ToolbarButton, { icon: Link, onClick: () => insertSyntax('[', '](url)'), title: "Link" }), _jsx("div", { className: "w-px h-4 bg-border-primary mx-1" }), _jsx(ToolbarButton, { icon: List, onClick: () => insertSyntax('- '), title: "List" }), _jsx(ToolbarButton, { icon: ListOrdered, onClick: () => insertSyntax('1. '), title: "Ordered List" }), _jsx("div", { className: "w-px h-4 bg-border-primary mx-1" }), _jsx(ToolbarButton, { icon: Code, onClick: () => insertSyntax('`', '`'), title: "Code" }), _jsx(ToolbarButton, { icon: ImageIcon, onClick: () => insertSyntax('![alt](', ')'), title: "Image" })] }), _jsxs("div", { className: "flex bg-surface-tertiary rounded-lg p-0.5", children: [_jsxs("button", { type: "button", onClick: () => setActiveTab('write'), className: cn("flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all", activeTab === 'write'
                                            ? "bg-surface-primary text-text-primary shadow-sm"
                                            : "text-text-tertiary hover:text-text-secondary"), children: [_jsx(Edit3, { className: "w-3 h-3" }), "Write"] }), _jsxs("button", { type: "button", onClick: () => setActiveTab('preview'), className: cn("flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all", activeTab === 'preview'
                                            ? "bg-surface-primary text-text-primary shadow-sm"
                                            : "text-text-tertiary hover:text-text-secondary"), children: [_jsx(Eye, { className: "w-3 h-3" }), "Preview"] })] })] }), _jsx("div", { className: "relative w-full", style: { minHeight }, children: activeTab === 'write' ? (_jsx("textarea", { ref: textareaRef, value: value, onChange: (e) => onChange?.(e.target.value), disabled: disabled, placeholder: placeholder, className: "w-full h-full p-4 bg-transparent border-none outline-none resize-y text-text-primary font-mono text-sm min-h-[inherit]" })) : (_jsx("div", { className: "w-full h-full p-4 prose prose-sm max-w-none overflow-y-auto min-h-[inherit] bg-surface-secondary/20", children: value ? (_jsx("div", { className: "prose-headings:mb-2 prose-p:mb-2 prose-ul:mb-2 prose-ol:mb-2", dangerouslySetInnerHTML: { __html: renderedPreview } })) : (_jsx("p", { className: "text-text-tertiary italic", children: "Nothing to preview" })) })) })] }), (error || helperText) && (_jsx(motion.p, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, className: cn("text-sm", error ? "text-status-error" : "text-text-secondary"), children: error || helperText }))] }));
};
MarkdownEditor.displayName = 'MarkdownEditor';
//# sourceMappingURL=MarkdownEditor.js.map
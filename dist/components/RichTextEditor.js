import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
/* ========================================
   RICH TEXT EDITOR COMPONENT
   ======================================== */
export const RichTextEditor = ({ value = '', onChange, placeholder = 'Start typing...', label, error, helperText, disabled = false, className, minHeight = '150px', }) => {
    const contentRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    // Sync external value to contentEditable
    useEffect(() => {
        if (contentRef.current && contentRef.current.innerHTML !== value) {
            // Only update if significantly different to avoid cursor jumping
            // This is a simple check; production editors use more complex diffing
            if (value === '' && contentRef.current.innerHTML === '<br>')
                return;
            contentRef.current.innerHTML = value;
        }
    }, [value]);
    const handleInput = () => {
        if (contentRef.current && onChange) {
            onChange(contentRef.current.innerHTML);
        }
    };
    const execCommand = (command, value = undefined) => {
        document.execCommand(command, false, value);
        contentRef.current?.focus();
        handleInput(); // Update state after command
    };
    const ToolbarButton = ({ icon: Icon, command, arg, title }) => (_jsx("button", { type: "button", onMouseDown: (e) => e.preventDefault(), onClick: () => execCommand(command, arg), disabled: disabled, className: "p-1.5 rounded-md text-text-tertiary hover:text-text-primary hover:bg-surface-tertiary transition-colors focus:outline-none disabled:opacity-50", title: title, children: _jsx(Icon, { className: "w-4 h-4" }) }));
    return (_jsxs("div", { className: cn("w-full space-y-2", className), children: [label && (_jsx("label", { className: "block text-sm font-medium text-text-primary", children: label })), _jsxs("div", { className: cn("w-full rounded-xl border bg-surface-primary overflow-hidden transition-all", isFocused ? "ring-2 ring-accent-blue/20 border-accent-blue" : "border-border-primary", error ? "border-status-error focus-within:border-status-error focus-within:ring-status-error/20" : "", disabled ? "opacity-50 cursor-not-allowed bg-surface-secondary" : ""), children: [_jsxs("div", { className: "flex items-center gap-1 p-2 border-b border-border-primary bg-surface-secondary/50", children: [_jsx(ToolbarButton, { icon: Bold, command: "bold", title: "Bold" }), _jsx(ToolbarButton, { icon: Italic, command: "italic", title: "Italic" }), _jsx(ToolbarButton, { icon: Underline, command: "underline", title: "Underline" }), _jsx("div", { className: "w-px h-4 bg-border-primary mx-1" }), _jsx(ToolbarButton, { icon: AlignLeft, command: "justifyLeft", title: "Align Left" }), _jsx(ToolbarButton, { icon: AlignCenter, command: "justifyCenter", title: "Align Center" }), _jsx(ToolbarButton, { icon: AlignRight, command: "justifyRight", title: "Align Right" })] }), _jsx("div", { ref: contentRef, contentEditable: !disabled, onInput: handleInput, onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), className: cn("w-full p-4 outline-none text-text-primary max-w-none", 
                        // Manual rich text styling since @tailwindcss/typography might not be present
                        "[&_b]:font-bold [&_strong]:font-bold", "[&_i]:italic [&_em]:italic", "[&_u]:underline", "[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-2", "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2", "[&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-1", "[&_blockquote]:border-l-4 [&_blockquote]:border-border-secondary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-2", disabled && "cursor-not-allowed"), style: { minHeight }, "data-placeholder": placeholder })] }), (error || helperText) && (_jsx(motion.p, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, className: cn("text-sm", error ? "text-status-error" : "text-text-secondary"), children: error || helperText }))] }));
};
RichTextEditor.displayName = 'RichTextEditor';
//# sourceMappingURL=RichTextEditor.js.map
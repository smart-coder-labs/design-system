import React, { useState, useRef, useEffect } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface RichTextEditorProps {
    value?: string;
    onChange?: (html: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    minHeight?: string;
}

/* ========================================
   RICH TEXT EDITOR COMPONENT
   ======================================== */

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
    value = '',
    onChange,
    placeholder = 'Start typing...',
    label,
    error,
    helperText,
    disabled = false,
    className,
    minHeight = '150px',
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    // Sync external value to contentEditable
    useEffect(() => {
        if (contentRef.current && contentRef.current.innerHTML !== value) {
            // Only update if significantly different to avoid cursor jumping
            // This is a simple check; production editors use more complex diffing
            if (value === '' && contentRef.current.innerHTML === '<br>') return;
            contentRef.current.innerHTML = value;
        }
    }, [value]);

    const handleInput = () => {
        if (contentRef.current && onChange) {
            onChange(contentRef.current.innerHTML);
        }
    };

    const execCommand = (command: string, value: string | undefined = undefined) => {
        document.execCommand(command, false, value);
        contentRef.current?.focus();
        handleInput(); // Update state after command
    };

    const ToolbarButton = ({ icon: Icon, command, arg, title }: any) => (
        <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => execCommand(command, arg)}
            disabled={disabled}
            className="p-1.5 rounded-md text-text-tertiary hover:text-text-primary hover:bg-surface-tertiary transition-colors focus:outline-none disabled:opacity-50"
            title={title}
        >
            <Icon className="w-4 h-4" />
        </button>
    );

    return (
        <div className={cn("w-full space-y-2", className)}>
            {label && (
                <label className="block text-sm font-medium text-text-primary">
                    {label}
                </label>
            )}

            <div
                className={cn(
                    "w-full rounded-xl border bg-surface-primary overflow-hidden transition-all",
                    isFocused ? "ring-2 ring-accent-blue/20 border-accent-blue" : "border-border-primary",
                    error ? "border-status-error focus-within:border-status-error focus-within:ring-status-error/20" : "",
                    disabled ? "opacity-50 cursor-not-allowed bg-surface-secondary" : ""
                )}
            >
                {/* Toolbar */}
                <div className="flex items-center gap-1 p-2 border-b border-border-primary bg-surface-secondary/50">
                    <ToolbarButton icon={Bold} command="bold" title="Bold" />
                    <ToolbarButton icon={Italic} command="italic" title="Italic" />
                    <ToolbarButton icon={Underline} command="underline" title="Underline" />
                    <div className="w-px h-4 bg-border-primary mx-1" />
                    <ToolbarButton icon={AlignLeft} command="justifyLeft" title="Align Left" />
                    <ToolbarButton icon={AlignCenter} command="justifyCenter" title="Align Center" />
                    <ToolbarButton icon={AlignRight} command="justifyRight" title="Align Right" />
                    <div className="w-px h-4 bg-border-primary mx-1" />
                    <ToolbarButton icon={List} command="insertUnorderedList" title="Bullet List" />
                    <ToolbarButton icon={ListOrdered} command="insertOrderedList" title="Numbered List" />
                </div>

                {/* Content Area */}
                <div
                    ref={contentRef}
                    contentEditable={!disabled}
                    onInput={handleInput}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={cn(
                        "w-full p-4 outline-none text-text-primary max-w-none",
                        // Manual rich text styling since @tailwindcss/typography might not be present
                        "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2",
                        "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2",
                        "[&_li]:my-1",
                        "[&_b]:font-bold [&_strong]:font-bold",
                        "[&_i]:italic [&_em]:italic",
                        "[&_u]:underline",
                        "[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-2",
                        "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2",
                        "[&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-1",
                        "[&_blockquote]:border-l-4 [&_blockquote]:border-border-secondary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-2",
                        disabled && "cursor-not-allowed"
                    )}
                    style={{ minHeight }}
                    data-placeholder={placeholder}
                />
            </div>

            {(error || helperText) && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "text-sm",
                        error ? "text-status-error" : "text-text-secondary"
                    )}
                >
                    {error || helperText}
                </motion.p>
            )}
        </div>
    );
};

RichTextEditor.displayName = 'RichTextEditor';

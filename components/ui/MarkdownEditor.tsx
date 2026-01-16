import React, { useState, useRef, useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import { Bold, Italic, Link, List, ListOrdered, Code, Eye, Edit3, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { Label } from './Label';

/* ========================================
   TYPES
   ======================================== */

export interface MarkdownEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    className?: string;
    minHeight?: string;
}

/* ========================================
   MARKDOWN EDITOR COMPONENT
   ======================================== */

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
    value = '',
    onChange,
    placeholder = 'Type markdown here...',
    label,
    error,
    helperText,
    disabled = false,
    className,
    minHeight = '200px',
}) => {
    const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const mdParserRef = useRef<MarkdownIt>(null);

    if (!mdParserRef.current) {
        // Keep parser instance stable across renders
        mdParserRef.current = new MarkdownIt({
            html: false,
            linkify: true,
            breaks: true,
            typographer: true,
        });
    }

    const insertSyntax = (prefix: string, suffix: string = '') => {
        if (!textareaRef.current || disabled) return;

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
                textareaRef.current.setSelectionRange(
                    start + prefix.length,
                    end + prefix.length
                );
            }
        }, 0);
    };

    const ToolbarButton = ({ icon: Icon, onClick, title }: any) => (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            disabled={disabled || activeTab === 'preview'}
            className="p-1.5 rounded-md text-text-tertiary hover:text-text-primary hover:bg-surface-tertiary transition-colors focus:outline-none disabled:opacity-50"
            title={title}
        >
            <Icon className="w-4 h-4" />
        </button>
    );

    const renderedPreview = useMemo(() => {
        return mdParserRef.current?.render(value || '') ?? '';
    }, [value]);

    return (
        <div className={cn("w-full space-y-2", className)}>
            {label && (
                <Label className="mb-2">
                    {label}
                </Label>
            )}

            <div
                className={cn(
                    "w-full rounded-xl border bg-surface-primary overflow-hidden transition-all",
                    "border-border-primary",
                    error ? "border-status-error" : "",
                    disabled ? "opacity-50 cursor-not-allowed bg-surface-secondary" : ""
                )}
            >
                {/* Header / Tabs */}
                <div className="flex items-center justify-between px-2 py-1.5 border-b border-border-primary bg-surface-secondary/50">
                    <div className="flex items-center gap-1">
                        <ToolbarButton icon={Bold} onClick={() => insertSyntax('**', '**')} title="Bold" />
                        <ToolbarButton icon={Italic} onClick={() => insertSyntax('*', '*')} title="Italic" />
                        <ToolbarButton icon={Link} onClick={() => insertSyntax('[', '](url)')} title="Link" />
                        <div className="w-px h-4 bg-border-primary mx-1" />
                        <ToolbarButton icon={List} onClick={() => insertSyntax('- ')} title="List" />
                        <ToolbarButton icon={ListOrdered} onClick={() => insertSyntax('1. ')} title="Ordered List" />
                        <div className="w-px h-4 bg-border-primary mx-1" />
                        <ToolbarButton icon={Code} onClick={() => insertSyntax('`', '`')} title="Code" />
                        <ToolbarButton icon={ImageIcon} onClick={() => insertSyntax('![alt](', ')')} title="Image" />
                    </div>

                    <div className="flex bg-surface-tertiary rounded-lg p-0.5">
                        <button
                            type="button"
                            onClick={() => setActiveTab('write')}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all",
                                activeTab === 'write'
                                    ? "bg-surface-primary text-text-primary shadow-sm"
                                    : "text-text-tertiary hover:text-text-secondary"
                            )}
                        >
                            <Edit3 className="w-3 h-3" />
                            Write
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('preview')}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all",
                                activeTab === 'preview'
                                    ? "bg-surface-primary text-text-primary shadow-sm"
                                    : "text-text-tertiary hover:text-text-secondary"
                            )}
                        >
                            <Eye className="w-3 h-3" />
                            Preview
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative w-full" style={{ minHeight }}>
                    {activeTab === 'write' ? (
                        <textarea
                            ref={textareaRef}
                            value={value}
                            onChange={(e) => onChange?.(e.target.value)}
                            disabled={disabled}
                            placeholder={placeholder}
                            className="w-full h-full p-4 bg-transparent border-none outline-none resize-y text-text-primary font-mono text-sm min-h-[inherit]"
                        />
                    ) : (
                        <div className="w-full h-full p-4 prose prose-sm max-w-none overflow-y-auto min-h-[inherit] bg-surface-secondary/20">
                            {value ? (
                                <div className="prose-headings:mb-2 prose-p:mb-2 prose-ul:mb-2 prose-ol:mb-2"
                                    dangerouslySetInnerHTML={{ __html: renderedPreview }}
                                />
                            ) : (
                                <p className="text-text-tertiary italic">Nothing to preview</p>
                            )}
                        </div>
                    )}
                </div>
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

MarkdownEditor.displayName = 'MarkdownEditor';

'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { cn } from '../../../lib/utils';
import type { CodeBlockProps } from './CodeBlock.types';

const LANGUAGE_MAP: Record<string, string> = {
    typescript: 'tsx',
    javascript: 'jsx',
    tsx: 'tsx',
    jsx: 'jsx',
    css: 'css',
    html: 'markup',
    bash: 'bash',
    json: 'json',
    python: 'python',
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language = 'typescript',
    showLineNumbers = false,
    className = '',
}) => {
    const [copied, setCopied] = React.useState(false);
    const resetTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearResetTimeout = React.useCallback(() => {
        if (resetTimeoutRef.current !== null) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
        }
    }, []);

    React.useEffect(() => clearResetTimeout, [clearResetTimeout]);

    const handleCopy = async () => {
        if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) return;

        try {
            await navigator.clipboard.writeText(code);
        } catch {
            // Copy failed (permission denied, insecure context, ...): stay in the idle state.
            return;
        }

        clearResetTimeout();
        setCopied(true);
        resetTimeoutRef.current = setTimeout(() => {
            resetTimeoutRef.current = null;
            setCopied(false);
        }, 2000);
    };

    const copyLabel = copied ? 'Copied to clipboard' : 'Copy code';
    const prismLanguage = LANGUAGE_MAP[language.toLowerCase()] ?? language;

    return (
        <div className={cn('relative group rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/10', className)}>
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{language}</span>
                <div className="flex items-center gap-2">
                    <motion.span
                        aria-hidden="true"
                        className="text-xs font-medium text-green-400"
                        initial={false}
                        animate={{ opacity: copied ? 1 : 0, x: copied ? 0 : 4 }}
                        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                    >
                        Copied
                    </motion.span>
                    <button
                        type="button"
                        onClick={handleCopy}
                        className={cn(
                            'p-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/20',
                            copied
                                ? 'bg-green-400/10 text-green-400'
                                : 'text-white/40 hover:bg-white/10 hover:text-white/80'
                        )}
                        aria-label={copyLabel}
                        title={copyLabel}
                    >
                        <span className="block w-4 h-4">
                            <AnimatePresence initial={false} mode="wait">
                                {copied ? (
                                    <motion.span
                                        key="copied"
                                        className="block"
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.6 }}
                                        transition={{ duration: 0.16, ease: [0.32, 0.72, 0, 1] }}
                                    >
                                        <Check className="w-4 h-4" aria-hidden="true" />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        className="block"
                                        initial={{ opacity: 0, scale: 0.6 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.6 }}
                                        transition={{ duration: 0.16, ease: [0.32, 0.72, 0, 1] }}
                                    >
                                        <Copy className="w-4 h-4" aria-hidden="true" />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </span>
                    </button>
                </div>
            </div>
            <span className="sr-only" aria-live="polite" aria-atomic="true">
                {copied ? 'Copied to clipboard' : ''}
            </span>
            <div className="p-4 overflow-x-auto">
                <Highlight
                    theme={themes.nightOwl}
                    code={code.trim()}
                    language={prismLanguage as never}
                >
                    {({ className: hlClass, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            className={`${hlClass} font-mono text-sm leading-relaxed`}
                            style={{ ...style, background: 'transparent', margin: 0 }}
                        >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })} className="table-row">
                                    {showLineNumbers && (
                                        <span className="table-cell text-right pr-4 text-white/20 select-none w-8 text-xs">
                                            {i + 1}
                                        </span>
                                    )}
                                    <span className={showLineNumbers ? 'table-cell whitespace-pre' : ''}>
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token })} />
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

CodeBlock.displayName = 'CodeBlock';

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

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const prismLanguage = LANGUAGE_MAP[language.toLowerCase()] ?? language;

    return (
        <div className={`relative group rounded-xl overflow-hidden bg-[#1e1e2e] border border-white/10 ${className}`}>
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{language}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/40 hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
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

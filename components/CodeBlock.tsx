import React, { useState } from 'react';
import { Highlight, themes, type Language } from 'prism-react-renderer';
import { Check, Copy, FileCode, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CodeBlockProps {
    /** The code to display */
    code: string;
    /** The language of the code */
    language: string;
    /** Optional filename to display in the header */
    filename?: string;
    /** Whether to show line numbers */
    showLineNumbers?: boolean;
    /** Optional class name for the container */
    className?: string;
    /** Whether to show the copy button */
    showCopyButton?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
    code,
    language,
    filename,
    showLineNumbers = true,
    showCopyButton = true,
    className,
}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    // Map common language aliases if needed, or just pass through
    const lang = language.toLowerCase() as Language;

    return (
        <div className={cn(
            "rounded-xl overflow-hidden border border-border-primary/50 bg-[#1e1e1e] shadow-sm",
            className
        )}>
            {/* Header */}
            {(filename || showCopyButton) && (
                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/10">
                    <div className="flex items-center gap-2">
                        {filename ? (
                            <>
                                <FileCode className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-medium text-gray-300 font-mono">{filename}</span>
                            </>
                        ) : (
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 select-none">
                            {language}
                        </span>
                        {showCopyButton && (
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center justify-center h-6 w-6 p-0 text-gray-400 hover:text-white hover:bg-white/10 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-white/20"
                                title="Copy code"
                            >
                                {isCopied ? (
                                    <Check className="w-3.5 h-3.5 text-green-400" />
                                ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                )}
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Code Area */}
            <div className="relative group">
                <Highlight
                    theme={themes.vsDark}
                    code={code.trim()}
                    language={lang}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre 
                            className={cn(className, "p-4 overflow-x-auto text-sm font-mono leading-relaxed scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent")}
                            style={{ ...style, backgroundColor: 'transparent', margin: 0 }}
                        >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })} className="table-row">
                                    {showLineNumbers && (
                                        <span className="table-cell text-right pr-4 select-none text-gray-600 text-xs w-8">
                                            {i + 1}
                                        </span>
                                    )}
                                    <span className="table-cell">
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

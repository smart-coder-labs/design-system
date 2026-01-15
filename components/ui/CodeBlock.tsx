import React from 'react';
import { Check, Copy } from 'lucide-react';

export interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    className?: string;
}

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

    return (
        <div className={`relative group rounded-xl overflow-hidden bg-background-secondary border border-border-primary ${className}`}>
            <div className="flex items-center justify-between px-4 py-2 bg-background-tertiary/50 border-b border-border-primary">
                <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">{language}</span>
                <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg hover:bg-background-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="w-4 h-4 text-status-success" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm text-text-primary leading-relaxed">
                    <code>
                        {showLineNumbers
                            ? code.split('\n').map((line, i) => (
                                <div key={i} className="table-row">
                                    <span className="table-cell text-right pr-4 text-text-quaternary select-none w-8">{i + 1}</span>
                                    <span className="table-cell whitespace-pre">{line || ' '}</span>
                                </div>
                            ))
                            : code}
                    </code>
                </pre>
            </div>
        </div>
    );
};

CodeBlock.displayName = 'CodeBlock';

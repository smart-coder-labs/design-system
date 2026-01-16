"use client";

import React, { useState } from 'react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { Copy, Check, Download, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { Button } from './Button';

/* ========================================
   TYPES
   ======================================== */

export interface RecoveryCodeDisplayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onCopy'> {
    codes: string[];
    onCopy?: (code: string) => void;
    onDownload?: () => void;
    title?: string;
    description?: string;
    showWarning?: boolean;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const RecoveryCodeDisplay = React.forwardRef<HTMLDivElement, RecoveryCodeDisplayProps>(
    (
        {
            codes,
            onCopy,
            onDownload,
            title = 'Recovery Codes',
            description = 'Save these codes in a safe place. You can use them to access your account if you lose your device.',
            showWarning = true,
            className,
            ...props
        },
        ref
    ) => {
        const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
        const [revealedCodes, setRevealedCodes] = useState<Set<number>>(new Set());

        const handleCopy = (code: string, index: number) => {
            navigator.clipboard.writeText(code);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
            onCopy?.(code);
        };

        const toggleReveal = (index: number) => {
            setRevealedCodes((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(index)) {
                    newSet.delete(index);
                } else {
                    newSet.add(index);
                }
                return newSet;
            });
        };

        const handleDownload = () => {
            const content = codes.join('\n');
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'recovery-codes.txt';
            a.click();
            URL.revokeObjectURL(url);
            onDownload?.();
        };

        return (
            <div
                ref={ref}
                className={cn("w-full max-w-md space-y-4", className)}
                {...props}
            >
                {/* Header */}
                <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-text-primary">{title}</h2>
                    {description && (
                        <p className="text-sm text-text-secondary">{description}</p>
                    )}
                </div>

                {/* Warning */}
                {showWarning && (
                    <div className="flex items-start gap-3 p-4 bg-status-warning/10 border border-status-warning/20 rounded-xl">
                        <AlertTriangle className="w-5 h-5 text-status-warning flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-text-primary mb-1">
                                Important
                            </p>
                            <p className="text-xs text-text-secondary">
                                These codes can only be viewed once. Make sure to save them securely.
                            </p>
                        </div>
                    </div>
                )}

                {/* Codes */}
                <div className="bg-surface-primary border border-border-primary rounded-xl p-4 space-y-2">
                    {codes.map((code, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center justify-between gap-3 p-3 bg-surface-secondary rounded-lg"
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <span className="text-xs font-medium text-text-tertiary w-6 flex-shrink-0">
                                    {index + 1}
                                </span>
                                <code className="text-sm font-mono text-text-primary flex-1 truncate">
                                    {revealedCodes.has(index) ? code : '•'.repeat(code.length)}
                                </code>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleReveal(index)}
                                >
                                    {revealedCodes.has(index) ? (
                                        <EyeOff className="w-3.5 h-3.5" />
                                    ) : (
                                        <Eye className="w-3.5 h-3.5" />
                                    )}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleCopy(code, index)}
                                >
                                    {copiedIndex === index ? (
                                        <Check className="w-3.5 h-3.5 text-status-success" />
                                    ) : (
                                        <Copy className="w-3.5 h-3.5" />
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        fullWidth
                        onClick={handleDownload}
                        leftIcon={<Download className="w-4 h-4" />}
                    >
                        Download Codes
                    </Button>
                    <Button
                        variant="primary"
                        fullWidth
                        onClick={() => {
                            codes.forEach((code, index) => handleCopy(code, index));
                        }}
                        leftIcon={<Copy className="w-4 h-4" />}
                    >
                        Copy All
                    </Button>
                </div>
            </div>
        );
    }
);

RecoveryCodeDisplay.displayName = 'RecoveryCodeDisplay';


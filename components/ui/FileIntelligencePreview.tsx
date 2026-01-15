"use client";

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { File, FileText, Image, Video, Music, Archive, Code, FileCode, Download, Eye, Info } from 'lucide-react';
import { Button } from './Button';

/* ========================================
   TYPES
   ======================================== */

export interface FileIntelligence {
    type: string;
    size: string;
    dimensions?: string;
    duration?: string;
    metadata?: Record<string, string>;
    preview?: string;
    extractedText?: string;
    summary?: string;
}

export interface FileIntelligencePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    file: {
        name: string;
        url?: string;
        type: string;
    };
    intelligence?: FileIntelligence;
    onDownload?: () => void;
    onPreview?: () => void;
    showMetadata?: boolean;
    className?: string;
}

/* ========================================
   HELPERS
   ======================================== */

const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-8 h-8" />;
    if (type.startsWith('video/')) return <Video className="w-8 h-8" />;
    if (type.startsWith('audio/')) return <Music className="w-8 h-8" />;
    if (type.includes('pdf')) return <FileText className="w-8 h-8" />;
    if (type.includes('zip') || type.includes('rar')) return <Archive className="w-8 h-8" />;
    if (type.includes('code') || type.includes('text')) return <Code className="w-8 h-8" />;
    return <File className="w-8 h-8" />;
};

const formatFileType = (type: string): string => {
    if (type.includes('/')) {
        return type.split('/')[1].toUpperCase();
    }
    return type.toUpperCase();
};

/* ========================================
   COMPONENT
   ======================================== */

export const FileIntelligencePreview = React.forwardRef<HTMLDivElement, FileIntelligencePreviewProps>(
    (
        {
            file,
            intelligence,
            onDownload,
            onPreview,
            showMetadata = true,
            className,
            ...props
        },
        ref
    ) => {
        const [showDetails, setShowDetails] = useState(false);

        const handlePreview = () => {
            if (onPreview) {
                onPreview();
            } else if (file.url || intelligence?.preview) {
                // Open file in new tab
                const previewUrl = file.url || intelligence?.preview;
                if (previewUrl) {
                    window.open(previewUrl, '_blank');
                }
            }
        };

        const handleDownload = () => {
            if (onDownload) {
                onDownload();
            } else if (file.url) {
                // Create a temporary link and trigger download
                const link = document.createElement('a');
                link.href = file.url;
                link.download = file.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "bg-surface-primary border border-border-primary rounded-xl overflow-hidden",
                    className
                )}
                {...props}
            >
                {/* Header */}
                <div className="p-4 border-b border-border-primary">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-surface-secondary rounded-lg text-text-tertiary">
                            {getFileIcon(file.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold text-text-primary truncate">
                                {file.name}
                            </h3>
                            <p className="text-xs text-text-secondary mt-0.5">
                                {intelligence?.type || formatFileType(file.type)}
                                {intelligence?.size && ` • ${intelligence.size}`}
                            </p>
                        </div>
                        <div className="flex-shrink-0 flex items-center gap-2">
                            {(file.url || intelligence?.preview) && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handlePreview}
                                >
                                    <Eye className="w-4 h-4" />
                                </Button>
                            )}
                            {file.url && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleDownload}
                                >
                                    <Download className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Preview */}
                {intelligence?.preview && (
                    <div className="relative h-48 bg-surface-secondary">
                        <img
                            src={intelligence.preview}
                            alt={file.name}
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}

                {/* Intelligence Info */}
                {intelligence && (
                    <div className="p-4 space-y-3">
                        {/* Summary */}
                        {intelligence.summary && (
                            <div>
                                <p className="text-xs font-medium text-text-secondary mb-1">Summary</p>
                                <p className="text-sm text-text-primary">{intelligence.summary}</p>
                            </div>
                        )}

                        {/* Extracted Text */}
                        {intelligence.extractedText && (
                            <div>
                                <p className="text-xs font-medium text-text-secondary mb-1">Extracted Text</p>
                                <p className="text-sm text-text-secondary line-clamp-3">
                                    {intelligence.extractedText}
                                </p>
                            </div>
                        )}

                        {/* Metadata */}
                        {showMetadata && intelligence.metadata && Object.keys(intelligence.metadata).length > 0 && (
                            <div>
                                <button
                                    onClick={() => setShowDetails(!showDetails)}
                                    className="flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    <Info className="w-3.5 h-3.5" />
                                    <span>Metadata</span>
                                </button>
                                <AnimatePresence>
                                    {showDetails && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="mt-2 space-y-1 overflow-hidden"
                                        >
                                            {Object.entries(intelligence.metadata).map(([key, value]) => (
                                                <div key={key} className="flex justify-between text-xs">
                                                    <span className="text-text-tertiary">{key}:</span>
                                                    <span className="text-text-secondary">{value}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

FileIntelligencePreview.displayName = 'FileIntelligencePreview';


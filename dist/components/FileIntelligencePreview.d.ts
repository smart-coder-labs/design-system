import React from 'react';
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
export declare const FileIntelligencePreview: React.ForwardRefExoticComponent<FileIntelligencePreviewProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FileIntelligencePreview.d.ts.map
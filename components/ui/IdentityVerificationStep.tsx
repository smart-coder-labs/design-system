"use client";
import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
    Upload, FileText, CheckCircle2, XCircle, Loader2,
    CreditCard, Camera, Shield
} from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type DocumentType = 'id_front' | 'id_back' | 'passport' | 'selfie' | 'proof_of_address';
export type VerificationStatus = 'idle' | 'uploading' | 'verifying' | 'success' | 'failed';

export interface DocumentSlot {
    type: DocumentType;
    label: string;
    description?: string;
    status: VerificationStatus;
    fileName?: string;
    progress?: number;
    errorMessage?: string;
}

export interface IdentityVerificationStepProps {
    documents: DocumentSlot[];
    onUpload?: (type: DocumentType, file: File) => void;
    onRetry?: (type: DocumentType) => void;
    title?: string;
    subtitle?: string;
    className?: string;
}

/* ========================================
   CONSTANTS
   ======================================== */

const docIcons: Record<DocumentType, React.ReactNode> = {
    id_front: <CreditCard className="w-6 h-6" />,
    id_back: <CreditCard className="w-6 h-6" />,
    passport: <FileText className="w-6 h-6" />,
    selfie: <Camera className="w-6 h-6" />,
    proof_of_address: <FileText className="w-6 h-6" />,
};

const statusConfig: Record<VerificationStatus, { label: string; color: string; bgColor: string }> = {
    idle: { label: 'Pending', color: 'text-text-tertiary', bgColor: 'bg-surface-secondary' },
    uploading: { label: 'Uploading...', color: 'text-accent-blue', bgColor: 'bg-accent-blue/10' },
    verifying: { label: 'Verifying...', color: 'text-status-warning', bgColor: 'bg-status-warning/10' },
    success: { label: 'Verified', color: 'text-status-success', bgColor: 'bg-status-success/10' },
    failed: { label: 'Failed', color: 'text-status-error', bgColor: 'bg-status-error/10' },
};

/* ========================================
   SUB-COMPONENTS
   ======================================== */

const DocumentCard: React.FC<{
    doc: DocumentSlot;
    onUpload?: (type: DocumentType, file: File) => void;
    onRetry?: (type: DocumentType) => void;
}> = ({ doc, onUpload, onRetry }) => {
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const status = statusConfig[doc.status];
    const isInteractive = doc.status === 'idle' || doc.status === 'failed';

    const handleFile = useCallback((file: File) => {
        onUpload?.(doc.type, file);
    }, [doc.type, onUpload]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    return (
        <motion.div
            className={cn(
                'relative rounded-2xl border-2 border-dashed p-5 transition-all duration-200',
                isInteractive ? 'cursor-pointer hover:border-accent-blue hover:bg-accent-blue/[0.03]' : 'cursor-default',
                isDragging ? 'border-accent-blue bg-accent-blue/5 scale-[1.01]' : '',
                doc.status === 'success' ? 'border-status-success/30 bg-status-success/[0.03]' : '',
                doc.status === 'failed' ? 'border-status-error/30 bg-status-error/[0.03]' : '',
                doc.status === 'idle' || doc.status === 'uploading' || doc.status === 'verifying'
                    ? 'border-border-primary'
                    : '',
            )}
            onClick={() => isInteractive && inputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={() => setIsDragging(false)}
            whileHover={isInteractive ? { y: -2 } : {}}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            role={isInteractive ? "button" : undefined}
            aria-label={`Upload ${doc.label}`}
            tabIndex={isInteractive ? 0 : -1}
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFile(file);
                }}
            />

            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={cn(
                    'flex items-center justify-center w-12 h-12 rounded-xl transition-apple',
                    status.bgColor, status.color,
                )}>
                    {doc.status === 'uploading' || doc.status === 'verifying'
                        ? <Loader2 className="w-5 h-5 animate-spin" />
                        : doc.status === 'success'
                            ? <CheckCircle2 className="w-5 h-5" />
                            : doc.status === 'failed'
                                ? <XCircle className="w-5 h-5" />
                                : docIcons[doc.type]
                    }
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-text-primary">{doc.label}</p>
                        <span className={cn(
                            'text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full',
                            status.bgColor, status.color,
                        )}>
                            {status.label}
                        </span>
                    </div>
                    {doc.description && (
                        <p className="text-xs text-text-secondary mt-0.5">{doc.description}</p>
                    )}
                    {doc.fileName && (
                        <p className="text-xs text-text-tertiary mt-1 truncate">{doc.fileName}</p>
                    )}
                    {doc.status === 'failed' && doc.errorMessage && (
                        <p className="text-xs text-status-error mt-1">{doc.errorMessage}</p>
                    )}
                </div>

                {/* Action */}
                {isInteractive && (
                    <div className="flex items-center text-text-tertiary">
                        <Upload className="w-4 h-4" />
                    </div>
                )}
                {doc.status === 'failed' && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onRetry?.(doc.type); }}
                        className="text-xs font-semibold text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
                    >
                        Retry
                    </button>
                )}
            </div>

            {/* Upload progress */}
            <AnimatePresence>
                {doc.status === 'uploading' && typeof doc.progress === 'number' && (
                    <motion.div
                        className="mt-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="h-1 bg-surface-secondary rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-accent-blue rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${doc.progress * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ========================================
   MAIN COMPONENT
   ======================================== */

export const IdentityVerificationStep: React.FC<IdentityVerificationStepProps> = ({
    documents,
    onUpload,
    onRetry,
    title = 'Identity Verification',
    subtitle = 'Upload the required documents to verify your identity',
    className = '',
}) => {
    const completedCount = documents.filter((d) => d.status === 'success').length;
    const progress = documents.length > 0 ? completedCount / documents.length : 0;

    return (
        <motion.div
            className={cn('w-full max-w-lg mx-auto', className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Header */}
            <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                        <Shield className="w-6 h-6" />
                    </div>
                </div>
                <h2 className="text-lg font-bold text-text-primary">{title}</h2>
                <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
            </div>

            {/* Progress bar */}
            <div className="mb-5">
                <div className="flex items-center justify-between text-xs text-text-tertiary mb-1.5">
                    <span>{completedCount} of {documents.length} completed</span>
                    <span>{Math.round(progress * 100)}%</span>
                </div>
                <div className="h-1.5 bg-surface-secondary rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-accent-blue rounded-full"
                        animate={{ width: `${progress * 100}%` }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                </div>
            </div>

            {/* Document slots */}
            <div className="flex flex-col gap-3">
                {documents.map((doc, i) => (
                    <DocumentCard
                        key={doc.type}
                        doc={doc}
                        onUpload={onUpload}
                        onRetry={onRetry}
                    />
                ))}
            </div>
        </motion.div>
    );
};

IdentityVerificationStep.displayName = 'IdentityVerificationStep';
export default IdentityVerificationStep;

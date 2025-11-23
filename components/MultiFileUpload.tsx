import React, { useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, File, AlertCircle, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

/* ========================================
   TYPES
   ======================================== */

export interface MultiFileUploadProps {
    label?: string;
    value?: File[];
    onChange?: (files: File[]) => void;
    accept?: string; // e.g., "image/*, .pdf"
    maxSize?: number; // in bytes (per file)
    maxFiles?: number;
    disabled?: boolean;
    error?: string;
    helperText?: string;
    className?: string;
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/* ========================================
   MULTI FILE UPLOAD COMPONENT
   ======================================== */

export const MultiFileUpload: React.FC<MultiFileUploadProps> = ({
    label,
    value = [],
    onChange,
    accept,
    maxSize,
    maxFiles,
    disabled = false,
    error: customError,
    helperText,
    className,
}) => {
    const [files, setFiles] = useState<File[]>(value);
    const [isDragging, setIsDragging] = useState(false);
    const [internalError, setInternalError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const error = customError || internalError;

    // Sync with controlled value if provided
    React.useEffect(() => {
        if (value !== files) {
            setFiles(value);
        }
    }, [value]);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled) {
            setIsDragging(true);
        }
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const validateFile = (file: File): string | null => {
        // Validate size
        if (maxSize && file.size > maxSize) {
            return `File "${file.name}" exceeds size limit of ${formatBytes(maxSize)}`;
        }

        // Validate type
        if (accept) {
            const acceptedTypes = accept.split(',').map(t => t.trim());
            const fileType = file.type;
            const fileName = file.name;

            const isValid = acceptedTypes.some(type => {
                if (type.endsWith('/*')) {
                    return fileType.startsWith(type.replace('/*', ''));
                }
                if (type.startsWith('.')) {
                    return fileName.toLowerCase().endsWith(type.toLowerCase());
                }
                return fileType === type;
            });

            if (!isValid) {
                return `File "${file.name}" format not accepted`;
            }
        }

        return null;
    };

    const addFiles = (newFiles: File[]) => {
        setInternalError(null);

        if (maxFiles && files.length + newFiles.length > maxFiles) {
            setInternalError(`Maximum ${maxFiles} files allowed`);
            return;
        }

        const validFiles: File[] = [];
        let errorMsg: string | null = null;

        newFiles.forEach(file => {
            const validationError = validateFile(file);
            if (validationError) {
                errorMsg = validationError;
            } else {
                // Check for duplicates
                if (!files.some(f => f.name === file.name && f.size === file.size)) {
                    validFiles.push(file);
                }
            }
        });

        if (errorMsg) {
            setInternalError(errorMsg);
        }

        if (validFiles.length > 0) {
            const updatedFiles = [...files, ...validFiles];
            setFiles(updatedFiles);
            onChange?.(updatedFiles);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (disabled) return;

        const droppedFiles = Array.from(e.dataTransfer.files);
        if (droppedFiles.length > 0) {
            addFiles(droppedFiles);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
        if (selectedFiles.length > 0) {
            addFiles(selectedFiles);
        }
        // Reset input
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    const handleRemove = (index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        setFiles(newFiles);
        onChange?.(newFiles);
        setInternalError(null);
    };

    const handleClearAll = () => {
        setFiles([]);
        onChange?.([]);
        setInternalError(null);
    };

    const handleClick = () => {
        if (!disabled) {
            inputRef.current?.click();
        }
    };

    return (
        <div className={cn("w-full", className)}>
            <div className="flex justify-between items-end mb-2">
                {label && (
                    <label className="block text-sm font-medium text-text-primary">
                        {label}
                    </label>
                )}
                {files.length > 0 && !disabled && (
                    <button
                        onClick={handleClearAll}
                        className="text-xs text-text-tertiary hover:text-status-error transition-colors flex items-center gap-1"
                        type="button"
                    >
                        <Trash2 className="w-3 h-3" />
                        Clear all
                    </button>
                )}
            </div>

            <div
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                    "relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden",
                    "min-h-[120px] flex flex-col items-center justify-center p-6 text-center",
                    isDragging
                        ? "border-accent-blue bg-accent-blue/5 scale-[1.01]"
                        : "border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary",
                    error && "border-status-error bg-status-error/5",
                    disabled && "opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary"
                )}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    multiple
                    accept={accept}
                    onChange={handleFileChange}
                    disabled={disabled}
                />

                <div className="flex flex-col items-center gap-2">
                    <div className={cn(
                        "p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary",
                        isDragging && "bg-accent-blue/10 text-accent-blue"
                    )}>
                        <Upload className={cn(
                            "w-6 h-6 text-text-secondary transition-colors",
                            isDragging && "text-accent-blue"
                        )} />
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-text-primary">
                            <span className="text-accent-blue hover:underline">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-text-tertiary">
                            {accept ? `Accepted formats: ${accept.replace(/,/g, ', ')}` : 'All files accepted'}
                            {maxSize && ` • Max size: ${formatBytes(maxSize)}`}
                            {maxFiles && ` • Max files: ${maxFiles}`}
                        </p>
                    </div>
                </div>
            </div>

            {(error || helperText) && (
                <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 flex items-center gap-2"
                >
                    {error && <AlertCircle className="w-4 h-4 text-status-error" />}
                    <p className={cn(
                        "text-sm",
                        error ? "text-status-error" : "text-text-secondary"
                    )}>
                        {error || helperText}
                    </p>
                </motion.div>
            )}

            {/* File List */}
            <AnimatePresence>
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-2"
                    >
                        {files.map((file, index) => (
                            <motion.div
                                key={`${file.name}-${index}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-surface-secondary border border-border-primary group/item"
                            >
                                <div className="p-2 bg-surface-tertiary rounded-md">
                                    <File className="w-5 h-5 text-accent-blue" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-text-primary truncate">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-text-tertiary">
                                        {formatBytes(file.size)}
                                    </p>
                                </div>
                                {!disabled && (
                                    <button
                                        onClick={() => handleRemove(index)}
                                        className="p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors opacity-0 group-hover/item:opacity-100 focus:opacity-100"
                                        type="button"
                                        aria-label="Remove file"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

MultiFileUpload.displayName = 'MultiFileUpload';

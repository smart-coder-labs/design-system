import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, File, AlertCircle, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';
/* ========================================
   UTILITY FUNCTIONS
   ======================================== */
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
/* ========================================
   MULTI FILE UPLOAD COMPONENT
   ======================================== */
export const MultiFileUpload = ({ label, value = [], onChange, accept, maxSize, maxFiles, disabled = false, error: customError, helperText, className, }) => {
    const [files, setFiles] = useState(value);
    const [isDragging, setIsDragging] = useState(false);
    const [internalError, setInternalError] = useState(null);
    const inputRef = useRef(null);
    const error = customError || internalError;
    // Sync with controlled value if provided
    React.useEffect(() => {
        if (value !== files) {
            setFiles(value);
        }
    }, [value]);
    const handleDragOver = (e) => {
        e.preventDefault();
        if (!disabled) {
            setIsDragging(true);
        }
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };
    const validateFile = (file) => {
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
    const addFiles = (newFiles) => {
        setInternalError(null);
        if (maxFiles && files.length + newFiles.length > maxFiles) {
            setInternalError(`Maximum ${maxFiles} files allowed`);
            return;
        }
        const validFiles = [];
        let errorMsg = null;
        newFiles.forEach(file => {
            const validationError = validateFile(file);
            if (validationError) {
                errorMsg = validationError;
            }
            else {
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
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled)
            return;
        const droppedFiles = Array.from(e.dataTransfer.files);
        if (droppedFiles.length > 0) {
            addFiles(droppedFiles);
        }
    };
    const handleFileChange = (e) => {
        const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
        if (selectedFiles.length > 0) {
            addFiles(selectedFiles);
        }
        // Reset input
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    const handleRemove = (index) => {
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
    return (_jsxs("div", { className: cn("w-full", className), children: [_jsxs("div", { className: "flex justify-between items-end mb-2", children: [label && (_jsx("label", { className: "block text-sm font-medium text-text-primary", children: label })), files.length > 0 && !disabled && (_jsxs("button", { onClick: handleClearAll, className: "text-xs text-text-tertiary hover:text-status-error transition-colors flex items-center gap-1", type: "button", children: [_jsx(Trash2, { className: "w-3 h-3" }), "Clear all"] }))] }), _jsxs("div", { onClick: handleClick, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: cn("relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden", "min-h-[120px] flex flex-col items-center justify-center p-6 text-center", isDragging
                    ? "border-accent-blue bg-accent-blue/5 scale-[1.01]"
                    : "border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary", error && "border-status-error bg-status-error/5", disabled && "opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary"), children: [_jsx("input", { ref: inputRef, type: "file", className: "hidden", multiple: true, accept: accept, onChange: handleFileChange, disabled: disabled }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx("div", { className: cn("p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary", isDragging && "bg-accent-blue/10 text-accent-blue"), children: _jsx(Upload, { className: cn("w-6 h-6 text-text-secondary transition-colors", isDragging && "text-accent-blue") }) }), _jsxs("div", { className: "space-y-1", children: [_jsxs("p", { className: "text-sm font-medium text-text-primary", children: [_jsx("span", { className: "text-accent-blue hover:underline", children: "Click to upload" }), " or drag and drop"] }), _jsxs("p", { className: "text-xs text-text-tertiary", children: [accept ? `Accepted formats: ${accept.replace(/,/g, ', ')}` : 'All files accepted', maxSize && ` • Max size: ${formatBytes(maxSize)}`, maxFiles && ` • Max files: ${maxFiles}`] })] })] })] }), (error || helperText) && (_jsxs(motion.div, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, className: "mt-2 flex items-center gap-2", children: [error && _jsx(AlertCircle, { className: "w-4 h-4 text-status-error" }), _jsx("p", { className: cn("text-sm", error ? "text-status-error" : "text-text-secondary"), children: error || helperText })] })), _jsx(AnimatePresence, { children: files.length > 0 && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "mt-4 space-y-2", children: files.map((file, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 }, className: "flex items-center gap-3 p-3 rounded-lg bg-surface-secondary border border-border-primary group/item", children: [_jsx("div", { className: "p-2 bg-surface-tertiary rounded-md", children: _jsx(File, { className: "w-5 h-5 text-accent-blue" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium text-text-primary truncate", children: file.name }), _jsx("p", { className: "text-xs text-text-tertiary", children: formatBytes(file.size) })] }), !disabled && (_jsx("button", { onClick: () => handleRemove(index), className: "p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors opacity-0 group-hover/item:opacity-100 focus:opacity-100", type: "button", "aria-label": "Remove file", children: _jsx(X, { className: "w-4 h-4" }) }))] }, `${file.name}-${index}`))) })) })] }));
};
MultiFileUpload.displayName = 'MultiFileUpload';
//# sourceMappingURL=MultiFileUpload.js.map
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, File, AlertCircle } from 'lucide-react';
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
   FILE UPLOAD COMPONENT
   ======================================== */
export const FileUpload = ({ label, onChange, accept, maxSize, disabled = false, error: customError, helperText, className, }) => {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [internalError, setInternalError] = useState(null);
    const inputRef = useRef(null);
    const error = customError || internalError;
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
        setInternalError(null);
        // Validate size
        if (maxSize && file.size > maxSize) {
            setInternalError(`File size must be less than ${formatBytes(maxSize)}`);
            return false;
        }
        // Validate type (basic check based on accept prop)
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
                setInternalError(`File type not accepted`);
                return false;
            }
        }
        return true;
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled)
            return;
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            if (validateFile(droppedFile)) {
                setFile(droppedFile);
                onChange?.(droppedFile);
            }
        }
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            if (validateFile(selectedFile)) {
                setFile(selectedFile);
                onChange?.(selectedFile);
            }
        }
        // Reset input so same file can be selected again if needed
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };
    const handleRemove = (e) => {
        e.stopPropagation();
        setFile(null);
        setInternalError(null);
        onChange?.(null);
    };
    const handleClick = () => {
        if (!disabled) {
            inputRef.current?.click();
        }
    };
    return (_jsxs("div", { className: cn("w-full", className), children: [label && (_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: label })), _jsxs("div", { onClick: handleClick, onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: cn("relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden", "min-h-[120px] flex flex-col items-center justify-center p-6 text-center", isDragging
                    ? "border-accent-blue bg-accent-blue/5 scale-[1.01]"
                    : "border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary", error && "border-status-error bg-status-error/5", disabled && "opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary"), children: [_jsx("input", { ref: inputRef, type: "file", className: "hidden", accept: accept, onChange: handleFileChange, disabled: disabled }), _jsx(AnimatePresence, { mode: "wait", children: file ? (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, className: "flex items-center gap-4 w-full max-w-md bg-surface-secondary p-3 rounded-lg border border-border-primary", onClick: (e) => e.stopPropagation(), children: [_jsx("div", { className: "p-2 bg-surface-tertiary rounded-md", children: _jsx(File, { className: "w-6 h-6 text-accent-blue" }) }), _jsxs("div", { className: "flex-1 text-left overflow-hidden", children: [_jsx("p", { className: "text-sm font-medium text-text-primary truncate", children: file.name }), _jsx("p", { className: "text-xs text-text-tertiary", children: formatBytes(file.size) })] }), _jsx("button", { onClick: handleRemove, className: "p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors", type: "button", children: _jsx(X, { className: "w-4 h-4" }) })] })) : (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex flex-col items-center gap-2", children: [_jsx("div", { className: cn("p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary", isDragging && "bg-accent-blue/10 text-accent-blue"), children: _jsx(Upload, { className: cn("w-6 h-6 text-text-secondary transition-colors", isDragging && "text-accent-blue") }) }), _jsxs("div", { className: "space-y-1", children: [_jsxs("p", { className: "text-sm font-medium text-text-primary", children: [_jsx("span", { className: "text-accent-blue hover:underline", children: "Click to upload" }), " or drag and drop"] }), _jsxs("p", { className: "text-xs text-text-tertiary", children: [accept ? `Accepted formats: ${accept.replace(/,/g, ', ')}` : 'All files accepted', maxSize && ` • Max size: ${formatBytes(maxSize)}`] })] })] })) })] }), (error || helperText) && (_jsxs(motion.div, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, className: "mt-2 flex items-center gap-2", children: [error && _jsx(AlertCircle, { className: "w-4 h-4 text-status-error" }), _jsx("p", { className: cn("text-sm", error ? "text-status-error" : "text-text-secondary"), children: error || helperText })] }))] }));
};
FileUpload.displayName = 'FileUpload';
//# sourceMappingURL=FileUpload.js.map
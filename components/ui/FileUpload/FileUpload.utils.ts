/* ========================================
   FILE UPLOAD - UTILITIES
   ======================================== */

export const formatBytes = (bytes: number, decimals = 2): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const validateFile = (file: File, accept?: string, maxSize?: number): string | null => {
    if (accept) {
        const allowedTypes = accept.split(',').map(t => t.trim());
        const fileType = file.type;
        const fileName = file.name.toLowerCase();
        const matches = allowedTypes.some(type => {
            if (type.startsWith('.')) return fileName.endsWith(type);
            if (type.includes('/*')) return fileType.startsWith(type.replace('/*', '/'));
            return fileType === type;
        });
        if (!matches) return `File type not allowed. Accepted: ${accept}`;
    }
    if (maxSize && file.size > maxSize) {
        return `File too large. Max size: ${formatBytes(maxSize)}`;
    }
    return null;
};
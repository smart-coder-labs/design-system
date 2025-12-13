import React from 'react';
export interface TagsInputProps {
    value?: string[];
    onChange?: (tags: string[]) => void;
    placeholder?: string;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    maxTags?: number;
    className?: string;
    onBlur?: () => void;
}
export declare const TagsInput: React.FC<TagsInputProps>;
//# sourceMappingURL=TagsInput.d.ts.map
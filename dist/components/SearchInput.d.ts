import React from 'react';
export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    onSearch?: (value: string) => void;
    onClear?: () => void;
    isLoading?: boolean;
    debounceTime?: number;
    containerClassName?: string;
    label?: string;
}
export declare const SearchInput: React.FC<SearchInputProps>;
//# sourceMappingURL=SearchInput.d.ts.map
/* ========================================
   COMBOBOX - TYPES
   ======================================== */

export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface ComboboxProps {
    items: ComboboxOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyMessage?: string;
    disabled?: boolean;
    className?: string;
}
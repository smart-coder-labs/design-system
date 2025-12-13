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
export declare function Combobox({ items, value, onChange, placeholder, searchPlaceholder, emptyMessage, disabled, className, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Combobox.d.ts.map
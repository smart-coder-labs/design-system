import * as React from "react";
type SelectProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    disabled?: boolean;
};
declare const Select: ({ value: controlledValue, defaultValue, onValueChange, children, disabled }: SelectProps) => import("react/jsx-runtime").JSX.Element;
declare const SelectTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
type SelectValueProps = {
    placeholder?: string;
    className?: string;
    children?: React.ReactNode;
};
declare const SelectValue: React.FC<SelectValueProps>;
type SelectContentProps = {
    className?: string;
    children: React.ReactNode;
};
declare const SelectContent: React.ForwardRefExoticComponent<SelectContentProps & React.RefAttributes<HTMLDivElement>>;
type SelectLabelProps = React.HTMLAttributes<HTMLDivElement>;
declare const SelectLabel: React.ForwardRefExoticComponent<SelectLabelProps & React.RefAttributes<HTMLDivElement>>;
type SelectItemProps = {
    value: string;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
};
declare const SelectItem: React.ForwardRefExoticComponent<SelectItemProps & React.RefAttributes<HTMLButtonElement>>;
type SelectSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
declare const SelectSeparator: React.ForwardRefExoticComponent<SelectSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectGroup: React.FC<{
    className?: string;
    children: React.ReactNode;
}>;
export interface FilterSelectOption {
    id: string;
    label: string;
    value: string;
    count?: number;
}
export interface FilterSelectProps {
    label: string;
    options: FilterSelectOption[];
    value?: string | string[];
    onChange?: (value: string | string[]) => void;
    icon?: React.ReactNode;
    multiselect?: boolean;
    className?: string;
}
export declare const FilterSelect: React.FC<FilterSelectProps>;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, };
//# sourceMappingURL=Select.d.ts.map
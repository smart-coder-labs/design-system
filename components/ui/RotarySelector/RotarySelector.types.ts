interface RotarySelectorOption {
    id: string;
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    disabled?: boolean;
}


interface RotarySelectorProps {
    options: RotarySelectorOption[];
    value?: string | number;
    onChange?: (value: string | number, option: RotarySelectorOption) => void;
    size?: "sm" | "md" | "lg";
    showLabel?: boolean;
    hapticFeedback?: boolean;
    disabled?: boolean;
    className?: string;
}

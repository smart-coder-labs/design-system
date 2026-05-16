interface TopActionBarProps extends Omit<HTMLMotionProps<'header'>, 'children'> {
    /** Content for the left section */
    leftContent?: React.ReactNode;
    /** Content for the center section */
    centerContent?: React.ReactNode;
    /** Content for the right section */
    rightContent?: React.ReactNode;
    /** Whether to use glassmorphism effect */
    glass?: boolean;
    /** Whether the bar should be sticky */
    sticky?: boolean;
    /** Whether to show bottom border */
    showBorder?: boolean;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Optional className for custom styling */
    className?: string;
}


interface TopActionBarButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    /** Button content */
    children: React.ReactNode;
    /** Icon to display */
    icon?: React.ReactNode;
    /** Whether button is active */
    active?: boolean;
    /** Button variant */
    variant?: 'default' | 'ghost' | 'primary';
    /** Optional className */
    className?: string;
}


interface TopActionBarIconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    /** Icon to display */
    icon: React.ReactNode;
    /** Accessible label */
    'aria-label': string;
    /** Whether button is active */
    active?: boolean;
    /** Optional badge content */
    badge?: string | number;
    /** Optional className */
    className?: string;
}

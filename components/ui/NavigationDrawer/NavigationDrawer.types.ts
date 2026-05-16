interface NavigationDrawerItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    badge?: string | number;
}


interface NavigationDrawerSection {
    title?: string;
    items: NavigationDrawerItem[];
}


interface NavigationDrawerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    /** Whether the drawer is open */
    isOpen: boolean;
    /** Callback when drawer should close */
    onClose: () => void;
    /** Drawer position */
    position?: 'left' | 'right';
    /** Navigation sections */
    sections?: NavigationDrawerSection[];
    /** Optional header content */
    header?: React.ReactNode;
    /** Optional footer content */
    footer?: React.ReactNode;
    /** Drawer width */
    width?: 'sm' | 'md' | 'lg';
    /** Whether to show backdrop */
    showBackdrop?: boolean;
    /** Whether clicking backdrop closes drawer */
    closeOnBackdropClick?: boolean;
    /** Whether drawer should be positioned below navbar (default: false for full screen) */
    belowNavBar?: boolean;
    /** NavBar height in pixels (default: 56) */
    navBarHeight?: number;
    /** Optional className for custom styling */
    className?: string;
}

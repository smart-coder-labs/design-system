interface SidebarItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}


interface SidebarProps extends Omit<HTMLMotionProps<'nav'>, 'children'> {
    /** List of navigation items */
    items: SidebarItem[];
    /** Optional className for custom styling */
    className?: string;
}

interface MenuBarItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    shortcut?: string;
    disabled?: boolean;
    divider?: boolean;
    onSelect?: () => void;
    submenu?: MenuBarItem[];
}


interface MenuBarMenu {
    id: string;
    label: string;
    items: MenuBarItem[];
}


interface MenuBarProps {
    /** Menu items */
    menus: MenuBarMenu[];
    /** Optional left content (e.g., app logo) */
    leftContent?: React.ReactNode;
    /** Optional right content (e.g., user menu) */
    rightContent?: React.ReactNode;
    /** Optional className for custom styling */
    className?: string;
}

import React from 'react';
/**
 * Command Menu / Spotlight Search component – macOS-style command palette.
 *
 * Features keyboard navigation, search filtering, and grouped commands.
 * Inspired by macOS Spotlight and modern command palettes.
 */
export interface CommandMenuItem {
    id: string;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    shortcut?: string;
    onSelect: () => void;
    keywords?: string[];
}
export interface CommandMenuGroup {
    title?: string;
    items: CommandMenuItem[];
}
export interface CommandMenuProps {
    /** Whether the command menu is open */
    isOpen: boolean;
    /** Callback when menu should close */
    onClose: () => void;
    /** Command groups */
    groups: CommandMenuGroup[];
    /** Placeholder text for search input */
    placeholder?: string;
    /** Optional className for custom styling */
    className?: string;
    /** Empty state message */
    emptyMessage?: string;
}
export declare const CommandMenu: React.ForwardRefExoticComponent<CommandMenuProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=CommandMenu.d.ts.map
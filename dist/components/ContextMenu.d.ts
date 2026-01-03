import * as React from "react";
export type ContextMenuProps = React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
};
declare const ContextMenu: {
    ({ children, open, defaultOpen, onOpenChange, ...props }: ContextMenuProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type ContextMenuTriggerProps = React.HTMLAttributes<HTMLElement> & {
    asChild?: boolean;
};
declare const ContextMenuTrigger: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & {
    asChild?: boolean;
} & React.RefAttributes<HTMLElement>>;
export type ContextMenuContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const ContextMenuContent: React.ForwardRefExoticComponent<ContextMenuContentProps & React.RefAttributes<HTMLDivElement>>;
export type ContextMenuGroupProps = React.HTMLAttributes<HTMLDivElement>;
declare const ContextMenuGroup: {
    ({ className, ...props }: ContextMenuGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type ContextMenuItemProps = React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
    onSelect?: () => void;
};
declare const ContextMenuItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
    onSelect?: () => void;
} & React.RefAttributes<HTMLDivElement>>;
export type ContextMenuCheckboxItemProps = React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
};
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
} & React.RefAttributes<HTMLDivElement>>;
export type ContextMenuRadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
};
declare const ContextMenuRadioGroup: {
    ({ children, value, onValueChange, ...props }: ContextMenuRadioGroupProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type ContextMenuRadioItemProps = React.HTMLAttributes<HTMLDivElement> & {
    value: string;
};
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    value: string;
} & React.RefAttributes<HTMLDivElement>>;
export type ContextMenuLabelProps = React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
};
declare const ContextMenuLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export type ContextMenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type ContextMenuSubProps = {
    children: React.ReactNode;
};
declare const ContextMenuSub: {
    ({ children }: ContextMenuSubProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type ContextMenuSubTriggerProps = React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
};
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export type ContextMenuSubContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuPortal: React.FC<{
    children: React.ReactNode;
}>;
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };
//# sourceMappingURL=ContextMenu.d.ts.map
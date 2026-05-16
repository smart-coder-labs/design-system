export type Position = { x: number; y: number } | null;

export type ContextMenuContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    position: Position;
    setPosition: (pos: Position) => void;
};

export type ContextMenuSubContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    anchorRect: DOMRect | null;
    setAnchorRect: (rect: DOMRect | null) => void;
};

export type ContextMenuRadioGroupContextValue = {
    value?: string;
    onValueChange?: (value: string) => void;
};

export type ContextMenuProps = React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
};

export type ContextMenuTriggerProps = React.HTMLAttributes<HTMLElement> & { asChild?: boolean };

export type ContextMenuContentProps = React.HTMLAttributes<HTMLDivElement>;

export type ContextMenuGroupProps = React.HTMLAttributes<HTMLDivElement>;

export type ContextMenuItemProps = React.HTMLAttributes<HTMLDivElement> & { inset?: boolean; onSelect?: () => void };

export type ContextMenuCheckboxItemProps = React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
};

export type ContextMenuRadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
};

export type ContextMenuRadioItemProps = React.HTMLAttributes<HTMLDivElement> & { value: string };

export type ContextMenuLabelProps = React.HTMLAttributes<HTMLDivElement> & { inset?: boolean };

export type ContextMenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export type ContextMenuSubProps = { children: React.ReactNode };

export type ContextMenuSubTriggerProps = React.HTMLAttributes<HTMLDivElement> & { inset?: boolean };

export type ContextMenuSubContentProps = React.HTMLAttributes<HTMLDivElement>;
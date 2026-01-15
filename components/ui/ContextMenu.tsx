"use client";

import * as React from "react";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../lib/utils";
import { createPortal } from "react-dom";

type Position = { x: number; y: number } | null;

type ContextMenuContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    position: Position;
    setPosition: (pos: Position) => void;
};

type ContextMenuSubContextValue = {
    open: boolean;
    setOpen: (open: boolean) => void;
    anchorRect: DOMRect | null;
    setAnchorRect: (rect: DOMRect | null) => void;
};

type ContextMenuRadioGroupContextValue = {
    value?: string;
    onValueChange?: (value: string) => void;
};

const ContextMenuContext = React.createContext<ContextMenuContextValue | null>(null);
const ContextMenuSubContext = React.createContext<ContextMenuSubContextValue | null>(null);
const ContextMenuRadioContext = React.createContext<ContextMenuRadioGroupContextValue | null>(null);

export type ContextMenuProps = React.HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
};

const ContextMenu = ({
    children,
    open,
    defaultOpen = false,
    onOpenChange,
    ...props
}: ContextMenuProps) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const [position, setPosition] = React.useState<Position>(null);
    const isControlled = open !== undefined;
    const currentOpen = isControlled ? open : internalOpen;

    const setOpen = React.useCallback(
        (next: boolean) => {
            if (!isControlled) setInternalOpen(next);
            onOpenChange?.(next);
            if (!next) setPosition(null);
        },
        [isControlled, onOpenChange]
    );

    const contextValue = React.useMemo(
        () => ({ open: !!currentOpen, setOpen, position, setPosition }),
        [currentOpen, setOpen, position]
    );

    React.useEffect(() => {
        if (!currentOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        const handleClick = () => setOpen(false);

        document.addEventListener("keydown", handleKey);
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.removeEventListener("mousedown", handleClick);
        };
    }, [currentOpen, setOpen]);

    return (
        <ContextMenuContext.Provider value={contextValue}>
            <div {...props}>{children}</div>
        </ContextMenuContext.Provider>
    );
};

ContextMenu.displayName = "ContextMenu";

export type ContextMenuTriggerProps = React.HTMLAttributes<HTMLElement> & { asChild?: boolean };

const ContextMenuTrigger = React.forwardRef<HTMLElement, ContextMenuTriggerProps>(
    ({ asChild = false, children, ...props }, ref) => {
        const context = React.useContext(ContextMenuContext);
        if (!context) throw new Error("ContextMenuTrigger must be used within ContextMenu");

        const { setOpen, setPosition } = context;

        const handleContextMenu = (event: React.MouseEvent) => {
            event.preventDefault();
            setPosition({ x: event.clientX, y: event.clientY });
            setOpen(true);
        };

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(children as React.ReactElement, {
                ref,
                onContextMenu: handleContextMenu,
                ...props,
            } as any);
        }

        return (
            <div ref={ref as React.Ref<HTMLDivElement>} onContextMenu={handleContextMenu} {...props}>
                {children}
            </div>
        );
    }
);
ContextMenuTrigger.displayName = "ContextMenuTrigger";

export type ContextMenuContentProps = React.HTMLAttributes<HTMLDivElement>;

const ContextMenuContent = React.forwardRef<HTMLDivElement, ContextMenuContentProps>(
    ({ className, style, children, ...props }, ref) => {
        const context = React.useContext(ContextMenuContext);
        if (!context) throw new Error("ContextMenuContent must be used within ContextMenu");

        const { open, position, setOpen } = context;

        if (!open || !position) return null;

        const content = (
            <div
                ref={ref}
                role="menu"
                style={{
                    position: "fixed",
                    top: position.y,
                    left: position.x,
                    ...style,
                }}
                data-state={open ? "open" : "closed"}
                className={cn(
                    "z-50 min-w-[8rem] overflow-hidden rounded-md border border-border-primary bg-surface-glass backdrop-blur-xl p-1 text-text-primary shadow-lg animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );

        return createPortal(content, document.body);
    }
);
ContextMenuContent.displayName = "ContextMenuContent";

export type ContextMenuGroupProps = React.HTMLAttributes<HTMLDivElement>;
const ContextMenuGroup = ({ className, ...props }: ContextMenuGroupProps) => (
    <div className={className} {...props} />
);
ContextMenuGroup.displayName = "ContextMenuGroup";

export type ContextMenuItemProps = React.HTMLAttributes<HTMLDivElement> & { inset?: boolean; onSelect?: () => void };

const ContextMenuItem = React.forwardRef<HTMLDivElement, ContextMenuItemProps>(
    ({ className, inset, onSelect, onClick, ...props }, ref) => {
        const root = React.useContext(ContextMenuContext);

        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            onClick?.(event);
            if (!event.defaultPrevented) {
                onSelect?.();
                root?.setOpen(false);
            }
        };

        return (
            <div
                ref={ref}
                role="menuitem"
                tabIndex={-1}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    inset && "pl-8",
                    className
                )}
                onClick={handleClick}
                {...props}
            />
        );
    }
);
ContextMenuItem.displayName = "ContextMenuItem";

export type ContextMenuCheckboxItemProps = React.HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
};

const ContextMenuCheckboxItem = React.forwardRef<HTMLDivElement, ContextMenuCheckboxItemProps>(
    ({ className, children, checked = false, onCheckedChange, onClick, ...props }, ref) => {
        const root = React.useContext(ContextMenuContext);
        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            onClick?.(event);
            if (event.defaultPrevented) return;
            onCheckedChange?.(!checked);
            root?.setOpen(false);
        };

        return (
            <div
                ref={ref}
                role="menuitemcheckbox"
                aria-checked={checked}
                tabIndex={-1}
                data-state={checked ? "checked" : "unchecked"}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    {checked && <Check className="h-4 w-4" />}
                </span>
                {children}
            </div>
        );
    }
);
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

export type ContextMenuRadioGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
    onValueChange?: (value: string) => void;
};

const ContextMenuRadioGroup = ({ children, value, onValueChange, ...props }: ContextMenuRadioGroupProps) => {
    const contextValue = React.useMemo(
        () => ({ value, onValueChange }),
        [value, onValueChange]
    );

    return (
        <ContextMenuRadioContext.Provider value={contextValue}>
            <div role="group" {...props}>
                {children}
            </div>
        </ContextMenuRadioContext.Provider>
    );
};
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";

export type ContextMenuRadioItemProps = React.HTMLAttributes<HTMLDivElement> & { value: string };

const ContextMenuRadioItem = React.forwardRef<HTMLDivElement, ContextMenuRadioItemProps>(
    ({ className, children, value, onClick, ...props }, ref) => {
        const radio = React.useContext(ContextMenuRadioContext);
        const root = React.useContext(ContextMenuContext);
        const checked = radio?.value === value;

        const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
            onClick?.(event);
            if (event.defaultPrevented) return;
            radio?.onValueChange?.(value);
            root?.setOpen(false);
        };

        return (
            <div
                ref={ref}
                role="menuitemradio"
                aria-checked={checked}
                tabIndex={-1}
                data-state={checked ? "checked" : "unchecked"}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    {checked && <Circle className="h-2 w-2 fill-current" />}
                </span>
                {children}
            </div>
        );
    }
);
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

export type ContextMenuLabelProps = React.HTMLAttributes<HTMLDivElement> & { inset?: boolean };

const ContextMenuLabel = React.forwardRef<HTMLDivElement, ContextMenuLabelProps>(
    ({ className, inset, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("px-2 py-1.5 text-sm font-semibold text-text-primary", inset && "pl-8", className)}
            {...props}
        />
    )
);
ContextMenuLabel.displayName = "ContextMenuLabel";

export type ContextMenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

const ContextMenuSeparator = React.forwardRef<HTMLDivElement, ContextMenuSeparatorProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("-mx-1 my-1 h-px bg-border-primary", className)} role="separator" {...props} />
    )
);
ContextMenuSeparator.displayName = "ContextMenuSeparator";

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
    return <span className={cn("ml-auto text-xs tracking-widest text-text-tertiary", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export type ContextMenuSubProps = { children: React.ReactNode };

const ContextMenuSub = ({ children }: ContextMenuSubProps) => {
    const [open, setOpen] = React.useState(false);
    const [anchorRect, setAnchorRect] = React.useState<DOMRect | null>(null);
    const contextValue = React.useMemo(() => ({ open, setOpen, anchorRect, setAnchorRect }), [open, anchorRect]);

    return (
        <ContextMenuSubContext.Provider value={contextValue}>
            <div className="relative" onMouseLeave={() => setOpen(false)}>
                {children}
            </div>
        </ContextMenuSubContext.Provider>
    );
};
ContextMenuSub.displayName = "ContextMenuSub";

export type ContextMenuSubTriggerProps = React.HTMLAttributes<HTMLDivElement> & { inset?: boolean };

const ContextMenuSubTrigger = React.forwardRef<HTMLDivElement, ContextMenuSubTriggerProps>(
    ({ className, inset, children, onMouseEnter, onFocus, onKeyDown, ...props }, ref) => {
        const sub = React.useContext(ContextMenuSubContext);
        if (!sub) throw new Error("ContextMenuSubTrigger must be used within ContextMenuSub");

        const handleEnter = (event: React.MouseEvent<HTMLDivElement>) => {
            const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
            sub.setAnchorRect(rect);
            sub.setOpen(true);
            onMouseEnter?.(event);
        };

        const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
            const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
            sub.setAnchorRect(rect);
            sub.setOpen(true);
            onFocus?.(event);
        };

        const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowRight") {
                event.preventDefault();
                const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
                sub.setAnchorRect(rect);
                sub.setOpen(true);
            }
            if (event.key === "ArrowLeft" || event.key === "Escape") {
                sub.setOpen(false);
            }
            onKeyDown?.(event);
        };

        return (
            <div
                ref={ref}
                role="menuitem"
                tabIndex={-1}
                data-state={sub.open ? "open" : "closed"}
                className={cn(
                    "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent-blue focus:text-white data-[state=open]:bg-accent-blue data-[state=open]:text-white",
                    inset && "pl-8",
                    className
                )}
                onMouseEnter={handleEnter}
                onMouseMove={handleEnter}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                {...props}
            >
                {children}
                <ChevronRight className="ml-auto h-4 w-4" />
            </div>
        );
    }
);
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

export type ContextMenuSubContentProps = React.HTMLAttributes<HTMLDivElement>;

const ContextMenuSubContent = React.forwardRef<HTMLDivElement, ContextMenuSubContentProps>(
    ({ className, style, children, ...props }, ref) => {
        const sub = React.useContext(ContextMenuSubContext);
        if (!sub) throw new Error("ContextMenuSubContent must be used within ContextMenuSub");

        if (!sub.open) return null;

        const rect = sub.anchorRect;
        const positionStyle = rect
            ? {
                  position: "fixed" as const,
                  top: rect.top,
                  left: rect.right,
              }
            : { position: "absolute" as const, left: "100%", top: 0 };

        return (
            createPortal(
                <div
                    ref={ref}
                    role="menu"
                    data-state={sub.open ? "open" : "closed"}
                    className={cn(
                        "z-[60] min-w-[8rem] overflow-hidden rounded-md border border-border-primary bg-surface-glass backdrop-blur-xl p-1 text-text-primary shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                        className
                    )}
                    style={{ ...positionStyle, ...style }}
                    onMouseEnter={() => sub.setOpen(true)}
                    onMouseLeave={() => sub.setOpen(false)}
                    {...props}
                >
                    {children}
                </div>,
                document.body
            )
        );
    }
);
ContextMenuSubContent.displayName = "ContextMenuSubContent";

const ContextMenuPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return createPortal(<>{children}</>, document.body);
};
ContextMenuPortal.displayName = "ContextMenuPortal";

export {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuGroup,
    ContextMenuPortal,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuRadioGroup,
};

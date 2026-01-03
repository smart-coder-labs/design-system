"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "../lib/utils";
import { createPortal } from "react-dom";
const ContextMenuContext = React.createContext(null);
const ContextMenuSubContext = React.createContext(null);
const ContextMenuRadioContext = React.createContext(null);
const ContextMenu = ({ children, open, defaultOpen = false, onOpenChange, ...props }) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const [position, setPosition] = React.useState(null);
    const isControlled = open !== undefined;
    const currentOpen = isControlled ? open : internalOpen;
    const setOpen = React.useCallback((next) => {
        if (!isControlled)
            setInternalOpen(next);
        onOpenChange?.(next);
        if (!next)
            setPosition(null);
    }, [isControlled, onOpenChange]);
    const contextValue = React.useMemo(() => ({ open: !!currentOpen, setOpen, position, setPosition }), [currentOpen, setOpen, position]);
    React.useEffect(() => {
        if (!currentOpen)
            return;
        const handleKey = (e) => {
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
    return (_jsx(ContextMenuContext.Provider, { value: contextValue, children: _jsx("div", { ...props, children: children }) }));
};
ContextMenu.displayName = "ContextMenu";
const ContextMenuTrigger = React.forwardRef(({ asChild = false, children, ...props }, ref) => {
    const context = React.useContext(ContextMenuContext);
    if (!context)
        throw new Error("ContextMenuTrigger must be used within ContextMenu");
    const { setOpen, setPosition } = context;
    const handleContextMenu = (event) => {
        event.preventDefault();
        setPosition({ x: event.clientX, y: event.clientY });
        setOpen(true);
    };
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ref,
            onContextMenu: handleContextMenu,
            ...props,
        });
    }
    return (_jsx("div", { ref: ref, onContextMenu: handleContextMenu, ...props, children: children }));
});
ContextMenuTrigger.displayName = "ContextMenuTrigger";
const ContextMenuContent = React.forwardRef(({ className, style, children, ...props }, ref) => {
    const context = React.useContext(ContextMenuContext);
    if (!context)
        throw new Error("ContextMenuContent must be used within ContextMenu");
    const { open, position, setOpen } = context;
    if (!open || !position)
        return null;
    const content = (_jsx("div", { ref: ref, role: "menu", style: {
            position: "fixed",
            top: position.y,
            left: position.x,
            ...style,
        }, "data-state": open ? "open" : "closed", className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border border-border-primary bg-surface-glass backdrop-blur-xl p-1 text-text-primary shadow-lg animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className), ...props, children: children }));
    return createPortal(content, document.body);
});
ContextMenuContent.displayName = "ContextMenuContent";
const ContextMenuGroup = ({ className, ...props }) => (_jsx("div", { className: className, ...props }));
ContextMenuGroup.displayName = "ContextMenuGroup";
const ContextMenuItem = React.forwardRef(({ className, inset, onSelect, onClick, ...props }, ref) => {
    const root = React.useContext(ContextMenuContext);
    const handleClick = (event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
            onSelect?.();
            root?.setOpen(false);
        }
    };
    return (_jsx("div", { ref: ref, role: "menuitem", tabIndex: -1, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), onClick: handleClick, ...props }));
});
ContextMenuItem.displayName = "ContextMenuItem";
const ContextMenuCheckboxItem = React.forwardRef(({ className, children, checked = false, onCheckedChange, onClick, ...props }, ref) => {
    const root = React.useContext(ContextMenuContext);
    const handleClick = (event) => {
        onClick?.(event);
        if (event.defaultPrevented)
            return;
        onCheckedChange?.(!checked);
        root?.setOpen(false);
    };
    return (_jsxs("div", { ref: ref, role: "menuitemcheckbox", "aria-checked": checked, tabIndex: -1, "data-state": checked ? "checked" : "unchecked", className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), onClick: handleClick, ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked && _jsx(Check, { className: "h-4 w-4" }) }), children] }));
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";
const ContextMenuRadioGroup = ({ children, value, onValueChange, ...props }) => {
    const contextValue = React.useMemo(() => ({ value, onValueChange }), [value, onValueChange]);
    return (_jsx(ContextMenuRadioContext.Provider, { value: contextValue, children: _jsx("div", { role: "group", ...props, children: children }) }));
};
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";
const ContextMenuRadioItem = React.forwardRef(({ className, children, value, onClick, ...props }, ref) => {
    const radio = React.useContext(ContextMenuRadioContext);
    const root = React.useContext(ContextMenuContext);
    const checked = radio?.value === value;
    const handleClick = (event) => {
        onClick?.(event);
        if (event.defaultPrevented)
            return;
        radio?.onValueChange?.(value);
        root?.setOpen(false);
    };
    return (_jsxs("div", { ref: ref, role: "menuitemradio", "aria-checked": checked, tabIndex: -1, "data-state": checked ? "checked" : "unchecked", className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent-blue focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), onClick: handleClick, ...props, children: [_jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked && _jsx(Circle, { className: "h-2 w-2 fill-current" }) }), children] }));
});
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";
const ContextMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold text-text-primary", inset && "pl-8", className), ...props })));
ContextMenuLabel.displayName = "ContextMenuLabel";
const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("-mx-1 my-1 h-px bg-border-primary", className), role: "separator", ...props })));
ContextMenuSeparator.displayName = "ContextMenuSeparator";
const ContextMenuShortcut = ({ className, ...props }) => {
    return _jsx("span", { className: cn("ml-auto text-xs tracking-widest text-text-tertiary", className), ...props });
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
const ContextMenuSub = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorRect, setAnchorRect] = React.useState(null);
    const contextValue = React.useMemo(() => ({ open, setOpen, anchorRect, setAnchorRect }), [open, anchorRect]);
    return (_jsx(ContextMenuSubContext.Provider, { value: contextValue, children: _jsx("div", { className: "relative", onMouseLeave: () => setOpen(false), children: children }) }));
};
ContextMenuSub.displayName = "ContextMenuSub";
const ContextMenuSubTrigger = React.forwardRef(({ className, inset, children, onMouseEnter, onFocus, onKeyDown, ...props }, ref) => {
    const sub = React.useContext(ContextMenuSubContext);
    if (!sub)
        throw new Error("ContextMenuSubTrigger must be used within ContextMenuSub");
    const handleEnter = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        sub.setAnchorRect(rect);
        sub.setOpen(true);
        onMouseEnter?.(event);
    };
    const handleFocus = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        sub.setAnchorRect(rect);
        sub.setOpen(true);
        onFocus?.(event);
    };
    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            const rect = event.currentTarget.getBoundingClientRect();
            sub.setAnchorRect(rect);
            sub.setOpen(true);
        }
        if (event.key === "ArrowLeft" || event.key === "Escape") {
            sub.setOpen(false);
        }
        onKeyDown?.(event);
    };
    return (_jsxs("div", { ref: ref, role: "menuitem", tabIndex: -1, "data-state": sub.open ? "open" : "closed", className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent-blue focus:text-white data-[state=open]:bg-accent-blue data-[state=open]:text-white", inset && "pl-8", className), onMouseEnter: handleEnter, onMouseMove: handleEnter, onFocus: handleFocus, onKeyDown: handleKeyDown, ...props, children: [children, _jsx(ChevronRight, { className: "ml-auto h-4 w-4" })] }));
});
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";
const ContextMenuSubContent = React.forwardRef(({ className, style, children, ...props }, ref) => {
    const sub = React.useContext(ContextMenuSubContext);
    if (!sub)
        throw new Error("ContextMenuSubContent must be used within ContextMenuSub");
    if (!sub.open)
        return null;
    const rect = sub.anchorRect;
    const positionStyle = rect
        ? {
            position: "fixed",
            top: rect.top,
            left: rect.right,
        }
        : { position: "absolute", left: "100%", top: 0 };
    return (createPortal(_jsx("div", { ref: ref, role: "menu", "data-state": sub.open ? "open" : "closed", className: cn("z-[60] min-w-[8rem] overflow-hidden rounded-md border border-border-primary bg-surface-glass backdrop-blur-xl p-1 text-text-primary shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className), style: { ...positionStyle, ...style }, onMouseEnter: () => sub.setOpen(true), onMouseLeave: () => sub.setOpen(false), ...props, children: children }), document.body));
});
ContextMenuSubContent.displayName = "ContextMenuSubContent";
const ContextMenuPortal = ({ children }) => {
    return createPortal(_jsx(_Fragment, { children: children }), document.body);
};
ContextMenuPortal.displayName = "ContextMenuPortal";
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup, };
//# sourceMappingURL=ContextMenu.js.map
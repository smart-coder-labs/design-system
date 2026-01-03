import * as React from "react";
type PopoverProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
};
declare function Popover({ open: controlledOpen, defaultOpen, onOpenChange, children }: PopoverProps): import("react/jsx-runtime").JSX.Element;
declare const PopoverTrigger: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: React.ReactNode;
} & React.RefAttributes<HTMLElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
    side?: "top" | "bottom" | "left" | "right";
    sideOffset?: number;
} & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent };
//# sourceMappingURL=Popover.d.ts.map
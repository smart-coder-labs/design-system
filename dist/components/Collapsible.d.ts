import * as React from "react";
export type CollapsibleProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Collapsible: React.ForwardRefExoticComponent<{
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export type CollapsibleTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<CollapsibleTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export type CollapsibleContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const CollapsibleContent: React.ForwardRefExoticComponent<CollapsibleContentProps & React.RefAttributes<HTMLDivElement>>;
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
//# sourceMappingURL=Collapsible.d.ts.map
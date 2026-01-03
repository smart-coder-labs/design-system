import * as React from "react";
declare const ScrollArea: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
type ScrollBarProps = {
    orientation?: "vertical" | "horizontal";
    className?: string;
};
declare const ScrollBar: React.ForwardRefExoticComponent<ScrollBarProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollArea, ScrollBar };
//# sourceMappingURL=ScrollArea.d.ts.map
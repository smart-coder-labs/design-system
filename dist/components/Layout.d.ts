import * as React from "react";
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    gap?: number | string;
}
declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
declare const HStack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
declare const VStack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    columns?: number;
    gap?: number | string;
}
declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export { Stack, HStack, VStack, Grid };
//# sourceMappingURL=Layout.d.ts.map
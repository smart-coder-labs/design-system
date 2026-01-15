"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    gap?: number | string;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, as: Component = "div", gap = 4, style, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn("flex flex-col", className)}
                style={{ gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap, ...style }}
                {...props}
            />
        );
    }
);
Stack.displayName = "Stack";

const HStack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, ...props }, ref) => {
        return (
            <Stack
                ref={ref}
                className={cn("flex-row items-center", className)}
                {...props}
            />
        );
    }
);
HStack.displayName = "HStack";

const VStack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, ...props }, ref) => {
        return <Stack ref={ref} className={cn("flex-col", className)} {...props} />;
    }
);
VStack.displayName = "VStack";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    columns?: number;
    gap?: number | string;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ className, as: Component = "div", columns = 1, gap = 4, style, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn("grid", className)}
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
                    ...style,
                }}
                {...props}
            />
        );
    }
);
Grid.displayName = "Grid";

export { Stack, HStack, VStack, Grid };

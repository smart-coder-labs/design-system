"use client";

import { cn } from "../lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-surface-secondary/50", className)}
            {...props}
        />
    );
}

export { Skeleton };

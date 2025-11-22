"use client";

import * as React from "react";
import { cn } from "../lib/utils";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
    color?: "default" | "white" | "blue";
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size = "md", color = "default", ...props }, ref) => {
        const sizeClasses = {
            sm: "h-4 w-4",
            md: "h-6 w-6",
            lg: "h-8 w-8",
        };

        const colorClasses = {
            default: "text-text-secondary",
            white: "text-white",
            blue: "text-accent-blue",
        };

        return (
            <div
                ref={ref}
                className={cn("relative inline-block", sizeClasses[size], className)}
                {...props}
                role="status"
                aria-label="Loading"
            >
                {Array.from({ length: 8 }).map((_, i) => (
                    <span
                        key={i}
                        className={cn(
                            "absolute left-1/2 top-0 h-full w-[12%] -translate-x-1/2 rounded-full",
                            colorClasses[color]
                        )}
                        style={{
                            transform: `rotate(${i * 45}deg)`,
                            opacity: 0.2 + i * 0.1, // Static gradient for visual, but we animate opacity
                            animation: `spinner-fade 0.8s linear infinite`,
                            animationDelay: `${i * 0.1}s`,
                            backgroundColor: "currentColor",
                        }}
                    />
                ))}
            </div>
        );
    }
);
Spinner.displayName = "Spinner";

export { Spinner };

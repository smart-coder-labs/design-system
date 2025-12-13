"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const avatarVariants = cva("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full transition-opacity hover:opacity-90", {
    variants: {
        size: {
            xs: "h-6 w-6 text-xs",
            sm: "h-8 w-8 text-xs",
            md: "h-10 w-10 text-sm",
            lg: "h-12 w-12 text-base",
            xl: "h-16 w-16 text-xl",
            "2xl": "h-24 w-24 text-2xl",
        },
        shape: {
            circle: "rounded-full",
            square: "rounded-lg", // Apple style square avatars often have rounded corners
        },
    },
    defaultVariants: {
        size: "md",
        shape: "circle",
    },
});
const Avatar = React.forwardRef(({ className, size, shape, ...props }, ref) => (_jsx(AvatarPrimitive.Root, { ref: ref, className: cn(avatarVariants({ size, shape }), className), ...props })));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Image, { ref: ref, className: cn("aspect-square h-full w-full object-cover", className), ...props })));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (_jsx(AvatarPrimitive.Fallback, { ref: ref, className: cn("flex h-full w-full items-center justify-center bg-surface-secondary text-text-secondary font-medium", className), ...props })));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=Avatar.js.map
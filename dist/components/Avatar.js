"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
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
const AvatarContext = React.createContext(null);
const Avatar = React.forwardRef(({ className, size, shape, children, ...props }, ref) => {
    const [status, setStatus] = React.useState("idle");
    const contextValue = React.useMemo(() => ({ status, setStatus }), [status]);
    return (_jsx(AvatarContext.Provider, { value: contextValue, children: _jsx("div", { ref: ref, className: cn(avatarVariants({ size, shape }), className), ...props, children: children }) }));
});
Avatar.displayName = "Avatar";
const AvatarImage = React.forwardRef(({ className, onError, onLoad, ...props }, ref) => {
    const avatar = React.useContext(AvatarContext);
    if (!avatar) {
        throw new Error("AvatarImage must be used within Avatar");
    }
    const handleLoad = (event) => {
        avatar.setStatus("loaded");
        onLoad?.(event);
    };
    const handleError = (event) => {
        avatar.setStatus("error");
        onError?.(event);
    };
    React.useEffect(() => {
        if (!props.src) {
            avatar.setStatus("error");
            return;
        }
        // If the image was already cached by the browser, mark as loaded to avoid a brief fallback flash.
        const img = new Image();
        img.src = props.src;
        if (img.complete) {
            avatar.setStatus("loaded");
            return;
        }
        avatar.setStatus("loading");
    }, [avatar, props.src]);
    const showImage = avatar.status === "loaded";
    return (_jsx("img", { ref: ref, className: cn("aspect-square h-full w-full object-cover", className), onLoad: handleLoad, onError: handleError, "aria-hidden": !showImage, style: !showImage ? { display: "none" } : undefined, ...props }));
});
AvatarImage.displayName = "AvatarImage";
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => {
    const avatar = React.useContext(AvatarContext);
    if (!avatar) {
        throw new Error("AvatarFallback must be used within Avatar");
    }
    const showFallback = avatar.status !== "loaded";
    return (_jsx("div", { ref: ref, "aria-hidden": !showFallback, style: !showFallback ? { display: "none" } : undefined, className: cn("flex h-full w-full items-center justify-center bg-surface-secondary text-text-secondary font-medium", className), ...props }));
});
AvatarFallback.displayName = "AvatarFallback";
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=Avatar.js.map
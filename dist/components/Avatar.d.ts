import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type VariantProps } from "class-variance-authority";
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=Avatar.d.ts.map
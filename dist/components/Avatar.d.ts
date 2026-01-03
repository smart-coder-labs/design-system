import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}
declare const AvatarImage: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>;
export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const AvatarFallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLDivElement>>;
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=Avatar.d.ts.map
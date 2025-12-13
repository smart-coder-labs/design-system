import React from 'react';
export type AvatarGroupSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface AvatarGroupItem {
    src?: string;
    alt: string;
    fallback?: string;
}
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    items: AvatarGroupItem[];
    max?: number;
    size?: AvatarGroupSize;
    showTooltip?: boolean;
}
export declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AvatarGroup.d.ts.map
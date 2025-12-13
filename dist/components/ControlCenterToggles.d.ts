import React from 'react';
export interface ToggleControl {
    id: string;
    label: string;
    icon: React.ReactNode;
    enabled: boolean;
    onToggle: (enabled: boolean) => void;
    value?: string | number;
    showValue?: boolean;
    disabled?: boolean;
}
export interface ControlCenterTogglesProps extends React.HTMLAttributes<HTMLDivElement> {
    controls: ToggleControl[];
    layout?: 'grid' | 'list';
    className?: string;
}
export declare const ControlCenterToggles: React.ForwardRefExoticComponent<ControlCenterTogglesProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ControlCenterToggles.d.ts.map
import React from 'react';
export interface InspectorSection {
    id: string;
    title: string;
    content: React.ReactNode;
    defaultExpanded?: boolean;
}
export interface InspectorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    sections: InspectorSection[];
    width?: string;
}
export declare const InspectorPanel: React.ForwardRefExoticComponent<InspectorPanelProps & React.RefAttributes<HTMLDivElement>>;
export interface InspectorFieldProps {
    label: string;
    children: React.ReactNode;
}
export declare const InspectorField: React.FC<InspectorFieldProps>;
//# sourceMappingURL=InspectorPanel.d.ts.map
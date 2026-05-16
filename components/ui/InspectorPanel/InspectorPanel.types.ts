interface InspectorSection {
    id: string;
    title: string;
    content: React.ReactNode;
    defaultExpanded?: boolean;
}


interface InspectorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    sections: InspectorSection[];
    width?: string;
}


interface InspectorFieldProps {
    label: string;
    children: React.ReactNode;
}

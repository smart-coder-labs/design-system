export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    gap?: number | string;
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
    columns?: number;
    gap?: number | string;
}
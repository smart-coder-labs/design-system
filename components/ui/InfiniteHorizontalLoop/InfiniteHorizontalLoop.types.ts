export interface InfiniteHorizontalLoopProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  gap?: string;
}
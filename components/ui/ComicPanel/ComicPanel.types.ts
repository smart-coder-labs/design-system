import { HTMLMotionProps } from 'framer-motion';

export interface ComicPanelProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right";
  children?: React.ReactNode;
}
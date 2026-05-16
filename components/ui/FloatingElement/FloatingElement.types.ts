import { HTMLMotionProps } from 'framer-motion';

export interface FloatingElementProps extends HTMLMotionProps<"div"> {
  rotationSpeed?: number;
}
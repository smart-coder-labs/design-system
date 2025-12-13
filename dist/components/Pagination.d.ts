import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
/**
 * Pagination component – Apple-style page navigation.
 *
 * Designed to follow the Apple‑style design system tokens.
 * Features smooth transitions, hover states, and responsive design.
 */
export interface PaginationProps extends Omit<HTMLMotionProps<'nav'>, 'children'> {
    /** Current active page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Number of page buttons to show around current page */
    siblingCount?: number;
    /** Show first/last page buttons */
    showFirstLast?: boolean;
    /** Show previous/next buttons */
    showPrevNext?: boolean;
    /** Optional className for custom styling */
    className?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
}
export declare const Pagination: React.ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Pagination.d.ts.map
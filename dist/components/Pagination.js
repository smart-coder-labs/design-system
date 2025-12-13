import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
const DOTS = '...';
const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
const usePagination = ({ totalPages, siblingCount = 1, currentPage, }) => {
    const paginationRange = React.useMemo(() => {
        const totalPageNumbers = siblingCount + 5;
        // Case 1: If the number of pages is less than the page numbers we want to show
        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPages;
        // Case 2: No left dots to show, but rights dots to be shown
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPages];
        }
        // Case 3: No right dots to show, but left dots to be shown
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPages - rightItemCount + 1, totalPages);
            return [firstPageIndex, DOTS, ...rightRange];
        }
        // Case 4: Both left and right dots to be shown
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
        return [];
    }, [totalPages, siblingCount, currentPage]);
    return paginationRange;
};
export const Pagination = React.forwardRef(({ currentPage, totalPages, onPageChange, siblingCount = 1, showFirstLast = true, showPrevNext = true, size = 'md', className = '', ...props }, ref) => {
    const paginationRange = usePagination({
        currentPage,
        totalPages,
        siblingCount,
    });
    const sizeStyles = {
        sm: 'h-8 min-w-[2rem] text-xs px-2',
        md: 'h-10 min-w-[2.5rem] text-sm px-3',
        lg: 'h-12 min-w-[3rem] text-base px-4',
    };
    const baseButtonStyles = `
            inline-flex items-center justify-center
            rounded-lg font-medium
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
        `;
    const pageButtonStyles = `
            ${baseButtonStyles}
            ${sizeStyles[size]}
        `;
    const activePageStyles = `
            bg-accent-blue text-white shadow-sm
            hover:bg-accent-blue/90
        `;
    const inactivePageStyles = `
            text-text-primary
            bg-surface-secondary
            hover:bg-surface-secondary/80 hover:shadow-sm
        `;
    const navButtonStyles = `
            ${baseButtonStyles}
            ${sizeStyles[size]}
            text-text-secondary
            bg-surface-secondary
            hover:bg-surface-secondary/80 hover:text-text-primary hover:shadow-sm
        `;
    const handlePageChange = (page) => {
        if (typeof page === 'number' && page !== currentPage) {
            onPageChange(page);
        }
    };
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    const handleFirst = () => {
        if (currentPage !== 1) {
            onPageChange(1);
        }
    };
    const handleLast = () => {
        if (currentPage !== totalPages) {
            onPageChange(totalPages);
        }
    };
    if (totalPages <= 1) {
        return null;
    }
    return (_jsxs(motion.nav, { ref: ref, className: cn('flex items-center gap-2', className), initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { type: 'spring', stiffness: 300, damping: 30 }, "aria-label": "Pagination", ...props, children: [showFirstLast && (_jsx(motion.button, { onClick: handleFirst, disabled: currentPage === 1, className: navButtonStyles, whileHover: { scale: currentPage === 1 ? 1 : 1.05 }, whileTap: { scale: currentPage === 1 ? 1 : 0.95 }, "aria-label": "First page", children: _jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M11 12L7 8L11 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M7 12L3 8L7 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) })), showPrevNext && (_jsx(motion.button, { onClick: handlePrevious, disabled: currentPage === 1, className: navButtonStyles, whileHover: { scale: currentPage === 1 ? 1 : 1.05 }, whileTap: { scale: currentPage === 1 ? 1 : 0.95 }, "aria-label": "Previous page", children: _jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M10 12L6 8L10 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })), _jsx("div", { className: "flex items-center gap-1", children: paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return (_jsx("span", { className: cn('inline-flex items-center justify-center', sizeStyles[size], 'text-text-tertiary'), children: DOTS }, `dots-${index}`));
                    }
                    const isActive = pageNumber === currentPage;
                    return (_jsx(motion.button, { onClick: () => handlePageChange(pageNumber), className: cn(pageButtonStyles, isActive ? activePageStyles : inactivePageStyles), whileHover: { scale: isActive ? 1 : 1.05 }, whileTap: { scale: isActive ? 1 : 0.95 }, "aria-label": `Page ${pageNumber}`, "aria-current": isActive ? 'page' : undefined, children: pageNumber }, pageNumber));
                }) }), showPrevNext && (_jsx(motion.button, { onClick: handleNext, disabled: currentPage === totalPages, className: navButtonStyles, whileHover: { scale: currentPage === totalPages ? 1 : 1.05 }, whileTap: { scale: currentPage === totalPages ? 1 : 0.95 }, "aria-label": "Next page", children: _jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M6 12L10 8L6 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })), showFirstLast && (_jsx(motion.button, { onClick: handleLast, disabled: currentPage === totalPages, className: navButtonStyles, whileHover: { scale: currentPage === totalPages ? 1 : 1.05 }, whileTap: { scale: currentPage === totalPages ? 1 : 0.95 }, "aria-label": "Last page", children: _jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M5 12L9 8L5 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M9 12L13 8L9 4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }))] }));
});
Pagination.displayName = 'Pagination';
//# sourceMappingURL=Pagination.js.map
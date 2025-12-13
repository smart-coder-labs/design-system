import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
/* ========================================
   INSPECTOR PANEL COMPONENT
   ======================================== */
export const InspectorPanel = forwardRef(({ sections, width = '280px', className, ...props }, ref) => {
    const [expandedSections, setExpandedSections] = useState(new Set(sections.filter(s => s.defaultExpanded).map(s => s.id)));
    const toggleSection = (sectionId) => {
        setExpandedSections(prev => {
            const newSet = new Set(prev);
            if (newSet.has(sectionId)) {
                newSet.delete(sectionId);
            }
            else {
                newSet.add(sectionId);
            }
            return newSet;
        });
    };
    return (_jsx("div", { ref: ref, className: cn("bg-surface-secondary border-l border-border-primary overflow-y-auto", className), style: { width }, ...props, children: sections.map((section) => {
            const isExpanded = expandedSections.has(section.id);
            return (_jsxs("div", { children: [_jsxs("button", { onClick: () => toggleSection(section.id), className: "w-full flex items-center justify-between px-4 py-4 text-left hover:bg-surface-tertiary transition-colors focus:outline-none group rounded-lg", children: [_jsx("span", { className: "text-sm font-bold text-text-primary uppercase tracking-wide", children: section.title }), _jsx(motion.div, { animate: { rotate: isExpanded ? 90 : 0 }, transition: { duration: 0.2 }, children: _jsx(ChevronRight, { className: "w-4 h-4 text-text-tertiary" }) })] }), _jsx(AnimatePresence, { initial: false, children: isExpanded && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: 'auto', opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.2 }, className: "overflow-hidden", children: _jsx("div", { className: "px-4 pb-4 space-y-4", children: section.content }) })) })] }, section.id));
        }) }));
});
InspectorPanel.displayName = 'InspectorPanel';
export const InspectorField = ({ label, children }) => {
    return (_jsxs("div", { className: "space-y-1.5", children: [_jsx("label", { className: "text-xs font-medium text-text-secondary", children: label }), _jsx("div", { children: children })] }));
};
InspectorField.displayName = 'InspectorField';
//# sourceMappingURL=InspectorPanel.js.map
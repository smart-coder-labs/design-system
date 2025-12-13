import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { ChevronRight } from 'lucide-react';
/* ========================================
   PROPERTY LIST COMPONENT
   ======================================== */
export const PropertyList = forwardRef(({ sections, variant = 'default', size = 'md', collapsible = true, dividers = true, className, ...props }, ref) => {
    const [expandedSections, setExpandedSections] = useState(new Set(sections.filter(s => s.defaultExpanded !== false).map(s => s.id)));
    const [editingIndex, setEditingIndex] = useState(null);
    const [editValue, setEditValue] = useState('');
    const toggleSection = (sectionId) => {
        if (!collapsible)
            return;
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
    const handleEdit = (sectionId, itemIndex, item) => {
        const key = `${sectionId}-${itemIndex}`;
        setEditingIndex(key);
        setEditValue(String(item.value));
    };
    const handleSave = (item) => {
        if (item.onChange) {
            item.onChange(editValue);
        }
        setEditingIndex(null);
    };
    const handleCancel = () => {
        setEditingIndex(null);
    };
    const sizeClasses = {
        sm: {
            label: "text-xs",
            value: "text-sm",
            padding: "px-3 py-2",
            headerPadding: "px-3 py-2",
        },
        md: {
            label: "text-xs",
            value: "text-sm",
            padding: "px-4 py-3",
            headerPadding: "px-4 py-3",
        },
        lg: {
            label: "text-sm",
            value: "text-base",
            padding: "px-5 py-4",
            headerPadding: "px-5 py-4",
        },
    };
    const variantClasses = {
        default: "bg-surface-primary",
        bordered: "bg-surface-primary border border-border-primary rounded-xl shadow-sm overflow-hidden",
        inset: "bg-surface-secondary rounded-lg",
    };
    return (_jsx("div", { ref: ref, className: cn("overflow-hidden", variantClasses[variant], className), ...props, children: sections.map((section, sectionIndex) => {
            const isExpanded = expandedSections.has(section.id);
            const showHeader = section.title && (collapsible || section.title);
            return (_jsxs("div", { className: cn(sectionIndex !== 0 && variant !== 'bordered' && "border-t border-border-primary"), children: [showHeader && (_jsxs("button", { onClick: () => toggleSection(section.id), disabled: !collapsible, className: cn("w-full flex items-center justify-between text-left bg-surface-secondary/50 border-b border-border-primary", sizeClasses[size].headerPadding, collapsible && "hover:bg-surface-secondary transition-colors cursor-pointer", !collapsible && "cursor-default"), children: [_jsx("span", { className: "text-[11px] font-bold text-text-secondary uppercase tracking-wider", children: section.title }), collapsible && (_jsx(motion.div, { animate: { rotate: isExpanded ? 90 : 0 }, transition: { duration: 0.15 }, children: _jsx(ChevronRight, { className: "w-3.5 h-3.5 text-text-tertiary" }) }))] })), _jsx(AnimatePresence, { initial: false, children: (isExpanded || !collapsible) && (_jsx(motion.div, { initial: collapsible ? { height: 0, opacity: 0 } : false, animate: { height: 'auto', opacity: 1 }, exit: collapsible ? { height: 0, opacity: 0 } : {}, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }, className: "overflow-hidden", children: section.items.map((item, itemIndex) => {
                                const key = `${section.id}-${itemIndex}`;
                                const isEditing = editingIndex === key;
                                return (_jsxs("div", { className: cn("flex items-center justify-between group", sizeClasses[size].padding, dividers && itemIndex !== section.items.length - 1 && "border-b border-border-secondary", item.editable && !isEditing && "hover:bg-surface-secondary/30 cursor-pointer", "transition-colors"), onClick: () => {
                                        if (item.editable && !isEditing) {
                                            handleEdit(section.id, itemIndex, item);
                                        }
                                    }, children: [_jsxs("div", { className: "flex items-center gap-2 flex-shrink-0 min-w-[120px] max-w-[160px]", children: [item.icon && (_jsx("span", { className: "text-text-tertiary flex-shrink-0", children: item.icon })), _jsx("span", { className: cn("font-medium text-text-secondary truncate", sizeClasses[size].label), children: item.label })] }), _jsx("div", { className: "flex-1 text-right min-w-0 pl-4", children: isEditing ? (_jsxs("div", { className: "flex items-center gap-2 justify-end", onClick: (e) => e.stopPropagation(), children: [_jsx("input", { type: "text", value: editValue, onChange: (e) => setEditValue(e.target.value), onKeyDown: (e) => {
                                                            if (e.key === 'Enter')
                                                                handleSave(item);
                                                            if (e.key === 'Escape')
                                                                handleCancel();
                                                        }, className: cn("flex-1 bg-surface-primary border border-accent-blue rounded-md px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-accent-blue/30", sizeClasses[size].value), autoFocus: true }), _jsx("button", { onClick: () => handleSave(item), className: "text-accent-blue hover:text-accent-blue-hover text-xs font-semibold", children: "OK" }), _jsx("button", { onClick: handleCancel, className: "text-text-tertiary hover:text-text-secondary text-xs", children: "Cancel" })] })) : (_jsx("span", { className: cn("text-text-primary break-words leading-relaxed", sizeClasses[size].value, item.editable && "group-hover:text-accent-blue transition-colors"), children: item.value })) })] }, key));
                            }) })) })] }, section.id));
        }) }));
});
PropertyList.displayName = 'PropertyList';
export const CompactPropertyList = forwardRef((props, ref) => {
    return _jsx(PropertyList, { ref: ref, ...props, size: "sm" });
});
CompactPropertyList.displayName = 'CompactPropertyList';
//# sourceMappingURL=PropertyList.js.map
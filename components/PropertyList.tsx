import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { ChevronRight } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type PropertyItem = {
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    editable?: boolean;
    onChange?: (value: string) => void;
};

export type PropertySection = {
    id: string;
    title?: string;
    items: PropertyItem[];
    defaultExpanded?: boolean;
};

export type PropertyListVariant = 'default' | 'bordered' | 'inset';
export type PropertyListSize = 'sm' | 'md' | 'lg';

export interface PropertyListProps extends React.HTMLAttributes<HTMLDivElement> {
    sections: PropertySection[];
    variant?: PropertyListVariant;
    size?: PropertyListSize;
    collapsible?: boolean;
    dividers?: boolean;
}

/* ========================================
   PROPERTY LIST COMPONENT
   ======================================== */

export const PropertyList = forwardRef<HTMLDivElement, PropertyListProps>(
    (
        {
            sections,
            variant = 'default',
            size = 'md',
            collapsible = true,
            dividers = true,
            className,
            ...props
        },
        ref
    ) => {
        const [expandedSections, setExpandedSections] = useState<Set<string>>(
            new Set(sections.filter(s => s.defaultExpanded !== false).map(s => s.id))
        );

        const [editingIndex, setEditingIndex] = useState<string | null>(null);
        const [editValue, setEditValue] = useState<string>('');

        const toggleSection = (sectionId: string) => {
            if (!collapsible) return;
            setExpandedSections(prev => {
                const newSet = new Set(prev);
                if (newSet.has(sectionId)) {
                    newSet.delete(sectionId);
                } else {
                    newSet.add(sectionId);
                }
                return newSet;
            });
        };

        const handleEdit = (sectionId: string, itemIndex: number, item: PropertyItem) => {
            const key = `${sectionId}-${itemIndex}`;
            setEditingIndex(key);
            setEditValue(String(item.value));
        };

        const handleSave = (item: PropertyItem) => {
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

        return (
            <div
                ref={ref}
                className={cn(
                    "overflow-hidden",
                    variantClasses[variant],
                    className
                )}
                {...props}
            >
                {sections.map((section, sectionIndex) => {
                    const isExpanded = expandedSections.has(section.id);
                    const showHeader = section.title && (collapsible || section.title);

                    return (
                        <div 
                            key={section.id}
                            className={cn(
                                sectionIndex !== 0 && variant !== 'bordered' && "border-t border-border-primary"
                            )}
                        >
                            {/* Section Header */}
                            {showHeader && (
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    disabled={!collapsible}
                                    className={cn(
                                        "w-full flex items-center justify-between text-left bg-surface-secondary/50 border-b border-border-primary",
                                        sizeClasses[size].headerPadding,
                                        collapsible && "hover:bg-surface-secondary transition-colors cursor-pointer",
                                        !collapsible && "cursor-default"
                                    )}
                                >
                                    <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">
                                        {section.title}
                                    </span>
                                    {collapsible && (
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 90 : 0 }}
                                            transition={{ duration: 0.15 }}
                                        >
                                            <ChevronRight className="w-3.5 h-3.5 text-text-tertiary" />
                                        </motion.div>
                                    )}
                                </button>
                            )}

                            {/* Section Items */}
                            <AnimatePresence initial={false}>
                                {(isExpanded || !collapsible) && (
                                    <motion.div
                                        initial={collapsible ? { height: 0, opacity: 0 } : false}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={collapsible ? { height: 0, opacity: 0 } : {}}
                                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        {section.items.map((item, itemIndex) => {
                                            const key = `${section.id}-${itemIndex}`;
                                            const isEditing = editingIndex === key;

                                            return (
                                                <div
                                                    key={key}
                                                    className={cn(
                                                        "flex items-center justify-between group",
                                                        sizeClasses[size].padding,
                                                        dividers && itemIndex !== section.items.length - 1 && "border-b border-border-secondary",
                                                        item.editable && !isEditing && "hover:bg-surface-secondary/30 cursor-pointer",
                                                        "transition-colors"
                                                    )}
                                                    onClick={() => {
                                                        if (item.editable && !isEditing) {
                                                            handleEdit(section.id, itemIndex, item);
                                                        }
                                                    }}
                                                >
                                                    {/* Label */}
                                                    <div className="flex items-center gap-2 flex-shrink-0 min-w-[120px] max-w-[160px]">
                                                        {item.icon && (
                                                            <span className="text-text-tertiary flex-shrink-0">
                                                                {item.icon}
                                                            </span>
                                                        )}
                                                        <span className={cn(
                                                            "font-medium text-text-secondary truncate",
                                                            sizeClasses[size].label
                                                        )}>
                                                            {item.label}
                                                        </span>
                                                    </div>

                                                    {/* Value */}
                                                    <div className="flex-1 text-right min-w-0 pl-4">
                                                        {isEditing ? (
                                                            <div className="flex items-center gap-2 justify-end" onClick={(e) => e.stopPropagation()}>
                                                                <input
                                                                    type="text"
                                                                    value={editValue}
                                                                    onChange={(e) => setEditValue(e.target.value)}
                                                                    onKeyDown={(e) => {
                                                                        if (e.key === 'Enter') handleSave(item);
                                                                        if (e.key === 'Escape') handleCancel();
                                                                    }}
                                                                    className={cn(
                                                                        "flex-1 bg-surface-primary border border-accent-blue rounded-md px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-accent-blue/30",
                                                                        sizeClasses[size].value
                                                                    )}
                                                                    autoFocus
                                                                />
                                                                <button
                                                                    onClick={() => handleSave(item)}
                                                                    className="text-accent-blue hover:text-accent-blue-hover text-xs font-semibold"
                                                                >
                                                                    OK
                                                                </button>
                                                                <button
                                                                    onClick={handleCancel}
                                                                    className="text-text-tertiary hover:text-text-secondary text-xs"
                                                                >
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <span className={cn(
                                                                "text-text-primary break-words leading-relaxed",
                                                                sizeClasses[size].value,
                                                                item.editable && "group-hover:text-accent-blue transition-colors"
                                                            )}>
                                                                {item.value}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        );
    }
);

PropertyList.displayName = 'PropertyList';

/* ========================================
   COMPACT VARIANT
   ======================================== */

export interface CompactPropertyListProps extends Omit<PropertyListProps, 'size'> {
    variant?: PropertyListVariant;
}

export const CompactPropertyList = forwardRef<HTMLDivElement, CompactPropertyListProps>(
    (props, ref) => {
        return <PropertyList ref={ref} {...props} size="sm" />;
    }
);

CompactPropertyList.displayName = 'CompactPropertyList';

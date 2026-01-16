import React, { useState } from 'react';
import { 
    ChevronRight, 
    ChevronDown, 
    Folder, 
    FolderOpen, 
    File, 
    FileCode, 
    FileImage, 
    FileText,
    FileJson,
    MoreHorizontal
} from 'lucide-react';
import { cn } from '../../lib/utils';;

/* ========================================
   TYPES
   ======================================== */

export interface TreeNode {
    id: string;
    name: string;
    type: 'folder' | 'file';
    children?: TreeNode[];
    /** Optional custom icon. If not provided, a default icon based on type/extension is used. */
    icon?: React.ReactNode;
    /** Secondary text (e.g., file size, date) */
    meta?: string;
    /** Whether the node is disabled */
    disabled?: boolean;
}

export interface TreeViewProps {
    /** The hierarchical data to display */
    data: TreeNode[];
    /** Currently selected node ID */
    selectedId?: string;
    /** Callback when a node is selected */
    onSelect?: (node: TreeNode) => void;
    /** Callback when a folder is toggled */
    onToggle?: (node: TreeNode, isExpanded: boolean) => void;
    /** IDs of nodes that should be expanded by default */
    defaultExpandedIds?: string[];
    /** Optional class name for the container */
    className?: string;
}

interface TreeItemProps {
    node: TreeNode;
    depth: number;
    selectedId?: string;
    expandedIds: Set<string>;
    onSelect?: (node: TreeNode) => void;
    onToggle: (id: string) => void;
}

/* ========================================
   HELPERS
   ======================================== */

const getFileIcon = (name: string) => {
    const ext = name.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'ts':
        case 'tsx':
        case 'js':
        case 'jsx':
            return <FileCode className="w-4 h-4 text-blue-400" />;
        case 'css':
        case 'scss':
        case 'less':
            return <FileCode className="w-4 h-4 text-sky-300" />;
        case 'json':
        case 'yml':
        case 'yaml':
            return <FileJson className="w-4 h-4 text-yellow-400" />;
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'svg':
        case 'gif':
            return <FileImage className="w-4 h-4 text-purple-400" />;
        case 'md':
        case 'txt':
            return <FileText className="w-4 h-4 text-gray-400" />;
        default:
            return <File className="w-4 h-4 text-gray-400" />;
    }
};

/* ========================================
   COMPONENTS
   ======================================== */

const TreeItem: React.FC<TreeItemProps> = ({
    node,
    depth,
    selectedId,
    expandedIds,
    onSelect,
    onToggle,
}) => {
    const isExpanded = expandedIds.has(node.id);
    const isSelected = selectedId === node.id;
    const hasChildren = node.children && node.children.length > 0;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (node.disabled) return;

        if (node.type === 'folder') {
            onToggle(node.id);
        }
        
        if (onSelect) {
            onSelect(node);
        }
    };

    const handleToggleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggle(node.id);
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className={cn(
                    "group flex items-center h-8 px-2 cursor-pointer select-none transition-colors rounded-md mx-1",
                    isSelected 
                        ? "bg-primary/10 text-primary" 
                        : "text-text-secondary hover:bg-surface-hover hover:text-text-primary",
                    node.disabled && "opacity-50 cursor-not-allowed"
                )}
                style={{ paddingLeft: `${depth * 16 + 8}px` }}
            >
                {/* Toggle Icon (Chevron) */}
                <div className="w-5 h-5 flex items-center justify-center flex-none mr-0.5">
                    {node.type === 'folder' && (
                        <div 
                            onClick={handleToggleClick}
                            className="p-0.5 rounded-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            {isExpanded ? (
                                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                            ) : (
                                <ChevronRight className="w-3.5 h-3.5 opacity-70" />
                            )}
                        </div>
                    )}
                </div>

                {/* Node Icon */}
                <div className="mr-2 flex-none">
                    {node.icon ? (
                        node.icon
                    ) : node.type === 'folder' ? (
                        isExpanded ? (
                            <FolderOpen className="w-4 h-4 text-blue-500 fill-blue-500/20" />
                        ) : (
                            <Folder className="w-4 h-4 text-blue-500 fill-blue-500/20" />
                        )
                    ) : (
                        getFileIcon(node.name)
                    )}
                </div>

                {/* Node Name */}
                <span className="truncate text-sm font-medium flex-1">
                    {node.name}
                </span>

                {/* Meta Info */}
                {node.meta && (
                    <span className="text-xs text-text-tertiary ml-2 hidden group-hover:block">
                        {node.meta}
                    </span>
                )}
            </div>

            {/* Children */}
            {hasChildren && isExpanded && (
                <div>
                    {node.children!.map((child) => (
                        <TreeItem
                            key={child.id}
                            node={child}
                            depth={depth + 1}
                            selectedId={selectedId}
                            expandedIds={expandedIds}
                            onSelect={onSelect}
                            onToggle={onToggle}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const TreeView: React.FC<TreeViewProps> = ({
    data,
    selectedId,
    onSelect,
    onToggle,
    defaultExpandedIds = [],
    className,
}) => {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(defaultExpandedIds));

    const handleToggle = (id: string) => {
        const newExpandedIds = new Set(expandedIds);
        const isExpanded = newExpandedIds.has(id);
        
        if (isExpanded) {
            newExpandedIds.delete(id);
        } else {
            newExpandedIds.add(id);
        }
        
        setExpandedIds(newExpandedIds);
        
        // Find the node to pass to the callback
        if (onToggle) {
            const findNode = (nodes: TreeNode[]): TreeNode | undefined => {
                for (const node of nodes) {
                    if (node.id === id) return node;
                    if (node.children) {
                        const found = findNode(node.children);
                        if (found) return found;
                    }
                }
                return undefined;
            };
            const node = findNode(data);
            if (node) {
                onToggle(node, !isExpanded);
            }
        }
    };

    return (
        <div className={cn("py-2 select-none", className)}>
            {data.map((node) => (
                <TreeItem
                    key={node.id}
                    node={node}
                    depth={0}
                    selectedId={selectedId}
                    expandedIds={expandedIds}
                    onSelect={onSelect}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
};

import React from 'react';
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
export declare const TreeView: React.FC<TreeViewProps>;
//# sourceMappingURL=TreeView.d.ts.map
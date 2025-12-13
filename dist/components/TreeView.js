import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FolderOpen, File, FileCode, FileImage, FileText, FileJson } from 'lucide-react';
import { cn } from '../lib/utils';
/* ========================================
   HELPERS
   ======================================== */
const getFileIcon = (name) => {
    const ext = name.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'ts':
        case 'tsx':
        case 'js':
        case 'jsx':
            return _jsx(FileCode, { className: "w-4 h-4 text-blue-400" });
        case 'css':
        case 'scss':
        case 'less':
            return _jsx(FileCode, { className: "w-4 h-4 text-sky-300" });
        case 'json':
        case 'yml':
        case 'yaml':
            return _jsx(FileJson, { className: "w-4 h-4 text-yellow-400" });
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'svg':
        case 'gif':
            return _jsx(FileImage, { className: "w-4 h-4 text-purple-400" });
        case 'md':
        case 'txt':
            return _jsx(FileText, { className: "w-4 h-4 text-gray-400" });
        default:
            return _jsx(File, { className: "w-4 h-4 text-gray-400" });
    }
};
/* ========================================
   COMPONENTS
   ======================================== */
const TreeItem = ({ node, depth, selectedId, expandedIds, onSelect, onToggle, }) => {
    const isExpanded = expandedIds.has(node.id);
    const isSelected = selectedId === node.id;
    const hasChildren = node.children && node.children.length > 0;
    const handleClick = (e) => {
        e.stopPropagation();
        if (node.disabled)
            return;
        if (node.type === 'folder') {
            onToggle(node.id);
        }
        if (onSelect) {
            onSelect(node);
        }
    };
    const handleToggleClick = (e) => {
        e.stopPropagation();
        onToggle(node.id);
    };
    return (_jsxs("div", { children: [_jsxs("div", { onClick: handleClick, className: cn("group flex items-center h-8 px-2 cursor-pointer select-none transition-colors rounded-md mx-1", isSelected
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-surface-hover hover:text-text-primary", node.disabled && "opacity-50 cursor-not-allowed"), style: { paddingLeft: `${depth * 16 + 8}px` }, children: [_jsx("div", { className: "w-5 h-5 flex items-center justify-center flex-none mr-0.5", children: node.type === 'folder' && (_jsx("div", { onClick: handleToggleClick, className: "p-0.5 rounded-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors", children: isExpanded ? (_jsx(ChevronDown, { className: "w-3.5 h-3.5 opacity-70" })) : (_jsx(ChevronRight, { className: "w-3.5 h-3.5 opacity-70" })) })) }), _jsx("div", { className: "mr-2 flex-none", children: node.icon ? (node.icon) : node.type === 'folder' ? (isExpanded ? (_jsx(FolderOpen, { className: "w-4 h-4 text-blue-500 fill-blue-500/20" })) : (_jsx(Folder, { className: "w-4 h-4 text-blue-500 fill-blue-500/20" }))) : (getFileIcon(node.name)) }), _jsx("span", { className: "truncate text-sm font-medium flex-1", children: node.name }), node.meta && (_jsx("span", { className: "text-xs text-text-tertiary ml-2 hidden group-hover:block", children: node.meta }))] }), hasChildren && isExpanded && (_jsx("div", { children: node.children.map((child) => (_jsx(TreeItem, { node: child, depth: depth + 1, selectedId: selectedId, expandedIds: expandedIds, onSelect: onSelect, onToggle: onToggle }, child.id))) }))] }));
};
export const TreeView = ({ data, selectedId, onSelect, onToggle, defaultExpandedIds = [], className, }) => {
    const [expandedIds, setExpandedIds] = useState(new Set(defaultExpandedIds));
    const handleToggle = (id) => {
        const newExpandedIds = new Set(expandedIds);
        const isExpanded = newExpandedIds.has(id);
        if (isExpanded) {
            newExpandedIds.delete(id);
        }
        else {
            newExpandedIds.add(id);
        }
        setExpandedIds(newExpandedIds);
        // Find the node to pass to the callback
        if (onToggle) {
            const findNode = (nodes) => {
                for (const node of nodes) {
                    if (node.id === id)
                        return node;
                    if (node.children) {
                        const found = findNode(node.children);
                        if (found)
                            return found;
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
    return (_jsx("div", { className: cn("py-2 select-none", className), children: data.map((node) => (_jsx(TreeItem, { node: node, depth: 0, selectedId: selectedId, expandedIds: expandedIds, onSelect: onSelect, onToggle: handleToggle }, node.id))) }));
};
//# sourceMappingURL=TreeView.js.map
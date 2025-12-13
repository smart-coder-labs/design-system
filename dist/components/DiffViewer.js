import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { Columns, Rows } from 'lucide-react';
/* ========================================
   DIFF ALGORITHM (Simple LCS)
   ======================================== */
const computeDiff = (oldText, newText) => {
    const oldLines = oldText.split('\n');
    const newLines = newText.split('\n');
    const N = oldLines.length;
    const M = newLines.length;
    // LCS Matrix
    const lcs = Array(N + 1).fill(0).map(() => Array(M + 1).fill(0));
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            if (oldLines[i - 1] === newLines[j - 1]) {
                lcs[i][j] = lcs[i - 1][j - 1] + 1;
            }
            else {
                lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
            }
        }
    }
    // Backtrack
    const diff = [];
    let i = N;
    let j = M;
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
            diff.unshift({
                type: 'unchanged',
                content: oldLines[i - 1],
                oldLineNumber: i,
                newLineNumber: j
            });
            i--;
            j--;
        }
        else if (j > 0 && (i === 0 || lcs[i][j - 1] >= lcs[i - 1][j])) {
            diff.unshift({
                type: 'added',
                content: newLines[j - 1],
                newLineNumber: j
            });
            j--;
        }
        else {
            diff.unshift({
                type: 'removed',
                content: oldLines[i - 1],
                oldLineNumber: i
            });
            i--;
        }
    }
    return diff;
};
/* ========================================
   COMPONENTS
   ======================================== */
export const DiffViewer = ({ oldText, newText, oldTitle = 'Original', newTitle = 'Modified', initialMode = 'unified', className, hideHeader = false, }) => {
    const [mode, setMode] = useState(initialMode);
    const diffLines = useMemo(() => computeDiff(oldText, newText), [oldText, newText]);
    const renderUnified = () => (_jsx("div", { className: "font-mono text-xs", children: diffLines.map((line, idx) => (_jsxs("div", { className: cn("flex", line.type === 'added' && "bg-green-100/50 dark:bg-green-900/20", line.type === 'removed' && "bg-red-100/50 dark:bg-red-900/20", line.type === 'unchanged' && "hover:bg-black/5 dark:hover:bg-white/5"), children: [_jsx("div", { className: "flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50", children: line.oldLineNumber || '' }), _jsx("div", { className: "flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50", children: line.newLineNumber || '' }), _jsxs("div", { className: cn("flex-none w-8 text-center py-0.5 select-none font-bold", line.type === 'added' && "text-green-600 dark:text-green-400", line.type === 'removed' && "text-red-600 dark:text-red-400", line.type === 'unchanged' && "text-text-secondary"), children: [line.type === 'added' && '+', line.type === 'removed' && '-'] }), _jsx("div", { className: cn("flex-1 py-0.5 px-4 whitespace-pre-wrap break-all", line.type === 'added' && "text-green-900 dark:text-green-100", line.type === 'removed' && "text-red-900 dark:text-red-100 line-through opacity-70", line.type === 'unchanged' && "text-text-secondary"), children: line.content })] }, idx))) }));
    const renderSplit = () => {
        // For split view, we need to align changes. 
        // This simple implementation just renders two columns but doesn't perfectly align complex diff blocks vertically 
        // like a sophisticated diff tool (e.g. GitHub) would with empty spacers.
        // To improve this without deps, we can process the diffLines to insert "empty" placeholders.
        const leftSide = [];
        const rightSide = [];
        diffLines.forEach(line => {
            if (line.type === 'unchanged') {
                leftSide.push(line);
                rightSide.push(line);
            }
            else if (line.type === 'removed') {
                leftSide.push(line);
                rightSide.push({ type: 'unchanged', content: '', newLineNumber: undefined }); // Placeholder
            }
            else if (line.type === 'added') {
                leftSide.push({ type: 'unchanged', content: '', oldLineNumber: undefined }); // Placeholder
                rightSide.push(line);
            }
        });
        return (_jsxs("div", { className: "flex font-mono text-xs divide-x divide-border-primary/30", children: [_jsx("div", { className: "flex-1 min-w-0", children: leftSide.map((line, idx) => (_jsxs("div", { className: cn("flex", line.type === 'removed' && "bg-red-100/50 dark:bg-red-900/20", !line.oldLineNumber && line.content === '' && "bg-black/5 dark:bg-white/5" // Placeholder styling
                        ), children: [_jsx("div", { className: "flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50", children: line.oldLineNumber || '' }), _jsx("div", { className: cn("flex-1 py-0.5 px-4 whitespace-pre-wrap break-all", line.type === 'removed' ? "text-red-900 dark:text-red-100" : "text-text-secondary", !line.oldLineNumber && "select-none"), children: line.content })] }, idx))) }), _jsx("div", { className: "flex-1 min-w-0", children: rightSide.map((line, idx) => (_jsxs("div", { className: cn("flex", line.type === 'added' && "bg-green-100/50 dark:bg-green-900/20", !line.newLineNumber && line.content === '' && "bg-black/5 dark:bg-white/5"), children: [_jsx("div", { className: "flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50", children: line.newLineNumber || '' }), _jsx("div", { className: cn("flex-1 py-0.5 px-4 whitespace-pre-wrap break-all", line.type === 'added' ? "text-green-900 dark:text-green-100" : "text-text-secondary", !line.newLineNumber && "select-none"), children: line.content })] }, idx))) })] }));
    };
    return (_jsxs("div", { className: cn("border border-border-primary/50 rounded-lg overflow-hidden bg-surface-primary", className), children: [!hideHeader && (_jsxs("div", { className: "flex items-center justify-between px-4 py-2 bg-surface-secondary border-b border-border-primary/50", children: [_jsxs("div", { className: "flex items-center gap-4 text-sm", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-red-500/50" }), _jsx("span", { className: "font-medium text-text-secondary", children: oldTitle })] }), _jsx("span", { className: "text-text-tertiary", children: "\u2192" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-green-500/50" }), _jsx("span", { className: "font-medium text-text-secondary", children: newTitle })] })] }), _jsxs("div", { className: "flex bg-surface-primary rounded-md p-0.5 border border-border-primary/50", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setMode('unified'), className: cn("h-6 px-2 text-xs gap-1.5", mode === 'unified' ? "bg-surface-secondary shadow-sm text-text-primary" : "text-text-tertiary"), children: [_jsx(Rows, { className: "w-3.5 h-3.5" }), "Unified"] }), _jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setMode('split'), className: cn("h-6 px-2 text-xs gap-1.5", mode === 'split' ? "bg-surface-secondary shadow-sm text-text-primary" : "text-text-tertiary"), children: [_jsx(Columns, { className: "w-3.5 h-3.5" }), "Split"] })] })] })), _jsx("div", { className: "overflow-x-auto", children: mode === 'unified' ? renderUnified() : renderSplit() })] }));
};
//# sourceMappingURL=DiffViewer.js.map
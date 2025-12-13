import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { tokens } from '../tokens';
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter, ModalCloseButton } from './Modal';
import { Input, Textarea } from './Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';
import { Button } from './Button';
export const KanbanBoard = ({ columns: initialColumns, onCardMove, onCardClick, onAddCard, className = '', variant = 'default', showCardCount = true, showColumnLimit = false, }) => {
    const [columns, setColumns] = useState(initialColumns);
    const [draggedCard, setDraggedCard] = useState(null);
    const [dragOverColumn, setDragOverColumn] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const [addCardColumnId, setAddCardColumnId] = useState(null);
    const [newCardData, setNewCardData] = useState({ title: '', description: '', priority: 'medium' });
    const handleDragStart = (card, columnId) => {
        setDraggedCard({ card, columnId });
    };
    const handleDragOver = (e, columnId) => {
        e.preventDefault();
        setDragOverColumn(columnId);
    };
    const handleDragLeave = () => {
        setDragOverColumn(null);
    };
    const handleDrop = (e, targetColumnId, targetIndex) => {
        e.preventDefault();
        setDragOverColumn(null);
        if (!draggedCard)
            return;
        const { card, columnId: sourceColumnId } = draggedCard;
        if (sourceColumnId === targetColumnId) {
            setDraggedCard(null);
            return;
        }
        // Update columns
        const newColumns = columns.map((col) => {
            if (col.id === sourceColumnId) {
                return {
                    ...col,
                    cards: col.cards.filter((c) => c.id !== card.id),
                };
            }
            if (col.id === targetColumnId) {
                const newCards = [...col.cards];
                const insertIndex = targetIndex !== undefined ? targetIndex : newCards.length;
                newCards.splice(insertIndex, 0, card);
                return {
                    ...col,
                    cards: newCards,
                };
            }
            return col;
        });
        setColumns(newColumns);
        setDraggedCard(null);
        if (onCardMove) {
            const targetColumn = newColumns.find((col) => col.id === targetColumnId);
            const newIndex = targetColumn?.cards.findIndex((c) => c.id === card.id) ?? 0;
            onCardMove(card.id, sourceColumnId, targetColumnId, newIndex);
        }
    };
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'urgent':
                return '#FF3B30';
            case 'high':
                return '#FF9500';
            case 'medium':
                return '#007AFF';
            case 'low':
                return '#34C759';
            default:
                return '#86868B';
        }
    };
    const getInitials = (name) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };
    const handleCardClick = (card) => {
        setSelectedCard(card);
        onCardClick?.(card);
    };
    const handleAddCardClick = (columnId) => {
        setAddCardColumnId(columnId);
        setNewCardData({ title: '', description: '', priority: 'medium' });
    };
    const handleSubmitNewCard = () => {
        if (!newCardData.title.trim() || !addCardColumnId)
            return;
        const newCard = {
            title: newCardData.title,
            description: newCardData.description || undefined,
            priority: newCardData.priority,
        };
        if (onAddCard) {
            onAddCard(addCardColumnId, newCard);
        }
        else {
            // Internal state management
            const newColumns = columns.map(col => {
                if (col.id === addCardColumnId) {
                    return {
                        ...col,
                        cards: [...col.cards, { ...newCard, id: `card-${Date.now()}` }]
                    };
                }
                return col;
            });
            setColumns(newColumns);
        }
        setAddCardColumnId(null);
        setNewCardData({ title: '', description: '', priority: 'medium' });
    };
    return (_jsxs("div", { className: `kanban-board ${className}`, style: {
            display: 'flex',
            gap: tokens.spacing[4],
            overflowX: 'auto',
            padding: tokens.spacing[4],
            minHeight: '600px',
            backgroundColor: 'var(--color-background-secondary)',
            borderRadius: tokens.radius.lg,
        }, children: [columns.map((column) => {
                const isOverLimit = column.limit && column.cards.length > column.limit;
                const isDragOver = dragOverColumn === column.id;
                return (_jsxs("div", { className: "kanban-column", onDragOver: (e) => handleDragOver(e, column.id), onDragLeave: handleDragLeave, onDrop: (e) => handleDrop(e, column.id), style: {
                        flex: '0 0 320px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: isDragOver
                            ? 'var(--color-accent-blue-tint)'
                            : 'var(--color-background-primary)',
                        borderRadius: tokens.radius.md,
                        border: `2px solid ${isDragOver ? 'var(--color-accent-blue)' : 'var(--color-border-primary)'}`,
                        transition: `all ${tokens.motion.duration.normal} ${tokens.motion.easing.standard}`,
                        maxHeight: '100%',
                    }, children: [_jsxs("div", { style: {
                                padding: tokens.spacing[4],
                                borderBottom: `1px solid var(--color-border-primary)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: tokens.spacing[2],
                            }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [column.color && (_jsx("div", { style: {
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: tokens.radius.full,
                                                backgroundColor: column.color,
                                            } })), _jsx("h3", { style: {
                                                margin: 0,
                                                fontSize: tokens.typography.fontSize.base,
                                                fontWeight: tokens.typography.fontWeight.semibold,
                                                color: 'var(--color-text-primary)',
                                            }, children: column.title })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [showCardCount && (_jsxs("span", { style: {
                                                fontSize: tokens.typography.fontSize.sm,
                                                color: 'var(--color-text-tertiary)',
                                                fontWeight: tokens.typography.fontWeight.medium,
                                                backgroundColor: 'var(--color-background-secondary)',
                                                padding: `${tokens.spacing[1]} ${tokens.spacing[2]}`,
                                                borderRadius: tokens.radius.full,
                                            }, children: [column.cards.length, showColumnLimit && column.limit && ` / ${column.limit}`] })), isOverLimit && (_jsx("span", { style: {
                                                fontSize: tokens.typography.fontSize.xs,
                                                color: 'var(--color-status-error)',
                                                fontWeight: tokens.typography.fontWeight.medium,
                                            }, children: "\u26A0\uFE0F" }))] })] }), _jsx("div", { style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: tokens.spacing[3],
                                display: 'flex',
                                flexDirection: 'column',
                                gap: tokens.spacing[3],
                            }, children: column.cards.map((card, index) => (_jsxs("div", { draggable: true, onDragStart: () => handleDragStart(card, column.id), onClick: () => handleCardClick(card), className: "kanban-card", style: {
                                    backgroundColor: 'var(--color-surface-primary)',
                                    borderRadius: tokens.radius.md,
                                    padding: variant === 'compact' ? tokens.spacing[3] : tokens.spacing[4],
                                    border: `1px solid var(--color-border-primary)`,
                                    cursor: 'pointer',
                                    transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                                    boxShadow: tokens.shadows.sm,
                                }, onMouseEnter: (e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = tokens.shadows.md;
                                }, onMouseLeave: (e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = tokens.shadows.sm;
                                }, children: [card.priority && (_jsx("div", { style: {
                                            width: '100%',
                                            height: '3px',
                                            backgroundColor: getPriorityColor(card.priority),
                                            borderRadius: tokens.radius.full,
                                            marginBottom: tokens.spacing[3],
                                        } })), _jsx("h4", { style: {
                                            margin: 0,
                                            fontSize: variant === 'compact' ? tokens.typography.fontSize.sm : tokens.typography.fontSize.base,
                                            fontWeight: tokens.typography.fontWeight.semibold,
                                            color: 'var(--color-text-primary)',
                                            marginBottom: card.description ? tokens.spacing[2] : 0,
                                        }, children: card.title }), card.description && variant !== 'compact' && (_jsx("p", { style: {
                                            margin: 0,
                                            fontSize: tokens.typography.fontSize.sm,
                                            color: 'var(--color-text-secondary)',
                                            lineHeight: tokens.typography.lineHeight.normal,
                                            marginBottom: tokens.spacing[3],
                                        }, children: card.description })), card.tags && card.tags.length > 0 && variant === 'detailed' && (_jsx("div", { style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: tokens.spacing[2],
                                            marginBottom: tokens.spacing[3],
                                        }, children: card.tags.map((tag, tagIndex) => (_jsx("span", { style: {
                                                fontSize: tokens.typography.fontSize.xs,
                                                color: 'var(--color-text-secondary)',
                                                backgroundColor: 'var(--color-background-secondary)',
                                                padding: `${tokens.spacing[1]} ${tokens.spacing[2]}`,
                                                borderRadius: tokens.radius.sm,
                                                fontWeight: tokens.typography.fontWeight.medium,
                                            }, children: tag }, tagIndex))) })), _jsxs("div", { style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: tokens.spacing[3],
                                            paddingTop: tokens.spacing[3],
                                            borderTop: `1px solid var(--color-border-secondary)`,
                                        }, children: [card.assignee && (_jsxs("div", { style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: tokens.spacing[2],
                                                }, children: [_jsx("div", { style: {
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: tokens.radius.full,
                                                            backgroundColor: card.assignee.avatar
                                                                ? 'transparent'
                                                                : 'var(--color-accent-blue)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: tokens.typography.fontSize.xs,
                                                            fontWeight: tokens.typography.fontWeight.semibold,
                                                            color: '#FFFFFF',
                                                            backgroundImage: card.assignee.avatar
                                                                ? `url(${card.assignee.avatar})`
                                                                : undefined,
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center',
                                                        }, children: !card.assignee.avatar && getInitials(card.assignee.name) }), variant === 'detailed' && (_jsx("span", { style: {
                                                            fontSize: tokens.typography.fontSize.sm,
                                                            color: 'var(--color-text-secondary)',
                                                        }, children: card.assignee.name }))] })), _jsxs("div", { style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: tokens.spacing[3],
                                                }, children: [card.dueDate && (_jsxs("span", { style: {
                                                            fontSize: tokens.typography.fontSize.xs,
                                                            color: 'var(--color-text-tertiary)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: tokens.spacing[1],
                                                        }, children: ["\uD83D\uDCC5 ", card.dueDate] })), card.attachments && card.attachments > 0 && (_jsxs("span", { style: {
                                                            fontSize: tokens.typography.fontSize.xs,
                                                            color: 'var(--color-text-tertiary)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: tokens.spacing[1],
                                                        }, children: ["\uD83D\uDCCE ", card.attachments] })), card.comments && card.comments > 0 && (_jsxs("span", { style: {
                                                            fontSize: tokens.typography.fontSize.xs,
                                                            color: 'var(--color-text-tertiary)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: tokens.spacing[1],
                                                        }, children: ["\uD83D\uDCAC ", card.comments] }))] })] })] }, card.id))) }), onAddCard && (_jsx("button", { onClick: () => handleAddCardClick(column.id), style: {
                                margin: tokens.spacing[3],
                                padding: tokens.spacing[3],
                                backgroundColor: 'transparent',
                                border: `2px dashed var(--color-border-primary)`,
                                borderRadius: tokens.radius.md,
                                color: 'var(--color-text-tertiary)',
                                fontSize: tokens.typography.fontSize.sm,
                                fontWeight: tokens.typography.fontWeight.medium,
                                cursor: 'pointer',
                                transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                            }, onMouseEnter: (e) => {
                                e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                                e.currentTarget.style.color = 'var(--color-accent-blue)';
                                e.currentTarget.style.backgroundColor = 'var(--color-accent-blue-tint)';
                            }, onMouseLeave: (e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border-primary)';
                                e.currentTarget.style.color = 'var(--color-text-tertiary)';
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }, children: "+ Add Card" }))] }, column.id));
            }), _jsxs(Modal, { open: !!selectedCard, onOpenChange: (open) => !open && setSelectedCard(null), size: "lg", children: [_jsx(ModalCloseButton, {}), _jsxs(ModalHeader, { children: [_jsx(ModalTitle, { children: selectedCard?.title }), selectedCard?.priority && (_jsx("div", { style: { marginTop: tokens.spacing[4], width: '100%', height: '4px', backgroundColor: getPriorityColor(selectedCard.priority), borderRadius: tokens.radius.full, marginBottom: tokens.spacing[6] } }))] }), _jsxs(ModalContent, { children: [selectedCard?.description && (_jsx("p", { className: "text-base text-text-secondary leading-relaxed mb-4", children: selectedCard.description })), selectedCard?.tags && selectedCard.tags.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: selectedCard.tags.map((tag, idx) => (_jsx("span", { className: "text-sm text-text-secondary bg-background-secondary px-3 py-1 rounded-md font-medium", children: tag }, idx))) })), _jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [selectedCard?.assignee && (_jsxs("div", { children: [_jsx("div", { className: "text-sm text-text-tertiary mb-2", children: "Assignee" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center text-sm font-semibold text-white", children: getInitials(selectedCard.assignee.name) }), _jsx("span", { className: "text-base text-text-primary", children: selectedCard.assignee.name })] })] })), selectedCard?.dueDate && (_jsxs("div", { children: [_jsx("div", { className: "text-sm text-text-tertiary mb-2", children: "Due Date" }), _jsxs("div", { className: "text-base text-text-primary", children: ["\uD83D\uDCC5 ", selectedCard.dueDate] })] })), selectedCard?.priority && (_jsxs("div", { children: [_jsx("div", { className: "text-sm text-text-tertiary mb-2", children: "Priority" }), _jsx("div", { className: "text-base font-semibold capitalize", style: { color: getPriorityColor(selectedCard.priority) }, children: selectedCard.priority })] }))] }), _jsxs("div", { className: "flex gap-4 mt-6", children: [selectedCard?.attachments && selectedCard.attachments > 0 && (_jsxs("div", { className: "text-sm text-text-secondary", children: ["\uD83D\uDCCE ", selectedCard.attachments, " attachments"] })), selectedCard?.comments && selectedCard.comments > 0 && (_jsxs("div", { className: "text-sm text-text-secondary", children: ["\uD83D\uDCAC ", selectedCard.comments, " comments"] }))] })] })] }), _jsxs(Modal, { open: !!addCardColumnId, onOpenChange: (open) => !open && setAddCardColumnId(null), size: "md", children: [_jsx(ModalCloseButton, {}), _jsx(ModalHeader, { children: _jsx(ModalTitle, { children: "Add New Card" }) }), _jsx(ModalContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { label: "Title", placeholder: "Enter card title", value: newCardData.title, onChange: (e) => setNewCardData({ ...newCardData, title: e.target.value }), required: true }), _jsx(Textarea, { placeholder: "Enter card description (optional)", value: newCardData.description, onChange: (e) => setNewCardData({ ...newCardData, description: e.target.value }), rows: 4 }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: "Priority" }), _jsxs(Select, { value: newCardData.priority, onValueChange: (value) => setNewCardData({ ...newCardData, priority: value }), children: [_jsx(SelectTrigger, { className: "w-full", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "low", children: "Low" }), _jsx(SelectItem, { value: "medium", children: "Medium" }), _jsx(SelectItem, { value: "high", children: "High" }), _jsx(SelectItem, { value: "urgent", children: "Urgent" })] })] })] })] }) }), _jsxs(ModalFooter, { children: [_jsx(Button, { variant: "ghost", onClick: () => setAddCardColumnId(null), children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: handleSubmitNewCard, disabled: !newCardData.title.trim(), children: "Add Card" })] })] })] }));
};
//# sourceMappingURL=KanbanBoard.js.map
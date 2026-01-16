import React, { useState } from 'react';

import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter, ModalCloseButton } from './Modal';
import { Input, Textarea } from './Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';
import { Button } from './Button';

export interface KanbanCard {
    id: string;
    title: string;
    description?: string;
    priority?: 'low' | 'medium' | 'high' | 'urgent';
    assignee?: {
        name: string;
        avatar?: string;
    };
    tags?: string[];
    dueDate?: string;
    attachments?: number;
    comments?: number;
}

export interface KanbanColumn {
    id: string;
    title: string;
    cards: KanbanCard[];
    color?: string;
    limit?: number;
}

export interface KanbanBoardProps {
    columns: KanbanColumn[];
    onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void;
    onCardClick?: (card: KanbanCard) => void;
    onAddCard?: (columnId: string, card: Omit<KanbanCard, 'id'>) => void;
    className?: string;
    variant?: 'default' | 'compact' | 'detailed';
    showCardCount?: boolean;
    showColumnLimit?: boolean;
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
    columns: initialColumns,
    onCardMove,
    onCardClick,
    onAddCard,
    className = '',
    variant = 'default',
    showCardCount = true,
    showColumnLimit = false,
}) => {
    const [columns, setColumns] = useState(initialColumns);
    const [draggedCard, setDraggedCard] = useState<{ card: KanbanCard; columnId: string } | null>(null);
    const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
    const [selectedCard, setSelectedCard] = useState<KanbanCard | null>(null);
    const [addCardColumnId, setAddCardColumnId] = useState<string | null>(null);
    const [newCardData, setNewCardData] = useState<{ title: string; description: string; priority: 'low' | 'medium' | 'high' | 'urgent' }>({ title: '', description: '', priority: 'medium' });

    const handleDragStart = (card: KanbanCard, columnId: string) => {
        setDraggedCard({ card, columnId });
    };

    const handleDragOver = (e: React.DragEvent, columnId: string) => {
        e.preventDefault();
        setDragOverColumn(columnId);
    };

    const handleDragLeave = () => {
        setDragOverColumn(null);
    };

    const handleDrop = (e: React.DragEvent, targetColumnId: string, targetIndex?: number) => {
        e.preventDefault();
        setDragOverColumn(null);

        if (!draggedCard) return;

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

    const getPriorityColor = (priority?: string) => {
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

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const handleCardClick = (card: KanbanCard) => {
        setSelectedCard(card);
        onCardClick?.(card);
    };

    const handleAddCardClick = (columnId: string) => {
        setAddCardColumnId(columnId);
        setNewCardData({ title: '', description: '', priority: 'medium' });
    };

    const handleSubmitNewCard = () => {
        if (!newCardData.title.trim() || !addCardColumnId) return;

        const newCard: Omit<KanbanCard, 'id'> = {
            title: newCardData.title,
            description: newCardData.description || undefined,
            priority: newCardData.priority,
        };

        if (onAddCard) {
            onAddCard(addCardColumnId, newCard);
        } else {
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

    return (
        <div
            className={`kanban-board ${className}`}
            style={{
                display: 'flex',
                gap: '16px',
                overflowX: 'auto',
                padding: '16px',
                minHeight: '600px',
                backgroundColor: 'var(--color-background-secondary)',
                borderRadius: '12px',
            }}
        >
            {columns.map((column) => {
                const isOverLimit = column.limit && column.cards.length > column.limit;
                const isDragOver = dragOverColumn === column.id;

                return (
                    <div
                        key={column.id}
                        className="kanban-column"
                        onDragOver={(e) => handleDragOver(e, column.id)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, column.id)}
                        style={{
                            flex: '0 0 320px',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: isDragOver
                                ? 'var(--color-accent-blue-tint)'
                                : 'var(--color-background-primary)',
                            borderRadius: '8px',
                            border: `2px solid ${isDragOver ? 'var(--color-accent-blue)' : 'var(--color-border-primary)'}`,
                            transition: `all ${'0.3s'} ${'var(--ease-apple)'}`,
                            maxHeight: '100%',
                        }}
                    >
                        {/* Column Header */}
                        <div
                            style={{
                                padding: '16px',
                                borderBottom: `1px solid var(--color-border-primary)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '8px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {column.color && (
                                    <div
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '9999px',
                                            backgroundColor: column.color,
                                        }}
                                    />
                                )}
                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: 'var(--color-text-primary)',
                                    }}
                                >
                                    {column.title}
                                </h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                {showCardCount && (
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--color-text-tertiary)',
                                            fontWeight: '500',
                                            backgroundColor: 'var(--color-background-secondary)',
                                            padding: `${'4px'} ${'8px'}`,
                                            borderRadius: '9999px',
                                        }}
                                    >
                                        {column.cards.length}
                                        {showColumnLimit && column.limit && ` / ${column.limit}`}
                                    </span>
                                )}
                                {isOverLimit && (
                                    <span
                                        style={{
                                            fontSize: '12px',
                                            color: 'var(--color-status-error)',
                                            fontWeight: '500',
                                        }}
                                    >
                                        ⚠️
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Cards Container */}
                        <div
                            style={{
                                flex: 1,
                                overflowY: 'auto',
                                padding: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            {column.cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    draggable
                                    onDragStart={() => handleDragStart(card, column.id)}
                                    onClick={() => handleCardClick(card)}
                                    className="kanban-card"
                                    style={{
                                        backgroundColor: 'var(--color-surface-primary)',
                                        borderRadius: '8px',
                                        padding: variant === 'compact' ? '12px' : '16px',
                                        border: `1px solid var(--color-border-primary)`,
                                        cursor: 'pointer',
                                        transition: `all ${'0.2s'} ${'var(--ease-apple)'}`,
                                        boxShadow: 'var(--shadow-sm)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                    }}
                                >
                                    {/* Card Priority Indicator */}
                                    {card.priority && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '3px',
                                                backgroundColor: getPriorityColor(card.priority),
                                                borderRadius: '9999px',
                                                marginBottom: '12px',
                                            }}
                                        />
                                    )}

                                    {/* Card Title */}
                                    <h4
                                        style={{
                                            margin: 0,
                                            fontSize: variant === 'compact' ? '13px' : '15px',
                                            fontWeight: '600',
                                            color: 'var(--color-text-primary)',
                                            marginBottom: card.description ? '8px' : 0,
                                        }}
                                    >
                                        {card.title}
                                    </h4>

                                    {/* Card Description */}
                                    {card.description && variant !== 'compact' && (
                                        <p
                                            style={{
                                                margin: 0,
                                                fontSize: '13px',
                                                color: 'var(--color-text-secondary)',
                                                lineHeight: '1.5',
                                                marginBottom: '12px',
                                            }}
                                        >
                                            {card.description}
                                        </p>
                                    )}

                                    {/* Card Tags */}
                                    {card.tags && card.tags.length > 0 && variant === 'detailed' && (
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '8px',
                                                marginBottom: '12px',
                                            }}
                                        >
                                            {card.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    style={{
                                                        fontSize: '12px',
                                                        color: 'var(--color-text-secondary)',
                                                        backgroundColor: 'var(--color-background-secondary)',
                                                        padding: `${'4px'} ${'8px'}`,
                                                        borderRadius: '4px',
                                                        fontWeight: '500',
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Card Footer */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: '12px',
                                            paddingTop: '12px',
                                            borderTop: `1px solid var(--color-border-secondary)`,
                                        }}
                                    >
                                        {/* Assignee */}
                                        {card.assignee && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        borderRadius: '9999px',
                                                        backgroundColor: card.assignee.avatar
                                                            ? 'transparent'
                                                            : 'var(--color-accent-blue)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '12px',
                                                        fontWeight: '600',
                                                        color: '#FFFFFF',
                                                        backgroundImage: card.assignee.avatar
                                                            ? `url(${card.assignee.avatar})`
                                                            : undefined,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                    {!card.assignee.avatar && getInitials(card.assignee.name)}
                                                </div>
                                                {variant === 'detailed' && (
                                                    <span
                                                        style={{
                                                            fontSize: '13px',
                                                            color: 'var(--color-text-secondary)',
                                                        }}
                                                    >
                                                        {card.assignee.name}
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        {/* Metadata */}
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                            }}
                                        >
                                            {card.dueDate && (
                                                <span
                                                    style={{
                                                        fontSize: '12px',
                                                        color: 'var(--color-text-tertiary)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                    }}
                                                >
                                                    📅 {card.dueDate}
                                                </span>
                                            )}
                                            {card.attachments && card.attachments > 0 && (
                                                <span
                                                    style={{
                                                        fontSize: '12px',
                                                        color: 'var(--color-text-tertiary)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                    }}
                                                >
                                                    📎 {card.attachments}
                                                </span>
                                            )}
                                            {card.comments && card.comments > 0 && (
                                                <span
                                                    style={{
                                                        fontSize: '12px',
                                                        color: 'var(--color-text-tertiary)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                    }}
                                                >
                                                    💬 {card.comments}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add Card Button */}
                        {onAddCard && (
                            <button
                                onClick={() => handleAddCardClick(column.id)}
                                style={{
                                    margin: '12px',
                                    padding: '12px',
                                    backgroundColor: 'transparent',
                                    border: `2px dashed var(--color-border-primary)`,
                                    borderRadius: '8px',
                                    color: 'var(--color-text-tertiary)',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    transition: `all ${'0.2s'} ${'var(--ease-apple)'}`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-accent-blue)';
                                    e.currentTarget.style.color = 'var(--color-accent-blue)';
                                    e.currentTarget.style.backgroundColor = 'var(--color-accent-blue-tint)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-border-primary)';
                                    e.currentTarget.style.color = 'var(--color-text-tertiary)';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                + Add Card
                            </button>
                        )}
                    </div>
                );
            })}

            {/* Card Detail Modal */}
            <Modal open={!!selectedCard} onOpenChange={(open) => !open && setSelectedCard(null)} size="lg">
                <ModalCloseButton />
                <ModalHeader>
                    <ModalTitle>{selectedCard?.title}</ModalTitle>
                    {selectedCard?.priority && (
                        <div style={{ marginTop: '16px', width: '100%', height: '4px', backgroundColor: getPriorityColor(selectedCard.priority), borderRadius: '9999px', marginBottom: '24px' }} />
                    )}
                </ModalHeader>
                <ModalContent>
                    {selectedCard?.description && (
                        <p className="text-base text-text-secondary leading-relaxed mb-4">
                            {selectedCard.description}
                        </p>
                    )}
                    {selectedCard?.tags && selectedCard.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {selectedCard.tags.map((tag, idx) => (
                                <span key={idx} className="text-sm text-text-secondary bg-background-secondary px-3 py-1 rounded-md font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {selectedCard?.assignee && (
                            <div>
                                <div className="text-sm text-text-tertiary mb-2">Assignee</div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center text-sm font-semibold text-white">
                                        {getInitials(selectedCard.assignee.name)}
                                    </div>
                                    <span className="text-base text-text-primary">{selectedCard.assignee.name}</span>
                                </div>
                            </div>
                        )}
                        {selectedCard?.dueDate && (
                            <div>
                                <div className="text-sm text-text-tertiary mb-2">Due Date</div>
                                <div className="text-base text-text-primary">📅 {selectedCard.dueDate}</div>
                            </div>
                        )}
                        {selectedCard?.priority && (
                            <div>
                                <div className="text-sm text-text-tertiary mb-2">Priority</div>
                                <div className="text-base font-semibold capitalize" style={{ color: getPriorityColor(selectedCard.priority) }}>
                                    {selectedCard.priority}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4 mt-6">
                        {selectedCard?.attachments && selectedCard.attachments > 0 && (
                            <div className="text-sm text-text-secondary">📎 {selectedCard.attachments} attachments</div>
                        )}
                        {selectedCard?.comments && selectedCard.comments > 0 && (
                            <div className="text-sm text-text-secondary">💬 {selectedCard.comments} comments</div>
                        )}
                    </div>
                </ModalContent>
            </Modal>

            {/* Add Card Modal */}
            <Modal open={!!addCardColumnId} onOpenChange={(open) => !open && setAddCardColumnId(null)} size="md">
                <ModalCloseButton />
                <ModalHeader>
                    <ModalTitle>Add New Card</ModalTitle>
                </ModalHeader>
                <ModalContent>
                    <div className="space-y-4">
                        <Input
                            label="Title"
                            placeholder="Enter card title"
                            value={newCardData.title}
                            onChange={(e) => setNewCardData({ ...newCardData, title: e.target.value })}
                            required
                        />
                        <Textarea
                            placeholder="Enter card description (optional)"
                            value={newCardData.description}
                            onChange={(e) => setNewCardData({ ...newCardData, description: e.target.value })}
                            rows={4}
                        />
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Priority</label>
                            <Select value={newCardData.priority} onValueChange={(value) => setNewCardData({ ...newCardData, priority: value as 'low' | 'medium' | 'high' | 'urgent' })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="urgent">Urgent</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </ModalContent>
                <ModalFooter>
                    <Button variant="ghost" onClick={() => setAddCardColumnId(null)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmitNewCard} disabled={!newCardData.title.trim()}>
                        Add Card
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

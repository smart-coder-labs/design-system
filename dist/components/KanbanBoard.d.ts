import React from 'react';
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
export declare const KanbanBoard: React.FC<KanbanBoardProps>;
//# sourceMappingURL=KanbanBoard.d.ts.map
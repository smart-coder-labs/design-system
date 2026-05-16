import React from 'react';
import { Column } from '../Table';

export interface VisualizerDetailItem {
    id: string;
    icon?: React.FC<any>;
    label: string;
    value: React.ReactNode;
    fullWidth?: boolean;
}

export interface VisualizerFeeItem {
    id: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    amount: number;
    currency?: string;
}

export interface VisualizerHistoryItem {
    id: string;
    statusType?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'loading';
    date: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
}

export interface VisualizerTransaction {
    id: string;
    amount: number;
    currency?: string;
    type: 'CREDIT' | 'DEBIT' | string;
    status: string;
    date: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    details?: VisualizerDetailItem[];
    fees?: VisualizerFeeItem[];
    history?: VisualizerHistoryItem[];
}

export interface AchTransactionsVisualizerProps {
    transactions: VisualizerTransaction[];
    layout?: 'list' | 'table';
    tableColumns?: Column<VisualizerTransaction>[];
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
    emptyMessage?: React.ReactNode;
    emptyDescription?: React.ReactNode;
    noFeesMessage?: React.ReactNode;
    noHistoryMessage?: React.ReactNode;
}
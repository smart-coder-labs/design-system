import React from 'react';

export interface LimitCategory {
    id: string;
    title: string;
    used: number;
    total: number;
    currency?: string;
    icon?: React.ReactNode;
    color?: string;
}

export interface FairUseLimitTrackerProps {
    categories: LimitCategory[];
    className?: string;
}
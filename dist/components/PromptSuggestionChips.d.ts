import React from 'react';
export interface PromptSuggestion {
    id: string;
    text: string;
    icon?: React.ReactNode;
}
export interface PromptSuggestionChipsProps extends React.HTMLAttributes<HTMLDivElement> {
    suggestions: PromptSuggestion[];
    onSuggestionClick?: (suggestion: PromptSuggestion) => void;
    maxVisible?: number;
    variant?: 'default' | 'compact';
    className?: string;
}
export declare const PromptSuggestionChips: React.ForwardRefExoticComponent<PromptSuggestionChipsProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PromptSuggestionChips.d.ts.map
interface PromptSuggestion {
    id: string;
    text: string;
    icon?: React.ReactNode;
}


interface PromptSuggestionChipsProps extends React.HTMLAttributes<HTMLDivElement> {
    suggestions: PromptSuggestion[];
    onSuggestionClick?: (suggestion: PromptSuggestion) => void;
    maxVisible?: number;
    variant?: 'default' | 'compact';
    className?: string;
}

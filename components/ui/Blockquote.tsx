import React from 'react';
import { Quote } from 'lucide-react';
import { Text } from './Text';

export interface BlockquoteProps {
    children: React.ReactNode;
    author?: string;
    source?: string;
    className?: string;
}

export const Blockquote: React.FC<BlockquoteProps> = ({
    children,
    author,
    source,
    className = '',
}) => {
    return (
        <figure className={`relative pl-6 border-l-4 border-accent-blue/30 ${className}`}>
            <div className="absolute -top-3 -left-3.5 bg-background-primary p-1 rounded-full">
                <Quote className="w-5 h-5 text-accent-blue fill-accent-blue/10" />
            </div>
            <blockquote className="mb-3 pt-1">
                <Text variant="lead" italic color="secondary" className="!leading-relaxed">
                    "{children}"
                </Text>
            </blockquote>
            {(author || source) && (
                <figcaption className="flex items-center gap-2 text-sm pl-1">
                    <div className="w-6 h-[1px] bg-border-primary" />
                    {author && <span className="font-semibold text-text-primary">{author}</span>}
                    {source && (
                        <>
                            <span className="text-text-quaternary">•</span>
                            <cite className="text-text-tertiary not-italic">{source}</cite>
                        </>
                    )}
                </figcaption>
            )}
        </figure>
    );
};

Blockquote.displayName = 'Blockquote';

import React, { useState } from 'react';
import { cn } from '../../lib/utils';;

export interface Review {
  id: string | number;
  author: string;
  avatar?: React.ReactNode;
  rating: number;
  date?: string;
  text?: string;
}

export interface RatingStarsProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (v: number) => void;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  readOnly = false,
  size = 'md',
  onChange,
}) => {
  const isControlled = typeof controlledValue === 'number';
  const [internal, setInternal] = useState<number>(defaultValue);
  const value = isControlled ? (controlledValue as number) : internal;

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  } as const;

  const handleSet = (v: number) => {
    if (readOnly) return;
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };

  return (
    <div
      className={cn('inline-flex items-center', readOnly ? 'pointer-events-none' : '')}
      role={readOnly ? undefined : 'radiogroup'}
      aria-label={readOnly ? `Rating ${value} of ${max}` : 'Rating'}
    >
      {Array.from({ length: max }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= value;
        return (
          <button
            type="button"
            key={idx}
            aria-checked={filled}
            role={readOnly ? undefined : 'radio'}
            onClick={() => handleSet(idx)}
            className={cn(
              'inline-flex items-center justify-center',
              sizes[size],
              'rounded-sm',
              filled ? 'text-accent-blue' : 'text-text-tertiary',
              readOnly ? 'cursor-default' : 'hover:text-accent-blue'
            )}
            aria-label={`${idx} star${idx > 1 ? 's' : ''}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-full h-full">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.172L12 18.896l-7.336 3.874 1.402-8.172L.132 9.21l8.2-1.192z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export interface ReviewsProps {
  reviews: Review[];
  className?: string;
  compact?: boolean;
}

export const ReviewsList: React.FC<ReviewsProps> = ({ reviews, className = '', compact = false }) => {
  return (
    <div className={cn('space-y-4', className)}>
      {reviews.map((r) => (
        <article key={r.id} className={cn('flex gap-4 items-start')}>
          <div className="flex-shrink-0">{r.avatar ?? <div className="w-10 h-10 rounded-full bg-surface-secondary" />}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="font-medium text-text-primary">{r.author}</div>
                <div className="text-sm text-text-tertiary">{r.date}</div>
              </div>
              <div>
                <RatingStars value={r.rating} readOnly size={compact ? 'sm' : 'md'} />
              </div>
            </div>
            {r.text && <p className="mt-2 text-text-primary">{r.text}</p>}
          </div>
        </article>
      ))}
    </div>
  );
};

export default ReviewsList;

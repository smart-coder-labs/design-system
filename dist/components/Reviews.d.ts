import React from 'react';
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
export declare const RatingStars: React.FC<RatingStarsProps>;
export interface ReviewsProps {
    reviews: Review[];
    className?: string;
    compact?: boolean;
}
export declare const ReviewsList: React.FC<ReviewsProps>;
export default ReviewsList;
//# sourceMappingURL=Reviews.d.ts.map
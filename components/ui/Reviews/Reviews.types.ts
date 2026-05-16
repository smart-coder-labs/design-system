interface Review {
  id: string | number;
  author: string;
  avatar?: React.ReactNode;
  rating: number;
  date?: string;
  text?: string;
}


interface RatingStarsProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (v: number) => void;
}


interface ReviewsProps {
  reviews: Review[];
  className?: string;
  compact?: boolean;
}

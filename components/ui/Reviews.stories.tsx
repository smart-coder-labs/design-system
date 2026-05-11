import type { Meta, StoryObj } from '@storybook/react';
import { Reviews, RatingStars } from './Reviews';
import { useState } from 'react';

const meta = {
    title: 'Components/Reviews',
    component: Reviews,
    tags: ['autodocs'],
} satisfies Meta<typeof Reviews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        reviews: [
            { id: '1', author: 'Alice Johnson', rating: 5, date: 'May 10, 2025', text: 'Excellent app! Very intuitive and easy to use for managing my investments.' },
            { id: '2', author: 'Bob Smith', rating: 4, date: 'May 8, 2025', text: 'Great platform, but I wish there were more cryptocurrency options.' },
            { id: '3', author: 'Carol White', rating: 3, date: 'May 5, 2025', text: 'Decent for basic banking. Advanced features need improvement.' },
        ],
        onAddReview: (review) => console.log('New review:', review),
    },
};

export const ManyReviews: Story = {
    args: {
        reviews: [
            { id: '1', author: 'David Brown', rating: 5, date: 'May 11, 2025', text: 'Best fintech app I have ever used. The interface is gorgeous.' },
            { id: '2', author: 'Eve Davis', rating: 4, date: 'May 10, 2025', text: 'Highly recommend for budgeting and saving goals.' },
            { id: '3', author: 'Frank Green', rating: 5, date: 'May 9, 2025', text: 'Customer support is amazing. Helped me resolve an issue in minutes.' },
            { id: '4', author: 'Grace Hall', rating: 2, date: 'May 7, 2025', text: 'App crashes frequently on my device. Needs optimization.' },
            { id: '5', author: 'Henry Lee', rating: 4, date: 'May 6, 2025', text: 'Solid platform for daily banking and occasional trading.' },
            { id: '6', author: 'Iris Wang', rating: 5, date: 'May 4, 2025', text: 'The dark mode is beautiful. Love the attention to detail.' },
        ],
        onAddReview: (review) => console.log('New review:', review),
    },
};

export const NoReviews: Story = {
    args: {
        reviews: [],
        onAddReview: (review) => console.log('New review:', review),
    },
};

export const InteractiveReview: Story = {
    render: () => {
        const [reviews, setReviews] = useState([
            { id: '1', author: 'Alice', rating: 5, date: 'May 10, 2025', text: 'Great app!' },
        ]);
        const [newRating, setNewRating] = useState(0);
        const [newText, setNewText] = useState('');
        return (
            <div className="space-y-4">
                <Reviews
                    reviews={reviews}
                    onAddReview={(review) => {
                        setReviews(prev => [...prev, { ...review, id: String(Date.now()), date: new Date().toLocaleDateString() }]);
                    }}
                />
                <div className="p-4 border border-border-primary rounded-xl space-y-3">
                    <h4 className="text-sm font-semibold">Add Your Review</h4>
                    <RatingStars value={newRating} onChange={setNewRating} size="lg" />
                    <textarea
                        className="w-full p-2 border border-border-primary rounded-lg text-sm resize-none"
                        rows={3}
                        placeholder="Write your review..."
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                    <button
                        disabled={!newRating || !newText}
                        onClick={() => {
                            setReviews(prev => [...prev, { id: String(Date.now()), author: 'You', rating: newRating, date: 'Just now', text: newText }]);
                            setNewRating(0);
                            setNewText('');
                        }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        Submit Review
                    </button>
                </div>
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        reviews: [
            { id: '1', author: 'Alice Johnson', rating: 5, date: 'May 10, 2025', text: 'Excellent app in dark mode too!' },
            { id: '2', author: 'Bob Smith', rating: 4, date: 'May 8, 2025', text: 'Looks great with dark theme.' },
        ],
        onAddReview: (review) => console.log('New review:', review),
    },
};

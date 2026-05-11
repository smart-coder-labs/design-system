import type { Meta, StoryObj } from '@storybook/react';
import { Reviews } from './Reviews';

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
      { id: '1', author: 'Alice M.', rating: 5, text: 'Excellent platform! Very intuitive and secure.', date: '2024-01-15' },
      { id: '2', author: 'Bob K.', rating: 4, text: 'Great features, but could use more trading pairs.', date: '2024-01-14' },
      { id: '3', author: 'Carol S.', rating: 5, text: 'Best crypto wallet I have ever used.', date: '2024-01-12' },
    ],
  },
};

export const WithAverage: Story = {
  args: {
    average: 4.5,
    totalReviews: 128,
    reviews: [
      { id: '1', author: 'Dave R.', rating: 5, text: 'Fast transactions and low fees.', date: '2024-01-10' },
      { id: '2', author: 'Eve L.', rating: 4, text: 'Good support team, helped me recover my account.', date: '2024-01-08' },
    ],
  },
};

export const SingleReview: Story = {
  args: {
    reviews: [
      { id: '1', author: 'Frank W.', rating: 3, text: 'Decent app, but needs improvement in mobile responsiveness.', date: '2024-01-05' },
    ],
  },
};

export const Empty: Story = {
  args: {
    reviews: [],
  },
};

export const WithVerification: Story = {
  args: {
    reviews: [
      { id: '1', author: 'Grace H.', rating: 5, text: 'Verified purchase. Works perfectly!', date: '2024-01-20', verified: true },
      { id: '2', author: 'Henry P.', rating: 4, text: 'Good experience overall.', date: '2024-01-18', verified: false },
    ],
  },
};

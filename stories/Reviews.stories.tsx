import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ReviewsList, { RatingStars, Review } from '../components/Reviews';
import { Avatar } from '../components/Avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const meta: Meta<typeof ReviewsList> = {
    title: 'Data Display/Reviews & Ratings',
    component: ReviewsList,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReviewsList>;

const sample: Review[] = [
    {
        id: 1, author: 'Ana Gomez', rating: 5, date: '2025-11-01', text: 'Excelente producto, lo recomiendo.', avatar: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    },
    {
        id: 2, author: 'Luis Perez', rating: 4, date: '2025-10-12', text: 'Muy buena relación calidad-precio.', avatar: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    },
    {
        id: 3, author: 'Carla Ruiz', rating: 3, date: '2025-09-28', text: 'Bien, pero esperaba más.', avatar: <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    },
];

export const Default: Story = {
    render: () => (
        <div className="p-6">
            <ReviewsList reviews={sample} />
        </div>
    ),
};

export const RatingOnly: Story = {
    render: () => {
        const [value, setValue] = useState(3);
        return (
            <div className="p-6">
                <div className="mb-4">Interactivo:</div>
                <RatingStars value={value} onChange={setValue} />
                <div className="mt-3">Valor actual: {value}</div>
            </div>
        );
    },
};

export const Compact: Story = {
    render: () => (
        <div className="p-6">
            <ReviewsList reviews={sample} compact />
        </div>
    ),
};

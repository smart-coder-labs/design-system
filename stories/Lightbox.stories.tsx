import type { Meta, StoryObj } from '@storybook/react';
import { Lightbox } from '../components/Lightbox';
import { Button } from '../components/Button';
import { useState } from 'react';

const meta: Meta<typeof Lightbox> = {
    title: 'Data Display/Lightbox',
    component: Lightbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

const sampleImages = [
    {
        src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mountain Landscape',
        caption: 'Majestic mountains under the starry sky'
    },
    {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
        alt: 'Green Valley',
        caption: 'Lush green valley in the morning mist'
    },
    {
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
        alt: 'Portrait',
        caption: 'Artistic portrait photography'
    },
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
        alt: 'Mountains',
        caption: 'Snow capped peaks'
    }
];

const LightboxWithState = (args: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50 text-center">
                <p className="mb-4 text-sm text-gray-500">Click the button below to open the lightbox</p>
                <Button onClick={() => setIsOpen(true)}>Open Lightbox</Button>
            </div>
            
            <Lightbox
                {...args}
                isOpen={isOpen}
                currentIndex={index}
                onClose={() => setIsOpen(false)}
                onIndexChange={setIndex}
                images={sampleImages}
            />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <LightboxWithState {...args} />,
};

export const SingleImage: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Button onClick={() => setIsOpen(true)}>Open Single Image</Button>
                <Lightbox
                    {...args}
                    isOpen={isOpen}
                    currentIndex={0}
                    onClose={() => setIsOpen(false)}
                    images={[sampleImages[0]]}
                />
            </>
        );
    }
};

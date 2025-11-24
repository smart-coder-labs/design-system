import type { Meta, StoryObj } from '@storybook/react';
import { ImageCropper } from '../components/ImageCropper';
import { useState } from 'react';

const meta: Meta<typeof ImageCropper> = {
    title: 'Data Display/ImageCropper',
    component: ImageCropper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageCropper>;

const ImageCropperWithState = (args: any) => {
    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-8 items-center">
            <ImageCropper
                {...args}
                onCrop={(img) => setCroppedImage(img)}
                onCancel={() => setCroppedImage(null)}
            />
            
            {croppedImage && (
                <div className="flex flex-col gap-2 items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Result</h3>
                    <div className="p-2 bg-white rounded-xl shadow-lg border border-gray-100">
                        <img src={croppedImage} alt="Cropped result" className="rounded-lg max-w-[300px]" />
                    </div>
                </div>
            )}
        </div>
    );
};

export const Default: Story = {
    render: (args) => <ImageCropperWithState {...args} />,
    args: {
        src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
        aspectRatio: 1,
    },
};

export const Landscape: Story = {
    render: (args) => <ImageCropperWithState {...args} />,
    args: {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
        aspectRatio: 16 / 9,
    },
};

export const Portrait: Story = {
    render: (args) => <ImageCropperWithState {...args} />,
    args: {
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop',
        aspectRatio: 3 / 4,
    },
};

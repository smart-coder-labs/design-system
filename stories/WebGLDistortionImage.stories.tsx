import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WebGLDistortionImage } from '../components/ui/WebGLDistortionImage';

const meta: Meta = {
  title: 'Cyberpunk/03 - WebGL & Three.js/WebGLDistortionImage',
  component: WebGLDistortionImage,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div className="bg-void-black p-20 flex flex-col items-center justify-center text-white min-h-screen">
         <Story />
      </div>
    )
  ]
};
export default meta;

export const Default: StoryObj = {};

export const Bare: StoryObj = {
  decorators: []
};

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WebGLHologram } from '../components/ui/WebGLHologram';

const meta: Meta = {
  title: 'Cyberpunk/03 - WebGL & Three.js/WebGLHologram',
  component: WebGLHologram,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj = {};

export const Bare: StoryObj = {
  decorators: []
};

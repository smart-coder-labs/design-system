import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WebGLTunnel } from '../components/ui/WebGLTunnel';

const meta: Meta = {
  title: 'Cyberpunk/03 - WebGL & Three.js/WebGLTunnel',
  component: WebGLTunnel,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj = {};

export const Bare: StoryObj = {
  decorators: []
};

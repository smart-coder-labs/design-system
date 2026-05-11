import type { Meta, StoryObj } from '@storybook/react';
import { TreeView, TreeNode } from './TreeView';

const meta = {
  title: 'Components/TreeView',
  component: TreeView,
  tags: ['autodocs'],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

const projectData: TreeNode[] = [
  {
    id: '1', name: 'src', type: 'folder',
    children: [
      {
        id: '2', name: 'components', type: 'folder',
        children: [
          { id: '3', name: 'Button.tsx', type: 'file', meta: '2.4 KB' },
          { id: '4', name: 'Card.tsx', type: 'file', meta: '1.8 KB' },
          { id: '5', name: 'Modal.tsx', type: 'file', meta: '3.2 KB' },
        ],
      },
      {
        id: '6', name: 'lib', type: 'folder',
        children: [
          { id: '7', name: 'utils.ts', type: 'file', meta: '4.1 KB' },
          { id: '8', name: 'constants.ts', type: 'file', meta: '0.8 KB' },
        ],
      },
      { id: '9', name: 'index.ts', type: 'file', meta: '0.5 KB' },
      { id: '10', name: 'types.ts', type: 'file', meta: '1.2 KB' },
    ],
  },
  {
    id: '11', name: 'public', type: 'folder',
    children: [
      { id: '12', name: 'favicon.ico', type: 'file', meta: '15 KB' },
      { id: '13', name: 'logo.svg', type: 'file', meta: '8 KB' },
    ],
  },
  { id: '14', name: 'package.json', type: 'file', meta: '0.6 KB' },
  { id: '15', name: 'tsconfig.json', type: 'file', meta: '0.3 KB' },
];

export const Default: Story = {
  args: {
    data: projectData,
    onSelect: (node: TreeNode) => console.log('Selected:', node.name),
  },
};

export const WithSelection: Story = {
  args: {
    data: projectData,
    selectedId: '3',
    onSelect: (node: TreeNode) => console.log('Selected:', node.name),
  },
};

export const WithExpanded: Story = {
  args: {
    data: projectData,
    defaultExpandedIds: ['1', '2', '6'],
    onSelect: (node: TreeNode) => console.log('Selected:', node.name),
  },
};

export const Empty: Story = {
  args: {
    data: [],
    onSelect: (node: TreeNode) => console.log('Selected:', node.name),
  },
};

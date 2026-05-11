import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GridContainer, Row, Col } from './GridSystem';

const meta: Meta<typeof GridContainer> = {
  title: 'Components/GridSystem',
  component: GridContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const placeholder = (text: string) => (
  <div className="bg-accent-blue/10 text-accent-blue p-4 rounded-xl text-center text-sm font-medium">{text}</div>
);

export const Default: Story = {
  render: () => (
    <GridContainer>
      <Row>
        <Col span={4}>{placeholder('Column 1 (4 cols)')}</Col>
        <Col span={4}>{placeholder('Column 2 (4 cols)')}</Col>
        <Col span={4}>{placeholder('Column 3 (4 cols)')}</Col>
      </Row>
    </GridContainer>
  ),
};

export const Fluid: Story = {
  render: () => (
    <GridContainer fluid>
      <Row>
        <Col span={3}>{placeholder('Fluid Col 3')}</Col>
        <Col span={3}>{placeholder('Fluid Col 3')}</Col>
        <Col span={3}>{placeholder('Fluid Col 3')}</Col>
        <Col span={3}>{placeholder('Fluid Col 3')}</Col>
      </Row>
    </GridContainer>
  ),
};

export const Asymmetrical: Story = {
  render: () => (
    <GridContainer>
      <Row>
        <Col span={8}>{placeholder('Main Content (8 cols)')}</Col>
        <Col span={4}>{placeholder('Sidebar (4 cols)')}</Col>
      </Row>
    </GridContainer>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <GridContainer>
      <Row>
        <Col span={4} offset={4}>{placeholder('Centered (4 cols + offset 4)')}</Col>
      </Row>
    </GridContainer>
  ),
};

export const Responsive: Story = {
  render: () => (
    <GridContainer>
      <Row>
        <Col span={12} md={6} lg={4}>{placeholder('xs:12 md:6 lg:4')}</Col>
        <Col span={12} md={6} lg={4}>{placeholder('xs:12 md:6 lg:4')}</Col>
        <Col span={12} md={6} lg={4}>{placeholder('xs:12 md:6 lg:4')}</Col>
      </Row>
    </GridContainer>
  ),
};

export const CustomGutters: Story = {
  render: () => (
    <GridContainer>
      <Row gutterX={8} gutterY={8}>
        <Col span={6}>{placeholder('Wider gap col 1')}</Col>
        <Col span={6}>{placeholder('Wider gap col 2')}</Col>
      </Row>
    </GridContainer>
  ),
};

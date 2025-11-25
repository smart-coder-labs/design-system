import React from 'react';
import { CountersListWithChart } from '../components/CountersListWithChart';

export default {
  title: 'Data/CountersListWithChart',
  component: CountersListWithChart,
};

const items = [
  { label: 'First Service Residential', value: 116, percent: 56, color: '#4f8afc' },
  { label: 'KW Property Management', value: 32, percent: 32, color: '#a78bfa' },
  { label: 'Marquis Association Management', value: 19, percent: 9, color: '#34d399' },
];

export const Default = () => (
  <CountersListWithChart
    title="Companies with more managers"
    items={items}
    chartType="donut"
  />
);

export const PieChart = () => (
  <CountersListWithChart
    title="Companies with more managers"
    items={items}
    chartType="pie"
  />
);

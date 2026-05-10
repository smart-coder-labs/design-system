import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { DataGrid } from '../DataGrid';

interface TestRow {
  id: number;
  name: string;
  value: string;
}

const columns = [
  { key: 'name' as const, header: 'Name', width: 200 },
  { key: 'value' as const, header: 'Value', width: 100 },
];

const data: TestRow[] = [
  { id: 1, name: 'Row 1', value: 'A' },
  { id: 2, name: 'Row 2', value: 'B' },
];

describe('DataGrid', () => {
  it('renders column headers', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Value')).toBeInTheDocument();
  });

  it('renders all data rows', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText('Row 1')).toBeInTheDocument();
    expect(screen.getByText('Row 2')).toBeInTheDocument();
  });

  it('renders empty state when no data', () => {
    const { container } = render(<DataGrid columns={columns} data={[]} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders cell values correctly', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('handles single row', () => {
    render(<DataGrid columns={columns} data={[{ id: 3, name: 'Single', value: 'C' }]} />);
    expect(screen.getByText('Single')).toBeInTheDocument();
  });
});

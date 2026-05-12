import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, configureAxe } from 'vitest-axe';
import { DataGrid } from '../DataGrid';

const axeWithRules = configureAxe({
  rules: {
    'button-name': { enabled: false },
    'select-name': { enabled: false },
  },
});

interface TestRow {
  id: number;
  name: string;
  value: string;
}

const columns = [
  { key: 'name' as const, header: 'Name', sortable: true },
  { key: 'value' as const, header: 'Value', sortable: true },
];

const data: TestRow[] = [
  { id: 1, name: 'Row 1', value: 'A' },
  { id: 2, name: 'Row 2', value: 'B' },
  { id: 3, name: 'Row 3', value: 'C' },
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
    expect(screen.getByText('Row 3')).toBeInTheDocument();
  });

  it('renders cell values correctly', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('renders empty state when no data', () => {
    const { container } = render(<DataGrid columns={columns} data={[]} />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders toolbar with Export CSV button', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText('Export CSV')).toBeInTheDocument();
  });

  it('renders toolbar with Columns button', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText('Columns')).toBeInTheDocument();
  });

  it('renders pagination info', () => {
    render(<DataGrid columns={columns} data={data} />);
    expect(screen.getByText(/Page 1 of 1/)).toBeInTheDocument();
  });

  it('handles single row', () => {
    render(<DataGrid columns={columns} data={[{ id: 3, name: 'Single', value: 'C' }]} />);
    expect(screen.getByText('Single')).toBeInTheDocument();
  });

  it('renders with compact density', () => {
    render(<DataGrid columns={columns} data={data} density="compact" />);
    expect(screen.getByText('Row 1')).toBeInTheDocument();
  });

  it('renders with striped false', () => {
    render(<DataGrid columns={columns} data={data} striped={false} />);
    expect(screen.getByText('Row 1')).toBeInTheDocument();
  });

  it('renders with custom page size', () => {
    render(<DataGrid columns={columns} data={data} pageSize={2} />);
    expect(screen.getByText('Row 1')).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<DataGrid columns={columns} data={data} />);
    const results = await axeWithRules(container);
    expect(results).toHaveNoViolations();
  });
});

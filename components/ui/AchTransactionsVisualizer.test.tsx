import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AchTransactionsVisualizer } from './AchTransactionsVisualizer';

describe('AchTransactionsVisualizer', () => {
  const mockTransactions = [
    {
      id: '1',
      amount: 100,
      type: 'CREDIT',
      status: 'COMPLETED',
      date: '2024-01-01',
      title: 'Test Transaction',
    },
    {
      id: '2',
      amount: 200,
      type: 'DEBIT',
      status: 'PENDING',
      date: '2024-01-02',
      title: 'Another Transaction',
    },
  ];

  it('renders without crashing', () => {
    const { container } = render(<AchTransactionsVisualizer transactions={mockTransactions} />);
    expect(container).toBeInTheDocument();
  });

  it('renders transactions from props', () => {
    const { getByText } = render(
      <AchTransactionsVisualizer transactions={mockTransactions} />
    );
    expect(getByText('Test Transaction')).toBeInTheDocument();
    expect(getByText('Another Transaction')).toBeInTheDocument();
  });

  it('accepts custom emptyMessage', () => {
    const { getByText } = render(
      <AchTransactionsVisualizer transactions={[]} emptyMessage="No transactions found" />
    );
    expect(getByText('No transactions found')).toBeInTheDocument();
  });

  it('accepts title and subtitle', () => {
    const { getByText } = render(
      <AchTransactionsVisualizer 
        transactions={mockTransactions} 
        title="My Transactions"
        subtitle="Recent activity"
      />
    );
    expect(getByText('My Transactions')).toBeInTheDocument();
    expect(getByText('Recent activity')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <AchTransactionsVisualizer transactions={mockTransactions} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('has forwardRef', () => {
    const ref = { current: null };
    const { container } = render(
      <AchTransactionsVisualizer transactions={mockTransactions} ref={ref as any} />
    );
    expect(ref.current).not.toBeNull();
  });

  describe('no hardcoded demo content', () => {
    it('does not render hardcoded transactions', () => {
      const { container } = render(<AchTransactionsVisualizer transactions={[]} />);
      const text = container.textContent || '';
      // Empty state should not contain demo data
      expect(text.length).toBeLessThan(100);
    });
  });
});
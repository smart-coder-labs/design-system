# JargonTooltip

> **v1.0.2** · experimental

An educational tooltip component for explaining complex financial and technical terms. Displays definitions with optional examples in a styled popover.

## Installation

```bash
import { JargonTooltip } from '@/components/ui/JargonTooltip';
```

## Basic Usage

```tsx
import { JargonTooltip } from '@/components/ui/JargonTooltip';

function Example() {
  return (
    <p>
      Your savings account offers a{' '}
      <JargonTooltip
        term="APY"
        definition="Annual Percentage Yield — the real rate of return on your savings, including compound interest."
      />
      of 4.5%.
    </p>
  );
}
```

## With Custom Trigger

```tsx
<JargonTooltip
  term="APR"
  definition="Annual Percentage Rate — the yearly cost of borrowing, including interest and fees."
>
  <span className="text-accent-blue underline decoration-dotted cursor-help">APR</span>
</JargonTooltip>
```

## With Example

```tsx
<JargonTooltip
  term="CD"
  definition="Certificate of Deposit — a time deposit with a fixed maturity date and interest rate."
  example="A 12-month CD at 5% APY would earn $500 on a $10,000 deposit."
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `term` | `string` | - | The complex term to explain |
| `definition` | `string` | - | Simple explanation of the term |
| `example` | `string` | - | Optional example to clarify the definition |
| `children` | `ReactNode` | - | Custom trigger element (if omitted, renders default underlined term) |

## Examples

### Fintech Terms in Context

```tsx
<div className="space-y-3">
  <p>
    Your <JargonTooltip term="APR" definition="Annual Percentage Rate — the yearly cost of borrowing, including interest and fees.">APR</JargonTooltip> for this loan is 8.5%.
  </p>
  <p>
    This <JargonTooltip term="ACH" definition="Automated Clearing House — an electronic network for financial transactions in the US.">ACH</JargonTooltip> transfer will arrive in 2-3 business days.
  </p>
  <p>
    Your portfolio includes <JargonTooltip term="ETF" definition="Exchange-Traded Fund — a basket of securities that trades on an exchange like a stock.">ETFs</JargonTooltip> and individual stocks.
  </p>
</div>
```

### Crypto Terms

```tsx
<p>
  Transaction requires 12{' '}
  <JargonTooltip
    term="Confirmations"
    definition="The number of blocks added to the blockchain after a transaction is included. More confirmations = more secure."
  >
    confirmations
  </JargonTooltip>{' '}
  before funds are available.
</p>
```

### Investment Terms

```tsx
<p>
  <JargonTooltip
    term="Expense Ratio"
    definition="The annual fee charged by a fund to cover operating expenses, expressed as a percentage of assets."
  >
    Expense ratio
  </JargonTooltip>{' '}
  is key to maximizing your returns.
</p>
```

## Notes

- Toggle visibility on click, hover, focus, or blur
- Closes on outside click or Escape key
- Animated with Framer Motion (150ms fade + scale)
- Drop shadow for depth
- Dark mode support
- Accessible with proper ARIA attributes (role="button", tabIndex=0, aria-expanded)
- Default trigger shows term with dashed underline and info icon
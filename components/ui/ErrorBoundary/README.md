# ErrorBoundary

> **v1.0.15** · stable

A React class component that catches JavaScript errors in its child component tree, displays a fallback UI, and logs error information. Essential for preventing entire application crashes due to component failures.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
```

## Basic Usage

```tsx
<ErrorBoundary>
  <MyUnreliableComponent />
</ErrorBoundary>
```

## With Error Handling

```tsx
<ErrorBoundary
  onError={(error, errorInfo) => {
    // Log to your error tracking service
    console.error('Caught error:', error, errorInfo);
  }}
  onReset={() => {
    // Reset any related state
    setData(null);
  }}
>
  <MyUnreliableComponent />
</ErrorBoundary>
```

## API

### Props

| Prop        | Type                                                                              | Default     | Description                         |
| ----------- | --------------------------------------------------------------------------------- | ----------- | ----------------------------------- |
| `children`  | `ReactNode`                                                                       | -           | Child components to wrap            |
| `fallback`  | `ReactNode \| ((error: Error, resetErrorBoundary: () => void) => ReactNode)`    | -           | Fallback UI to display on error     |
| `onError`   | `(error: Error, errorInfo: ErrorInfo) => void`                                   | -           | Error callback for logging          |
| `onReset`   | `() => void`                                                                      | -           | Callback when resetting boundary   |

### Default Fallback

If no `fallback` is provided, a default error UI is displayed with:
- Error icon
- "Something went wrong" heading
- Error message
- "Reload Page" and "Try Again" buttons
- Development mode: expandable stack trace

## Examples

### Basic Error Boundary

```tsx
<ErrorBoundary>
  <WidgetContent />
</ErrorBoundary>
```

### Custom Fallback Component

```tsx
<ErrorBoundary
  fallback={(error, reset) => (
    <div className="p-8 text-center">
      <span className="text-4xl">⚠️</span>
      <h3 className="text-lg font-bold mt-4">Something went wrong</h3>
      <p className="text-sm text-gray-600">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  )}
>
  <WidgetContent />
</ErrorBoundary>
```

### Minimalist Fallback

```tsx
<ErrorBoundary
  fallback={(error, reset) => (
    <div className="flex flex-col items-center gap-4 p-8">
      <span className="text-3xl">😵</span>
      <p className="text-sm text-gray-500">{error.message}</p>
      <button onClick={reset} className="text-blue-500 underline">
        Try again
      </button>
    </div>
  )}
>
  <WidgetContent />
</ErrorBoundary>
```

### Fintech-Style Fallback

```tsx
<ErrorBoundary
  fallback={(error, reset) => (
    <div className="flex flex-col items-center p-10 bg-white rounded-2xl max-w-md mx-auto">
      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl">💳</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Transaction Unavailable
      </h3>
      <p className="text-sm text-gray-500 mb-2 text-center">
        We're having trouble loading your recent transactions.
      </p>
      <p className="text-xs text-gray-400 font-mono mb-6 bg-gray-100 px-3 py-1 rounded">
        {error.message}
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold"
        >
          Retry
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )}
>
  <TransactionList />
</ErrorBoundary>
```

### With Error Logging

```tsx
const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
  // Send to error tracking service (Sentry, etc.)
  captureException(error, { extra: errorInfo });
  console.error('ErrorBoundary caught:', error);
};

<ErrorBoundary onError={handleError}>
  <DashboardWidget />
</ErrorBoundary>
```

### Loading Skeleton Fallback

```tsx
<ErrorBoundary
  fallback={
    <div className="flex flex-col items-center justify-center p-12">
      <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full mb-4" />
      <p className="text-sm text-gray-500">Recovering connection...</p>
    </div>
  }
>
  <LiveDataWidget />
</ErrorBoundary>
```

## How It Works

1. **Error Detection**: Uses React's `getDerivedStateFromError` lifecycle method
2. **State Update**: Sets `hasError: true` and stores the error
3. **Logging**: `componentDidCatch` fires `onError` callback if provided
4. **Fallback Render**: Displays fallback UI (custom or default)
5. **Reset**: Calls `resetErrorBoundary()` to clear error and retry

## Notes

- Class component (not functional) due to React error boundary requirements
- Default fallback shows full stack trace in development mode only
- Fallback can be static node or render function (receives error and reset function)
- `onReset` is called when user clicks "Try Again" button in default fallback
- Supports both light and dark modes via design tokens
- Commonly used to wrap:
  - Third-party widgets
  - User-generated content
  - API-driven components
  - Complex interactive elements

---

## Common Use Cases

### Wrapping Widgets

```tsx
// Wrap unreliable third-party components
<ErrorBoundary>
  <ChatWidget />
</ErrorBoundary>
```

### Wrapping API Content

```tsx
// Wrap data-fetching components
<ErrorBoundary>
  <TransactionList />
</ErrorBoundary>
```

### Multiple Boundaries

```tsx
// Different boundaries for different sections
<div>
  <ErrorBoundary fallback={<FeedError />}>
    <ActivityFeed />
  </ErrorBoundary>
  <ErrorBoundary fallback={<SidebarError />}>
    <Sidebar />
  </ErrorBoundary>
</div>
```

---

## Architecture Decisions

### Why class component?

React error boundaries must be class components. The `componentDidCatch` and `getDerivedStateFromError` methods are only available on class components. This is a React limitation, not a design choice.

### File Structure

```
ErrorBoundary/
├── ErrorBoundary.tsx       # Main component + DefaultErrorFallback
├── ErrorBoundary.types.ts  # Props and state types
└── index.ts                # Barrel exports
```
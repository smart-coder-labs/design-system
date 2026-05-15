### Example 2: Custom Hook Test
**User Input**:
> "Test the useCounter hook. It should increment and decrement."

**Reasoning**:
Hooks cannot be tested directly because they must run inside a component. We use `renderHook` from testing-library.

**Action/Output**:
```tsx
// src/hooks/use-counter.test.ts
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './use-counter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)
  })

  it('increments count', () => {
    const { result } = renderHook(() => useCounter(0))
    
    // State updates must be wrapped in act
    act(() => {
      result.current.increment()
    })
    
    expect(result.current.count).toBe(1)
  })
})
```

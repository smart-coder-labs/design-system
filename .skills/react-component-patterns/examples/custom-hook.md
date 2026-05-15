### Example 2: Custom Hook Extraction
**User Input**:
> "My component has too much code handling the data fetching, loading state, and error handling. It's hard to read the UI."

**Reasoning**:
The component is mixing **UI concerns** with **Data Logic**. We should extract the data fetching logic into a custom hook `useFetchData`.

**Action/Output**:
```tsx
// src/hooks/use-fetch-data.ts
import { useState, useEffect } from 'react';

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (!ignore) {
           setData(json);
           setLoading(false);
        }
      })
      .catch(err => {
        if (!ignore) {
            setError(err);
            setLoading(false);
        }
      });

    return () => { ignore = true; };
  }, [url]);

  return { data, loading, error };
}

// Usage in Component
// const { data, loading } = useFetchData('/api/user');
```

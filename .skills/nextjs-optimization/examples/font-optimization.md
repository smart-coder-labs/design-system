### Example 2: Font Optimization
**User Input**:
> "I want to use Inter font but it's causing layout shift."

**Reasoning**:
The user is likely loading fonts via CSS @import. Switch to `next/font/google`.

**Action/Output**:
```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

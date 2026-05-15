### Example 2: Layout-based RBAC
**User Input**:
> "Make sure only Admins can access the /admin section."

**Reasoning**:
While middleware can check *authentication* (is logged in), verifying *roles* (authorization) requires database access, which is best done in a Server Component Layout to avoid blocking the edge middleware (and most DB adapters don't run in Edge).

**Action/Output**:
```typescript
// src/app/(admin)/layout.tsx
import { redirect } from 'next/navigation'
import { getCurrentUser } from '@/lib/auth' // DAL function

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user || user.role !== 'ADMIN') {
    redirect('/dashboard') // Or 404/403 page
  }

  return (
    <div className="admin-layout">
      {children}
    </div>
  )
}
```

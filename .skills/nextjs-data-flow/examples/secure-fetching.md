### Example 2: Secure Data Fetching (DAL)
**User Input**:
> "How should I fetch the user's profile data safely?"

**Reasoning**:
Encourage creating a dedicated DAL function rather than fetching directly in the Page component, to allow reuse and centralize security checks.

**Action/Output**:
```typescript
// src/app/(dashboard)/_lib/data.ts
import 'server-only'
import { db } from '@/lib/db'
import { getCurrentUser } from '@/lib/auth'

export async function getUserProfile() {
  const user = await getCurrentUser()
  if (!user) throw new Error('Unauthorized')

  const profile = await db.profile.findUnique({
    where: { userId: user.id }
  })
  
  return profile
}

// Then use this in your Page component:
// const profile = await getUserProfile()
```

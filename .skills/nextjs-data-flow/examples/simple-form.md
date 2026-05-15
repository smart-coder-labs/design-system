### Example 1: Simple Form Submission
**User Input**:
> "I need a server action to subscribe a user to the newsletter with their email."

**Reasoning**:
1.  Need Zod schema for email.
2.  Need a server action.
3.  Need to save to DB and revalidate.

**Action/Output**:
```typescript
'use server'

import 'server-only'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { db } from '@/lib/db' // Hypothetical DB

const schema = z.object({
  email: z.string().email(),
})

export async function subscribeUser(prevState: any, formData: FormData) {
  const result = schema.safeParse({
    email: formData.get('email'),
  })

  if (!result.success) {
    return { error: 'Invalid email address' }
  }

  try {
    await db.subscribers.create({ data: { email: result.data.email } })
    revalidatePath('/')
    return { success: true, message: 'Subscribed!' }
  } catch (error) {
    return { error: 'Failed to subscribe' }
  }
}
```

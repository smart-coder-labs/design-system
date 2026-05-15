### Example 1: Middleware Protection
**User Input**:
> "Protect the /dashboard properties so only logged in users can see them. Redirect others to /login."

**Reasoning**:
Middleware is the best place for global route protection before the request hits the server components.

**Action/Output**:
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Assume we have a custom logic or a library to check the session token
  const sessionToken = request.cookies.get('session_token')?.value
  
  // Define protected paths
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')
  
  if (isDashboard && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
```

### Example 2: Premature Optimization
**User Input**:
> "I'm making a `LoginForm` component. Should I put it in shared components just in case?"

**Reasoning**:
1.  Current Usage: Intent is for `(auth)/login` page only.
2.  Count: 1.
3.  Risk: "Just in case" leads to cluttered shared folders.
4.  Decision: KEEP LOCAL.

**Action/Output**:
> "**No.** The Scope Rule dictates you start local. Place it in `src/app/(auth)/login/_components/login-form.tsx`. Only move it if you actually implement a second feature that needs it (e.g., a modal on the home page)."

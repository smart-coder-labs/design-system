---
name: nextjs-data-flow
description: >
  Expert guidance on data handling in Next.js 16+, focusing on Server Actions, robust data fetching, and the Data Access Layer (DAL) pattern. Enforces type safety, `server-only` constraints, and secure mutation patterns.
  Trigger: "Create Server Action", "Fetch data Next.js", "Handle form submission", "Database query Next.js".
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - nextjs
  - data-fetching
  - server-actions
  - typescript
allowed_tools:
  - write_to_file
  - view_file
---

# Next.js Data Flow Expert

## 1. Overview
This skill handles the implementation of secure and efficient data flows in Next.js applications. It champions the **Server Actions** model for mutations and direct **Server Component** fetching for reads. It enforces the separation of database logic into a Data Access Layer (DAL) and necessitates strictly typed inputs using Zod.

## 2. Prerequisites & Context
*   **Required Tools**:
    *   `write_to_file`: To generate action files and DAL utilities.
*   **Environment**: Next.js App Router (Server Actions enabled).
*   **Input**:
    *   Data model (e.g., User, Product).
    *   Desired operation (Create, Read, Update, Delete).

## 3. Workflow
1.  **Define Schema**: Create a Zod schema to validate the input data (form data or API payload).
2.  **Create DAL Function**: Write a reusable, server-only function to interact with the database (e.g., `createUserInDb`).
3.  **Implement Server Action**:
    *   Mark with `'use server'`.
    *   Validate input against Schema.
    *   Call the DAL function.
    *   Handle errors gracefully.
    *   Revalidate cache (`revalidatePath`) and Redirect (`redirect`).
4.  **Connect UI**: Use the action in a form or event handler (inside a Client Component if needed).

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **Always** use `'use server'` at the top of action files.
-   [ ] **Rule 2**: **Always** import `server-only` in DAL files and actions to prevent leakage to the client.
-   [ ] **Rule 3**: **Always** validate inputs using Zod (or similar) before processing any mutation.
-   [ ] **Rule 4**: **Never** expose raw database errors to the client; catch them and return user-friendly messages.
-   [ ] **Rule 5**: Use `redirect` **outside** of try-catch blocks (as it throws an error internally).

### Standard Action Pattern
```typescript
'use server'
import 'server-only'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function myAction(prevState: any, formData: FormData) {
  // Logic here
}
```

## 5. Examples

### Example 1: Simple Form Submission
See [examples/simple-form.md](examples/simple-form.md).

### Example 2: Secure Data Fetching (DAL)
See [examples/secure-fetching.md](examples/secure-fetching.md).

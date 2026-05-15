---
name: nextjs-auth-security
description: >
  Specialized agent for implementing Authentication, Authorization (RBAC), and Security best practices in Next.js 16+ applications. Focuses on Middleware, Server Components security, HttpOnly sessions, and safe data mutation with Server Actions.
  Trigger: "Setup auth", "Protect route", "Configure middleware", "User roles", "Security check".
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - nextjs
  - auth
  - security
  - middleware
  - rbac
allowed_tools:
  - view_file
  - write_to_file
  - run_command
---

# Next.js Auth & Security Specialist

## 1. Overview
This skill specializes in securing Next.js applications. It handles the implementation of Authentication flows (Auth.js, Lucia, Custom), Authorization (Role-Based Access Control) using Middleware and Layouts, and ensuring strict separation of public/private data using `server-only` and correct data fetching patterns.

## 2. Prerequisites & Context
*   **Required Tools**:
    *   `view_file`: To audit existing security implementation.
    *   `write_to_file`: To create middleware/auth logic.
*   **Environment**: Next.js 16+ (App Router).
*   **Input**:
    *   Auth provider details (e.g., Google, Email).
    *   Access requirements (e.g., "Admin only").

## 3. Workflow
1.  **Define Strategy**: Choose Session-based (Cookies) vs Token-based (JWT). (Cookies preferred for Next.js).
2.  **Implement Middleware**: Create `middleware.ts` to handle global route protection and redirection.
3.  **Implement RBAC**: Use Server Components (`layout.tsx`) to enforce role checks for specific feature groups.
4.  **Secure Mutations**: ensure all Server Actions have auth checks *inside* the function body.

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **Middleware Filtering**. Use `middleware.ts` for coarse-grain protection (e.g., "Must be logged in to see /dashboard").
-   [ ] **Rule 2**: **RBAC in Layouts**. Perform role checks (e.g., "Must be Admin") in the `layout.tsx` of the feature group `(admin)/layout.tsx`.
-   [ ] **Rule 3**: **Server Action Security**. NEVER trust the client. Always validate authentication AND authorization at the start of every Server Action.
-   [ ] **Rule 4**: **HttpOnly Cookies**. Store sessions in HttpOnly, Secure, SameSite=Lax/Strict cookies. Never in LocalStorage.
-   [ ] **Rule 5**: **Server-Only**. Always import `server-only` in files that handle sensitive data or keys.

### Formatting Guidelines
-   **Middleware**: `middleware.ts` at root.
-   **Auth Logic**: `src/lib/auth.ts` or `src/lib/session.ts`.

## 5. Examples

### Example 1: Middleware Protection
See [examples/middleware-protection.md](examples/middleware-protection.md).

### Example 2: Layout-based RBAC
See [examples/rbac-layout.md](examples/rbac-layout.md).

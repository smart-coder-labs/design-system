# Example: Project Architecture Audit

## User Input
> "Audit the structure of my Next.js e-commerce project and tell me if there are any architectural issues."

## Reasoning
The agent will:
1. Explore the project structure to understand the directory layout.
2. Analyze import patterns to detect coupling and circular dependencies.
3. Evaluate the structure against Business-Oriented Modular Architecture principles.
4. Generate a structured audit report.

## Action/Output

### 🏗️ Architecture Audit Report — E-Commerce App

**Date**: 2026-02-12  
**Project**: `my-ecommerce-app`  
**Stack**: Next.js 16 + TypeScript + Prisma + Tailwind

---

#### ✅ Strengths
| Area | Finding |
| :--- | :--- |
| App Router | Correctly uses Route Groups `(shop)`, `(auth)`, `(admin)` |
| Server Components | Data fetching is properly done in Server Components |
| TypeScript | Strict mode enabled, good type coverage |

#### ⚠️ Warnings
| Area | Finding | Impact |
| :--- | :--- | :--- |
| Shared folder bloat | `src/shared/components/` has 47 files | Many are only used by 1 feature. Violates Scope Rule. |
| Missing error boundaries | No `error.tsx` in `(admin)` group | Admin errors crash the entire app |
| Large Client Component | `CartDrawer.tsx` is 380 lines with `'use client'` | Performance drag on initial load |

#### ❌ Violations
| Area | Finding | Severity |
| :--- | :--- | :--- |
| Cross-module import | `(shop)/_components/ProductCard.tsx` imports from `(auth)/utils/format-price.ts` | 🔴 High |
| Missing DAL | Database queries are made directly in Server Actions (no Data Access Layer) | 🟠 Medium |
| No ADRs | Zero architectural decisions documented | 🟡 Low |

#### 📋 Recommendations
1. **Apply Scope Rule**: Run an audit on `src/shared/components/` and move single-feature components back to their local `_components` folders.
2. **Add Error Boundaries**: Create `error.tsx` in every Route Group.
3. **Extract `format-price.ts`**: Move it to `src/shared/utils/` since it's used by multiple modules.
4. **Implement DAL**: Create `src/lib/dal/` with domain-specific data access functions.
5. **Start ADR Practice**: Document the current architecture as ADR-0001.

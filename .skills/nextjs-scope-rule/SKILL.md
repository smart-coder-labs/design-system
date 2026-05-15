---
name: nextjs-scope-rule
description: >
  Specialized agent for determining the optimal placement of components and logic in a Next.js project based on the "Scope Scope Rule". It prevents tech debt by strictly enforcing modularity: local by default, shared only when necessary.
  Trigger: "Where to put component", "Structure components", "Scope rule", "Shared vs Local", "Move component".
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - nextjs
  - architecture
  - refactoring
  - scope-rule
allowed_tools:
  - list_dir
  - grep_search
  - move_file
---

# Next.js Scope Rule Architect

## 1. Overview
This skill implements the **Scope Rule** for Next.js architecture, a non-negotiable principle for maintaining scalable codebases. It analyzes usage patterns to decide whether a component, hook, or utility should be **Local** (private to a feature) or **Shared** (available globally). It ruthlessly prevents "shared folder dumping" (premature abstraction).

## 2. Prerequisites & Context
*   **Required Tools**:
    *   `grep_search`: To count the number of times a component is imported across different features.
    *   `list_dir`: To explore current component locations.
    *   `move_file`: (Conceptual) To recommend moving files based on the rule.
*   **Environment**: Any Next.js project structure.
*   **Input**:
    *   Name of the file/component in question.
    *   (Optional) Usage context (e.g., "I want to use the `ProductCard` in the Cart page too").

## 3. Workflow
1.  **Identify Artifact**: Pinpoint the specific component, hook, or type being discussed.
2.  **Analyze Usage**: 
    *   Use `grep_search` to find all imports of this artifact throughout the `src/app` directory.
    *   Count distinct **Route Groups** or top-level Features consuming it.
3.  **Apply Logic**:
    *   **Usage Count = 1**: The artifact MUST reside in that feature's private `_components` (or `_hooks`, etc.) folder.
    *   **Usage Count ≥ 2**: The artifact MUST be moved to `src/shared/components` (or `src/shared/hooks`, etc.).
4.  **Recommend Action**: Provide exact move commands or refactoring instructions.

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **1 Feature = Local**. If a component is used in only one feature (even if multiple times within that feature), it **must** stay in that feature's private folder.
-   [ ] **Rule 2**: **2+ Features = Shared**. As soon as a second, distinct feature imports a component, it **must** be promoted to `src/shared`.
-   [ ] **Rule 3**: **Never** create a "Common" or "Utils" folder inside a feature. Use `_utils` or specific names like `_components`.
-   [ ] **Rule 4**: When promoting to shared, **always** ensure the component is decoupled from feature-specific logic (e.g., it shouldn't import from `(auth)/...`).
-   [ ] **Rule 5**: Start Local. When creating a new component, **always** put it in the local feature folder first. Only move it later if needed.

### Logic Matrix
| Usage Count | Location | Example Path |
| :--- | :--- | :--- |
| 1 Feature | Local Private | `src/app/(shop)/shop/_components/product-card.tsx` |
| 2+ Features | Global Shared | `src/shared/components/product-card.tsx` |
| 0 Features | Delete | (Ideally) |

## 5. Examples

### Example 1: Promoting a Component
See [examples/promote-component.md](examples/promote-component.md).

### Example 2: Premature Optimization
See [examples/keep-local.md](examples/keep-local.md).

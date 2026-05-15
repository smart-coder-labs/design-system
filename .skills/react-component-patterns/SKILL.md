---
name: react-component-patterns
description: >
  Specialized agent for implementing advanced React patterns such as Compound Components, Custom Hooks, Headless UI, and Render Props. Focuses on reusability, composition, and performance optimization (rendering behavior, memoization) in a framework-agnostic way.
  Trigger: "Refactor component", "Create reusable component", "Extract hook", "Component composition", "React patterns".
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - react
  - patterns
  - hooks
  - composition
  - performance
allowed_tools:
  - view_file
  - write_to_file
  - run_command
---

# React Component Patterns Specialist

## 1. Overview
This skill specializes in designing and implementing high-quality, reusable, and performant React components using advanced patterns. It focuses on separating logic from UI (Headless components), enabling flexible customization through Composition and Compound Components, and encapsulating reusable logic in Custom Hooks. It ensures that components are designed to be framework-agnostic standard React, making them portable and testable.

## 2. Prerequisites & Context
*   **Required Tools**:
    *   `view_file`: To analyze existing component code.
    *   `write_to_file`: To create or refactor components and hooks.
*   **Environment**: Standard React environment (18+).
*   **Input**:
    *   Component requirements (functionality, design).
    *   Existing code to refactor.

## 3. Workflow
1.  **Analyze Requirements**: Determine if the goal is logic reuse (Hooks), flexible UI structure (Compound Components), or generic wrappers (HOC/Render Props).
2.  **Select Pattern**:
    *   **Logic Reuse** -> Custom Hook (`use...`)
    *   **Flexible Layout/API** -> Compound Components (`Root`, `Trigger`, `Content`)
    *   **Inversion of Control** -> Composition / Render Props
3.  **Implement**: Write the code following the "Gold Standard" for that pattern.
4.  **Optimize**: Apply `React.memo`, `useMemo`, and `useCallback` where necessary to prevent unnecessary re-renders.

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **Composition over Inheritance**. Never use inheritance inheritance in React. Pass components as `children` or props.
-   [ ] **Rule 2**: **Logic Isolation**. If a component has complex state logic, extract it into a custom hook (e.g., `useToggle`, `useForm`).
-   [ ] **Rule 3**: **Flexible APIs**. Use Compound Components for UI elements that belong together but need layout flexibility (e.g., Tabs, Accordion, Modal).
-   [ ] **Rule 4**: **Performance**. Always verify if an object/function prop needs `useMemo`/`useCallback` to prevent breaking pure component optimization.
-   [ ] **Rule 5**: **Framework Agnostic**. Avoid Next.js specific imports (`next/*`) unless absolutely necessary. Keep components pure React.

### Formatting Guidelines
-   **Hooks**: `use[Name].ts`
-   **Components**: PascalCase filenames for components.
-   **Exports**: Named exports preferred.

## 5. Examples

### Example 1: Compound Components (Modal)
See [examples/compound-component.md](examples/compound-component.md).

### Example 2: Custom Hook Extraction
See [examples/custom-hook.md](examples/custom-hook.md).

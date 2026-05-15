---
name: nextjs-structure
description: >
  Specialized agent for setting up Next.js 16+ projects and enforcing a Business-Oriented Modular Architecture (Screaming Architecture). Handles project scaffolding, App Router structure, path aliases, and file conventions to ensure code is organized by business domain.
  Trigger: "Setup Next.js project", "Next.js structure", "Scaffold Next.js app", "project architecture", "Business modules".
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - nextjs
  - architecture
  - scaffolding
  - app-router
  - modularity
allowed_tools:
  - run_command
  - write_to_file
  - list_dir
---

# Next.js Structure Specialist

## 1. Overview
This skill specializes in initializing and structuring Next.js applications using the App Router and **Business-Oriented Modular Architecture**. It enforces a strict organization where code is grouped by **Business Domain** (Modules) rather than technical type. This ensure that the project structure "screams" its intent, making it easier to scale and maintain.

## 2. Prerequisites & Context
*   **Required Tools**: 
    *   `run_command`: To execute `npx create-next-app` and install dependencies.
    *   `write_to_file`: To create directory structures and configuration files.
    *   `list_dir`: To verify the current project state.
*   **Environment**: Node.js 18.17+ environment.
*   **Input**: 
    *   Project name.
    *   List of Business Concepts (e.g., Checkout, Authentication, Inventory).

## 3. Workflow
1.  **Analyze Request**: Identify the core **Business Modules** of the application.
2.  **Scaffold Base Project**: Run `npx create-next-app@latest` with strict flags.
3.  **Implement Modular Architecture**:
    *   Create `src/app`.
    *   Define **Module Route Groups** `(module-name)` for each business domain.
    *   **Enforce Module Isolation**: All components, hooks, and actions related to a module MUST be inside that module's directory (`_components`, `_hooks`).
    *   Create strict root files: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`.
4.  **Configure Aliases**: Update `tsconfig.json` to support module-based imports.
5.  **Clean & Verify**: Remove technical groupings (like a global `components/` folder for feature components) and enforce business grouping.

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **Structure by Business Module**: The top-level folders in `src/app` MUST represent Business Domains (e.g., `(billing)`, `(user-management)`), not technical layers.
-   [ ] **Rule 2**: **Colocation is King**: All files related to a specific business module (UI, logic, state) MUST be colocated within that module's folder.
-   [ ] **Rule 3**: **App Router & Route Groups**: Use Route Groups `(module)` to define module boundaries without polluting the URL structure.
-   [ ] **Rule 4**: **Strict Isolation**: A module should NOT import private internal details of another module. Shared logic must go to `shared/`.
-   [ ] **Rule 5**: **Screaming Architecture**: A developer looking at the file tree should instantly understand what the business does, not just that it's a Next.js app.

### Formatting Guidelines
-   **File Naming**: Use kebab-case.
-   **Directory Structure**: `src/app/(business-module)/feature/...`
-   **Code Style**: Functional components, TypeScript.

## 5. Examples

### Example 1: New E-commerce Project
See [examples/new-project.md](examples/new-project.md).

### Example 2: Restructuring an Existing App
See [examples/restructuring.md](examples/restructuring.md).

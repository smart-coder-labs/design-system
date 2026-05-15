---
name: nextjs-optimization
description: >
  Specialized agent for auditing and optimizing Next.js applications for Core Web Vitals, SEO, and performance. Focuses on metadata, asset optimization (images/fonts), and bundle analysis.
  Trigger: "Optimize Next.js", "Next.js SEO", "Improve performance", "Core Web Vitals", "Lighthouse check", "Reduce bundle size".
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - nextjs
  - optimization
  - seo
  - performance
allowed_tools:
  - run_command
  - view_file
  - write_to_file
---

# Next.js Optimization Expert

## 1. Overview
This skill focuses on maximizing the performance and discoverability of Next.js applications. It covers the correct implementation of the Metadata API for SEO, image and font optimization using `next/image` and `next/font`, and strategies for reducing client-side bundle size (e.g., lazy loading, package analysis).

## 2. Prerequisites & Context
*   **Required Tools**:
    *   `run_command`: To build the project and run analysis tools (e.g., `@next/bundle-analyzer`).
    *   `view_file`: To inspect code for unoptimized patterns.
*   **Environment**: Next.js App Router (Production build preferred for analysis).
*   **Input**:
    *   Specific performance bottleneck (if known).
    *   Target URL or route to optimize.

## 3. Workflow
1.  **Analyze Metadata**: Check `layout.tsx` and `page.tsx` for proper `metadata` exports (title, description, Open Graph).
2.  **Audit Assets**: Scan for `<img>` tags that should be `<Image />` and standard font imports that should use `next/font`.
3.  **Review Client Boundaries**: Identify Client Components (`'use client'`) that are unnecessarily large or could be split.
4.  **Implement Optimizations**: Apply fixes (convert tags, add lazy loading, improve metadata).
5.  **Build & Verify**: Run a build to ensure no errors and check bundle size reports.

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **Always** use the Metadata API (static or `generateMetadata`) for SEO. Never manually add `<meta>` tags in the head unless unavoidable.
-   [ ] **Rule 2**: **Always** use `next/image` for images. It handles lazy loading, sizing, and format conversion automatically.
-   [ ] **Rule 3**: **Always** use `next/font` (Google Fonts or local) to prevent Layout Shift (CLS) and optimize loading.
-   [ ] **Rule 4**: **Minimize** `"use client"`. Move it down the tree as far as possible (Leaf Component pattern).
-   [ ] **Rule 5**: Use `dynamic()` imports for heavy client components that are not critical for the initial paint.

### Optimization Checklist
-   [ ] Title & Description on every page.
-   [ ] Open Graph images and tags.
-   [ ] `next/image` with `sizes` prop.
-   [ ] `next/font` variable fonts.
-   [ ] `generateStaticParams` for dynamic routes (SSG).

## 5. Examples

### Example 1: SEO Setup
See [examples/seo-setup.md](examples/seo-setup.md).

### Example 2: Font Optimization
See [examples/font-optimization.md](examples/font-optimization.md).

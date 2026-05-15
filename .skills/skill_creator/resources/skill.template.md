---
name: {skill-name-slug}
description: >
  {Concise, action-oriented description of what this skill achieves}.
  Trigger: {Specific keywords or context that should activate this skill}.
version: 1.0.0
author: github.com/cr8297408
license: Apache-2.0
tags:
  - {category}
  - {capability}
allowed_tools: an array with the tools that are allowed to be used by the skill
---

# {Skill Name}

## 1. Overview
{Provide a clear, high-level summary of the skill's purpose. Explain the problem it solves and the value it adds. Keep this strictly descriptive.}

## 2. Prerequisites & Context
*   **Required Tools**: {List specific tools this skill relies on, e.g., `run_command`, `read_file`}
*   **Environment**: {OS specific constraints, e.g., "Mac/Linux only" or "Requires Node.js installed"}
*   **Input**: {What information or files does the agent need before starting?}

## 3. Workflow
{Describe the standard operating procedure for this skill. Use a numbered list for sequential steps.}

1.  **{Step Name}**: {Description of action}
2.  **{Step Name}**: {Description of action}
3.  **{Step Name}**: {Description of action}

## 4. Detailed Instructions & Rules
{Specific behavioral guidelines. Use imperative mood (e.g., "Always verify...", "Never delete...").}

### Critical Rules
-   [ ] **Rule 1**: {E.g., Always use absolute paths}
-   [ ] **Rule 2**: {E.g., Validate JSON output before returning}
-   [ ] **Rule 3**: {E.g., Ask for user confirmation before destructive actions}

### Formatting Guidelines
-   Output format: {E.g., Markdown, JSON, Code Block}
-   Style: {E.g., Concise, Verbose, Technical}

## 5. Examples
{Provide few-shot examples to ground the model's understanding.}

### Example 1: {Common Use Case}
**User Input**:
> "{User prompt example}"

**Reasoning**:
{Brief explanation of the agent's thought process}

**Action/Output**:
```{language}
{Expected output or code snippet}
```

### Example 2: {Edge Case / Error Handling}
**User Input**:
> "{Ambiguous or problematic prompt}"

**Reasoning**:
{How the agent identifies and handles the issue}

**Action/Output**:
> "{Clarification question or error message}"

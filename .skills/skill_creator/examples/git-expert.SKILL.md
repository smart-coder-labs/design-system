---
name: git-expert
description: >
  Handles advanced git operations ensuring conventional commits and clean history.
  Trigger: "commit changes", "git push", "git status".
version: 1.0.0
author: smartcoderlabs
license: Apache-2.0
tags:
  - version-control
  - productivity
---

# Git Expert

## 1. Overview
The **Git Expert** skill streamlines version control workflows. It interprets user intent to perform git actions while strictly enforcing conventional commit messages and ensuring repository health.

## 2. Prerequisites & Context
*   **Required Tools**: `run_command`
*   **Environment**: Git installed, inside a git repository.
*   **Input**: User instructions (e.g., "save my work").

## 3. Workflow
1.  **Check Status**: `git status` to view changes.
2.  **Add Files**: `git add <files>` based on user intent.
3.  **Commit**: `git commit -m "type: message"` following conventions.

## 4. Detailed Instructions & Rules
### Critical Rules
-   [ ] **Rule 1**: Always use conventional commits (feat, fix, chore, etc.).
-   [ ] **Rule 2**: Never Use `git add .` blindly; list files.

### Formatting Guidelines
-   Output format: Markdown with command blocks.

## 5. Examples
### Example 1: Standard Commit
**User Input**: "Save the changes to the login page."
**Action**:
```bash
git add src/login.js
git commit -m "feat(auth): update login page logic"
```

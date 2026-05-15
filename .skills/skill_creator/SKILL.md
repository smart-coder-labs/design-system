---
name: skill_creator
description: >
  Specialized agentic skill designed to scaffold and generate new skills following the "Gold Standard" template.
  Trigger: "Create a new skill", "Generate skill", "Scaffold skill", "New skill template".
version: 1.0.0
author: smartcoderlabs
license: Apache-2.0
tags:
  - meta-skill
  - scaffolding
  - productivity
---

# Skill Creator

## 1. Overview
The **Skill Creator** is a meta-skill responsible for expanding the agent's capabilities by generating new, standardized skill files (`SKILL.md`). It ensures that all new skills adhere to a strict, professional structure (Frontmatter, Overview, Prerequisites, Workflow, Rules, Examples), enabling consistent behavior across the agentic system. It eliminates valid inconsistencies and enforces best practices in prompt engineering configurations.

## 2. Prerequisites & Context
*   **Required Tools**: 
    *   `write_to_file`: To save the generated skill file.
    *   `read_file`: To read the master template if available (optional, can use internal knowledge).
*   **Environment**: Any standard file system with write access.
*   **Input**: 
    *   Name of the skill to be created.
    *   Description of the skill's purpose.
    *   (Optional) Specific tools or rules the skill should include.

## 3. Workflow
1.  **Analyze Requirements**: Identify the proposed skill's name, purpose, and key tools from the user's request.
2.  **Load Template**: Read the standard template from `resources/skill.template.md`. This file contains the "Gold Standard" structure (Frontmatter -> Overview -> Prerequisites -> Workflow -> Rules -> Examples).
3.  **Draft Content**:
    *   **Frontmatter**: Populate `name`, `description`, `trigger`, and `tags`.
    *   **Overview**: Write a clear, high-level summary.
    *   **Prerequisites**: List likely tools needed for the described task.
    *   **Workflow**: outline a logical 3-5 step process for the skill.
    *   **Rules**: Define critical constraints (e.g., "Always verify...", "Use absolute paths").
    *   **Examples**: create at least one realistic "User Input" -> "Reasoning" -> "Action" interaction to guide the model.
4.  **Write File**: Save the content to the appropriate directory (e.g., `<skill_name>/SKILL.md`). Ensure a `resources/` folder is created if templates are needed.

## 4. Detailed Instructions & Rules

### Critical Rules
-   [ ] **Rule 1**: **Always** follow the strict template structure: Frontmatter, 1. Overview, 2. Prerequisites, 3. Workflow, 4. Rules, 5. Examples.
-   [ ] **Rule 2**: **Never** leave sections empty. If information is missing, infer reasonable defaults or use placeholders like `{Needs specific tool}`.
-   [ ] **Rule 3**: Ensure the `Trigger` in the frontmatter is specific and distinct to avoid overlapping with other skills.
-   [ ] **Rule 4**: The `Examples` section MUST include a realistic user prompt and the expected agent behavior/tool usage. This is crucial for few-shot learning.
-   [ ] **Rule 5**: **Always** enforce the following directory structure for new skills:
    ```text
    my-skill/
    ├─── SKILL.md       # Main instructions (required)
    ├─── scripts/       # Helper scripts (optional)
    ├─── examples/      # Reference implementations (optional)
    └─── resources/     # Templates and other assets (optional)
    ```

### Formatting Guidelines
-   **Markdown**: Use standard GFM (GitHub Flavored Markdown).
-   **Frontmatter**: YAML format between triple dashes `---`.
-   **Style**: Professional, technical, and imperative (e.g., "Run the command", not "You should run...").

## 5. Examples

### Example 1: Creating a "Git Commit" Skill
See [examples/git-expert.SKILL.md](examples/git-expert.SKILL.md) for a complete reference implementation of a generated skill.

### Example 2: Handling Ambiguous Requests
See [examples/ambiguous_request_handling.md](examples/ambiguous_request_handling.md) for an example of how to handle vague user inputs.
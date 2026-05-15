# 🧠 AGENT.md — UI Components Creation Guidelines
### _Design System: Apple-Minimal DS_

This document defines the rules that **all agents** must follow when creating or modifying components for the Design System.

---

## 🎯 General Objective
Create a **minimalist, professional, accessible, animated, and consistent** component system, inspired by Apple's design.

---

# 🎨 1. General Style Rules (Apple Minimal)

Review the DESIGN_DECISIONS.md document for information on design decisions.

---

# ✨ 2. Animations
All components must:

- Use **Framer Motion** when it adds value.
- Maintain smooth animations:
  - Fade
  - Subtle Scale
  - Minimal Slide
  - 150–250ms transitions

---

# ⚙️ 3. Accessibility
All components must include:

- Correct ARIA roles.
- Apple-style visible focus.
- Full keyboard navigation.
- Accessible labels.
- Friendly transitions.

---

# 🌗 4. Light / Dark Mode
### Rules
- Every component must work in **light** and **dark** mode.
- Use classes (`dark:`) or system tokens.
- Maintain AA contrast.

### Token examples:
- `text-primary`
- `bg-surface`
- `border-primary`

---

# 🔧 5. Mandatory Component Structure

Every component must:

- Include `"use client"`.
- Export only the necessary components.
- Accept a customizable `className`.
- Use the `cn()` utility function.
- Include all interactive states.
- Include variants when applicable (size, appearance, intent).

---

# 📦 6. Official Dependencies

All components must use:

- **Framer Motion**
- **Lucide React**
- **TailwindCSS**
- **TypeScript**
- `clsx` or `tailwind-merge` → `cn()`.

---

# 🧩 7. Core principles for new components

1. Minimalist first
2. Apple style
3. Strict accessibility
4. Smooth animations
5. Always use tokens
6. Nothing hardcoded
7. Cleanliness and consistency
8. Composable reusability
9. Standard API
10. Pro-level polished aesthetics

---

# 🚀 8. Final Checklist per component

- [ ] Does it work in light/dark mode?
- [ ] Does it follow the Apple minimal style?
- [ ] Does it have smooth animations with Framer Motion?
- [ ] Is it accessible (ARIA, keyboard, roles)?
- [ ] Does it have configurable variants?
- [ ] Does it accept `className`?
- [ ] Is the API consistent with the other components?
- [ ] Is the code clean and typed?
- [ ] Were the different stories created?
- [ ] Were real use cases added to the stories?

Example of use cases in stories:

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const FileInspector: Story = {
    name: '📁 Use Case: File Inspector (macOS)',
    args: {
        sections: [
            {
                id: 'general',
                title: 'General',
                items: [
                    { label: 'Kind', value: 'JPEG Image', icon: <File className="w-3.5 h-3.5" /> },
                    { label: 'Size', value: '2.4 MB (2,456,789 bytes)', icon: <HardDrive className="w-3.5 h-3.5" /> },
                    { label: 'Where', value: '/Users/ana/Pictures/Vacation', icon: <File className="w-3.5 h-3.5" /> },
                    { label: 'Created', value: 'November 15, 2025 at 10:30 AM', icon: <Calendar className="w-3.5 h-3.5" /> },
                    { label: 'Modified', value: 'November 23, 2025 at 2:45 PM', icon: <Calendar className="w-3.5 h-3.5" /> },
                    { label: 'Last opened', value: 'Today at 11:20 AM', icon: <Calendar className="w-3.5 h-3.5" /> },
                ],
                defaultExpanded: true,
            },
            {
                id: 'more',
                title: 'More Info',
                items: [
                    { label: 'Dimensions', value: '4032 × 3024' },
                    { label: 'Color space', value: 'Display P3' },
                    { label: 'Color profile', value: 'Display P3' },
                    { label: 'Alpha channel', value: 'No' },
                ],
                defaultExpanded: false,
            },
            {
                id: 'permissions',
                title: 'Sharing & Permissions',
                items: [
                    { label: 'Owner', value: 'Ana Garcia', icon: <User className="w-3.5 h-3.5" /> },
                    { label: 'Access', value: 'Read & Write' },
                    { label: 'Group', value: 'staff' },
                    { label: 'Others', value: 'Read only' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const SystemInformation: Story = {
    name: '💻 Use Case: System Information',
    args: {
        sections: [
            {
                id: 'hardware',
                title: 'Hardware Overview',
                items: [
                    { label: 'Model Name', value: 'MacBook Pro', icon: <Monitor className="w-3.5 h-3.5" /> },
                    { label: 'Model Identifier', value: 'Mac15,6' },
                    { label: 'Chip', value: 'Apple M3 Max', icon: <Cpu className="w-3.5 h-3.5" /> },
                    { label: 'Total Number of Cores', value: '16 (12 performance and 4 efficiency)' },
                    { label: 'Memory', value: '64 GB', icon: <Server className="w-3.5 h-3.5" /> },
                    { label: 'Serial Number', value: 'C02YX1ABMD6M', icon: <Hash className="w-3.5 h-3.5" /> },
                ],
                defaultExpanded: true,
            },
            {
                id: 'display',
                title: 'Display',
                items: [
                    { label: 'Type', value: 'Liquid Retina XDR' },
                    { label: 'Resolution', value: '3456 × 2234 (254 PPI)' },
                    { label: 'Native Resolution', value: '3024 × 1964' },
                    { label: 'Color', value: 'P3, 1,000,000,000 colors' },
                ],
                defaultExpanded: true,
            },
            {
                id: 'storage',
                title: 'Storage',
                items: [
                    { label: 'Capacity', value: '1 TB', icon: <HardDrive className="w-3.5 h-3.5" /> },
                    { label: 'Available', value: '412.8 GB' },
                    { label: 'Used', value: '587.2 GB' },
                    { label: 'File System', value: 'APFS' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-lg">
                <Story />
            </div>
        ),
    ],
};

export const AppSettings: Story = {
    name: '⚙️ Use Case: App Settings',
    args: {
        sections: [
            {
                id: 'appearance',
                title: 'Appearance',
                items: [
                    { label: 'Theme', value: 'Auto', editable: true },
                    { label: 'Color Scheme', value: 'Blue' },
                    { label: 'Font Size', value: '14px', editable: true },
                    { label: 'Line Height', value: '1.6', editable: true },
                    { label: 'Sidebar Width', value: '280px', editable: true },
                ],
                defaultExpanded: true,
            },
            {
                id: 'editor',
                title: 'Editor',
                items: [
                    { label: 'Tab Size', value: '2', editable: true },
                    { label: 'Word Wrap', value: 'On' },
                    { label: 'Auto Save', value: 'After Delay' },
                    { label: 'Format On Save', value: 'Yes' },
                    { label: 'Trim Trailing Whitespace', value: 'Yes' },
                ],
                defaultExpanded: true,
            },
            {
                id: 'terminal',
                title: 'Terminal',
                items: [
                    { label: 'Shell', value: 'zsh' },
                    { label: 'Font Family', value: 'Menlo', editable: true },
                    { label: 'Font Size', value: '12px', editable: true },
                    { label: 'Cursor Style', value: 'Block' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const ProjectMetadata: Story = {
    name: '📦 Use Case: Project Metadata',
    args: {
        sections: [
            {
                id: 'project',
                title: 'Project Info',
                items: [
                    { label: 'Name', value: 'Design System' },
                    { label: 'Version', value: '3.2.1' },
                    { label: 'Author', value: 'Smart Coder Labs', icon: <User className="w-3.5 h-3.5" /> },
                    { label: 'License', value: 'MIT' },
                    { label: 'Repository', value: 'github.com/smart-coder-labs/ds' },
                ],
                defaultExpanded: true,
            },
            {
                id: 'build',
                title: 'Build Info',
                items: [
                    { label: 'Build Number', value: '1234', icon: <Hash className="w-3.5 h-3.5" /> },
                    { label: 'Build Date', value: 'Nov 23, 2025', icon: <Calendar className="w-3.5 h-3.5" /> },
                    { label: 'Environment', value: 'Production' },
                    { label: 'Node Version', value: '20.10.0' },
                ],
                defaultExpanded: false,
            },
        ],
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const CompactVersion: Story = {
    name: '📏 Compact Version',
    args: {
        sections: sampleSystemInfo,
        variant: 'bordered',
        size: 'sm',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-sm">
                <Story />
            </div>
        ),
    ],
};

/* ========================================
   STORIES - PLAYGROUND
   ======================================== */

export const Playground: Story = {
    name: '🎨 Playground',
    args: {
        sections: sampleFileInfo,
        variant: 'bordered',
        size: 'md',
        collapsible: true,
        dividers: true,
    },
    decorators: [
        (Story) => (
            <div className="w-full max-w-md">
                <Story />
            </div>
        ),
    ],
};


---

# 🤖 9. Agent Workflow and Context

- **Skills and Agents:** Before starting any task, you must review and use the context and tools defined in the project's `.skills` and `.agents` folders.
- **Spec-Driven Development (SDD):** Work must follow the SDD methodology. For SDD task management, **you must create issues on GitHub**.
- **Strict Test-Driven Development (TDD):** It is mandatory to apply strict TDD. The corresponding tests must be defined and failing before writing any implementation code.

---

## 🏁 End of AGENT.md

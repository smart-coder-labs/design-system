# 🧠 AGENT.md — Lineamientos para creación de componentes UI  
### _Design System: Apple-Minimal Radix DS_

Este documento define las reglas que **todos los agentes** deben seguir al crear o modificar componentes para el Design System.

---

## 🎯 Objetivo General
Crear un sistema de componentes **minimalista, profesional, accesible, animado y consistente**, inspirado en el diseño de Apple, extendiendo **Radix UI** cuando sea posible y construyendo componentes propios cuando Radix no los provea.

---

# ✅ 1. Regla de Oro
Antes de crear cualquier componente:

### ✔️ Paso 1: Verificar si Radix UI ya ofrece ese componente.  
👉 https://www.radix-ui.com/primitives/docs/components

**Si Radix posee el componente:**  
- Usar Radix UI como base.  
- Extenderlo y estilizarlo para ajustarlo al estilo Apple minimal.

**Si Radix NO posee el componente:**  
- Crear un componente desde cero siguiendo las reglas del Design System.

---

# 🎨 2. Reglas Generales de Estilo (Apple Minimal)

Revisar el documento DESIGN_DECISIONS.md para obtener información sobre las decisiones de diseño.

---

# ✨ 3. Animaciones
Todos los componentes deben:

- Usar **Framer Motion** cuando aporte valor.
- Mantener animaciones suaves:
  - Fade
  - Scale sutil
  - Slide minimal
  - Transiciones 150–250ms

---

# ⚙️ 4. Accesibilidad
Todos los componentes deben incluir:

- Roles ARIA correctos.
- Foco visible estilo Apple.
- Navegación por teclado completa.
- Labels accesibles.
- Transiciones amigables.

---

# 🌗 5. Modo Light / Dark
### Reglas
- Todo componente debe funcionar en **modo claro** y **oscuro**.
- Usar clases (`dark:`) o tokens del sistema.
- Mantener contraste AA.

### Ejemplos de tokens:
- `text-primary`
- `bg-surface`
- `border-primary`

---

# 🔧 6. Estructura Obligatoria del Componente

Cada componente debe:

- Incluir `"use client"`.
- Usar Radix si existe la versión del componente.
- Exportar solo los componentes necesarios.
- Aceptar `className` personalizable.
- Usar la función `cn()`.
- Incluir todos los estados interactivos.
- Incluir variantes cuando aplique (size, appearance, intent).

---

# 📦 7. Dependencias Oficiales

Todos los componentes deben usar:

- **Radix UI**
- **Framer Motion**
- **Lucide React**
- **TailwindCSS**
- **TypeScript**
- `clsx` o `tailwind-merge` → `cn()`.

---

# 🧱 8. Componentes que SIEMPRE deben basarse en Radix

Los agentes deben revisar Radix para cada componente:

Si Radix lo tiene → **usar Radix como núcleo**.

---

# 🛠️ 9. Componentes que deben crear desde cero

Si Radix no lo tiene, crear

# 🧩 10. Principios base para nuevos componentes

1. Minimalista primero  
2. Estilo Apple  
3. Accesibilidad estricta  
4. Animaciones suaves  
5. Tokens siempre  
6. Nada hardcodeado  
7. Limpieza y consistencia  
8. Reutilización composable  
9. API estándar  
10. Estética pulida pro-level  

---

# 🚀 11. Checklist final por componente

- [ ] ¿Existe en Radix?  
- [ ] Si existe, ¿lo extendí correctamente?  
- [ ] ¿Funciona en light/dark mode?  
- [ ] ¿Sigue el estilo Apple minimal?  
- [ ] ¿Tiene animaciones suaves con Framer Motion?  
- [ ] ¿Es accesible (ARIA, keyboard, roles)?  
- [ ] ¿Tiene variantes configurables?  
- [ ] ¿Acepta `className`?  
- [ ] ¿El API es consistente con los demás componentes?  
- [ ] ¿El código es limpio y tipado?  
- [ ] ¿Se crearon los diferentes stories?  
- [ ] ¿Se añadieron casos de uso reales a los stories?  

Ejemplo de casos de uso en stories:

/* ========================================
   STORIES - USE CASES
   ======================================== */

export const FileInspector: Story = {
    name: '📁 Caso de Uso: Inspector de Archivo (macOS)',
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
                    { label: 'Owner', value: 'Ana García', icon: <User className="w-3.5 h-3.5" /> },
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
    name: '💻 Caso de Uso: Información del Sistema',
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
    name: '⚙️ Caso de Uso: Configuración de App',
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
    name: '📦 Caso de Uso: Metadatos de Proyecto',
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
    name: '📏 Versión Compacta',
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

## 🏁 Fin del Agent.md


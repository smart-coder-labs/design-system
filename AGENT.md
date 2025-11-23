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

---

## 🏁 Fin del Agent.md


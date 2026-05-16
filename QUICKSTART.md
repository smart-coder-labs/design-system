# 🚀 Quick Start — Apple Design System

Modelo "Components as Code" inspirado en shadcn/ui: vos sos dueño del código.

---

## ⚡ Instalación en 2 pasos

### 1. Inicializar

```bash
npx @smart-coder-labs/apple-design-system init
```

La CLI **detecta automáticamente tu framework** (Next.js, Vite, Astro, Remix) y configura el proyecto:

```
🍏 Apple Design System — Initialization

Detected framework: Next.js (App Router — RSC enabled)
Is this correct? › Yes

Project root directory? › ./src
Where to install components? › ./src/components/ui
Global CSS file path? › ./src/index.css
Install required dependencies now? › Yes

✓ Created design-system.json
✓ Created src/lib/utils.ts
✓ Created styles/apple-ds.css
✓ Updated src/index.css with design system styles.
✓ Dependencies installed.
```

Esto crea `design-system.json` con tu configuración:

```json
{
  "framework": "next",
  "rsc": true,
  "componentsDir": "./src/components/ui",
  "globalCss": "./src/index.css",
  "components": {}
}
```

> Si tu framework no se detecta correctamente, el CLI te muestra un selector para elegirlo manualmente.

### 2. Agregar componentes

```bash
npx @smart-coder-labs/apple-design-system add Button Card Modal
```

Los archivos se copian a `componentsDir`. Si un componente depende de otro, se instala automáticamente.

---

## 🌐 Comportamiento por framework

| Framework | `rsc` | `'use client'` en componentes |
|---|---|---|
| Next.js App Router | `true` | Se conserva |
| Next.js Pages Router | `false` | Se elimina |
| Vite | `false` | Se elimina |
| Astro | `false` | Se elimina* |
| Remix / React Router | `false` | Se elimina |

> \* En Astro, los componentes React requieren la integración `@astrojs/react` y directivas `client:*` al usarlos en archivos `.astro`.

---

## 📦 Actualizar componentes

```bash
npx @smart-coder-labs/apple-design-system update
```

Escanea los componentes instalados, te deja elegir cuáles actualizar y descarga la versión más reciente del registry.

---

## 🌓 Dark Mode

El sistema usa la clase `dark` en el elemento raíz:

```tsx
// Activar dark mode
document.documentElement.classList.add('dark')

// Desactivar
document.documentElement.classList.remove('dark')
```

---

## ⚙️ Tailwind

Asegurate de que tu `tailwind.config.js` apunte a los componentes instalados:

```js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/ui/**/*.{js,ts,jsx,tsx}', // ajustá según tu componentsDir
  ],
}
```

---

## ⚠️ Troubleshooting

**"Module not found" con `@/...`**  
Configurá el alias `@` en `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**Estilos no se aplican**  
Verificá que el `content` de Tailwind cubra la carpeta donde se instalaron los componentes.

**Framework mal detectado**  
El init te pregunta si la detección es correcta. Seleccioná el correcto del menú. Podés también editar `design-system.json` manualmente y cambiar `framework` y `rsc`.

---

**Happy coding! 🚀**

# 🚀 Quick Start Guide - Apple Design System

El Design System ahora funciona bajo un modelo de "Components as Code" (similar a shadcn/ui), donde tú eres dueño del código de los componentes.

## ⚡ Instalación

### 1. Inicializar el proyecto

Ejecuta el comando `init` para configurar tu proyecto. Esto creará el archivo de configuración `design-system.json` y preparará utilidades base.

```bash
npx @smart-coder-labs/apple-design-system init
```

El asistente te preguntará:
- Dónde guardar los componentes (ej. `./components/ui`).
- Dónde está tu CSS global.
- Si deseas instalar las dependencias base (`tailwindcss`, `framer-motion`, etc.).

### 2. Configurar Tailwind CSS

Asegúrate de que tu `tailwind.config.js` (o `.ts`) tenga configuradas las rutas de contenido para los nuevos componentes.

```javascript
// tailwind.config.js
import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir la carpeta de componentes
  ],
  // ... resto de tu configuración
};
```

### 3. Añadir componentes

Usa el comando `add` para descargar componentes individuales a tu proyecto.

```bash
npx @smart-coder-labs/apple-design-system add Button Card Input
```

Esto:
1. Descargará el código fuente a `./components/ui/button.tsx`, etc.
2. Instalará automáticamente las dependencias necesarias para esos componentes.

---

## 💻 Uso de Componentes

Ahora importas los componentes directamente desde tu carpeta local, no desde el paquete npm.

```tsx
// Ejemplo: src/app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background-primary">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="nombre@ejemplo.com" type="email" />
          <Input placeholder="Contraseña" type="password" />
          <Button className="w-full">Entrar</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## 🌓 Activar Dark Mode

El sistema utiliza la clase `dark` en el elemento HTML.

### Toggle manual (Ejemplo)

```tsx
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [theme, setTheme] = React.useState("light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

---

## 📦 Componentes Disponibles

Puedes ver la lista completa de componentes disponibles en el repositorio o autocompletando con el comando `add`.

```bash
npx @smart-coder-labs/apple-design-system add --help
```

---

## ⚠️ Troubleshooting

### Error: "Module not found"
Si no puedes importar `@/components/ui/...`, asegúrate de tener configurado el alias `@` en tu `tsconfig.json`.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Estilos no se aplican
Verifica que las rutas en `tailwind.config.js` (`content`) apunten correctamente a donde se descargaron los componentes (ej. `./components/ui/**/*.{ts,tsx}`).

### Error de autenticación
Si el repositorio es privado, asegúrate de tener acceso. Nota: La CLI actual asume acceso público o autenticado vía entorno para `git` / `fetch`.

---

## 🎉 ¡Listo!

Tú tienes el control total del código. Puedes abrir `./components/ui/button.tsx` y modificarlo según tus necesidades.

**Happy coding!** 🚀

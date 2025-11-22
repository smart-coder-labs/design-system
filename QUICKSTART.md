# 🚀 Quick Start Guide - Apple Design System

## ⚡ Instalación Rápida

### 1. Navegar al directorio
```bash
cd /Volumes/Realtek/work-environment/personal/smartcoder/apple-design-system
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Dependencias que se instalarán:

#### Core
- `react` ^18.0.0
- `react-dom` ^18.0.0
- `typescript` ^5.3.3

#### Animaciones
- `framer-motion` ^10.16.16

#### Componentes Headless (Radix UI)
- `@radix-ui/react-dialog` ^1.0.5
- `@radix-ui/react-dropdown-menu` ^2.0.6
- `@radix-ui/react-switch` ^1.0.3
- `@radix-ui/react-tabs` ^1.0.4
- `@radix-ui/react-tooltip` ^1.0.7

#### Estilos
- `tailwindcss` ^3.4.0
- `autoprefixer` ^10.4.16
- `postcss` ^8.4.32

---

## 📝 Uso Básico

### Opción 1: Usar en un proyecto Next.js

1. **Copiar el directorio completo** a tu proyecto:
```bash
cp -r apple-design-system /path/to/your/nextjs-project/src/
```

2. **Importar los estilos globales** en `app/layout.tsx` o `pages/_app.tsx`:
```tsx
import '@/apple-design-system/globals.css';
```

3. **Usar los componentes**:
```tsx
import { Button, Card, Input } from '@/apple-design-system';

export default function Page() {
  return (
    <Card>
      <Input label="Email" placeholder="your@email.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Opción 2: Usar en un proyecto Vite

1. **Copiar el directorio** a tu proyecto:
```bash
cp -r apple-design-system /path/to/your/vite-project/src/
```

2. **Importar los estilos** en `main.tsx`:
```tsx
import './apple-design-system/globals.css';
```

3. **Usar los componentes**:
```tsx
import { Button, Card } from './apple-design-system';

function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```

### Opción 3: Ver la Demo

1. **Crear un archivo de prueba** `test.tsx`:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoPage from './DemoPage';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DemoPage />
  </React.StrictMode>
);
```

2. **Ejecutar con Vite**:
```bash
npx vite
```

---

## 🎨 Configurar Tailwind

Si tu proyecto ya tiene Tailwind, **extiende** la configuración:

```typescript
// tailwind.config.ts
import appleConfig from './apple-design-system/tailwind.config';

export default {
  ...appleConfig,
  content: [
    ...appleConfig.content,
    './src/**/*.{js,ts,jsx,tsx}', // Tu contenido
  ],
  theme: {
    extend: {
      ...appleConfig.theme.extend,
      // Tus extensiones personalizadas
    },
  },
};
```

---

## 🌓 Activar Dark Mode

### Opción 1: Toggle manual

```tsx
import { Switch } from './apple-design-system';
import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Switch
      checked={darkMode}
      onCheckedChange={setDarkMode}
      label="Dark Mode"
    />
  );
}
```

### Opción 2: Detectar preferencia del sistema

```tsx
useEffect(() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
}, []);
```

---

## 📦 Componentes Disponibles

```tsx
import {
  // Botones
  Button,
  
  // Tarjetas
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  
  // Formularios
  Input,
  Textarea,
  Switch,
  
  // Overlays
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ModalFooter,
  ModalClose,
  ModalCloseButton,
  
  // Menús
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  
  // Tooltips
  Tooltip,
  TooltipProvider,
  
  // Navegación
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  NavBar,
  NavBarBrand,
  NavBarContent,
  NavBarItem,
  NavBarSeparator,
  
  // Indicadores
  Badge,
  NotificationBadge,
  
  // Tokens
  tokens,
} from './apple-design-system';
```

---

## 🎯 Ejemplo Completo

```tsx
import React, { useState } from 'react';
import {
  NavBar,
  NavBarBrand,
  NavBarContent,
  NavBarItem,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Button,
  Switch,
  TooltipProvider,
} from './apple-design-system';
import './apple-design-system/globals.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background-primary">
        <NavBar variant="glass">
          <NavBarBrand>My App</NavBarBrand>
          <NavBarContent align="center">
            <NavBarItem active>Home</NavBarItem>
            <NavBarItem>About</NavBarItem>
          </NavBarContent>
          <NavBarContent align="right">
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              size="sm"
            />
          </NavBarContent>
        </NavBar>

        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
              <CardDescription>
                This is an example using the Apple Design System
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary">Sign In</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
```

---

## 🔧 Personalización

### Modificar colores

```typescript
// En tu proyecto
import { tokens } from './apple-design-system';

const customTokens = {
  ...tokens,
  colors: {
    ...tokens.colors,
    light: {
      ...tokens.colors.light,
      accent: {
        ...tokens.colors.light.accent,
        blue: '#0066CC', // Tu color personalizado
      },
    },
  },
};

export { customTokens as tokens };
```

### Extender componentes

```tsx
import { Button as BaseButton } from './apple-design-system';

export function CustomButton(props) {
  return (
    <BaseButton
      {...props}
      className={`custom-class ${props.className || ''}`}
    />
  );
}
```

---

## 📚 Recursos

- **README.md** - Documentación completa
- **EXAMPLES.md** - Ejemplos de código
- **DESIGN_DECISIONS.md** - Decisiones de diseño
- **DemoPage.tsx** - Demo funcional

---

## ⚠️ Troubleshooting

### Error: "Cannot find module"
Asegúrate de que las rutas de importación sean correctas:
```tsx
// ✅ Correcto
import { Button } from './apple-design-system';

// ❌ Incorrecto
import { Button } from 'apple-design-system';
```

### Estilos no se aplican
1. Verifica que importaste `globals.css`
2. Verifica que Tailwind está configurado
3. Verifica que PostCSS está configurado

### Dark mode no funciona
Asegúrate de agregar la clase `dark` al elemento `<html>`:
```tsx
document.documentElement.classList.add('dark');
```

---

## 🎉 ¡Listo!

Tu Apple Design System está listo para usar. Consulta los archivos de documentación para más detalles.

**Happy coding!** 🚀

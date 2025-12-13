# 🚀 Quick Start Guide - Apple Design System

## ⚡ Instalación

### Opción 1: Instalar desde npm (Recomendado)

#### 1. Configurar autenticación con GitHub Package Registry

Crea o edita el archivo `.npmrc` en la raíz de tu proyecto:

```bash
@smart-coder-labs:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TU_GITHUB_TOKEN
```

> **Nota:** Reemplaza `TU_GITHUB_TOKEN` con un Personal Access Token de GitHub que tenga permisos de `read:packages`.
> [Cómo crear un token →](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

#### 2. Instalar el paquete

```bash
npm install @smart-coder-labs/design-system
```

#### 3. Configurar Tailwind CSS

Agrega el contenido del design system a tu configuración de Tailwind:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
  ],
  // ... resto de tu configuración
}
```

#### 4. Importar los estilos globales

En tu archivo principal (`app/layout.tsx`, `pages/_app.tsx`, o `main.tsx`):

```tsx
import '@smart-coder-labs/design-system/globals.css';
```

#### 5. Usar los componentes

```tsx
import { Button, Card, Input } from '@smart-coder-labs/design-system';

export default function Page() {
  return (
    <Card>
      <Input label="Email" placeholder="your@email.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

---

### Opción 2: Desarrollo Local

#### 1. Navegar al directorio
```bash
cd /Volumes/Realtek/work-environment/personal/smartcoder/design-system
```

#### 2. Instalar dependencias
```bash
npm install
```

#### 3. Ver la demo

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

#### 4. Ejecutar con Vite
```bash
npx vite
```

---

## 📝 Uso en Diferentes Frameworks

### Next.js

```tsx
// app/layout.tsx
import '@smart-coder-labs/design-system/globals.css';
import { Button, Card } from '@smart-coder-labs/design-system';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

### Vite + React

```tsx
// main.tsx
import '@smart-coder-labs/design-system/globals.css';
import { Button, Card } from '@smart-coder-labs/design-system';
```

### Remix

```tsx
// app/root.tsx
import styles from '@smart-coder-labs/design-system/globals.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];
```

---

## 🌓 Activar Dark Mode

### Toggle manual

```tsx
import { Switch } from '@smart-coder-labs/design-system';
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

### Detectar preferencia del sistema

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
} from '@smart-coder-labs/design-system';
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
} from '@smart-coder-labs/design-system';
import '@smart-coder-labs/design-system/globals.css';

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
import { tokens } from '@smart-coder-labs/design-system';

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
import { Button as BaseButton } from '@smart-coder-labs/design-system';

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
Asegúrate de que instalaste el paquete correctamente:
```bash
npm install @smart-coder-labs/design-system
```

Si estás usando GitHub Package Registry, verifica tu archivo `.npmrc`.

### Estilos no se aplican
1. Verifica que importaste los estilos globales:
   ```tsx
   import '@smart-coder-labs/design-system/globals.css';
   ```
2. Verifica que tu Tailwind config incluye el contenido del design system:
   ```javascript
   content: [
     './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
   ]
   ```
3. Asegúrate de que Tailwind y PostCSS están configurados en tu proyecto

### Error de autenticación con GitHub Packages
Si recibes un error 401 o 403:
1. Verifica que tu token de GitHub tiene permisos `read:packages`
2. Asegúrate de que el archivo `.npmrc` está configurado correctamente
3. El token debe estar activo y no haber expirado

### Dark mode no funciona
Asegúrate de agregar la clase `dark` al elemento `<html>`:
```tsx
document.documentElement.classList.add('dark');
```

---

## 🎉 ¡Listo!

Tu Apple Design System está listo para usar. Consulta los archivos de documentación para más detalles.

**Happy coding!** 🚀

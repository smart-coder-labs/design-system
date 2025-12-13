# Configuración para Next.js (App Router)

## 1. Instalar el paquete

```bash
npm install @smart-coder-labs/design-system
# o
yarn add @smart-coder-labs/design-system
# o
pnpm add @smart-coder-labs/design-system
```

## 2. Instalar dependencias peer

```bash
npm install react@^19.2.0 react-dom@^19.2.0 tailwindcss@^3.4.0
```

## 3. Configurar Tailwind CSS

Crea o actualiza `tailwind.config.js` en la raíz de tu proyecto:

```javascript
import preset from '@smart-coder-labs/design-system/tailwind.preset';

/** @type {import('tailwindcss').Config} */
export default {
  // Usa el preset del design system
  presets: [preset],

  // Define dónde buscar clases de Tailwind
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    // IMPORTANTE: Incluye los componentes del design system
    './node_modules/@smart-coder-labs/design-system/dist/**/*.js',
  ],
};
```

## 4. Importar estilos globales

En tu `app/layout.tsx`:

```tsx
import '@smart-coder-labs/design-system/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mi App',
  description: 'Descripción de mi app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

## 5. Usar componentes

```tsx
'use client';

import { Button, Card, CardHeader, CardTitle, CardContent } from '@smart-coder-labs/design-system';

export default function HomePage() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Bienvenido</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Esta es una app usando el Apple Design System</p>
          <Button variant="primary" className="mt-4">
            Comenzar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 6. Soporte para Dark Mode

Agrega un toggle de tema en tu layout o componente:

```tsx
'use client';

import { useEffect, useState } from 'react';
import { Switch } from '@smart-coder-labs/design-system';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verifica la preferencia del usuario
    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle('dark', checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Dark Mode</span>
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
    </div>
  );
}
```

## Notas adicionales

- **Tree-shaking**: Next.js automáticamente hace tree-shaking, solo importa lo que uses
- **SSR**: Todos los componentes con animaciones usan `'use client'`, son client components
- **Performance**: Los componentes están optimizados para producción
- **TypeScript**: El paquete incluye tipos TypeScript completos

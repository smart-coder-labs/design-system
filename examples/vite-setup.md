# Configuración para Vite + React

## 1. Crear proyecto Vite (si es nuevo)

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

## 2. Instalar el paquete

```bash
npm install @smart-coder-labs/design-system
```

## 3. Instalar dependencias

```bash
npm install react@^19.2.0 react-dom@^19.2.0 tailwindcss@^3.4.0 autoprefixer postcss
```

## 4. Inicializar Tailwind CSS

```bash
npx tailwindcss init -p
```

## 5. Configurar Tailwind CSS

Actualiza `tailwind.config.js`:

```javascript
import preset from '@smart-coder-labs/design-system/tailwind.preset';

/** @type {import('tailwindcss').Config} */
export default {
  // Usa el preset del design system
  presets: [preset],

  // Define dónde buscar clases de Tailwind
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

    // IMPORTANTE: Incluye los componentes del design system
    './node_modules/@smart-coder-labs/design-system/dist/**/*.js',
  ],
};
```

## 6. Configurar PostCSS

El archivo `postcss.config.js` ya debería estar creado. Verifica que contenga:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 7. Importar estilos globales

En tu `src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@smart-coder-labs/design-system/globals.css';
import './index.css'; // Si tienes estilos adicionales
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## 8. Limpiar CSS por defecto

En `src/index.css`, puedes eliminar todo el contenido ya que los estilos vienen del design system:

```css
/* Tu archivo puede estar vacío o tener solo estilos personalizados adicionales */
```

## 9. Usar componentes

Actualiza `src/App.tsx`:

```tsx
import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Switch,
} from '@smart-coder-labs/design-system';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle('dark', checked);
  };

  return (
    <div className="min-h-screen bg-background-primary p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-secondary">Dark Mode</span>
            <Switch checked={isDark} onCheckedChange={toggleTheme} />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bienvenido a Vite + Design System</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary mb-4">
              Esta es una aplicación usando el Apple Design System con Vite
            </p>
            <Button variant="primary">
              Comenzar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
```

## 10. Actualizar HTML base

En `index.html`, actualiza la clase del body:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + Design System</title>
  </head>
  <body class="antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 11. Ejecutar el proyecto

```bash
npm run dev
```

## Notas adicionales

- **HMR**: Vite tiene Hot Module Replacement ultra rápido
- **Build**: Usa `npm run build` para producción
- **Preview**: Usa `npm run preview` para previsualizar el build
- **TypeScript**: El proyecto ya está configurado con TypeScript
- **Performance**: Vite es extremadamente rápido en desarrollo

## Optimización de producción

Vite automáticamente optimiza el bundle para producción:

```bash
npm run build
```

Esto genera archivos optimizados en `dist/` listos para deployment.

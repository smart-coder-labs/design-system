/**
 * Ejemplo de configuración de Tailwind CSS
 * Para usar el Apple Design System en tu proyecto
 */

import preset from '@smart-coder-labs/design-system/tailwind.preset';

export default {
  // Importa el preset del design system
  presets: [preset],

  // Define dónde buscar clases de Tailwind
  content: [
    // Tus archivos
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Componentes del design system
    './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
  ],

  // (Opcional) Extiende o sobrescribe valores del preset
  theme: {
    extend: {
      // Ejemplo: Agrega colores personalizados adicionales
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },

      // Ejemplo: Agrega fuentes personalizadas
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
      },

      // Ejemplo: Breakpoints personalizados
      screens: {
        '3xl': '1920px',
      },
    },
  },

  // Plugins adicionales (opcional)
  plugins: [
    // Ejemplo: @tailwindcss/forms
    // require('@tailwindcss/forms'),
  ],
};

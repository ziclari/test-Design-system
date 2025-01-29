const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js}'], // Ajusta según tu estructura de proyecto
  theme: {
    extend: {
      // Colores
      colors: {
        primary: '#333333', // Color de texto principal
      },
      // Fuentes
      fontFamily: {
        manrope: ['Manrope', 'Roboto', 'sans-serif'],
      },
      // Tamaños de fuente
      fontSize: {
        'body': 'clamp(1.25rem, 2.5vw, 1.35rem)', // Tamaño de fuente base
        'h1': 'clamp(2.986rem, 5vw, 4.7rem)',     // h1
        'h2': 'clamp(2.488rem, 4.5vw, 3.052rem)', // h2
        'h3': 'clamp(2.074rem, 4vw, 2.441rem)',   // h3
        'h4': 'clamp(1.728rem, 3.5vw, 2.441rem)', // h4
        'h5': 'clamp(1.44rem, 3vw, 1.563rem)',    // h5
      },
      // Altura de línea
      lineHeight: {
        heading: '1',       // Altura de línea para títulos
        body: '1.5',        // Altura de línea para texto base
      },
    },
  },
  plugins: [
    // Plugin para agregar clases personalizadas
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-h1': {
          fontSize: 'clamp(2.986rem, 5vw, 4.7rem)',
          lineHeight: '1',
        },
        '.text-h2': {
          fontSize: 'clamp(2.488rem, 4.5vw, 3.052rem)',
          lineHeight: '1',
        },
        '.text-h3': {
          fontSize: 'clamp(2.074rem, 4vw, 2.441rem)',
          lineHeight: '1',
        },
        '.text-h4': {
          fontSize: 'clamp(1.728rem, 3.5vw, 2.441rem)',
          lineHeight: '1',
        },
        '.text-h5': {
          fontSize: 'clamp(1.44rem, 3vw, 1.563rem)',
          lineHeight: '1',
        },
        '.text-body': {
          fontSize: 'clamp(1.25rem, 2.5vw, 1.35rem)',
          lineHeight: '1.5',
        },
      });
    }),
  ],
};
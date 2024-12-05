// tailwind.config.js

import flyonui from 'flyonui'; // Verifique se o caminho de importação está correto

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [flyonui], // Passa o plugin sem chamá-lo como função
};

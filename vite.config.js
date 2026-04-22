import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // 1. Importera detta

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Lägg till detta i listan
  ],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    // Ambas líneas añadidas:
  // documentroot del proyecto
  base: '/PokemonReact/',
  // Carpeta de salida configurada como 'docs'
  // para poder alojar en GitHub Pages (main branch, docs folder)
  build: {
    outDir: 'docs',
  },
})

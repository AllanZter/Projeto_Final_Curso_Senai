import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),      // Plugin React padrão
    tailwindcss() // Plugin Tailwind oficial do Vite
  ],
})

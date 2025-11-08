import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // ✅ Vercel looks for "dist" by default
  },
  server: {
    port: 5173, // optional, ensures local dev runs correctly
    open: true, // opens browser automatically
  },
  resolve: {
    alias: {
      '@': '/src', // ✅ useful for clean imports
    },
  },
})


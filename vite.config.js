import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist' // ✅ Vercel looks for "dist" automatically
  },
  base: '/', // ✅ ensures correct relative paths for SPA routing
  server: {
    port: 5173,
    open: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // ✅ portable alias
    }
  }
})

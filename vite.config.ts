import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    host: true,
    allowedHosts: [
      'automaclinic-landing-inovapet.owelyh.easypanel.host',
      'inovapet.com.br',
      'www.inovapet.com.br'
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'forms': ['react-hook-form', 'zod'],
          'carousel': ['embla-carousel-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})

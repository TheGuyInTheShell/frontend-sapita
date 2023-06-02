import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    cors: {
      origin: '*', // Reemplaza esto con el origen permitido
      methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'], // Reemplaza esto con los métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'] // Reemplaza esto con las cabeceras permitidas
    }
  }
})

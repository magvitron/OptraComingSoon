import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'OptraComingSoon',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  assetsPublicPath: ''
})

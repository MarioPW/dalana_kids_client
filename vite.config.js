import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: "https://mariopw.github.io/dalanakids/",
  build: {
    assetsDir: 'assets',
  }
})
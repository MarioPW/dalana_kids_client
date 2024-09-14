import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: "https://mariopw.github.io/dalana_kids_client/",
  build: {
    assetsDir: 'assets',
  }
})
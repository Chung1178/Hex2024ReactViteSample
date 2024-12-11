import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //開發中或產品路徑分開設定
  base: process.env.NODE_ENV === 'production' ? '/Hex2024ReactViteSample/' : '/',
  plugins: [react()],
})

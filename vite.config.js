import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue({ template: { transformAssetUrls: { 'v-img': ['src'], img: ['src'] } } })],
  base: process.env.NODE_ENV === 'production' ? '/material-vue/' : '/',
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { port: 3000 }
})

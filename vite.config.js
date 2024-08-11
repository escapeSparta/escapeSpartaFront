import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'


export default defineConfig({
  plugins: [vue(), commonjs()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/users/signup': {
        target: 'http://localhost:8080', // 실제 API 서버 주소로 변경하세요.
        changeOrigin: true
      }
    }
  }
})

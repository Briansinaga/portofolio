import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/briansinaga.github.io/', // Replace with your actual GitHub repository name
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.esm-bundler.js'),
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import ".src/assets/SCSS/index.scss";',
      },
    },
  },

  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@generics': path.resolve(__dirname, 'src/components/generics'),
    },
  },
});

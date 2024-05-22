import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/var.less";`,
      },
    },
  },
});

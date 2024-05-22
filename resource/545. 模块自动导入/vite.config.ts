import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteAutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    ViteAutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./src/api'],
      dts: './src/auto-import.d.ts',
    }),
  ],
});

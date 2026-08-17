import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  base: './',
  publicDir: 'static',
  plugins: [react()],
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
});

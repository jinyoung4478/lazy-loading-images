import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lazy-loading-images',
  plugins: [react()],
  resolve: {
    alias: [{find: '@', replacement: '/src'}],
  },
  build: {
    chunkSizeWarningLimit: 100000000,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PDF'],
  resolve: {
    alias: [
      { find: 'components', replacement: '/src/components' },
      { find: 'theme', replacement: '/src/theme' },
      { find: 'assets', replacement: '/src/assets' },
      { find: 'pages', replacement: '/src/pages' },
      { find: 'helpers', replacement: '/src/helpers' },
    ],
  },
});

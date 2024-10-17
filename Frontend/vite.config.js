import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GhumteHaii/', // Set the base path for GitHub Pages deployment
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // Enable fallback for client-side routing
  },
});

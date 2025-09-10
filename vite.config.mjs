import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/elarin-landing-page-main/',
  plugins: [react()],
  server: {
    port: 5174
  }
});

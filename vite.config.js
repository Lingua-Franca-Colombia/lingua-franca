import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
                            server: {
                              host: true, // Expone el servidor en tu red local (Wi-Fi)
port: 5173,
                            },
                            build: {
                              target: ['es2020', 'chrome87', 'firefox78', 'safari14', 'edge88'],
                              cssCodeSplit: true,
                              minify: 'esbuild',
                            },
});

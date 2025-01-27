import { defineConfig } from 'vite';
//import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    build: { target: 'esnext' },
    optimizeDeps: {
        include: ['gosling.js']
    },
    server: {
      port: 8080,
      host: 'localhost-alt/',
      hmr: {
        //protocol: 'https',
        clientPort: 8080
      },
    }
    //plugins: [reactRefresh()]
});

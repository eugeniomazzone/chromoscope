import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/chromocope/',
    build: { target: 'esnext' },
    optimizeDeps: {
        include: ['gosling.js']
    },
    server: {
      port: 8080,
      //host: "chromoscope",
      // protocol: "ws",
      hmr: {
	host: "localhost",
        //protocol: 'ws',
        clientPort: 8080,
      },
    },
    plugins: [reactRefresh()]
});

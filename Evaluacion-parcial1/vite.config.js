// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,  // Esto permite que la aplicación escuche en todas las interfaces
    port: 5173,  // Puedes cambiar el puerto si es necesario
  },
});


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/socket.io": {
        target: "https://node-test-84xy.onrender.com",
        ws: true,  // Habilita el proxy para WebSocket
        changeOrigin: true,  // Asegúrate de que el origen del proxy sea correcto
        secure: false,  
      },
    },
  },
});

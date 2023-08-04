import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: 'http://localhost:3000',
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  },
});

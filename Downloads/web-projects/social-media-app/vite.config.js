import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Import the resolve function from the 'path' module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/') // Set up an alias for "@" to point to the "src" directory
    }
  }
});

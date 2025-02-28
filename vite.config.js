import { defineConfig } from 'vite';
import path from 'path'; // Import modul path untuk mengatur alias

export default defineConfig({
  publicDir: 'public', // Menentukan folder public (untuk file static)
  build: {
    outDir: 'dist', // Folder output untuk build hasil akhir
    emptyOutDir: true, // Menghapus folder dist sebelum build
    assetsDir: 'assets', // Folder untuk assets (CSS, gambar, dll.)
  },
  server: {
    open: true, // Membuka browser secara otomatis ketika server dijalankan
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias untuk folder src
    },
  },
});
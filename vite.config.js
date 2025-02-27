import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src', // Menentukan folder sumber utama
  build: {
    outDir: '../dist', // Folder output untuk build hasil akhir
    emptyOutDir: true, // Menghapus folder dist sebelum build
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
})

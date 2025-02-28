/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // File HTML utama di root proyek
    './src/**/*.{js,ts,jsx,tsx,vue}', // Semua file di folder src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Menggunakan font Montserrat
      },
    },
  },
  plugins: [],
};
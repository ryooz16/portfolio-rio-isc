import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/styles.css';

import Alpine from 'alpinejs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Tidak perlu "../node_modules/..."

window.Alpine = Alpine;
Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 500, // Durasi animasi
    once: true, // Animasi hanya terjadi sekali
    easing: 'ease-in-out', // Efek pergerakan
  });
});

import favicon from '/assets/img/logo-favicon.png';

const link = document.createElement('link');
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);


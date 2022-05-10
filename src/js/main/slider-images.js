import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index, className) {

      return "<span class=\"" + className + "\">" + "</span>";
    }
  },
});

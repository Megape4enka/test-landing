import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const swiper1 = new Swiper(".mySwiper-examination", {
    modules: [Navigation, Pagination],
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination-examination",
        clickable: true,
    },
});
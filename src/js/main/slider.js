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
  on: {
    init: function () {
      document.querySelector('#one').classList.add('step-block-active')
      document.querySelector('#one .text').classList.add('active')
    },
  },
});

document.querySelector('#one').addEventListener('click', () => {
  swiper.slideTo(0, function () {
    swiper.clickedIndex = 0
  })
});

document.querySelector('#two').addEventListener('click', () => {
  swiper.slideTo(1, function () {
    swiper.clickedIndex = 1
  })
});

document.querySelector('#three').addEventListener('click', () => {
  swiper.slideTo(2, function () {
    swiper.clickedIndex = 2
  })
});

swiper.on('slideChange', function () {
  const one = document.querySelector('#one')
  const two = document.querySelector('#two')
  const three = document.querySelector('#three')
  const oneText = document.querySelector('#one .text')
  const twoText = document.querySelector('#two .text')
  const threeText = document.querySelector('#three .text')

  if (this.activeIndex === 0) {
    one.classList.add('step-block-active')
    three.classList.remove('step-block-active')
    two.classList.remove('step-block-active')
    oneText.classList.add('active')
    twoText.classList.remove('active')
    threeText.classList.remove('active')
  }
  if (this.activeIndex === 1) {
    two.classList.add('step-block-active')
    one.classList.remove('step-block-active')
    three.classList.remove('step-block-active')
    oneText.classList.remove('active')
    twoText.classList.add('active')
    threeText.classList.remove('active')
  }
  if (this.activeIndex === 2) {
    three.classList.add('step-block-active')
    two.classList.remove('step-block-active')
    one.classList.remove('step-block-active')
    oneText.classList.remove('active')
    twoText.classList.remove('active')
    threeText.classList.add('active')
  }
})

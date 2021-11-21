// слайдер
$(document).ready(function () {
   $('.slider').slick({
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      infinite: false,
      initialSlide: 2,
   });
});

// плавный скрол вниз
const smothScroll = () => {

   const scrollDown = document.querySelector('.scroll-down');

   scrollDown.addEventListener('click', function (e) {
      e.preventDefault();
      const id = scrollDown.getAttribute('href');
      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });

};
smothScroll();


// запоминать данные при нажатии
const projectImage = () => {

   const item = document.querySelectorAll('.slider__item');

   item.forEach(elem => {
      elem.addEventListener('click', () => {
         const image = elem.querySelector('.slider__item-image');
         const title = elem.querySelector('.slider__info-title');

         localStorage.setItem('elementId', elem.id);
         localStorage.setItem('image', image.src);
         localStorage.setItem('title', title.innerHTML);
      });
   });

};
projectImage();
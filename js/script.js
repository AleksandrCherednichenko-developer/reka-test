// добавление стилей при скроле вниз
const navMenu = () => {

   const menu = document.querySelector('.header');
   const menuWrapper = document.querySelector('.header__wrapper');

   function trackScroll() {
      const windowWidth = window.innerWidth;
      const scrolled = window.pageYOffset;

      if (windowWidth >= 1081) {
         if (scrolled > 50) {
            menu.classList.add('header-fixed');
            menuWrapper.style.marginBottom = '10px';
         } else {
            menu.classList.remove('header-fixed');
            menuWrapper.style.marginBottom = '0px';
         }
      } else {
         if (scrolled > 0) {
            menu.classList.add('header-fixed');
         } else {
            menu.classList.remove('header-fixed');
         }
      }


   }
   window.addEventListener('scroll', trackScroll);

};
navMenu();

// отменить перезагрузку страници при нажатии на пустые ссылки
const clickOnTheLink = () => {

   const link = document.querySelectorAll('a[href^="#"]');

   link.forEach(element => {
      element.addEventListener('click', (event) => {
         event.preventDefault();
      });
   });

};
clickOnTheLink();

// нажатие на кнопку бургер-меню
const burgerMenu = () => {

   const burger = document.querySelector('.burger'),
      navMenu = document.querySelector('.nav'),
      headerWrapper = document.querySelector('.header__wrapper'),
      body = document.querySelector('body');


   burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navMenu.classList.toggle('active');
      headerWrapper.classList.toggle('active');
      body.classList.toggle('lock');
   });

};
burgerMenu();

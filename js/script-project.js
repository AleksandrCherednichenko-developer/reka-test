// загрузка названия проекта и картинки на новую страницу
const imageLoad = () => {
   const titleLink = document.querySelector('.title-link'),
      projectTitle = document.querySelector('.content__project-title'),
      projectText = document.querySelector('.content__project-text'),
      projectImage = document.querySelector('.content__project-image');

   async function getResponse() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let content = await response.json();
      let elementId = Number(this.localStorage.getItem('elementId'));

      projectTitle.innerHTML = content.find(x => x.id === elementId).title;
      projectText.innerHTML = content.find(x => x.id === elementId).body;
   }

   window.addEventListener("load", function load() {

      getResponse();
      titleLink.innerHTML = this.localStorage.getItem('title');
      projectImage.src = this.localStorage.getItem('image');

   }, false);
};
imageLoad();


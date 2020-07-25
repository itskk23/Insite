let menu = document.querySelector('.header-menu');
let categories = document.querySelector('.menu-category');

menu.addEventListener('click', click);

function click(){
    categories.classList.toggle('display-block');
    console.log(categories)
}
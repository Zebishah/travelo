let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let navbar = document.querySelector('.navbar');
let book = document.querySelector('#book');
let image = document.querySelector('.content');

searchBtn.addEventListener('click',()=> {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
  
});
book.addEventListener('click', () =>{
    loginForm.classList.add('active');
  
});


p/
let slides= document.querySelectorAll('.slide-container');
let index=0;
function next(){
    slides[index].classList.remove('active');
    index = (index+1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index-1+slides.length) % slides.length;
    slides[index].classList.add('active');
}
setInterval(next,3000);

let swiper= document.querySelectorAll('.swiper-wrapper');
let i=0;
function nexts(){
   swiper[i].classList.remove('active');
    i=(i+1) % swiper.length;
   swiper[i].classList.add('active');
}
function prevs(){
   swiper[i].classList.remove('active');
    i=(i-1+slides.length) %swiper.length;
   swiper[i].classList.add('active');
}
setInterval(nexts,5000);



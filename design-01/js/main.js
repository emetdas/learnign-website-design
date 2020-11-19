var navicon = document.querySelector('.nav-icon');
var navitem = document.querySelector('.nav-item');

navicon.addEventListener("click",function(){
    navicon.classList.toggle("open-icon");
    navitem.classList.toggle("open-nav-item");
});

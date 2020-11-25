var navToggle = document.querySelector(".nav-icon");
var navItem = document.querySelector(".nav-item");
navToggle.addEventListener("click",()=>{
    navToggle.classList.toggle("open-nav");
    navItem.classList.toggle("open-item");
});
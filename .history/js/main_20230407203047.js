//Header Scroll
let nav = document.querySelector("nav");
window.onscroll= function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled")
    }
}
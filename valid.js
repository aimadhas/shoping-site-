let menu = document.querySelector(".fa-bars")
let navbar = document.querySelector("#nav-bar")
let navbarlink = document.querySelectorAll("#nav-bar li")
console.log(navbarlink)
menu.onclick = function(){
    navbar.classList.toggle("show1")
    if(navbar.classList.contains("show1")){
        menu.classList.replace("fa-bars","fa-xmark")
    }
    else
    {
        menu.classList.replace("fa-xmark","fa-bars")
    }
}
navbarlink.forEach(el =>el.onclick = function(){
    navbar.classList.remove("show1")
    menu.classList.replace("fa-xmark","fa-bars")
})
// scroll-bar
let body = document.body
let lastcursor = 0
window.onscroll =function(){
    const curenscrol = window.pageYOffset
    if(curenscrol > lastcursor){
        body.classList.add("sclor-down")
    }
    if(lastcursor > curenscrol){
        body.classList.remove("sclor-down")
    }
    lastcursor = curenscrol
}
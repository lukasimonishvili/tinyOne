let burger = document.getElementById("burger");
let navList = document.getElementById("navList");
let logo = document.getElementById("logo");


burger.addEventListener("click", function(){
    burger.style.display = "none";
    navList.style.visibility = "visible"
    navList.style.left = "50%";
    logo.style.left = "0px";
});

navClose.addEventListener("click", function(){ 
    navList.style.display = "none";
    navList.style.visibility = "hidden";
    navList.style.left = "-200px";
    navList.style.display = "flex";
    burger.style.display = "flex";
    logo.style.left = "50%";
})
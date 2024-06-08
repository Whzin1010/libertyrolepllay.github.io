// navbar

const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});
 // seção 3
 var acc = document.getElementsByClassName("accordion");
 var i;

 for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function () {
         this.classList.toggle("active");
         var panel = this.nextElementSibling;
         if (panel.style.display === "block") {
             panel.style.display = "none";
         } else {
             panel.style.display = "block";
         }
     });
 }


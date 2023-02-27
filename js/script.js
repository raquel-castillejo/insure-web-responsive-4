const menuToggleElement = document.getElementById("toggle-menu");
const menuElement = document.getElementById("menu");

function toggleMenu(){
    menuElement.classList.toggle("hide");
}

menuToggleElement.addEventListener('click', toggleMenu);

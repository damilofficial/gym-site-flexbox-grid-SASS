const header = document.querySelector(".header");
const menu = document.querySelector(".headerMenu");
const overlay = document.querySelector(".headerOverlay");

menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    header.classList.toggle("open");
    overlay.classList.toggle("open");
});
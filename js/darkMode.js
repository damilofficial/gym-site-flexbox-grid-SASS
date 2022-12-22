let checkBox = document.querySelector("input[name='theme']");
let htmlElement = document.documentElement;

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        smoothTransition();
        htmlElement.setAttribute("data-theme", "dark");
    } else {
        smoothTransition();
        htmlElement.setAttribute("data-theme", "light");
    }
});

let smoothTransition = () => {
    htmlElement.classList.add("transition");

    window.setTimeout(() => {
        htmlElement.classList.remove("transition");
    }, 1000)
};
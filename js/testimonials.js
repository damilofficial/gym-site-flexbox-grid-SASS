
const slides = document.querySelector(".testimonialContentSlider").children;
const indicatorImgs = document.querySelector(".testimonialContentIndicator").children;


for (let i = 0; i < indicatorImgs.length; i++) {
    indicatorImgs[i].addEventListener("click", function() {

        for (let j = 0; j < indicatorImgs.length; j++) {
            indicatorImgs[j].classList.remove("active");
        }
        this.classList.add("active");

        // Getting the next slide
        const id = this.getAttribute("data-id");

        for (k = 0; k < slides.length; k++) {
            slides[k].classList.remove("active");
        }
        slides[id].classList.add("active");
    });
};
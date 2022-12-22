// First Page
const slidePage = document.querySelector(".registerContentForm-Page");
const firstNextButton = document.querySelector(".next1");

// Second Page
const firstPrevButton = document.querySelector(".prev1");
const secondNextButton = document.querySelector(".next2");

// Third Page
const secondPrevButton = document.querySelector(".prev2");
const thirdNextButton = document.querySelector(".next3");

// Fourth Page
const thirdPrevButton = document.querySelector(".prev3");
const submitBtn = document.querySelector(".submit");

// Progress Step
const progressStep = document.querySelectorAll(".registerProgressStep");

// Progress Number(The Span Element)
const progressNumber = document.querySelectorAll(".registerProgressStep span");

// Progress Tick Mark
const progressTick = document.querySelectorAll(".fa-check");

let max = 4;
let current = 1;

// Next Button Event Function
function tick() {
    progressStep[current - 1].classList.add("active");
    progressNumber[current - 1].classList.add("active");
    progressTick[current - 1].classList.add("active");

    current += 1;
};

// Previous Button Event Function
function untick() {
    progressStep[current - 2].classList.remove("active");
    progressNumber[current - 2].classList.remove("active");
    progressTick[current - 2].classList.remove("active");

    current -= 1;
}

// Next Buttons Events

// First Next Button Event Listener
firstNextButton.addEventListener("click", () => {
    slidePage.style.marginLeft = "-33%";
    tick();
});

// Second Next Button Event Listener
secondNextButton.addEventListener("click", () => {
    slidePage.style.marginLeft = "-100%";
    tick();
});

// Third Next Button Event Listener
thirdNextButton.addEventListener("click", () => {
    slidePage.style.marginLeft = "-200%";
    tick();
});

// Submit Button Event Listener
submitBtn.addEventListener("click", () => {
    setTimeout(() => {
        alert("Your Form Has Been Successfully Submited. Thank You!");
        location.reload();
    }, 1000);
    tick();
});

// Previous Button Event Listener
// First Previous Button Event Listener
firstPrevButton.addEventListener("click", () => {
    slidePage.style.marginLeft = "0";
    untick();
});

// Second Previous Button Event Listener
secondPrevButton.addEventListener("click", () => {
    slidePage.style.marginLeft = "-33%";
    untick();
});

// Third Previous Button Event Listener
thirdPrevButton.addEventListener("click", () => {
    slidePage.style.marginLeft = "-100%";
    untick();
});





const carusel = document.querySelector(".carusel");
const image = document.querySelector(".image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 0;

let images = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/5.jpeg"
]

image.setAttribute("src", images[0]);

next.addEventListener("click", function () {
    if (counter < images.length - 1) {
        counter++
        image.setAttribute("src", images[counter]);
    } else {
        image.setAttribute("src", images[0]);
        counter = 0;
    }
})

prev.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
        image.setAttribute("src", images[counter]);
    } else {
        counter = 4;
        image.setAttribute("src", images[counter]);
    }
})

// Second carusel

const carusel2 = document.querySelector(".wrap");
const next2 = document.querySelector(".b2");
const prev2 = document.querySelector(".b1");

let term = 0;
carusel2.style.transform = "translateX(" + term + "px)";
next2.addEventListener("click", function () {
    if (term !== -2400) {
        term -= 600;
        carusel2.style.transform = "translateX(" + term + "px)";
        carusel2.style.transition = "transform .4s"
    }
    else {
        term = 0;
        carusel2.style.transform = "translateX(" + term + "px)";
    }
})

prev2.addEventListener("click", function () {
    if (term !== 0) {
        term += 600;
        carusel2.style.transform = "translateX(" + term + "px)";
        carusel2.style.transition = "transform .4s"
    }
    else {
        term = -2400;
        carusel2.style.transform = "translateX(" + term + "px)";
        carusel2.style.transition = "transform .4s"
    }
})
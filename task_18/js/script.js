"use strict";


let slideIndex = 1;


const slides = document.querySelectorAll(".projects-slider-list__element");
const nextButton = document.querySelectorAll(".projects-slider-arrow-right");
const previousButton = document.querySelectorAll(".projects-slider-arrow-left");

// до исправления (DRY — Don’t repeat yourself)
// const rostovAdmiral = document.querySelector(".projects-list__item1");
// const sochi = document.querySelector(".projects-list__item2");
// const rostovPatriotic = document.querySelector(".projects-list__item3");

// после исправления (DRY — Don’t repeat yourself)
const slideLinks = document.querySelectorAll(".projects-list__item");

const city = document.querySelectorAll(".projects-info-detail__item1");
const area = document.querySelectorAll(".projects-info-detail__item2");

// до исправления (DRY — Don’t repeat yourself)
// const dot1 = document.querySelectorAll(".projects-slider-dot1");
// const dot2 = document.querySelectorAll(".projects-slider-dot2");
// const dot3 = document.querySelectorAll(".projects-slider-dot3");

// после исправления (DRY — Don’t repeat yourself)
const slideDots = document.querySelectorAll(".projects-slider-dots__dot");

// присвоение константам необходимых DOM элементов бургер-меню
// удалени (YAGNI — You ain’t gonna need it)
// const burger = document.querySelector(".burger-menu");
// const popup = document.querySelector(".popup");

// тело документа
const body = document.body;

nextButton.forEach((element) => {
    element.addEventListener("click", () => {
        nextSlide();
    });
});

previousButton.forEach((element) => {
    element.addEventListener("click", () => {
        previousSlide();
    });
});

for (let i = 0; i < slideLinks.length; i++) {
    slideLinks[i].addEventListener("click", () => {
        showSlide((slideIndex = i + 1));
    });
}

for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].addEventListener("click", () => {
        i >= 0 && i < 3
            ? showSlide((slideIndex = i + 1))
            : showSlide((slideIndex = i - 2));
    });
}

document.addEventListener("DOMContentLoaded", showSlide(slideIndex));


function nextSlide() {
    showSlide((slideIndex += 1));
}

function previousSlide() {
    showSlide((slideIndex -= 1));
}

function showSlide(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }
   
    slideLinks.forEach((element) => {
        element.className = "projects-list__item";
    });

    slideDots.forEach((element) => {
        element.className = "projects-slider-dots__dot";
    });
   
    slides.forEach((element) => {
        element.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";

 
    // до исправления (KISS — Keep it simple and straightforward)
    // if (slideIndex === 1) {
    //     city.forEach((element) => {
    //         element.textContent = "Rostov-on-Don LCD admiral";
    //     });

    //     area.forEach((element) => {
    //         element.textContent = "81 m2";
    //     });

    //     rostovAdmiral.className = "projects-list__item active";

    //     dot1.forEach((element) => {
    //         element.className = "projects-slider-dot1 active";
    //     });
    // } else if (slideIndex === 2) {
    //     city.forEach((element) => {
    //         element.textContent = "Sochi thieves";
    //     });

    //     area.forEach((element) => {
    //         element.textContent = "85 m2";
    //     });

    //     sochi.className = "projects-list__item2 active";

    //     dot2.forEach((element) => {
    //         element.className = "projects-slider-dot2 active";
    //     });
    // } else {
    //     city.forEach((element) => {
    //         element.textContent = "Rostov-on-Don patriotic";
    //     });

    //     area.forEach((element) => {
    //         element.textContent = "78 m2";
    //     });

    //     rostovPatriotic.className = "projects-list__item3 active";

    //     dot3.forEach((element) => {
    //         element.className = "projects-slider-dot3 active";
    //     });
    // }

    // после исправления (KISS — Keep it simple and straightforward)
    switch (slideIndex) {
        case 1:
            updateStatus(city, "textContent", "Rostov-on-Don LCD admiral");
            updateStatus(area, "textContent", "81 m2");
            slideLinks[0].className = "projects-list__item--active";
            changeMod(slideDots, "projects-slider-dots__dot--active", 0, 3);
            break;

        case 2:
            updateStatus(city, "textContent", "Sochi thieves");
            updateStatus(area, "textContent", "85 m2");
            slideLinks[1].className = "projects-list__item--active";
            changeMod(slideDots, "projects-slider-dots__dot--active", 1, 4);
            break;

        case 3:
            updateStatus(city, "textContent", "Rostov-on-Don patriotic");
            updateStatus(area, "textContent", "78 m2");
            slideLinks[2].className = "projects-list__item--active";
            changeMod(slideDots, "projects-slider-dots__dot--active", 2, 5);
            break;

        default:
            break;
    }
}

function updateStatus(array, target, info) {
    array.forEach((element) => {
        element[target] = info;
    });
}

function changeMod(array, mod, pos1, pos2) {
    array[pos1].className = mod;
    array[pos2].className = mod;
}
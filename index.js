const carousel = document.querySelector("#carousel");
const images = carousel.querySelectorAll("img");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
let index = 0;

prevButton.addEventListener("click", function() {
    index = (index + images.length - 1) % images.length;
    displayImage();
});

nextButton.addEventListener("click", function() {
    index = (index + 1) % images.length;
    displayImage();
});

function displayImage() {
    images.forEach(image => {
        image.classList.remove("active");
    });
    images[index].classList.add("active");
}

displayImage();
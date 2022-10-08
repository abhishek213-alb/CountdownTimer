// nav Hamburger js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

// Hamburger js
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
window.addEventListener('scroll', () => {
    if (navMenu.classList.toggle("active") == true) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        
    }
})
// js to ensure menu closes when links close
document.querySelectorAll("#nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Carousel js
let slideIndex = 0;
const showSlides = async () => {
let slides = document.getElementsByClassName("slide");
let url;
try {
    let response = await fetch(
    "https://source.unsplash.com/1600x900/?quote"
    );
    url = response.url;
} catch (error) {
    console.log(error);
}
slides[slideIndex].classList.toggle("active");
slideIndex++;
slideIndex %= slides.length;
slides[slideIndex].classList.toggle("active");
slides[slideIndex].src = url;
};
setInterval(showSlides, 5000);
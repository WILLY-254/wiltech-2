// Automatic Slideshow
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } // Loop back to the first slide
  slides[slideIndex - 1].style.display = "block";  // Show current slide
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides); // Initialize slideshow on load
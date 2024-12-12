let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;
const slideshowContainer = document.querySelector(".slideshow-container");

function showSlides() {
    slideIndex++;

    // Reset to the first slide if we reach the end
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Move the slideshow container to the next slide
    slideshowContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Call the function again after 3 seconds
    setTimeout(showSlides, 3000);
}

// Start the slideshow immediately
showSlides();

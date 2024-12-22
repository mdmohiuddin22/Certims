// Navbar Toggle
const navbarToggle = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

navbarToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    offset: 80,
});

// Testimonials Slider (using Swiper.js)
const swiper = new Swiper(".testimonial-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Portfolio Filter
const portfolioItems = document.querySelectorAll(".portfolio-item");
const filterButtons = document.querySelectorAll(".portfolio-filter button");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        portfolioItems.forEach((item) => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
        const response = await fetch("path/to/your/api", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        alert("Message sent successfully!");
    } catch (error) {
        alert("Failed to send message. Please try again later.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero-section");

    function handleScroll() {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > heroHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleScroll);
});

// Wait for the document to load before running scripts
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Navigation Toggle
    const menuToggle = document.createElement("button");
    menuToggle.innerHTML = "☰";
    menuToggle.classList.add("menu-toggle");

    const nav = document.querySelector("nav");
    const navLinks = document.querySelector(".nav-links");

    // Add the toggle button for small screens
    nav.insertBefore(menuToggle, nav.firstChild);

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form Validation
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Simple email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Your message has been sent successfully!");
            contactForm.reset();
        });
    }
});
// JavaScript for FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
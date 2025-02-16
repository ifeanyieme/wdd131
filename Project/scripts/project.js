document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const menuToggle = document.querySelector(".menu-toggle");


    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            // Toggle aria-expanded for accessibility
            const isActive = navLinks.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isActive);
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
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

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        item.querySelector(".faq-question").addEventListener("click", function () {
            // Close all other FAQ items
            faqItems.forEach((faq) => {
                if (faq !== item) faq.classList.remove("active");
            });

            // Toggle current FAQ item
            item.classList.toggle("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");

            // Close other open FAQs (optional)
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});



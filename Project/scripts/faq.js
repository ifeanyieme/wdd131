
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

 // Update footer year dynamically
 document.getElementById("currentYear").textContent = new Date().getFullYear();

 // Show last modified date
 document.getElementById("lastModified").textContent = "Last updated: " + document.lastModified;

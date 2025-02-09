const products = [
    { id: "product1", name: "Laptop" },
    { id: "product2", name: "Smartphone" },
    { id: "product3", name: "Tablet" },
    { id: "product4", name: "Headphones" },
    { id: "product5", name: "EarPods" },
    { id: "product6", name: "Smartwatch"},
    { id: "product6", name: "Meta Glasses"},
];

const productSelect = document.getElementById("product");
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

if (localStorage.getItem("reviewCount") === null) {
    localStorage.setItem("reviewCount", 0);
}

document.querySelector("form").addEventListener("submit", () => {
    let count = parseInt(localStorage.getItem("reviewCount")) + 1;
    localStorage.setItem("reviewCount", count);
});
    // Update Footer Date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
// Get current year for copyright
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get last modified date for the page
const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

// Footer update
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
document.addEventListener("DOMContentLoaded", function () {
  displayTemples(temples);
});

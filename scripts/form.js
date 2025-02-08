document.addEventListener("DOMContentLoaded", function () {
    // Populate Product Dropdown
    const productSelect = document.getElementById("product");
    const products = ["Laptop", "Phone", "Smartwatch", "Tablet"];
    
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product;
        option.textContent = product;
        productSelect.appendChild(option);
    });

    // Handle Form Submission
    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form data
        const formData = new FormData(this);
        const params = new URLSearchParams(formData).toString();
        
        // Redirect to review.html with form data
        window.location.href = `review.html?${params}`;
    });

    // Update Footer Date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});

// Footer update
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
document.addEventListener("DOMContentLoaded", function () {
  displayTemples(temples);
});

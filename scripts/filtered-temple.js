document.querySelector('footer').innerHTML = `
  <p>&copy; ${new Date().getFullYear()} 🌸Ifeanyi Eme, Abia State, Nigeria 🌸</p>
  <p>Last Modified: ${document.lastModified}</p>
`;
const hamburger = document.querySelector('.hamburger'); // Add this button in your HTML
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  }
  // Add more temples here...
];

const templeContainer = document.getElementById("temple-container");

function displayTemples(temples) {
  templeContainer.innerHTML = "";

  temples.forEach(temple => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");
    
    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeContainer.appendChild(templeCard);
  });
}

displayTemples(temples);

// Filtering functionality
document.getElementById("filter-old").addEventListener("click", () => {
  displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
});

document.getElementById("filter-new").addEventListener("click", () => {
  displayTemples(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
});

document.getElementById("filter-large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("filter-small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});

document.getElementById("filter-home").addEventListener("click", () => {
  displayTemples(temples);
});

// Footer update
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
document.addEventListener("DOMContentLoaded", function () {
  displayTemples(temples);
});

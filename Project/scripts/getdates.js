// Get current year for copyright
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Get last modified date for the page
const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
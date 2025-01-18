document.querySelector('footer').innerHTML = `
  <p>&copy; ${new Date().getFullYear()} 🌸Ifeanyi Eme, Abia State, Nigeria 🌸</p>
  <p>Last Modified: ${document.lastModified}</p>
`;
const hamburger = document.querySelector('.hamburger'); // Add this button in your HTML
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


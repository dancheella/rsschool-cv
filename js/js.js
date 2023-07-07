const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.footer-data');
yearElement.textContent = currentYear.toString();
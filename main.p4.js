// Function to toggle mobile navigation
function toggleMobileNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Function to close mobile navigation when a link is clicked
function closeMobileNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.remove('show');
}

// Function for smooth scrolling to anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 70,
            behavior: 'smooth'
        });
    }
}

// Add event listener for the mobile navigation toggle button
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', toggleMobileNav);
}

// Add event listeners for navigation links to close mobile nav and enable smooth scrolling
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileNav();
        smoothScroll(link.getAttribute('href'));
    });
});

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
}

// Initialize dark mode based on user's preference
function initializeDarkMode() {
    const savedDarkMode = localStorage.getItem('dark-mode');
    const body = document.body;

    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
    }
}

// Add event listener for the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Call the initializeDarkMode function to set dark mode on page load
initializeDarkMode();

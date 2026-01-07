// Function to handle the mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button and the navigation menu
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.nav');

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    // Close the menu when a link is clicked (for better UX on mobile)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                toggleButton.classList.remove('active');
            }
        });
    });
});
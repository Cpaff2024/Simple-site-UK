// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-top button functionality
const scrollToTop = document.getElementById('scroll-to-top');
scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Select all service items
const serviceItems = document.querySelectorAll('#services li');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('active');
    });
});

const serviceItems = document.querySelectorAll('#services li');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const description = item.querySelector('.description');
        const height = description.offsetHeight + 60; // Add collapsed height (60px)
        item.style.height = `${height}px`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.height = '60px'; // Reset to collapsed height
    });
});

const serviceItems = document.querySelectorAll('#services li');

serviceItems.forEach(item => {
    const heading = item.querySelector('.heading');
    const description = item.querySelector('.description');

    // Store initial and expanded heights
    const initialHeight = heading.offsetHeight + 20; // Add padding
    const expandedHeight = heading.offsetHeight + description.offsetHeight + 40; // Add padding

    // Set the initial height
    item.style.height = `${initialHeight}px`;

    // Expand on hover
    item.addEventListener('mouseenter', () => {
        item.style.height = `${expandedHeight}px`;
        item.classList.add('expanded');
    });

    // Collapse on mouse leave
    item.addEventListener('mouseleave', () => {
        item.style.height = `${initialHeight}px`;
        item.classList.remove('expanded');
    });
});

document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        faqItem.classList.toggle('active');
        
        // Toggle the button text
        if (faqItem.classList.contains('active')) {
            this.textContent = 'Hide Answer';
        } else {
            this.textContent = 'Show Answer';
        }
    });
});

// Get the hamburger icon and nav links
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Toggle the 'show' class on the nav links when the hamburger icon is clicked
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

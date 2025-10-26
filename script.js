// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const chapter = document.getElementById('chapter').value.trim();

    if (!name || !email || !chapter) {
        alert('Please fill in all fields before submitting.');
        e.preventDefault(); // stop form submission
    } else {
        alert(`Thank you, ${name}! Your registration is received.`);
    }
});

// Countdown timer for event
const eventDate = new Date("Dec 18, 2025 09:00:00").getTime();
const countdownElement = document.createElement('p');
countdownElement.id = 'countdown';
document.querySelector('#event-details').appendChild(countdownElement);

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Optional: Highlight menu on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#003b5c";
    } else {
        header.style.backgroundColor = "#004d7a";
    }
});

// Countdown Timer
const eventDate = new Date("Dec 18, 2025 09:00:00").getTime();
const countdownElement = document.getElementById('countdown');

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if(distance < 0){
        countdownElement.innerHTML = "The event has started!";
        return;
    }

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance% (1000*60))/1000);

    countdownElement.innerHTML = `Event starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Form Validation
const form = document.getElementById('regForm');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const chapter = document.getElementById('chapter').value.trim();

    if(!name || !email || !chapter){
        alert("Please fill all fields.");
        return;
    }

    alert(`Thank you, ${name}! Your registration is received.`);
    form.reset();
});

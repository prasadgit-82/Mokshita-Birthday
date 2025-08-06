// Countdown Timer
const eventDate = new Date("August 17, 2025 00:00:00").getTime(); // Set the event date

function updateTimer() {
    const now = new Date().getTime();
    const distance = eventDate - now; // Time remaining

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").textContent = "The event has started!";
    }
}

const countdownInterval = setInterval(updateTimer, 1000); // Update the timer every second

// RSVP Form Submission
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting to the server
    
    // Get form data
    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;
    
    if (name && attending) {
        let responseMessage = '';
        
        // Message based on the RSVP
        if (attending === 'Yes') {
            responseMessage = `Thank you, ${name}! We're thrilled to have you join us on August 17th! 🎉`;
        } else {
            responseMessage = `Sorry to hear that, ${name}. We'll miss you, but hope to see you soon! 🎈`;
        }

        // Show response message
        document.getElementById('responseMessage').innerText = responseMessage;
        document.getElementById('responseMessage').style.display = 'block';

        // Reset the form after submission
        document.getElementById('rsvpForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

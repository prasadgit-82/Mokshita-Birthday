// Handling the form submission and RSVP response
document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to the server
    
    // Getting the form data
    const name = document.getElementById('name').value;
    const attending = document.getElementById('attending').value;
    
    // Checking if the user filled out the form
    if (name && attending) {
        let responseMessage = '';
        
        // Response based on the RSVP
        if (attending === 'Yes') {
            responseMessage = `Thank you, ${name}! We're excited to see you on August 17th! 🎉`;
        } else {
            responseMessage = `Sorry to hear that, ${name}. We'll miss you, but hope to see you soon! 🎈`;
        }

        // Displaying the response message
        document.getElementById('responseMessage').innerText = responseMessage;
        document.getElementById('responseMessage').style.display = 'block';

        // Reset the form after submission
        document.getElementById('rsvpForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

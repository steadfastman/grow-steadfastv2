document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // This is a placeholder for form submission logic.
            // In a real-world scenario, you would use fetch() to send data to a serverless function (e.g., Netlify Functions) or a third-party service.
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted:', { name, email, message });

            if (formStatus) {
                formStatus.textContent = 'Thank you for your message! I will get back to you shortly.';
                formStatus.style.color = '#2c5d4f'; // Forest Green
            }
            
            contactForm.reset();

            // You would add your AJAX/Fetch request here.
            // Example:
            /*
            const formData = new FormData(contactForm);
            fetch('/.netlify/functions/send-email', { // Example Netlify Function endpoint
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                formStatus.textContent = 'Thank you for your message!';
                contactForm.reset();
            })
            .catch(error => {
                formStatus.textContent = 'Sorry, there was an error sending your message. Please try again.';
                form-status.style.color = 'red';
            });
            */
        });
    }

});

document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const feedback = document.getElementById('formFeedback');
    feedback.style.color = "#2563eb";
    feedback.textContent = "Sending inquiry...";

    // Parameters matching your form fields
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        service_type: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Replace with your EmailJS Service ID and Template ID
    emailjs.send('<li><a href="Contact.html" style="color: var(--accent);" class="btn-nav">Get a Quote</a></li>', 'template_g5nean6', templateParams)
        .then(function(response) {
            feedback.style.color = "#16a34a";
            feedback.textContent = "Thank you! Your message has been sent successfully.";
            document.getElementById('inquiryForm').reset();
        }, function(error) {
            feedback.style.color = "#dc2626";
            feedback.textContent = "Failed to send message. Please try again later.";
            console.error('FAILED...', error);
        });
});
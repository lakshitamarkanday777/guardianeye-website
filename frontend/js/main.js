// frontend/js/main.js

// Function to handle form submission for the contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            // Send POST request to the contact API
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    alert('Your message has been sent successfully!');
                    contactForm.reset(); // Reset the form
                } else {
                    alert('There was an error sending your message. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });
        });
    }

    // Function to fetch gallery images from the backend
    const galleryContainer = document.getElementById('gallery-container');
    
    if (galleryContainer) {
        fetch('/api/gallery')
            .then(response => response.json())
            .then(images => {
                images.forEach(image => {
                    const imgElement = document.createElement('img');
                    imgElement.src = image.url; // Assuming the image object has a 'url' property
                    imgElement.alt = image.description; // Assuming the image object has a 'description' property
                    galleryContainer.appendChild(imgElement);
                });
            })
            .catch(error => {
                console.error('Error fetching gallery images:', error);
            });
    }
});
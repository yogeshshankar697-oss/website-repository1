$(document).ready(function() {
    // Smooth scrolling for anchor links (if any are added later)
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Contact Form Submission and Validation
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();
        var formMessages = $('#form-messages');

        // Simple validation
        if (name === '' || email === '' || subject === '' || message === '') {
            formMessages.text('Please fill in all fields.').removeClass('success').addClass('error').show();
            return;
        }

        if (!validateEmail(email)) {
            formMessages.text('Please enter a valid email address.').removeClass('success').addClass('error').show();
            return;
        }

        // If validation passes, simulate form submission
        // In a real application, you would send this data to a server using AJAX
        console.log('Form Submitted:', { name, email, subject, message });

        formMessages.text('Thank you for your message! We will get back to you shortly.').removeClass('error').addClass('success').show();
        $('#contactForm')[0].reset(); // Clear the form

        // Hide message after a few seconds
        setTimeout(function() {
            formMessages.fadeOut();
        }, 5000);
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Example of a simple animation on hover for navigation links (already handled by CSS, but can be extended with JS)
    // This is more for demonstrating jQuery interactivity beyond basic CSS hovers
    $('nav ul li a').hover(
        function() {
            $(this).animate({
                paddingLeft: '+=5px'
            }, 200);
        },
        function() {
            $(this).animate({
                paddingLeft: '-=5px'
            }, 200);
        }
    );
});

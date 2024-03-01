document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const commentInput = document.getElementById('comment');

        // Get values from form inputs
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const comment = commentInput.value.trim();

        // Validate the form data
        if (!name || !email || !comment) {
            alert('Please fill out all fields.');
            return;
        }

        // You can perform additional validation or send the data to a server here
        // For this example, we'll just display an alert with the collected data
        const feedbackData = {
            name: name,
            email: email,
            comment: comment
        };

        alert('Feedback submitted!\n\n' + JSON.stringify(feedbackData, null, 2));

        // Optional: Clear form fields after submission
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';
    });
})
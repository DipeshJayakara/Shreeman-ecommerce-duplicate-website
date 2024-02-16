function submitForm() {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('pass');
    const checkBox = document.getElementById('check');

    if (emailInput.checkValidity() && passwordInput.checkValidity()) {
        if (checkBox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }

        alert('Form submitted successfully!');
        // Replace this line with the actual submission logic if required
    } else {
        alert('Please fill in all required fields.');
    }
}

// Show/hide password functionality
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('pass');
    const showPasswordCheckBox = document.getElementById('check');

    showPasswordCheckBox.addEventListener('change', function() {
        if (showPasswordCheckBox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });
});

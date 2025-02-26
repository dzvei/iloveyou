document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the values entered by the user
    const enteredUsername = document.getElementById('username').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    // Stored values for username and password
    const user_name = 'klien';
    const password = '11-18-23';

    // Check if the entered username and password are correct
    if (enteredUsername === user_name && enteredPassword === password) {
        // If both username and password are correct, show SweetAlert success message
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back!',
        }).then(() => {
            // Redirect or perform any action after successful login
            window.location.href = 'main.html'; // Example: Redirect to another page
        });
    } else {
        // If username or password is incorrect, show SweetAlert error message
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'HINT: Password is a date.',
        }).then(() => {
            // Clear the input fields after the error message
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });
    }
});

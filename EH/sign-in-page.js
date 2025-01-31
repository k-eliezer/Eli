// Login page JavaScript (login.js)
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values from the login form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve the user data from localStorage based on email
    const user = JSON.parse(localStorage.getItem(email));

    // Check if the user exists and if the password matches
    if (user && user.password === password) {
        // Successful login, redirect to the home page (or any other page)
        alert("Login successful!");
        window.location.href = 'home.html'; // Redirect to the home page
    } else {
        // If credentials don't match
        alert("Invalid email or password. Please try again.");
    }
});

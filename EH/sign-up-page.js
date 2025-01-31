// Sign-Up Page JavaScript (sign-up.js)
document.getElementById("sign-up-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Get user input values
    const idNumber = document.getElementById("ID-number").value;
    const name = document.getElementById("name").value;
    const sex = document.getElementById("sex").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Check if user already exists
    if (localStorage.getItem(email)) {
        alert("An account with this email already exists. Please log in.");
        return;
    }

    // Create a user object
    const userData = {
        idNumber,
        name,
        sex,
        age,
        email,
        password,
        role
    };

    // Store user data in localStorage
    localStorage.setItem(email, JSON.stringify(userData));

    // Notify user of successful registration
    alert("Sign up successful! You can now log in.");

    // Redirect to login page
    window.location.href = "sign-in-page.html";
});

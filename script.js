function validateForm() {
    const email = document.forms["signupForm"]["email"].value;
    const password = document.forms["signupForm"]["password"].value;
    const phoneNumber = document.forms["signupForm"]["phone-number"].value;
    const errorMessage = document.getElementById("error-message");

    if (email.length < 11) {
        errorMessage.textContent = "Email must be at least 11 characters long.";
        return false;
    }

    if (password.length < 5) {
        errorMessage.textContent = "Password must be at least 5 characters long.";
        return false;
    }

    if (phoneNumber.length < 10) {
        errorMessage.textContent = "Phone number must be at least 10 characters long.";
        return false;
    }

    return true;
}
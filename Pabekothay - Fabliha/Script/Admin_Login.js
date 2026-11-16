function validate_login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value;
    const emailError = document.getElementById("emailErr");
    const passwordError = document.getElementById("passErr");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let valid = true;

    if (email === "") {
        emailError.textContent = "Enter your work email.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    if (password === "") {
        passwordError.textContent = "Enter your password.";
        valid = false;
    } else if (password.length < 4) {
        passwordError.textContent = "Password must be at least 4 characters.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!valid) {
        return false;
    }

    window.location.href = "AdminDashboard.html";
    return false;
}

document.getElementById("loginForm").onsubmit = validate_login;

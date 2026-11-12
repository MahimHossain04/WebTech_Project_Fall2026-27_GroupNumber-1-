function collect_data() {
    let validfirstname = collect_first_name();
    let validlastname = collect_last_name();
    let validgender = validateGender();
    let validemail = validateEmail();
    let validphone = validatePhone();
    let validpassword = validatePassword();
    let validconfirm = validateConfirmPassword();
    let validsupport = validateSupportArea();

    return false;
}

function collect_first_name() {
    let firstName = document.getElementById("firstName").value.trim();
    let error = document.getElementById("firstNameError");
    console.log("First name:", firstName);

    if (firstName === "") {
        error.innerHTML = "Enter your first name.";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function collect_last_name() {
    let lastName = document.getElementById("lastName").value.trim();
    let error = document.getElementById("lastNameError");
    console.log("Last name:", lastName);

    if (lastName === "") {
        error.innerHTML = "Enter your last name.";
        return false;
    }

    error.innerHTML = "";
    return true;
}

function validateGender() {
    // Radio buttons
    let genders = document.querySelectorAll('input[name="gender"]');
    let error = document.getElementById("genderError");
    let selectedgender = "";

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selectedgender = genders[i].value;
            break;
        }
    }
    console.log("Gender:", selectedgender);

    if (selectedgender == "") {
        error.innerHTML = "Please enter the gender values";
        return false;
    }

    else {
        error.innerHTML = "";
        return true;
    }
}

function validateSupportArea() {
    let departments = document.querySelectorAll('input[name="doctortype"]');
    let error = document.getElementById("supportAreaError");
    let selectedAreas = [];

    for (let i = 0; i < departments.length; i++) {
        if (departments[i].checked) {
            selectedAreas.push(departments[i].value);
        }
    }
    console.log("Preferred support area:", selectedAreas);

    if (selectedAreas.length === 0) {
        error.textContent = "Please select at least one support area.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("workEmail").value.trim();
    let error = document.getElementById("workEmailError");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Email:", email);

    if (email === "") {
        error.textContent = "Please enter your work email.";
        return false;
    }

    if (!expression.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validatePhone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phoneError");
    console.log("Phone:", phone);

    if (phone === "") {
        error.textContent = "Enter your phone number.";
        return false;
    }

    if (phone.length < 10 || phone.length > 15) {
        error.textContent = "Phone number must be 10 to 15 characters long.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("passwordError");
    console.log("Password:", password);

    if (password === "") {
        error.textContent = "Create a password.";
        return false;
    }

    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");
    console.log("Confirm password:", confirmPassword);

    if (confirmPassword === "") {
        error.textContent = "Confirm your password.";
        return false;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match.";
        return false;
    }

    error.textContent = "";
    return true;
}

function validate_login() {
    validateEmail();
    let password = document.getElementById("password").value;
    let error = document.getElementById("passwordError");

    if (password === "") {
        error.textContent = "Enter your password.";
    } else if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters.";
    } else {
        error.textContent = "";
    }

    return false;
}

// Marketplace_Management_staff er code

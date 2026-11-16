function collect_data()
{
    let validname = collect_name();
    let validDateOfBirth = validateDateOfBirth();
    let validGender = validateGender();
    let validEmail = validateEmail();
    let validPhone = validatePhone();
    let validAddress = validateAddress();
    let validDeliveryArea = validateDeliveryArea();
    let validVehicle = validateVehicle();
    let validIdentityNumber = validateIdentityNumber();
    let validPassword = validatePassword();
    let validConfirmPassword = validateConfirmPassword();

    if (validname && validDateOfBirth && validGender && validEmail && validPhone &&
        validAddress && validDeliveryArea && validVehicle && validIdentityNumber &&
        validPassword && validConfirmPassword)
    {
        console.log("Delivery man registration details are valid.");
    }

    return false;
}

function collect_name()
{
    let name = document.getElementById("full-name").value.trim();
    let error = document.getElementById("full-name-error");

    if (name === "")
    {
        error.innerHTML = "Please enter your full name";
        return false;
    }
    else if (name.length < 6)
    {
        error.innerHTML = "Name must be at least 6 characters";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateDateOfBirth()
{
    let dateOfBirth = document.getElementById("date-of-birth").value;
    let error = document.getElementById("date-of-birth-error");

    if (dateOfBirth === "")
    {
        error.innerHTML = "Please enter your date of birth";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateGender()
{
    let gender = document.getElementById("gender").value;
    let error = document.getElementById("gender-error");

    if (gender === "")
    {
        error.innerHTML = "Please select your gender";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateEmail()
{
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("email-error");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "")
    {
        error.innerHTML = "Please enter your email address";
        return false;
    }
    else if (!expression.test(email))
    {
        error.innerHTML = "Please enter a valid email address";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validatePhone()
{
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phone-error");

    if (phone === "")
    {
        error.innerHTML = "Please enter your phone number";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateAddress()
{
    let address = document.getElementById("address").value.trim();
    let error = document.getElementById("address-error");

    if (address === "")
    {
        error.innerHTML = "Please enter your present address";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateDeliveryArea()
{
    let area = document.getElementById("delivery-area").value;
    let error = document.getElementById("delivery-area-error");

    if (area === "")
    {
        error.innerHTML = "Please select your delivery area";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateVehicle()
{
    let vehicle = document.getElementById("vehicle-type").value;
    let error = document.getElementById("vehicle-type-error");

    if (vehicle === "")
    {
        error.innerHTML = "Please select your vehicle type";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateIdentityNumber()
{
    let identityNumber = document.getElementById("identity-number").value.trim();
    let error = document.getElementById("identity-number-error");

    if (identityNumber === "")
    {
        error.innerHTML = "Please enter your National ID / Student ID number";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validatePassword()
{
    let password = document.getElementById("password").value;
    let error = document.getElementById("password-error");

    if (password === "")
    {
        error.innerHTML = "Please create a password";
        return false;
    }
    else if (password.length < 8)
    {
        error.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

function validateConfirmPassword()
{
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let error = document.getElementById("confirm-password-error");

    if (confirmPassword === "")
    {
        error.innerHTML = "Please confirm your password";
        return false;
    }
    else if (password !== confirmPassword)
    {
        error.innerHTML = "Passwords do not match";
        return false;
    }
    else
    {
        error.innerHTML = "";
        return true;
    }
}

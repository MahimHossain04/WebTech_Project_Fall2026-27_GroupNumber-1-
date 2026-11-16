function login_delivery()
{
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let error = document.getElementById("login-error");
    let expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "")
    {
        error.innerHTML = "Please enter your email and password";
        return false;
    }
    else if (!expression.test(email))
    {
        error.innerHTML = "Please enter a valid email address";
        return false;
    }
    else if (email === "delivery@example.com" && password === "Delivery123")
    {
        error.innerHTML = "";
        window.location.href = "Dashboard_Delivery.html";
        return false;
    }
    else
    {
        error.innerHTML = "Email and password do not match";
        return false;
    }
}

function show_password()
{
    let password = document.getElementById("password");
    let showPassword = document.getElementById("show-password");

    if (showPassword.checked)
    {
        password.type = "text";
    }
    else
    {
        password.type = "password";
    }
}

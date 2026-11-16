function connect_data(){
    let validUname = validate_uname();
    let validPass = validate_pass();
    
    if(validUname && validPass){
        window.location.href = "../page/Marketplace.html";
        return false; 
    } else {
        return false;
    }
}

function validate_uname(){
    let uname = document.getElementById("suname").value; 
    let unameError = document.getElementById("uname-error");
    
    if(uname === ""){
        unameError.innerHTML = "Please enter your username.";
        return false;
    } else {
        unameError.innerHTML = "";
        return true;
    }
}

function validate_pass(){
    let pass = document.getElementById("spass").value; 
    let passError = document.getElementById("pass-error");
    
    if(pass === ""){
        passError.innerHTML = "Please enter your password.";
        return false;
    } else {
        passError.innerHTML = "";
        return true;
    }
}

function connect_data1(){
    let validName = fullNameValidation();
    let validEmail = emailValidation();
    let validStudentId = studentIdValidation();
    let validDepartment = departmentValidation();
    let validPhone = phoneValidation();
    let validLocation = locationValidation();
    let validUsername = usernameValidation();
    let validPassword = passwordValidation();
    let validConfirmPassword = confirmPasswordValidation();
    if(validName && validEmail && validStudentId && validDepartment && 
       validPhone && validLocation && validUsername && validPassword && validConfirmPassword) {
        window.location.href = "StudentLogin.html";
        return false;
    } else {
        return false;
    }
}
function fullNameValidation()
{
    let Name = document.getElementById("fullname").value;
    let NameError = document.getElementById("name-error");
    if(Name === "")
    {
        NameError.innerHTML = "Enter The Name";
        return false;
    }
    else{
        NameError.innerHTML = "";
        return true;
    }
}
function emailValidation()
{
    let Email = document.getElementById("email").value;
    let EmailError = document.getElementById("email-error");
    let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email ===""){
            EmailError.innerHTML = "Please Enter The Email";
            return false;
        }
    else if(!Expression.test(Email)){
        EmailError.innerHTML = "Please Enter The Email Again";
        return false;
    }
    else{
        EmailError.innerHTML = "";
        return true;
    }
}
function studentIdValidation(){
    let StudentId = document.getElementById("studentid").value;
    let StudentIdError = document.getElementById("id-error");
    if(StudentId === ""){
        StudentIdError.innerHTML = "Please Enter The Student ID";
        return false;
    }
    else{
        StudentIdError.innerHTML = "";
        return true;
    }
}
function departmentValidation(){
    let Department = document.getElementById("department").value;
    let DepartmentError = document.getElementById("dept-error");
    if(Department === ""){
        DepartmentError.innerHTML = "Please Enter The Department";
        return false;
    }
    else{
        DepartmentError.innerHTML = "";
        return true;
    }
}
function phoneValidation(){
    let Phone = document.getElementById("phone").value;
    let PhoneError = document.getElementById("phone-error");
    if(Phone === ""){
        PhoneError.innerHTML = "Please Enter The Phone Number";
        return false;
    }
    else if(!/^\d{10}$/.test(Phone)){
        PhoneError.innerHTML = "Please Enter a Valid 10-digit Phone Number";
        return false;
    }
    else{
        PhoneError.innerHTML = "";
        return true;
    }   
}
function locationValidation(){
    let Location = document.getElementById("location").value;
    let LocationError = document.getElementById("location-error");
    if(Location === ""){
        LocationError.innerHTML = "Please Enter The Location";
        return false;
    }
    else{
        LocationError.innerHTML = "";
        return true;
    }
}
function usernameValidation(){
    let Username = document.getElementById("username").value.trim();
    let UsernameError = document.getElementById("username-error");
    if(Username === ""){
        UsernameError.innerHTML = "Please Enter The Username";
        return false;
    }
    else if(Username.length < 5){
        UsernameError.innerHTML = "Username must be at least 5 characters long";
        return false;
    }
    else{
        UsernameError.innerHTML = "";
        return true;
    }
}
function passwordValidation(){
    let Password = document.getElementById("password").value;
    let PasswordError = document.getElementById("password-error");
    if(Password === ""){
        PasswordError.innerHTML = "Please Enter The Password";
        return false;
    }
    else{
        PasswordError.innerHTML = "";
        return true;
    }
}
function confirmPasswordValidation(){
    let Password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("confirm_password").value;
    let ConfirmPasswordError = document.getElementById("confirm-password-error");
    if(ConfirmPassword === ""){
        ConfirmPasswordError.innerHTML = "Please Confirm The Password";
        return false;
    }
    else if(Password !== ConfirmPassword){
        ConfirmPasswordError.innerHTML = "Passwords Do Not Match";
        return false;
    }
    else{
        ConfirmPasswordError.innerHTML = "";
        return true;
    }
}

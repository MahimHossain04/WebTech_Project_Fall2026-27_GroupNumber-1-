function validate_access_request() {
    let requestType = document.getElementById("requestType").value;
    let staffIdentifier = document.getElementById("staffIdentifier").value.trim();
    let requestReason = document.getElementById("requestReason").value.trim();
    let requestTypeError = document.getElementById("requestTypeError");
    let staffIdentifierError = document.getElementById("staffIdentifierError");
    let requestReasonError = document.getElementById("requestReasonError");
    let valid = true;

    if (requestType === "") {
        requestTypeError.textContent = "Please select a request type.";
        valid = false;
    } else {
        requestTypeError.textContent = "";
    }

    if (staffIdentifier === "") {
        staffIdentifierError.textContent = "Please enter the staff name or work email.";
        valid = false;
    } else {
        staffIdentifierError.textContent = "";
    }

    if (requestReason === "") {
        requestReasonError.textContent = "Please enter a reason for the request.";
        valid = false;
    } else {
        requestReasonError.textContent = "";
    }

    if (valid) {
        console.log("Request details: " + requestType + ", " + staffIdentifier + ", " + requestReason);
    }

    return false;
}

function clear_access_request_errors() {
    let requestTypeError = document.getElementById("requestTypeError");
    let staffIdentifierError = document.getElementById("staffIdentifierError");
    let requestReasonError = document.getElementById("requestReasonError");

    requestTypeError.textContent = "";
    staffIdentifierError.textContent = "";
    requestReasonError.textContent = "";
}

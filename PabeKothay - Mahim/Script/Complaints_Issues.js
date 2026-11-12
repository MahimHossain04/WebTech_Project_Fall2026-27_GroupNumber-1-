function validate_complaints1() {
    const status = document.getElementById("complaintStatus1").value;
    const action = document.getElementById("complaintAction1").value;
    const statusError = document.getElementById("complaintStatusError1");
    const actionError = document.getElementById("complaintActionError1");
    let valid = true;

    if (status === "") {
        statusError.textContent = "Please select a status";
        valid = false;
    } else {
        statusError.textContent = "";
    }

    if (action === "") {
        actionError.textContent = "Please select an action";
        valid = false;
    } else {
        actionError.textContent = "";
    }

    if (valid) {
        console.log("Status: " + status);
        console.log("Action: " + action);
    }

    return valid;
}

function reset_complaints1() {
    document.getElementById("complaintStatus1").selectedIndex = 0;
    document.getElementById("complaintAction1").selectedIndex = 0;
    document.getElementById("complaintStatusError1").textContent = "";
    document.getElementById("complaintActionError1").textContent = "";
}

function validate_complaints2() {
    const status = document.getElementById("complaintStatus2").value;
    const action = document.getElementById("complaintAction2").value;
    const statusError = document.getElementById("complaintStatusError2");
    const actionError = document.getElementById("complaintActionError2");
    let valid = true;

    if (status === "") {
        statusError.textContent = "Please select a status";
        valid = false;
    } else {
        statusError.textContent = "";
    }

    if (action === "") {
        actionError.textContent = "Please select an action";
        valid = false;
    } else {
        actionError.textContent = "";
    }

    if (valid) {
        console.log("Status: " + status);
        console.log("Action: " + action);
    }

    return valid;
}

function reset_complaints2() {
    document.getElementById("complaintStatus2").selectedIndex = 0;
    document.getElementById("complaintAction2").selectedIndex = 0;
    document.getElementById("complaintStatusError2").textContent = "";
    document.getElementById("complaintActionError2").textContent = "";
}

function validate_complaints3() {
    const status = document.getElementById("complaintStatus3").value;
    const action = document.getElementById("complaintAction3").value;
    const statusError = document.getElementById("complaintStatusError3");
    const actionError = document.getElementById("complaintActionError3");
    let valid = true;

    if (status === "") {
        statusError.textContent = "Please select a status";
        valid = false;
    } else {
        statusError.textContent = "";
    }

    if (action === "") {
        actionError.textContent = "Please select an action";
        valid = false;
    } else {
        actionError.textContent = "";
    }

    if (valid) {
        console.log("Status: " + status);
        console.log("Action: " + action);
    }

    return valid;
}

function reset_complaints3() {
    document.getElementById("complaintStatus3").selectedIndex = 0;
    document.getElementById("complaintAction3").selectedIndex = 0;
    document.getElementById("complaintStatusError3").textContent = "";
    document.getElementById("complaintActionError3").textContent = "";
}

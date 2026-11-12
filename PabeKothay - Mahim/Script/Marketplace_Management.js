function validate_report1() {
    const status = document.getElementById("reportStatus1").value;
    const action = document.getElementById("reportAction1").value;
    const statusError = document.getElementById("reportStatusError1");
    const actionError = document.getElementById("reportActionError1");
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

function reset_report1() {
    document.getElementById("reportStatus1").selectedIndex = 0;
    document.getElementById("reportAction1").selectedIndex = 0;
    document.getElementById("reportStatusError1").textContent = "";
    document.getElementById("reportActionError1").textContent = "";
}

function validate_report2() {
    const status = document.getElementById("reportStatus2").value;
    const action = document.getElementById("reportAction2").value;
    const statusError = document.getElementById("reportStatusError2");
    const actionError = document.getElementById("reportActionError2");
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

function reset_report2() {
    document.getElementById("reportStatus2").selectedIndex = 0;
    document.getElementById("reportAction2").selectedIndex = 0;
    document.getElementById("reportStatusError2").textContent = "";
    document.getElementById("reportActionError2").textContent = "";
}

function validate_report3() {
    const status = document.getElementById("reportStatus3").value;
    const action = document.getElementById("reportAction3").value;
    const statusError = document.getElementById("reportStatusError3");
    const actionError = document.getElementById("reportActionError3");
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

function reset_report3() {
    document.getElementById("reportStatus3").selectedIndex = 0;
    document.getElementById("reportAction3").selectedIndex = 0;
    document.getElementById("reportStatusError3").textContent = "";
    document.getElementById("reportActionError3").textContent = "";
}

function validate_exchange1() {
    const status = document.getElementById("exchangeStatus1").value;
    const action = document.getElementById("exchangeAction1").value;
    const statusError = document.getElementById("exchangeStatusError1");
    const actionError = document.getElementById("exchangeActionError1");
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

function reset_exchange1() {
    document.getElementById("exchangeStatus1").selectedIndex = 0;
    document.getElementById("exchangeAction1").selectedIndex = 0;
    document.getElementById("exchangeStatusError1").textContent = "";
    document.getElementById("exchangeActionError1").textContent = "";
}

function validate_exchange2() {
    const status = document.getElementById("exchangeStatus2").value;
    const action = document.getElementById("exchangeAction2").value;
    const statusError = document.getElementById("exchangeStatusError2");
    const actionError = document.getElementById("exchangeActionError2");
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

function reset_exchange2() {
    document.getElementById("exchangeStatus2").selectedIndex = 0;
    document.getElementById("exchangeAction2").selectedIndex = 0;
    document.getElementById("exchangeStatusError2").textContent = "";
    document.getElementById("exchangeActionError2").textContent = "";
}

function validate_exchange3() {
    const status = document.getElementById("exchangeStatus3").value;
    const action = document.getElementById("exchangeAction3").value;
    const statusError = document.getElementById("exchangeStatusError3");
    const actionError = document.getElementById("exchangeActionError3");
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

function reset_exchange3() {
    document.getElementById("exchangeStatus3").selectedIndex = 0;
    document.getElementById("exchangeAction3").selectedIndex = 0;
    document.getElementById("exchangeStatusError3").textContent = "";
    document.getElementById("exchangeActionError3").textContent = "";
}

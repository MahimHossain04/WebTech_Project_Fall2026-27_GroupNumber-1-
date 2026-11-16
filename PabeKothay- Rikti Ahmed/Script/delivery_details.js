function change_status()
{
    let selectedStatus = document.getElementById("new-status").value;
    let error = document.getElementById("status-error");

    if (selectedStatus === "")
    {
        error.innerHTML = "Please choose a delivery status.";
        return;
    }

    error.innerHTML = "";
    document.getElementById("current-status").innerHTML = selectedStatus;
    console.log("Delivery ID: 1001, Status: " + selectedStatus);
}

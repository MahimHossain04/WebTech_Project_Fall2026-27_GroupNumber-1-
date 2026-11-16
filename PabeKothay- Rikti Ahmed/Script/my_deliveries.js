function search_deliveries()
{
    let searchID = document.getElementById("delivery-search").value.trim();
    let deliveryRows = document.querySelectorAll(".row");
    let deliveryIDs = document.querySelectorAll(".id");
    let error = document.getElementById("search-error");
    let numberPattern = /^[0-9]+$/;

    if (searchID !== "" && !numberPattern.test(searchID))
    {
        error.innerHTML = "Please search using numbers only.";
        return;
    }

    error.innerHTML = "";

    for (let i = 0; i < deliveryRows.length; i++)
    {
        let currentID = deliveryIDs[i].innerHTML;

        if (currentID.indexOf(searchID) !== -1)
        {
            deliveryRows[i].style.display = "";
        }
        else
        {
            deliveryRows[i].style.display = "none";
        }
    }
}

function update_status(deliveryNumber)
{
    let selectedStatus = document.getElementById("status-choice-" + deliveryNumber).value;
    let error = document.getElementById("status-error-" + deliveryNumber);
    let deliveryIDs = document.querySelectorAll(".id");

    if (selectedStatus === "")
    {
        error.innerHTML = "Please choose a status.";
    }
    else
    {
        error.innerHTML = "";
        console.log("Delivery ID: " + deliveryIDs[deliveryNumber - 1].innerHTML + ", Status: " + selectedStatus);
    }
}

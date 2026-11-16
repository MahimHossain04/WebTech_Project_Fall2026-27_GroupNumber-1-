function update_dashboard()
{
    let deliveryStatuses = document.querySelectorAll(".status-text");
    let deliveries = document.querySelectorAll("#delivery-table tbody tr");
    let assignedCount = deliveries.length;
    let pendingCount = 0;
    let completedCount = 0;
    let totalEarnings = 0;

    for (let i = 0; i < deliveryStatuses.length; i++)
    {
        let deliveryStatus = deliveryStatuses[i].innerHTML;

        if (deliveryStatus === "Pending Pickup")
        {
            pendingCount++;
        }
        else if (deliveryStatus === "Delivered")
        {
            completedCount++;
            totalEarnings = totalEarnings + 100;
        }
    }

    document.getElementById("assigned-count").innerHTML = assignedCount;
    document.getElementById("pending-count").innerHTML = pendingCount;
    document.getElementById("completed-count").innerHTML = completedCount;
    document.getElementById("earnings-count").innerHTML = "&#2547;" + totalEarnings;
}

update_dashboard();

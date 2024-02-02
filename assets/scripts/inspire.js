

function inspireActivityRun() { fetch('http://www.boredapi.com/api/activity?participants=1&participants=1')

    .then(function (res) { return res.json() })
    .then(function (data) { 
        console.log(data);
        document.getElementById("inspireNext").innerText = data.activity;
    });
}
inspireActivityRun();

    document.getElementById("inspireNextButton").addEventListener("click", inspireActivityRun);
   
function addTableRow() {
    //prompt for name input//////////// fix to modal widget input
    var beBetterUser = prompt("Enter a user name:");

    //get the table tbody element
    var tbody=document.querySelector('#beBetterTable tbody')
    // var table = document.getElementById("beBetterTable");
    // var tbody = table.getElementsByTagName("tbody")[0];

    // Create a new row
    var newRow = document.createElement("tr");

    // Create cells for the new row
    var cell1=document.createElement("td");
    var cell2=document.createElement('td');

    // Set the content of the cells

    cell1.textContent = beBetterUser;
    cell2.textContent = commitCount.toString();

    //Append the cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    //Append new row to the tbody
    tbody.appendChild(newRow);
}
var commitButton = document.getElementById("commitButton");

commitButton.addEventListener("click", addTableRow);
   
var commitCount =1;

// const commitlog= document.getElementById('commitButton');
// const commitPoints= document.getElementById('commitPoints');

commitButton.addEventListener('click', () => {
    commitCount++;
    commitPoints.textContent=commitCount.toString();
});

const data = [
    {username: "", points:"" }
];

//function to populate data 

function populateTable() {
    const tableBody = document.querySelector('#beBetterTable tbody');
    tableBody.innerHTML = ""; 

    data.forEach((row) =>{
        const newRow = document.createElement("tr");
        const usernameCell = document.createElement("td");
        const commitCountCell=document.createElement("td");

        usernameCell.textContent = row.username;
        commitCountCell.textContent = row.points.toString();

        newRow.appendChild(usernameCell);
        newRow.appendChild(commitCountCell);

        tableBody.appendChild(newRow);

    });
}

populateTable();


    
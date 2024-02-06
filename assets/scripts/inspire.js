

function inspireActivityRun() {
    fetch('http://www.boredapi.com/api/activity?participants=1&participants=1')

        .then(function (res) { return res.json() })
        .then(function (data) {
            console.log(data);
            document.getElementById("inspireNext").innerText = data.activity;
        });
}
inspireActivityRun();
(function () {
document.getElementById("inspireNextButton").addEventListener("click", inspireActivityRun);

var commitCount = 0;
const commitPoints = document.getElementById('commitPoints');
const userNameInput = document.getElementById('userName');
const commitButton = document.getElementById('commitButton');
const tableBody = document.querySelector('#beBetterTable tbody')

commitButton.addEventListener('click', () => {
    //get user name from the input box
    var beBetterUser = userNameInput.value;
    //  Update the commit count
    commitCount++;
    commitPoints.textContent = commitCount.toString();
    //add the data to the local storage
    const data = JSON.parse(localStorage.getItem('beBetterData')) || [];
    data.push({ username: beBetterUser, points: commitCount });
    localStorage.setItem('beBetterData', JSON.stringify(data));

    // refresh the table
    populateTable();
});

// function to populate data form local storage to the table
function populateTable() {
    tableBody.innerHTML = "";
    const data = JSON.parse(localStorage.getItem('beBetterData')) || [];
    data.forEach((row) => {
        const newRow = document.createElement("tr");
        const usernameCell = document.createElement("td");
        const commitCountCell = document.createElement("td");

        usernameCell.textContent = row.username;
        commitCountCell.textContent = row.points.toString();

        newRow.appendChild(usernameCell);
        newRow.appendChild(commitCountCell);

        tableBody.appendChild(newRow);

    });
}
// initial table population
populateTable();



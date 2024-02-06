

function inspireActivityRun() {
    fetch('http://www.boredapi.com/api/activity?participants=1&participants=1')

        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("inspireNext").innerText = data.activity;
            //save the last activity clicked to local storage
            localStorage.setItem('lastClickedActivity',data.activity);
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

        //get last clicked activity from local storage
        const lastClickedActivity = localStorage.getItem('lastClickedActivity') || 'No activity';

        //add the data to the local storage
        const data = JSON.parse(localStorage.getItem('beBetterData')) || [];

        // Find the existing user in the array
        const existingUser = data.find(user => user.username === beBetterUser);
        if (existingUser) {
            //if user exists update their points
            existingUser.points = commitCount;
            existingUser.lastClickedActivity=lastClickedActivity;
        } else {
            //If the user doesn't exist, add new entry
            data.push({ username: beBetterUser, points: 1 });
        }
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
            const lastClickedActivityCell=document.createElement("td");

            usernameCell.textContent = row.username;
            commitCountCell.textContent = row.points.toString();
            lastClickedActivityCell.textContent=row.lastClickedActivity || '';

            newRow.appendChild(usernameCell);
            newRow.appendChild(commitCountCell);
            newRow.appendChild(lastClickedActivityCell);

            tableBody.appendChild(newRow);

        });
    }
    // initial table population
    populateTable();
})();


